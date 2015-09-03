/**
 * Jarvis Widget Directive
 *
 *    colorbutton="false"
 *    editbutton="false"
      togglebutton="false"
       deletebutton="false"
        fullscreenbutton="false"
        custombutton="false"
        collapsed="true"
          sortable="false"
 *
 *
 */
"use strict";

export default (app) => {
  app.directive('jarvisWidget', function($rootScope){
    return {
      restrict: "A",
      compile: function(element, attributes){
        if(element.data('widget-color'))
          element.addClass('jarviswidget-color-' + element.data('widget-color'));


        element.find('.widget-body').prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>');

        element.addClass('jarviswidget jarviswidget-sortable');
        $rootScope.$emit('jarvisWidgetAdded', element )

      }
    }
  });
}

