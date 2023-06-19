import React from 'react';
import UploadForm from '../pages/AdminLayout/UploadForm';
import { Outlet } from 'react-router-dom';

const Other = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Other;