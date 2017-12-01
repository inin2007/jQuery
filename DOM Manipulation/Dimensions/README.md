# width()
It sets or returns the width of an element (excludes padding, border and margin).

# height()
It  sets or returns the height of an element (excludes padding, border and margin).

# innerWidth()
It returns the width of an element (includes padding).

# innerHeight()
It returns the height of an element (includes padding).

# outerWidth()
It returns the width of an element (includes padding and border).

# outerHeight()
It returns the height of an element (includes padding and border).

## Example:
width() and height()
```
$("button").click(function(){
    $("div").width(300).height(200);
});
```
innerWidth() and innerHeight()
```
$("button").click(function(){
    var rabbit = "";
    rabbit += "Inner width: " + $("div").innerWidth() + "</br>";
    rabbit += "Inner height: " + $("div").innerHeight();
    $("div").html(rabbit);
});
```
outerWidth() and outerHeight()
```
    var rabbit = "";
    rabbit += "Outer width: " + $("div").outerWidth() + "</br>";
    rabbit += "Outer height: " + $("div").outerHeight();
    $("div").html(rabbit);
});
