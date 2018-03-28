"use strict";

const Model = use("Model");

class Post extends Model {
  tag() {
    return this.belongsTo("App/Models/Tag");
  }

  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Post;
