import React from "react";


import { Toaster } from "react-hot-toast";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div>
     
      <Header/>
      <main style={{ minHeight: "70vh", marginTop:"90px" , textAlign:"center" }}>
      <Toaster />

        {children}
       
      </main>
      
    </div>
  );
};



export default Layout;
