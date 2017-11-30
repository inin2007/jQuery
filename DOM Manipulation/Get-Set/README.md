# text()

Sets or returns the text content of selected elements.

## Example:
```
$("div").click(function(){
    alert("Hello " + $("#test").text());
});
```

# html()
Sets or returns the content of selected elements (including HTML markup)

## Example:
```
$("div").click(function(){
    alert("Hello " + $("#test").html());
});
```
# val()

Sets or returns the value of form fields.

## Example:
```
$("div").click(function(){
    alert("Hello " + $("#test").val());
});
```

# attr()

Gets the value of the href attribute in a link.

## Example:
```
$("div").click(function(){
    alert($("#link").attr("href"));
});
```
