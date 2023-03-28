// * TensorFlow Stuff
import * as tf from "@tensorflow/tfjs-node";
import coco_ssd from "@tensorflow-models/coco-ssd";

// * Server Stuff
import express from "express";
import busboy from "busboy";
import { config } from "dotenv";
config();
tf.expandDims(0)

// * Init Model
let model = undefined;
(async () => {
  model = await coco_ssd.load({
    base: "mobilenet_v1",
  });
})();

// * Init Express
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.post("/predict", (req, res) => {
  if (!model) {
    res.status(500).send("Model is not loaded yet!");
    return;
  }

  // * Create a Busboy instance
  const bb = busboy({ headers: req.headers });
  bb.on("file", (fieldname, file, filename, encoding, mimetype) => {
    const buffer = [];
    file.on("data", (data) => {
      buffer.push(data);
    });
    file.on("end", async () => {
      // * Run Object Detection
      const image = tf.node.decodeImage(Buffer.concat(buffer));
      const predictions = await model.detect(image, 4, 0.25);
      res.json(predictions);
    });
  });
  req.pipe(bb);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});