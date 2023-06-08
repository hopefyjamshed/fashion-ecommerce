import React from 'react';
import UploadForm from './UploadForm';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    return (
        <div className=' max-w-[1240px] mx-auto p-5'>
            <Link to='/admin/upload'><button className='btn btn-outline uppercase'>Upload a product</button></Link>
        </div>
    );
};

export default AdminHome;