'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.index);
  router.get('/newslist/:id', controller.news.newslist);


  router.get('/content', controller.news.content);


  router.get('/admin', controller.admin.index);

  router.get('/newscontent', controller.news.content);
};
