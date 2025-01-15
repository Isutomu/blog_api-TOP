const { Router } = require("express");
const controllersGetPosts = require("../controllers/get/posts");
const controllersPostPosts = require("../controllers/post/posts");

const routes = Router();

routes.get("/posts", controllersGetPosts.allPosts);
routes.get("/posts/:postId", controllersGetPosts.singlePost);

routes.post("/posts", controllersPostPosts.singlePost);
