// Document Object Model in JavaScript

// What is Document Object Model (DOM)
// The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.

// The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.

// Note that the DOM is cross-platform and language-independent ways of manipulating HTML and XML documents.

// A document as a hierarchy of nodes
// The DOM represents an HTML document as a hierarchy of nodes. Consider the following HTML document:

// <html>
//     <head>
//         <title>JavaScript DOM</title>
//     </head>
//     <body>
//         <p>Hello DOM!</p>
//     </body>
// </html>

// In this DOM tree, the document is the root node. The root node has one child node which is the <html> element. The <html> element is called the document element.

// Each document can have only one document element. In an HTML document, the document element is the <html> element. Each markup can be represented by a node in the tree.

// Selecting elements

// getElementById() – select an element by id.
// getElementsByTagName()  – select elements by a tag name.
// getElementsByClassName() – select elements by one or more class names.
// querySelector()  – select elements by CSS selectors.


// JavaScript getElementById

// {
//     function findElement() {
//         const element = document.getElementById("id1");
//         element.innerHTML = "Element found!";
//         element.style.color = "red";
//     }      
    
    
//     const node1 = document.getElementById("id2");
//     const node2 = document.getElementById("id3");
//         function textNode1() {
//             alert(node1.innerHTML);
//         }
//         function textNode2() {
//             alert(node2.innerHTML);
//         }
// }

//getElementsByTagName()

{
    // const elements = document.getElementsByTagName("div");
    // console.log(elements);

    // function changeColor() {
    //   for (let i = 0; i < elements.length; i++) {
    //     if(i==3)
    //     elements[i].style.color = "blue";
    //     else
    //     elements[i].style.color = "red";
    //   }
    // }
}

//  getElementsByClassName()

{
    // const elements = document.getElementsByClassName("red");
    // console.log(elements);
    
    // function changeColor() {
    //   for (let i = 0; i < elements.length; i++) {
    //     elements[i].style.color = "green";
    //   }
    // }
}

// querySelector()

{
    // const elements = document.querySelectorAll(".demo");
    // const element = document.querySelector(".demo");
    // console.log(elements);

    // function changeColors() {
    //   element.style.color = "red";
    // }
    // function changeColors() {
    //     for (let i = 0; i < elements.length; i++) {
    //       elements[i].style.color = "red";
    //     }
    //   }
}

// querySelectorAll

{
    // const elements = document.querySelectorAll("#sun .mercury p");
    // console.log(elements);

    // function changeColorss() {
    //   for (let i = 0; i < elements.length; i++) {
    //     elements[i].style.color = "red";
    //   }
    // }
}

//javascript has attribute

{
    // const element = document.querySelector("p");
    // function check() {
    //   if (element.hasAttribute("name")) {
    //     alert("Yes 'name' attribute exist!");
    //   }
    //   else {
    //     alert("No 'name' attribute doesn't exist!");
    //   }
    // }
}


//javascript get attribute

{    
    // function attr(elem) {
    //   alert(elem.getAttribute("id"));
    // }
}

// javascript set attribute

{
    // const element = document.querySelector("p");

    // function checkAttr() {
    //   alert(element.hasAttribute("name"));
    // }
    // function addAttr() {
    //   element.setAttribute("name", "myParagraph");
    // }
}

// javascript remove attribute

{
    // const element = document.querySelector("button");

    // function remove() {
    //   element.removeAttribute("title");
    // }
}


/* Html Object Accessible */

/*

document.body
document.documentElement
document.forms
document.images
document.links
document.scripts
document.title

*/

{
    // document.getElementById("demo").innerHTML = document.body.innerHTML;
}

{
    // document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
}

{
    // document.getElementById("demo1").innerHTML = "Number of forms tag: " + document.forms.length;
}

{
    // document.getElementById("demo2").innerHTML = "Number of images tag: " + document.images.length;
}

{
    // document.getElementById("demo3").innerHTML = "Number of links tag: " + document.links.length;
}

{
    // document.getElementById("demo4").innerHTML = "Number of scripts: " + document.scripts.length;
}

{
    // document.getElementById("title").innerHTML = "The title of this document is: " + document.title;
}

let chars =['a','b','a','c','b'];
let uniqueChars=[...new set(chars)];
console.log(uniqueChars);

