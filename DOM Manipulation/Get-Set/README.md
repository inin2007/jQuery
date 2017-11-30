# text()
Sets or returns the text content of selected elements.
## Example:
```
$("div").click(function(){
    alert("Hello " + $("#test").text());
});
```
...callback function
```
$("button").click(function(){
    $("#mouse").text(function(i, origText){
        return "Old text: " + origText + " New text: Mickey Mouse
        (index: " + i + ")"; 
    });
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
...callback function
```
$("button").click(function(){
    $("#mouse").html(function(i, origText){
        return "Old html: " + origText + " New html: Hello <b>Mickey Mouse!</b>
        (index: " + i + ")"; 
    });
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
...multiple attributes
```
$("button").click(function(){
    $("#mouse").attr({
        "href" : "https://www.mouse.com",
        "title" : "Mouse"
    });
});
```
...callback function
```
$("button").click(function(){
    $("#mouse").attr("href", function(i, origValue){
        return origValue + "/photos"; 
    });
});
```
