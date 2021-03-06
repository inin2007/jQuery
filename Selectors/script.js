// The element with id="Lastname".
$(document).ready(function(){
    $(".intro").click(function(){
        $(this).hide();
    });
});
//All elements with class="intro".
$(document).ready(function(){
    $(".intro").click(function(){
        $(this).hide();
    });
});
//All elements with class="intro", and the element with id="Lastname".
$(document).ready(function(){
    $(".intro, #Lastname").click(function(){
        $(this).hide();
    });
});
//All <h1> elements.
$(document).ready(function(){
    $("h1").click(function(){
        $(this).hide();
    });
});
//All <h1> elements and all <p> elements.
$(document).ready(function(){
    $("h1, p").click(function(){
        $(this).hide();
    });
});
//The first <p> element.
$(document).ready(function(){
    $("p:first").click(function(){
        $(this).hide();
    });
});
//The last <p> element.
$(document).ready(function(){
    $("p:last").click(function(){
        $(this).hide();
    });
});
//All even <tr> elements.
$(document).ready(function(){
    $("tr:even").click(function(){
        $(this).hide();
    });
});
//All odd <tr> elements.
$(document).ready(function(){
    $("tr:odd").click(function(){
        $(this).hide();
    });
});
//All <p> elements that are the first child of their parent.
$(document).ready(function(){
    $("p:first-child").click(function(){
        $(this).hide();
    });
});
//All <p> elements that are the first <p> element of their parent.
$(document).ready(function(){
    $("p:first-of-type").click(function(){
        $(this).hide();
    });
});
//All <p> elements that are the last child of their parent.
$(document).ready(function(){
    $("p:last-child").click(function(){
        $(this).hide();
    });
});
//All <p> elements that are the last <p> element of their parent.
$(document).ready(function(){
    $("p:last-of-type").click(function(){
        $(this).hide();
    });
});
//All <li> elements that are the first child of their parent.
$(document).ready(function(){
    $("li:nth-child(1)").click(function(){
        $(this).hide();
    });
});
//All <li> elements that are the first child of their parent, counting from the <li> element.
$(document).ready(function(){
    $("li:nth-last-child(1)").click(function(){
        $(this).hide();
    });
});
//All <li> elements that are the second <li> element of their parent.
$(document).ready(function(){
    $("li:nth-of-type(2)").click(function(){
        $(this).hide();
    });
});
//All <li> elements that are the second <li> element of their parent, counting from the <li> element.
$(document).ready(function(){
    $("li:nth-last-of-type(2)").click(function(){
        $(this).hide();
    });
});
//All <b> elements that are the only child of their parent.
$(document).ready(function(){
    $("b:only-child").click(function(){
        $(this).hide();
    });
});
//All <h3> elements that are the only child of its type, of their parent.
$(document).ready(function(){
    $("h3:only-of-type").click(function(){
        $(this).hide();
    });
});
//All <p> elements that are a direct child of a <div> element.
$(document).ready(function(){
    $("div > p").click(function(){
        $(this).hide();
    });
});
//All <p> elements that are descendants of a <div> element.
$(document).ready(function(){
    $("div p").click(function(){
        $(this).hide();
    });
});
//The <h3> element that are next to each <ul> elements.
$(document).ready(function(){
    $("ul + h3").click(function(){
        $(this).hide();
    });
});
//All <table> elements that are siblings of a <ul> element.
$(document).ready(function(){
    $("ul ~ table").click(function(){
        $(this).hide();
    });
});
//The first <li> element of <ul> elements (index starts at 0).
$(document).ready(function(){
    $("ul li:eq(0)").click(function(){
        $(this).hide();
    });
});
//All <li> elements of <ul> elements with an index greater than 0.
$(document).ready(function(){
    $("ul li:gt(0)").click(function(){
        $(this).hide();
    });
});
//All <li> elements of <ul> elements with an index less than 2.
$(document).ready(function(){
    $("ul li:lt(2)").click(function(){
        $(this).hide();
    });
});
//All header elements <h1>, <h2> ...
$(document).ready(function(){
    $(":header").click(function(){
        $(this).hide();
    });
});
//All header elements that are not <h1> elements.
$(document).ready(function(){
    $(":header:not(h1)").click(function(){
        $(this).hide();
    });
});
//All animated elements. Sorry, no animated elements in this demo.
$(document).ready(function(){
    $(":animated").click(function(){
        $(this).hide();
    });
});
//The element that currently has focus.
$(document).ready(function(){
    $(":focus").click(function(){
        $(this).hide();
    });
});
//All elements which contains the text "Duck".
// $(document).ready(function(){
//     $(":contains(Duck)").click(function(){ 
//         $(this).hide();
//     });
// });
//All <div> elements that have a <p> element.
$(document).ready(function(){
    $("div:has(p)").click(function(){
        $(this).hide();
    });
});
//All empty elements(like <input />).
$(document).ready(function(){
    $(":empty").click(function(){
        $(this).hide();
    });
});
//All elements that are a parent of another element (including text).
// $(document).ready(function(){
    // $(":parent").click(function(){ 
//         $(this).hide();
//     });
// });
//All hidden <p> elements(which are not visible in the Result).
$(document).ready(function(){
    $("p:hidden").click(function(){
        $(this).hide();
    });
});
//All visible tables.
$(document).ready(function(){
    $("table:visible").click(function(){
        $(this).hide();
    });
});
//The document’s root element.
//$(document).ready(function(){
    //$(":root").click(function(){ 
       // $(this).hide();
    //});
//});
//All <p> elements with a lang attribute value starting with "it".
$(document).ready(function(){
    $("p:lang(it)").click(function(){
        $(this).hide();
    });
});
//All elements with an id attribute.
$(document).ready(function(){
    $("[id]").click(function(){
        $(this).hide();
    });
});
//All elements with an id attribute value equal to "my-Address".
$(document).ready(function(){
    $("[id=my-Address]").click(function(){
        $(this).hide();
    });
});
//All <p> elements without an id attribute value equal to "my-Address".Note: Also <p> elements with no id attribute at all.
$(document).ready(function(){
    $("p[id!=my-Address]").click(function(){
        $(this).hide();
    });
});
//All elements with an id attribute value ending with "ess".
$(document).ready(function(){
    $("[id$=ess]").click(function(){
        $(this).hide();
    });
});
//All elements with an id attribute value equal to "my" or starting with "my" followed by a hyphen (-).
$(document).ready(function(){
    $("[id|=my]").click(function(){
        $(this).hide();
    });
});
//All elements with an id attribute value starting with the letter "L".
$(document).ready(function(){
    $("[id^=L]").click(function(){
        $(this).hide();
    });
});
//All elements with a title attribute value containing the word "beautiful".
$(document).ready(function(){
    $("[title~=beautiful]").click(function(){
        $(this).hide();
    });
});
//All elements with an id attribute value containing the string "s".
$(document).ready(function(){
    $("[id*=s]").click(function(){
        $(this).hide();
    });
});
//All form elements.
$(document).ready(function(){
    $(":input").click(function(){
        $(this).hide();
    });
});
//All form elements with type="text".
$(document).ready(function(){
    $(":text").click(function(){
        $(this).hide();
    });
});
//All form elements with type="password".
$(document).ready(function(){
    $(":password").click(function(){
        $(this).hide();
    });
});
//All form elements with type="radio".
$(document).ready(function(){
    $(":radio").click(function(){
        $(this).hide();
    });
});
//All form elements with type="checkbox".
$(document).ready(function(){
    $(":checkbox").click(function(){
        $(this).hide();
    });
});
//All form elements with type="submit".
$(document).ready(function(){
    $(":submit").click(function(){
        $(this).hide();
    });
});
//All form elements with type="reset".
$(document).ready(function(){
    $(":reset").click(function(){
        $(this).hide();
    });
});
//All form elements with type="button", and all <button> elements.
$(document).ready(function(){
    $(":button").click(function(){
        $(this).hide();
    });
});
//All form elements with type="image".
$(document).ready(function(){
    $(":image").click(function(){
        $(this).hide();
    });
});
//All form elements with type="file".
$(document).ready(function(){
    $(":file").click(function(){
        $(this).hide();
    });
});
//All enabled form elements.
$(document).ready(function(){
    $(":enabled").click(function(){
        $(this).hide();
    });
});
//All disabled form elements.
$(document).ready(function(){
    $(":disabled").click(function(){
        $(this).hide();
    });
});
//All selected options in a drop-down list.
$(document).ready(function(){
    $(":selected").click(function(){
        $(this).hide();
    });
});
//All checked form elements.
$(document).ready(function(){
    $(":checked").click(function(){
        $(this).hide();
    });
});
//All elements.
//$(document).ready(function(){
  //  $("*").click(function(){ select all elements
    //    $(this).hide();
   // });
//});
