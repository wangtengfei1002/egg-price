'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log('this.app.foo(): ', this.ctx.request.getApi1());
    const { ctx } = this;
    ctx.body = this.ctx.helper.getValue();
  }
}

module.exports = HomeController;
