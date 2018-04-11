"use strict";

const Route = use("Route");

Route.on("/")
  .render("welcome")
  .as("home");

Route.get("/posts/create", "PostsController.create")
  .as("posts.create")
  .middleware("auth");

Route.post("/posts", "PostsController.store").as("posts.store");

Route.group(() => {
  Route.get("/register", "Auth/RegisterController.index").as("auth.register");
  Route.post("/register", "Auth/RegisterController.register").as(
    "auth.register"
  );
  Route.get("/login", "Auth/LoginController.index").as("auth.login");
  Route.post("/login", "Auth/LoginController.login").as("auth.login");
})
  .middleware(["guest"])
  .prefix("auth");
