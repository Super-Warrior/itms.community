"use strict";

export default (app) => {
  app.directive('unreadMessagesCount', function(InboxConfig){
    return {
      restrict: 'A',
      link: function(scope, element){
        InboxConfig.success(function(config){
          element.html(_.find(config.folders, {key: 'inbox'}).unread);
        })
      }
    }
  });
}
