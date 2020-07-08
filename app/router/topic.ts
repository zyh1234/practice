import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;

  router.post('/tab', controller.topic.createTab);
  router.delete('/tab/:id', controller.topic.deleteTab);
  router.put('/tab/:id', controller.topic.updateTab);
  router.get('/tabs', controller.topic.queryTab);
  router.post('/topic', controller.topic.createTopic);
  router.delete('/topic/:id', controller.topic.deleteTopic);
  router.put('/topic/:id', controller.topic.updateTopic);
  router.get('/topic/:id', controller.topic.getTopicDetail);
  router.get('/topics', controller.topic.queryTopic);
  router.put('/topic/:id/like_or_cancel', controller.topic.likeOrCancel);
  router.put('/topic/:id/collect_or_cancel', controller.topic.collectOrCancel);
  router.post('/topic/:id/reply', controller.topic.createReply);
  router.delete('/reply/:id', controller.topic.deleteReply);
  router.put('/reply/:id', controller.topic.updateReply);
};