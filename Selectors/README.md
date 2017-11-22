 # jQuery Selectors Reference
 
'''

$("*")	All elements
$("#lastname")	The element with id="lastname"
$(".intro")	All elements with class="intro"
$(".intro,.demo")	All elements with the class "intro" or "demo" element	
$("p")	All <p> elements

'''
,,, 
$("h1,div,p")	All <h1>, <div> and <p> elements	 	 
$("p:first")	The first <p> element
,,, 
 
$("p:last")	The last <p> element
$("tr:even")	All even <tr> elements
$("tr:odd")	All odd <tr> elements 	 	 
$("p:first-child")	All <p> elements that are the first child of their parent
$("p:first-of-type")	All <p> elements that are the first <p> element of their parent
$("p:last-child")	All <p> elements that are the last child of their parent
$("p:last-of-type")	All <p> elements that are the last <p> element of their parent
$("p:nth-child(2)")	All <p> elements that are the 2nd child of their parent
$("p:nth-last-child(2)")	All <p> elements that are the 2nd child of their parent, counting from the last child
$("p:nth-of-type(2)")	All <p> elements that are the 2nd <p> element of their parent
$("p:nth-last-of-type(2)")	All <p> elements that are the 2nd <p> element of their parent, counting from the last child
$("p:only-child")	All <p> elements that are the only child of their parent
$("p:only-of-type")	All <p> elements that are the only child, of its type, of their parent
$("div > p")	All <p> elements that are a direct child of a <div> element
$("div p")	All <p> elements that are descendants of a <div> element
$("div + p")	The <p> element that are next to each <div> elements
$("div ~ p")	All <p> elements that are siblings of a <div> element
$("ul li:eq(3)")	The fourth element in a list (index starts at 0)
$("ul li:gt(3)")	List elements with an index greater than 3
$("ul li:lt(3)")	List elements with an index less than 3
$("input:not(:empty)")	All input elements that are not empty 	 	 
$(":header")	All header elements <h1>, <h2> ...
$(":animated")	All animated elements
$(":focus")	The element that currently has focus
$(":contains('Hello')")	All elements which contains the text "Hello"
$("div:has(p)")	All <div> elements that have a <p> element
$(":empty")	All elements that are empty
$(":parent")	All elements that are a parent of another element
$("p:hidden")	All hidden <p> elements
$("table:visible")	All visible tables
$(":root")	The document's root element
$("p:lang(de)")	All <p> elements with a lang attribute value starting with "de" 	 	 
$("[href]")	All elements with a href attribute
$("[href='default.htm']")	All elements with a href attribute value equal to "default.htm"
$("[href!='default.htm']")	All elements with a href attribute value not equal to "default.htm"
$("[href$='.jpg']")	All elements with a href attribute value ending with ".jpg"
$("[title|='Tomorrow']")	All elements with a title attribute value equal to 'Tomorrow', or starting with 'Tomorrow' followed by a hyphen
$("[title^='Tom']")	All elements with a title attribute value starting with "Tom"
$("[title~='hello']")	All elements with a title attribute value containing the specific word "hello"
$("[title*='hello']")	All elements with a title attribute value containing the word "hello"
$(":input")	All input elements
$(":text")	All input elements with type="text"
$(":password")	All input elements with type="password"
$(":radio")	All input elements with type="radio"
$(":checkbox")	All input elements with type="checkbox"
$(":submit")	All input elements with type="submit"
$(":reset")	All input elements with type="reset"
$(":button")	All input elements with type="button"
$(":image")	All input elements with type="image"
$(":file")	All input elements with type="file"
$(":enabled")	All enabled input elements
$(":disabled")	All disabled input elements
$(":selected")	All selected input elements
$(":checked")	All checked input elements
https://www.w3schools.com/jquery/jquery_ref_selectors.asp
'''
 # Also you can see the selectors in my CodePen https://codepen.io/inin2007/details/ooqWme
