export default (app) => {

  require('./smartCkEditor')(app);
  require('./smartDestroySummernote')(app);
  require('./smartEditSummernote')(app);
  require('./smartMarkdownEditor')(app);
  require('./smartSummernoteEditor')(app);
}
