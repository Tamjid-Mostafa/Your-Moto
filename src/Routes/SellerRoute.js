import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getRole } from '../api/user';
import Loader from '../Component/Loader/Loader';
import { AuthContext } from '../contexts/AuthProvider';

const SellerRoute = ({children}) => {
    const { user, loading} = useContext(AuthContext);
    const [roleLoading, setRoleLoading] = useState(true);
    const [role, setRole] = useState(null)

    useEffect(() => {
        setRoleLoading(true)
        getRole(user?.email).then(data => {
          setRole(data)
          setRoleLoading(false)
        })
      }, [user])


      if (loading || roleLoading) {
        return (
          <div className='min-h-screen'>
            <Loader />
          </div>
        )
      }
      if (user && user.uid && role === 'seller') {
        console.log(role)
        return children
      }
      return <Navigate to='/' />
};

export default SellerRoute;