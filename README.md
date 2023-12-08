# React_Series - react.org
Learn React_JS series 
- React will make DOM operation /DOM manipulation suparfast and dinamic
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

# How to show card detail dinamic

 - using Props- Property- it is just normal arguments to a function
  - passing arguments to a function.

# configDrivenUi- 
 - The UI is driven by config that shows realTime data or current data eg. current offers in UI, Current market price on that perticular Item etc.

 # keys - why we used index as key
  - suppose we have lots of cards in our app and I want to add one more new card but their is no id so in this case we can used index as key. i.e when we do not have ids in our cards so we can used index as key.
  not using keys(not acceptable)>>>>>>>> index as key >>>>>>>>>>>>> unique id(best way)
   -Eg.     const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-container">
        
        {/* <RestorentCard  resData={resList[0]}/> or using loop or using map to render cards */}
        {resList.map((restaurant,index)=> (
        <RestorentCard key={index} resData={restaurant}/>

        <!-- write way is -->

         {resList.map((restaurant)=> (
        <RestorentCard key={restaurant.data.id} resData={restaurant}/>

        ))};
      
      </div>
    </div>
  );
};

 - but best way is to used the unique id for each card.



# File Stucture- React.org
# Create Food Ordering Website- structure - 
  - when we create folder or file eg. app.js or it can also write app.jsx dosent matter both are same 
/**   Create the Food Ordering app
 *
 *  Header
 *    - logo
 *    - nav Items
 *  Body
 *    - search
 *    - RestorentContainer
 *    - RestorentCard
 *  Footer
 *    - Copywrite
 *    - Links
 *    - Address
 *    - Contact
 *
 */

 # utils or common or config-
   - inside src folder we have utils file which can stores the hardcoded data like urls or <componentname/> etc.

 # constants.js- 
   - it containes all hardcoded data like url

# Their are two types of export and import
  Default- export default componentName
           import componentName from "Path"

  Named Export-
        -Named Export- if we have export multiple things from same file we can used named export.
    eg. export const LOGO_URL= "https://tse3.mm.bing.net/th?id=OIP.57f6MyAPMejoExdNmu3U1AHaFj&pid=Api&P=0&h=180";
         or default export like export default component name.
    import {componentName} from "Path"

 # React Hooks- (Normal js utility function written by facebook)  - all utility function available inside react in node module i.e npm install react
   - The react hooks is the normal js function which given by react
   - It is pre-build
   - the function which returns the supper power or logic 

   - # Their is Two imp hooks/utility function in react-
         - useState()- used to genereate superpowefull state veriables in react. Whenever a state veriable is update react re-renders the components
            # used in react app-
         -   useState()   - import {useState} from "react"   ------ named import.
               // Local state veriable   const [listOfRestorents] = useState([null or object{} or default value pass])
               // Normal JS veriable let listOfRestorents = [{.....}]
         - useEffect()   -


# render -   Whenever a state veriable is update react re-renders the components