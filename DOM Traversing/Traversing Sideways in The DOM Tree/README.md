# siblings()
It gets a set of elements containing all of the unique siblings of each of the matched set of elements.
```
$(document).ready(function(){
    $("div").siblings().css({"color": "red"});
});
```
# next()
It gets a set of elements containing the unique next siblings of each of the given set of elements.
```
$(document).ready(function(){
    $("div").next().css({"color": "red"});
});
```
# nextAll()
It finds all sibling elements after the current element.
```
$(document).ready(function(){
    $("div").nextAll().css({"color": "red"});
});
```
# nextUntil()
```
$(document).ready(function(){
    $("div").nextUntil().css({"color": "red"});
});
```
# prev()
It gets a set of elements containing the unique previous siblings of each of the matched set of elements.
```
$(document).ready(function(){
    $("div").prev().css({"color": "red"});
});
```
# prevAll()
It finds all sibling elements in front of the current element.
```
$(document).ready(function(){
    $("div").prevAll().css({"color": "red"});
});
```
# prevUntil()
```
$(document).ready(function(){
    $("div").prevUntil().css({"color": "red"});
});
```
