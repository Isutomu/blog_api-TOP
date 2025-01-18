const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const prisma = new PrismaClient();

/**
 * Fetches all 'posts'.
 *
 * Returns all 'posts' with all the fields on the database,
 * with the exception on 'content' (so only the short
 * version 'contentPreview' is sent.)
 *
 * @return {Object} An object with the 'data' key whose value
 * is an array with 'post' objects.
 */
module.exports.allPosts = asyncHandler(async (req, res) => {
  const posts = await prisma.post.findMany({
    include: {
      tags: true,
    },
  });

  return res.json({ data: posts });
});

/**
 * Fetches a single post.
 *
 * Returns a single post with all the fields on the database,
 * with the exception on 'contentPreview' (so only the full
 * version 'content' is sent.)
 *
 * @return {Object} An object with the 'data' key whose value
 * is a "post" object.
 */
module.exports.singlePost = asyncHandler(async (req, res) => {
  const post = await prisma.post.findFirst({
    where: { id: req.params.postId },
    include: {
      tags: true,
    },
  });

  return res.json({ data: post });
});
