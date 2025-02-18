import { ClarifaiStub, grpc } from "clarifai-nodejs-grpc";

const stub = ClarifaiStub.grpc();

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key 33db51404beb492a96cd22bea8a10892");

export const handelApicall = (req, res, db) => {
    const imageUrl = req.body.input;
    console.log({imageUrl: req.body})

    if (!imageUrl || typeof imageUrl !== 'string') {
        res.status(400).json("Invalid image URL");
        return;
    }

    stub.PostModelOutputs(
        {
            model_id: "face-detection",
            version_id: "6dc7e46bc9124c5c8824be4822abe105", // إضافة معرف الإصدار الصحيح
            inputs: [{ data: { image: { url: imageUrl.trim() } } }]
        },
        metadata,
        (err, response) => {
            if (err) {
                console.log("Error: " + err);
                res.status(500).json("Error connecting to Clarifai API");
                return;
            }

            if (response.status.code !== 10000) {
                console.log("Received failed status: " + response.status.description);
                res.status(400).json("Failed to process image with Clarifai API");
                return;
            }

            res.json(response);
        }
    );
}

export const handelimage = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
      .increment(entries, 1)
      .returning('entries')
      .then(entries => {
          res.json(entries[0]);
      })
      .catch(err => {
          res.status(400).json({ err: 'unable to get count' });
      });
}
