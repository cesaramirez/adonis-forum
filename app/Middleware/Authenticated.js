"use strict";

class Authenticated {
  async handle({ request, response, auth }, next) {
    try {
      await auth.check();
    } catch (error) {
      return response.route("auth.login");
    }
    // call next to advance the request
    await next();
  }
}

module.exports = Authenticated;
