# append()
It inserts content at the end of the selected elements.
# prepend()
It inserts content at the beginning of the selected elements.
# after()
It inserts after the selected elements.
# before()
It inserts before the selected elements.

## Example:
append()
```
$("h1").append("Welcome Back!");
```
Add several new elements..
```
function appendText() {
    var text1 = $("<h2></h2>").text("Text.");
    var text2 = document.createElement("h1");
    text2.innerHTML = "Text.";
    $("body").append(text1, text2, );
}
```
prepend()
```
$("h1").prepend("Welcome Back!");
```
after()
```
$("h1").after("Welcome Back!");
```
Add several new elements..
```
function afterText() {
    var text1 = $("<h2></h2>").text("Text.");
    var text2 = document.createElement("h1");
    text2.innerHTML = "Text.";
    $("body").after(text1, text2, );
}
```
before()
```
$("img").before("Welcome Back!");
```
