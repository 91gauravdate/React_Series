import RestorentCard from "./RestorentCard";
import { useState } from "react";
import resList from "../utils/mockData";
   

const Body = () => {
  const [listofRestorents, setListOfRestorents] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn" onClick={()=>{
            const filteredList = listofRestorents.filter((res)=>res?.data?.avgRating > 4); 
            setListOfRestorents(filteredList);
          }}>
          Filter-btn
        </button>
      </div>
      <div className="resto-container">
        {/* <RestorentCard  resData={resList[0]}/> or using loop or using map to render cards */}
        {listofRestorents.map((restaurant) => (
          <RestorentCard key={restaurant?.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
