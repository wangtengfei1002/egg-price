'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const list = await this.service.news.getNewsList() || [];
    await this.ctx.render('news', {
      list,
    });
  }

  async content() {
    const aid = this.ctx.query.aid;
    const list = await this.service.news.getNewsContent(aid) || [];
    await this.ctx.render('newscontent', {
      list,
    });
  }

  async newslist() {
    console.log(this.ctx.query);
    console.log(this.ctx.params);
    this.ctx.body = '新闻列表';
  }

  // async content() {
  //   const aid = this.ctx.query

  // }
}

module.exports = NewsController;
