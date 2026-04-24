//  require modules
const likeModel = require("../Model/like.model");
const postModel = require("../Model/post.model");
const { toFile } = require("@imagekit/nodejs");
const ImageKit = require("@imagekit/nodejs");
const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// post crate function
async function postApi(req, res) {
  const result = await imageKit.files.upload({
    file: await toFile(req.file.buffer, req.file.originalname),
    fileName: req.file.originalname,
    folder: "Instagram_Project_folder",
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

// post fetch function
async function PostFetch(req, res) {
  const id = req.user.id;
  const post = await postModel.find({ user: id });
  res.status(200).json({
    message: "All post fetch ",
    post,
  });
}

// post like function

async function likeFunction(req, res) {
  let id = req.user.id;
  const postId = req.params.id;
  const post = postModel.findById(id);
  if (!post) {
    return res.status(404).json({
      message: "post not found enter correct id",
    });
  }

  const isExit = likeModel.findById(req.params.id);
  if (isExit) {
    return res.status(200).json({
      message: "already like this post",
    });
  }

  const postLike = likeModel.create({
    user: id,
    post: post,
  });

  res.status(200).json({
    message: "like post",
    likeModel,
  });
}

module.exports = { postApi, PostFetch, likeFunction };
