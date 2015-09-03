export default (app) => {
  require('./fullScreen')(app);
  require('./minifyMenu')(app);
  require('./reloadState')(app);
  require('./resetWidgets')(app);

  require('./searchMobile')(app);
  require('./toggleMenu')(app);

}
