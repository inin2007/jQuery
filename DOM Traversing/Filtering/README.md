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
```
# eq()
It reduces the set of matched elements to the one at the specified index.
```
$(document).ready(function(){
    $("div").eq(1).css({"color": "red"});
});
```
# filter()
It reduces the set of matched elements to those that match the selector or pass the function’s test.
```
$(document).ready(function(){
    $("div").filter("h2").css({"color": "red"});
});
```
# not()
It removes elements from the set of matched elements.
```
$(document).ready(function(){
    $("div").not("h2").css({"color": "red"});
});
```
