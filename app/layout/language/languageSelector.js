
export default (app) => {
  app.directive('languageSelector', function() {
    return {
      restrict: "EA",
      replace: true,
      template: require('./language-selector.tpl.html'),
      scope: true
    }
  });

}

