# addClass() 
It adds one or more classes to the selected elements.

# removeClass()
It removes one or more classes from the selected elements.

# toggleClass()
It toggles between adding/removing classes from the selected elements.

# css()
It sets or returns the style attribute.

## Example:
addClass() 
```
$("button").click(function(){
    $("div, h2, p").addClass("green");
    $("h1").addClass("hello");
});
```
removeClass()
```
$("button").click(function(){
    $("div, h2, p").removeClass("green");
    $("h1").removeClass("hello");
});
```
toggleClass()
```
$("button").click(function(){
    $("div, h2, p").toggleClass("green");
    $("h1").toggleClass("hello");
});
```
css()
```
$("h2").css({"background-color": "blue", "font-size": "100%"});
```
