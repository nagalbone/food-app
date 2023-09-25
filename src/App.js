import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import restList from "./utils/mockData";
const AppLayout = () => {
  const [restuarant,setRestuarant] = useState(restList);

  const filterSearchResto = (e)=>{
    const rest = e.target.value;
    const filterRes = restList.filter((res)=>res.info.name.toLowerCase().includes(rest.toLowerCase()));
    setRestuarant(filterRes);
  }

  const filterTopRatedResto = ()=>{
    let filterResto = restuarant.filter((res)=> res.info.avgRating > 4.5);
    setRestuarant(filterResto);
  }

  return (
    <>
      <Header />
      <div className="heading">
      <input type="text" onChange={filterSearchResto} placeholder="Search Reataurant Near You.."/>&nbsp;&nbsp;
      <button onClick={()=>setRestuarant(restList)}>All</button>&nbsp;&nbsp;
      <button onClick={filterTopRatedResto}>Top Rated Restaurants</button>
      
      </div>
      <div className="card-container">
        {
          restuarant.length == 0 ? (<span>Not Found Any Restaurant</span>) : restuarant.map((rest) => {
            return <Card key={rest.info.id} resto={rest} />;
          })
        }
        
      </div>
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
