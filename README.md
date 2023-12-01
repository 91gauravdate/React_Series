# React_Series - react.org
Learn React_JS series 

# Besics in reactjs from Episode-1.
#index.html-
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React_Series</title>
    <link rel="stylesheet" href="./index.css">
</head>

<body>
    <!-- using HTML  -->
    <div id="root">
        <h1>Hello React</h1>
    </div>
    <!-- ********************************************* -->
    <!-- using javascript  -->
    <div id="javascript">
    </div>
    <!-- ******************************************************** -->
    <!-- using React -->
    <div id="Reactser"></div>
    <div id="heading"></div>
    <div id="parent"></div>
    <div id="child1"></div>
    <div id="child2"></div>
    <div id="supperChild"></div>

    <script type="module" src="./app.js"></script>
</body>

</html>
<!-- ************************************************************************************************************************************************************* -->
#app.js-

import React from "react";
import ReactDOM  from "react-dom/client";

// using JavaScript

const helloJS = document.createElement("h1");
helloJS.innerHTML  = "Hello world using JavaScript";

const usingJS = document.getElementById("javascript");
usingJS.appendChild(helloJS);
<!-- //  **************************************************************************************************************************** -->
// using React 

const HelloReact = React.createElement("h1",{id:"Reactser"},"Hello World using React");

const usingReact = ReactDOM.createRoot(document.getElementById("Reactser"));
usingReact.render(HelloReact);

<!-- // ******************************************************************************** -->

suppose we have parent child html stucture for Eg.

<!-- <div id="heading">
  <h1></h1>
</>div -->



const heading = React.createElement("h1",{id:"heading"},"Hello World using parentReact");

const rootChild = ReactDOM.createRoot(document.getElementById("heading"));
rootChild.render(heading);

<!-- // ********************************************************************************** -->

suppose we have parent inside child inside write sting html stucture for Eg.

<!-- <div id="parent">
   <div id="child1">
      <h1></h1>
   <div>
</>div -->


const idChild1 = React.createElement("div",{id:"child1"},
React.createElement("div",{id:"child1"},React.createElement("h1",{},"Hello World using child1-React")));

const childroot = ReactDOM.createRoot(document.getElementById("child1"));
childroot.render(idChild1);

<!-- // ************************************************************************************* -->


suppose we have parent inside child1 and child2 inside write sting html stucture for Eg.

<!-- <div id="parent">
   <div id="child1">
      <h1></h1>
   <div>
    <div id="child2">
      <h1></h1>
   <div>
</>div -->



const idchild2 = React.createElement("div",{id:"child2"},[
    React.createElement("div",{id:"subChild1"},
       React.createElement("h1",{},"Hello World for supperChild1")
    ),React.createElement("div",{id:"subChild2"},
       React.createElement("h1",{},"Hello World for supperChild2")
  )]
);

const helloChild2 = ReactDOM.createRoot(document.getElementById("child2"));
helloChild2.render(idchild2);

<!-- // ****************************************************************************************************************************** -->


suppose we have parent inside child1 and child2 inside write sting html with supper childs stucture for Eg.

<!-- <div id="supperChild">
   <div id="supperChild1">
      <h1></h1>
      <h2><h2>
   <div>
    <div id="child2">
      <h1></h1>
      <h2><h2>
   <div>
</>div -->



const supperChild = React.createElement("div",{id:"supperChild"},[
    React.createElement("div",{id:"supperChild1"},[
       React.createElement("h1",{},"Hello World for supperChild1 h1"),React.createElement("h2",{},"Hello World for supperChil1 h2")]
    ),React.createElement("div",{id:"supperChild2"},[
       React.createElement("h1",{},"Hello World for supperChild2 h1"),React.createElement("h2",{},"Hello World for supperChild2 h2")]
  )]
);
console.log(supperChild);
const root = ReactDOM.createRoot(document.getElementById("supperChild"));
root.render(supperChild);

<!-- ********************************************************************************************************************************************* -->
#index.css-

#root{
    color: red;
}
#javascript{
    color:rgb(160, 50, 10);
}
#React{
    color:crimson;
}
#heading{
    color:rgb(129, 59, 96);
}
#parent{
    color:rgb(200, 156, 219);
}
#child1{
    color:rgb(109, 179, 109);
}
#child2{
    color:rgb(133, 118, 36);
}
#supperChild{
    color:rgb(145, 98, 17);
}

<!-- *********************************************************************************************************************************************************** -->
# parcel - Parcel.com/org
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Build=6ms
- Image Optimization
- Minification
- Bundlig
- Compress Files
- Consistent Hashing
- Code Splting
- Diffrential Bundling- Support older browsers
- Diagnostic - showing error in terminal
- Error Handling
- Https mode - npx parcel index.html --https
- Tree Shsking - remove unused code

# JSX-
# Babel-  babeljs.io