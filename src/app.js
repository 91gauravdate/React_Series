import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


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


// used inline style in JSX

   


const AppLayout = () => {
  return (
    <div className="app">
      {/* Build Header  */}
      <Header />
      {/* Build Body  */}
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
