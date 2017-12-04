# parent()
It gets the direct parent of an element.
```
$(document).ready(function(){
    $("div").parent().css({"color": "red"});
});
```
# parents()
It gets a set of elements containing the unique ancestors of the matched set of elements.
```
$(document).ready(function(){
    $("#div1").parents("p").css({"color": "red"});
});
```
# parentsUntil()
It returns all ancestor elements between two given arguments.
```
$(document).ready(function(){
    $("#div1").parentsUntil("p").css({"color": "red"});
});
```
