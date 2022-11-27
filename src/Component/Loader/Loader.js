import React from 'react';
import { PropagateLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
        <PropagateLoader color="#E6A84C" />
      </div>
    );
};

export default Loader;