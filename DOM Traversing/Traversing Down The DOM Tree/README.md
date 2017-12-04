children()
It gets the children of each element in the set of matched elements, optionally filtered by a selector.
```
$(document).ready(function(){
    $("div").children("p").css({"color": "red"});
});
```
find()
It gets the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
```
$(document).ready(function(){
    $("div").find("p").css({"color": "red"});
});
```
```
$(document).ready(function(){
    $("div").find("*").css({"color": "red"});
});
```
It returns all children.
