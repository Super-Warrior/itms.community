export default (app) => {
  require('./bigBreadcrumbs')(app);
  require('./dismisser')(app);
  require('./hrefVoid')(app);
  require('./radioToggle')(app);
  require('./smartDeviceDetect')(app);
  require('./smartFastClick')(app);
  require('./smartFitAppView')(app);
  require('./smartInclude')(app);
  require('./smartLayout')(app);
  require('./smartPageTitle')(app);
  require('./smartRouterAnimationWrap')(app);
  require('./smartSpeech')(app);
  require('./stateBreadcrumbs')(app);
  require('./widgets/jarvisWidget')(app);
  require('./widgets/widgetGrid')(app);
  require('./navigation/smartMenu')(app);
  require('./navigation/smartMenuItems')(app);
  require('./demo')(app);

}
