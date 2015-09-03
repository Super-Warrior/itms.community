export default (app) => {
  app.factory('CalendarEvent', function($resource, APP_CONFIG){
    return $resource( APP_CONFIG.apiRootUrl + '/events.json', {_id:'@id'})
  });

}
