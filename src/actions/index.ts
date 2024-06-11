import { createPost, deletePost, getAllPost, updatePost } from "./post";
import { getUsers, login } from "./test";

export const server = {
  getAllPost: getAllPost,
  createPost: createPost,
  updatePost: updatePost,
  deletePost: deletePost,
  getUsers: getUsers,
  login: login,
};
