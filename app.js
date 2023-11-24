// using JavaScript

const helloJS = document.createElement("h1");
helloJS.innerHTML  = "Hello world using JavaScript";

const usingJS = document.getElementById("javascript");
usingJS.appendChild(helloJS);
//  ****************************************************************************************************************************
// using React 

const HelloReact = React.createElement("h1",{id:"React"},"Hello World using React");

const usingReact = ReactDOM.createRoot(document.getElementById("React"));
usingReact.render(HelloReact);

// ********************************************************************************
/*
suppose we have parent child html stucture for Eg.

<div id="heading">
  <h1></h1>
</>div

*/

const heading = React.createElement("h1",{id:"heading"},"Hello World using parentReact");

const rootChild = ReactDOM.createRoot(document.getElementById("heading"));
rootChild.render(heading);

// **********************************************************************************
/*
suppose we have parent inside child inside write sting html stucture for Eg.

<div id="parent">
   <div id="child1">
      <h1></h1>
   <div>
</>div

*/
const idChild1 = React.createElement("div",{id:"child1"},
React.createElement("div",{id:"child1"},React.createElement("h1",{},"Hello World using child1-React")));

const childroot = ReactDOM.createRoot(document.getElementById("child1"));
childroot.render(idChild1);

// *************************************************************************************

/*
suppose we have parent inside child1 and child2 inside write sting html stucture for Eg.

<div id="parent">
   <div id="child1">
      <h1></h1>
   <div>
    <div id="child2">
      <h1></h1>
   <div>
</>div

*/

const idchild2 = React.createElement("div",{id:"child2"},[
    React.createElement("div",{id:"subChild1"},
       React.createElement("h1",{},"Hello World for supperChild1")
    ),React.createElement("div",{id:"subChild2"},
       React.createElement("h1",{},"Hello World for supperChild2")
  )]
);

const helloChild2 = ReactDOM.createRoot(document.getElementById("child2"));
helloChild2.render(idchild2);

// ******************************************************************************************************

/*
suppose we have parent inside child1 and child2 inside write sting html with supper childs stucture for Eg.

<div id="supperChild">
   <div id="supperChild1">
      <h1></h1>
      <h2><h2>
   <div>
    <div id="child2">
      <h1></h1>
      <h2><h2>
   <div>
</>div

*/

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