"use strict";
const { validateAll } = use("Validator");
const Post = use("App/Models/Post");

class PostsController {
  async index() {}

  create({ view }) {
    return view.render("posts.create");
  }

  async store({ request, response, session, auth }) {
    const { title, tag, body } = request.all();

    const rules = {
      title: "required",
      tag: "required|exists:tags,id",
      body: "required"
    };

    const validation = await validateAll(request.all(), rules);

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashAll();

      return response.redirect("back");
    }

    const post = new Post();

    post.fill({
      title,
      body,
      tag_id: tag,
      user_id: auth.user.id
    });

    await post.save();

    return response.route("home");
  }

  async show() {}

  async edit() {}

  async update() {}

  async delete() {}
}

module.exports = PostsController;
