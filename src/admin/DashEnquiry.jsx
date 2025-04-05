import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const DashEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    pages: 1,
    total: 0,
    count: 0
  });

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch('/api/registers/getregister');
        if (!response.ok) {
          throw new Error('Failed to fetch enquiries');
        }
        const result = await response.json();
        
        if (result.success && Array.isArray(result.data)) {
          setEnquiries(result.data);
          setPagination({
            page: result.page,
            pages: result.pages,
            total: result.total,
            count: result.count
          });
        } else {
          throw new Error('Invalid data format received from server');
        }
      } catch (err) {
        setError(err.message);
        setEnquiries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  const handlePageChange = async (newPage) => {
    if (newPage < 1 || newPage > pagination.pages) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/registers/getregister?page=${newPage}`);
      if (!response.ok) {
        throw new Error('Failed to fetch enquiries');
      }
      const result = await response.json();
      
      if (result.success && Array.isArray(result.data)) {
        setEnquiries(result.data);
        setPagination({
          page: result.page,
          pages: result.pages,
          total: result.total,
          count: result.count
        });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar variant="default" />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Enquiries</h1>
          
          {/* Pagination Info */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">
              Showing {pagination.count} of {pagination.total} enquiries
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange(pagination.page - 1)}
                disabled={pagination.page === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-3 py-1">
                Page {pagination.page} of {pagination.pages}
              </span>
              <button
                onClick={() => handlePageChange(pagination.page + 1)}
                disabled={pagination.page === pagination.pages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          ) : enquiries.length === 0 ? (
            <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative">
              No enquiries found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-gray-700 font-semibold">Name</th>
                    <th className="py-3 px-4 text-left text-gray-700 font-semibold">Email</th>
                    <th className="py-3 px-4 text-left text-gray-700 font-semibold">Subject</th>
                    <th className="py-3 px-4 text-left text-gray-700 font-semibold">Message</th>
                    <th className="py-3 px-4 text-left text-gray-700 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {enquiries.map((enquiry, index) => (
                    <tr key={enquiry._id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 text-gray-800">{enquiry.name}</td>
                      <td className="py-3 px-4 text-gray-800">
                        <a href={`mailto:${enquiry.email}`} className="text-indigo-600 hover:underline">
                          {enquiry.email}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-gray-800">{enquiry.subject || 'No subject'}</td>
                      <td className="py-3 px-4 text-gray-800 max-w-xs truncate">{enquiry.message}</td>
                      <td className="py-3 px-4 text-gray-800">
                        {new Date(enquiry.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashEnquiry;