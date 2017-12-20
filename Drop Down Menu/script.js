(function($){
  var $country = $('#Content_C003_Country');
  var $state = $('#Content_C003_State');
  var $stateOptions = $state.children();
  
  $country.on('change', function(){
    //remove the options
    $stateOptions.detach();
    //readd only the options for the country
    $stateOptions.filter(function(){
      return this.value.indexOf($country.val() + "-") === 0;
    }).appendTo($state);
    //clear out the value so it doesn't default to one it should not
    $state.val('');
  });
}(jQuery));
