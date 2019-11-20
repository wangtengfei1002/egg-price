'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    this.ctx.body = '用户管理';
  }
}

module.exports = AdminController;
