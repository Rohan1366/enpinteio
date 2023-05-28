import axios from 'axios';

import React, { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
const Users = () => {

  const [users, setUsers] = useState([]);
  
  //getall products
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/get-user");
      setUsers(data.users);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllUsers();
  }, []);
  return (

       
        <div className='container-fluid m-3 p-3'>
          <div className='row'>
            <div className='col-md-1'>
               
            </div>
            <div className='col-md-9'>
            <h1 style={{textAlign:"center"}}>All Users</h1>
           <h3 style={{textAlign:"center",marginBottom:"20px"}}>Total Users {users.length} </h3>
            
                         
             
            
             <ol  className="list-group list-group-numbered">
                     
                     {
                         users.map((ele)=>{
                           

                             
                              return <li className="list-group-item" style={{padding:"20px",color:"black",size:"10px"}}>{ele.name}</li>
                             
                         })
                     }
                 </ol>
              
           



            </div>
          </div>
        </div>  
       

  )
}

export default Users