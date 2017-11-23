# fadeIn()

The jQuery fadeIn() method is used to fade in a hidden element.
## Syntax:
```
$(selector).fadeIn(speed,callback);
```
## Example:
```
$("button").click(function(){
    $("h1").fadeIn();
    $("h2").fadeIn("slow");
    $("h3").fadeIn(2000);
});
```
