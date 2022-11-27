import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getRole } from '../api/user';
import Loader from '../Component/Loader/Loader';
import { AuthContext } from '../contexts/AuthProvider';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    /* const [roleLoading, setRoleLoading] = useState(true); */
    const [role, setRole] = useState(null)

    useEffect(() => {
        /* setRoleLoading(true) */
        getRole(user?.email).then(data => {
          setRole(data)
          /* setRoleLoading(false) */
        })
      }, [user])


      if (loading ) {
        return (
          <div className='min-h-screen'>
            <Loader />
          </div>
        )
      }
      if (user && user.uid && role === 'admin') {
        return children
      }
      return <Navigate to='/dashboard' />
};

export default AdminRoute;