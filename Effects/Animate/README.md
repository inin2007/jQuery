# animate()

The jQuery animate() method is used to create custom animations.

## Syntax:
```
$(selector).animate({params},speed,callback);
```
## Example:
```
$("button").click(function(){
    $("div").animate({left: '300px'});
}); 
```
## animate() - Manipulate Multiple Properties
```
$("button").click(function(){
    $("div").animate({
        left: '450px',
        opacity: '0.7',
        height: '200px',
        width: '200px'
    });
}); 
```
## animate() - Using Relative Values(+= or -=)
```
$("button").click(function(){
    $("div").animate({
        left: '150px',
        height: '+=100px',
        width: '+=100px'
    });
}); 
```
## animate() - Using Pre-defined Values("toggle", "show", or "hide")
$("button").click(function(){
    $("div").animate({
        width: 'toggle'
    });
}); 
## animate() - Use Queue Functionality
```
$("button").click(function(){
    var div = $("div");
    div.animate({height: '400px', opacity: '0.3'}, "slow");
    div.animate({width: '400px', opacity: '0.7'}, "slow");
    div.animate({height: '150px', opacity: '0.3'}, "slow");
    div.animate({width: '150px', opacity: '0.7'}, "slow");
    div.animate({fontSize: '4em'}, "slow")
}); 
```
