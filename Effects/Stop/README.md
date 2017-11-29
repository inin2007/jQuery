# stop()

The jQuery stop() method is used to stop an animation or effect before it is finished.

The stop() method works for all jQuery effect functions, including fading, sliding and custom animations.

## Syntax:
```
$(selector).stop(stopAll,goToEnd);
```
## Example:
```
$("button").click(function(){
    $("div").stop();
});
```
