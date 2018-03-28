"use strict";

const Route = use("Route");

Route.on("/")
  .render("welcome")
  .as("home");

Route.get("/posts/create", "PostsController.create").as("posts.create");

Route.post("/posts", "PostsController.store").as("posts.store");

Route.get("/auth/register", "Auth/RegisterController.index").as(
  "auth.register"
);

Route.post("/auth/register", "Auth/RegisterController.register").as(
  "auth.register"
);

Route.get("/auth/login", "Auth/LoginController.index").as("auth.login");

Route.post("/auth/login", "Auth/LoginController.login").as("auth.login");
