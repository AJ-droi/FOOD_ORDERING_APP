import React from "react";
import tableChair from "../../assets/tableChair.svg";
import search from "../../assets/search.svg";
import "./CartInfo.css";
import { useAuth } from "../../context/authcontext";

const CartInfo = () => {
  const {  cartItem, handleAddFood,   handleRemove,handleClear  } = useAuth();

  // let price = 0;

  // for(let i =0; i<cartItem.length; i++){
  //   price += cartItem[i].quantity * cartItem[i].price 
  // }

  // console.log(price)

  const totalprice =  cartItem.reduce((price, item)=> price + item.quantity * item.price, 0)

  return (
    <div>
      <div className="rest-header">
        <h3>
          Cart Details
          <span>
            <img src={tableChair} alt="" />
          </span>
        </h3>
        <form className="rest-form">
          <input type="text" placeholder="Search" />
          <img src={search} alt="" />
        </form>
      </div>

      <section className="restaurant-cards">
        <img src="" alt="" />
       <div className="cart-items">
        <div className="cart-items-header">
            Cart Items
        </div>
          {cartItem.length === 0 && <div className="cart-items-empty"> No Items added to cart yet</div>}

          <div>
              {
                cartItem.map((item)=>(
                  <div key={item.id} className="cart-items-list">
                    <img src={item.image} alt="img"  className="cart-items-image"/>
                    <div className="cart-items-name">{item.name}</div>
                    <div className="cart-items-function">
                      <button className="cart-items-add" onClick={()=>handleAddFood(item)}>+</button>
                      <button className="cart-items-remove" onClick={()=>handleRemove(item)}>-</button>
                    </div>
                    <div className="cart-items-price">
                       {item.quantity} * #{item.price}
                    </div>
                  </div>
                ))
              }
          </div>
          <div className="cart-items-total-price-name">
             Total price

             <div className="clear-cart">
                {cartItem.length >= 1 && <button className="clear-cart-button" onClick={()=>handleClear()}> clear Cart</button>}
            </div>

            <div className="cart-items-total-price">
             #{totalprice}
            </div>
          </div>
       </div>


         
      </section>
    </div>
  );
};

export default CartInfo;
