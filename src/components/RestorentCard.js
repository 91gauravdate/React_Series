import { CDN_URL } from "../utils/constants";



const Stylecard = {
    backgroundColor: "#f0f0f0"
 }
 

const RestorentCard = (props) => {
    const {resData} = props;
    console.log(props);
    const {name,cuisines,costForTwo,avgRating,deliveryTime}= resData?.data
   return (
     <div className="res-card" style={Stylecard}>
       <img className="res-logo" alt="res-logo" src={CDN_URL + resData.data.cloudinaryImageId }/> 
       
 
       <h3>{name}</h3>
       {/* or --- <h3>{props.resName}</h3> */}
       <h4>{cuisines.join(", ")}</h4>
       <h4>₹ {costForTwo/100} For TWO</h4>
       <h4>{avgRating} Stars</h4>
       <h4>{deliveryTime}</h4>
     </div>
   );
 };

 export default RestorentCard;