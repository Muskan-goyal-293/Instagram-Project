//  require modules

const postModel = require("../Model/post.model");
const { toFile } = require("@imagekit/nodejs");
const ImageKit = require("@imagekit/nodejs");
const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// post crate function 

async function postApi(req, res) {
  const result = await imagekit.files.upload({
    file: await toFile(req.file.buffer, req.file.originalname),
    fileName: req.file.originalname,
    folder: "insta_Project_folder",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    image: result.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "post Created",
    post: post,
  });
}


// post fatch function

async function Postfatch(req, res) {
  const id = req.user.id;

  const post = await postModel.find({ user: id });

  res.status(200).json({
    message: "All post fetch ",
    post,
  });
}

module.exports = { postApi, Postfatch };
