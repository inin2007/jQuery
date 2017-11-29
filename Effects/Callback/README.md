# Callback Function

A callback function is executed after the current effect is completed.

## Example:
```
$("button").click(function(){
    $("h1").hide("slow", function(){
        alert("Bye-bye!");
    });
});
```
