
export default (app)=>{
  app.directive('bootstrapButtonGroupForm', function(){

  return {
    restrict: 'E',
    replace: true,
    template: require('./bootstrap-button-group-form.tpl.html'),
    link: function(scope, form){
      form.bootstrapValidator({
        excluded : ':disabled',
        feedbackIcons : {
          valid : 'glyphicon glyphicon-ok',
          invalid : 'glyphicon glyphicon-remove',
          validating : 'glyphicon glyphicon-refresh'
        },
        fields : {
          gender : {
            validators : {
              notEmpty : {
                message : 'The gender is required'
              }
            }
          },
          'languages[]' : {
            validators : {
              choice : {
                min : 1,
                max : 2,
                message : 'Please choose 1 - 2 languages you can speak'
              }
            }
          }
        }
      });
    }
  }

});

}
