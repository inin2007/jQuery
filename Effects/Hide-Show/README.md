# hide()
With jQuery, you can hide HTML elements with the hide()  method.
```
$("#hide").click(function(){
    $("p").hide();
});
```
## Syntax:
```
$(selector).hide(speed,callback);
```
## Example:
```
$("button").click(function(){
    $("p").hide(1000);
});
```
## Or:
```
$("button").click(function(){
    $("p").hide(slow);
});
```

# show()
With jQuery, you can show HTML elements with the show() method.
```
$("#show").click(function(){
    $("p").show();
});
```
## Syntax:
```
$(selector).show(speed,callback);
```

# toggle()
With jQuery, you can toggle between the hide() and show() methods with the toggle() method.

Shown elements are hidden and hidden elements are shown.
```
$("button").click(function(){
    $("p").toggle();
});
```
## Syntax:
```
$(selector).toggle(speed,callback);
```
