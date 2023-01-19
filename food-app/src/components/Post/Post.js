import React, { useEffect } from "react";
// import fries from "../../assets/fries.svg";
// import hamburger from "../../assets/hamburger.svg";
import post from "../../assets/post.svg";
import "./Post.css";
import { useAuth } from '../../context/authcontext'
import {Link} from 'react-router-dom'

const Post = () => {
  const {GetAllVendors, getVendors} = useAuth()

  useEffect(()=>{
    GetAllVendors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="post">
      <h3>
        Restaurants
        <span>
          <img src={post} alt="" />
        </span>
      </h3>
      <div className="flexDiv">

      {
       getVendors.map((elem)=>(
         <>
           
           <div key={elem.id}>
           <Link to={`/restaurant/${elem.id}`} style={{textDecoration:"none", color:"#000"}}>
          <img src={elem.coverImage} alt="" />
          <h3>{elem.restaurantName}</h3>
          </Link>
         </div>
         
       
         </>
      
       
       ))
      }
      </div>
    </div>
  );
};

export default Post;
