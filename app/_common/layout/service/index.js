export default (app) => {
  require('./lazyScript')(app);
  require('./SmartCss')(app);
}
