import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "root" }, "Hello React");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// using JSX (trancepiled code before its reaches the js) - Parcel Babel
// JSX => Babel trancepiled it to React.createElement => React.createElement- JS object{} => HTML element (render)

// for single line code
// const jsxHeading = <h1 id="root" className="head">Hello react using JSX</h1>

// for multiple lines of code used ()
// React Element:-
const jsxHeading = (
  <h1 id="root" className="head" tabIndex="1">
    Hello react using JSX
  </h1>
);
// or
//react element inside react element how to write
const jsxHeading1 = (
  <span id="root" className="head" tabIndex="1">
    {jsxHeading}
    this is react element inside react element
  </span>
);

console.log(jsxHeading);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(jsxHeading);
// **********************************************************************************************************

// React Functional Components:-

const HeadingComponent1 = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading"> a function which returns the JSX element</h1>
    </div>
  );
};
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<HeadingComponent1 />);

// or

const HeadingComponent2 = () => (
  <h1>
    both example doing same when we write without using return it should be in
    single line
  </h1>
);
const root3 = ReactDOM.createRoot(document.getElementById("root"));
root3.render(<HeadingComponent2 />);

// ******************************************************************************************************************
// Component composition:- one component inside another component
// using arrow function
const Title = () => <h1 className="comp">Hellow React</h1>;

const HeadingComponent3 = () => {
  return (
    <div id="container">
      <Title />
      {Title()}
      <Title></Title>
      <h1 className="heading"> a function which returns the JSX element</h1>
    </div>
  );
};
const root4 = ReactDOM.createRoot(document.getElementById("root"));
root4.render(<HeadingComponent3 />);

//using normal function

const HeadingComponent4 = function () {
  return (
    <div id="hello" className="normal" tabIndex="1">
      <h2 className="compo">component composition using normal function</h2>
    </div>
  );
};
const root5 = ReactDOM.createRoot(document.getElementById("root"));
root5.render(<HeadingComponent4 />);

//  **********************************************************************************************************************

// when we used {} curly braces inside jsx code you have to writen any piece of code inside this curly braces.
//Eg.
const head = "React";

const HeadingComponent5 = () => (
  <div id="container">
    {/* this is valid for render another component inside this component  */}
    <HeadingComponent4 />
    {/* when we used react element inside JSX how */}
    {jsxHeading}
    <h1 className="Jscode">{head}</h1>
    <h2>{console.log("this is the JS code inside JSX code")}</h2>
    <h2>this is the JSX code</h2>    
  </div>
);

const root6 = ReactDOM.createRoot(document.getElementById("root"));
root6.render(<HeadingComponent5 />);



