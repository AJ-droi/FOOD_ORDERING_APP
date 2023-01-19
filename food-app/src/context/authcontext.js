import React, { createContext } from "react";
import { apiGet, apiPost } from "../utils/api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [getVendors, setGetVendors] = React.useState([])
  const [getVendorFood, setGetVendorsFood] = React.useState([])

  /**==============Registration======= **/
  const registerConfig = async (formData) => {
    try {
      const registerData = {
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirm_password,
        phone: formData.phone,
      };
      await apiPost("/users/signup", registerData).then((res) => {
        toast.success(res.data.message);
        localStorage.setItem("signature", res.data.signature);
        setTimeout(() => {
          window.location.href = "/otp";
        }, 2000);
      });
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };

  /**==============OTP Verification ======= **/
  const OTPConfig = async (formData, signature) => {
    try {
      const otpData = {
        otp: formData,
      };

      await apiPost(`/users/verify/${signature}`, otpData).then((res) => {
        toast.success(res.data.message);
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      });
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };

  /**==============Resend OTP ======= **/

  const ResendOTP = async (signature) => {
    try {
      await apiGet(`/users/resend-otp/${signature}`).then((res) => {
        toast.success(res.data.message);
        setTimeout(() => {
          window.location.href = "/otp";
        }, 2000);
      });
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };

  /**==============Login ======= **/
  const LoginConfig = async (formData) => {
    try {
      const LoginData = {
        email: formData.email,
        password: formData.password,
      };
      await apiPost("/users/login", LoginData)
        .then((res) => {
          toast.success(res.data.message);
          localStorage.setItem("signature", res.data.signature);
          localStorage.setItem("role", res.data.role);
          setTimeout(() => {
            if (res.data.role === "admin" || res.data.role === "superadmin") {
              window.location.href = "/admin/dashboard";
            } else if (res.data.role === "vendor") {
              window.location.href = "/vendor/dashboard";
            } else {
              window.location.href = "/";
            }
          }, 2000);
        })
        .catch((err) => {
          toast.error(err.response.data.Error);
        });
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };

  /**==============Logout ======= **/
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  /**=============Get all Vendors ======= **/
  const GetAllVendors = async () => {
    try {
      await apiGet(`/vendors/get-all-vendors`).then((res) => {
        setGetVendors([...res.data.vendor]);  
      });
    } catch (err) {
      console.log(err)
    }
  };

  /**=============Get all foods By Vendor ======= **/
  const GetAllVendorsFood = async (vendorId) => {
    try {
      await apiGet(`/vendors/get-vendor-food/${vendorId}`).then((res) => {
        setGetVendorsFood([...res.data.Vendor.food]);  
      });
    } catch (err) {
      console.log(err)
    }
  };

   /**============= Add to Cart ======= **/
   const [cartItem, setCartItem] = React.useState([])
  const handleAddFood = (product)=>{
  
    const ProductExist = cartItem.find((item)=>item.id === product.id)

    if(ProductExist){
      setCartItem(cartItem.map((item)=>item.id === product.id ? {...ProductExist,quantity:ProductExist.quantity + 1 }: item))
    }else{
      setCartItem([...cartItem,{...product, quantity:1}])
    }
  }

   /**============= Decrease Items in cart ======= **/
  const handleRemove = (product)=>{

    const ProductExist = cartItem.find((item)=>item.id === product.id)
 
    if(ProductExist.quantity === 1){
      setCartItem(cartItem.filter((item)=> item.id !== product.id))
    }else{
      setCartItem(cartItem.map((item)=> item.id === product.id ? {...ProductExist, quantity:ProductExist.quantity - 1} :item ))
    }
  }

   /**============= Clear cart ======= **/
  const handleClear = ()=>{
    setCartItem([])
  }




  return (
    <dataContext.Provider
      value={{
        registerConfig,
        OTPConfig,
        ResendOTP,
        LoginConfig,
        Logout,
        GetAllVendors,
        getVendors,
        GetAllVendorsFood,
        getVendorFood,
        cartItem,
        handleAddFood,
        handleRemove,
        handleClear
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(dataContext);
  if (context === "undefined") {
    throw new Error("useAuth must be used within the auth provider");
  }
  return context;
};

export default DataProvider;
