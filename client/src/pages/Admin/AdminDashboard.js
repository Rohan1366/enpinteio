import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../context/auth'
import Users from './Users'
const AdminDashboard = () => {
  const [auth]=useAuth()
  return (
    <Layout title={'Admin-Dashboard'}>
        <div className='container-fluid m-3 p-3 ' >
          <div className='row' >
                 <div className='col-md-3'>
                  
       
       
                 </div>
                 <div className='col-md-9'>
                     <div className='card w-75 p-3'>
                     <h3> Admin Name : {auth?.user?.name}</h3>
                     <h3>Admin Email : {auth?.user?.email}</h3>
                    <Users/>

                 </div>
                 </div>
          </div>
            

         

        </div>
    </Layout>
  )
}

export default AdminDashboard