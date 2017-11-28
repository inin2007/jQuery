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
# jQuery fadeOut()

The jQuery fadeOut() method is used to fade out a visible element.

## Syntax:
```
$(selector).fadeOut(speed,callback);
```
# jQuery fadeToggle()

The jQuery fadeToggle() method toggles between the fadeIn() and fadeOut() methods.

If the elements are faded out, fadeToggle() will fade them in.

If the elements are faded in, fadeToggle() will fade them out.

## Syntax:
```
$(selector).fadeToggle(speed,callback);
```
# jQuery fadeTo()

The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1).

## Syntax:
```
$(selector).fadeTo(speed,opacity,callback);
```
## Example:
```
$("button").click(function(){
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
});
```
