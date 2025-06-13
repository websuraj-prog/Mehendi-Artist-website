import React from 'react';
import AdminReviewManagement from './review/AdminReviewManagement';
import Gallery from './gallery/Gallery';

const AdminPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Admin Dashboard</h1>
      <AdminReviewManagement />
      <Gallery />
    </div>
  );
};

export default AdminPage;
