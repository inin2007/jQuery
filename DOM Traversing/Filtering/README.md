# first()
It reduces the set of matched elements to the first in the set.
```
$(document).ready(function(){
    $("div").first().css({"color": "red"});
});
```
# last()
It reduces the set of matched elements to the final one in the set.
```
$(document).ready(function(){
    $("div").last().css({"color": "red"});
});
# eq()
It reduces the set of matched elements to the one at the specified index.
```
$(document).ready(function(){
    $("div").eq().css({"color": "red"});
});
# filter()
It reduces the set of matched elements to those that match the selector or pass the function’s test.
```
$(document).ready(function(){
    $("div").filter().css({"color": "red"});
});
# not()
It removes elements from the set of matched elements.
```
$(document).ready(function(){
    $("div").not().css({"color": "red"});
});
