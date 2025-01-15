const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const { tagsToPrisma } = require("../../helpers/parsePostTagsForPrismaCreate");

const prisma = new PrismaClient();

/**
 * Adds a 'post' to the database.
 *
 * Besides adding the post, if a 'tag' is used on said post that is not yet
 * on the 'tags' database this 'tag' is also going to be added (to the 'Tag' database).
 *
 * @return {Object} An object with the 'data' key whose value
 * is the added 'post'.
 */
module.exports.singlePost = asyncHandler(async (req, res) => {
  const { image, title, content, userId, tags } = req.body;
  const post = {
    image,
    title,
    content,
    userId,
    contentPreview: content.slice(0, 60),
  };

  const databasePost = await prisma.post.create({
    data: { ...post, tags: tagsToPrisma(tags) },
  });
  return res.status(201).json({ data: databasePost });
});
