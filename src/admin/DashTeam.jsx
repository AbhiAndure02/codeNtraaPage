import React, { useState, useEffect } from 'react';
import { FiSearch, FiLoader, FiAlertCircle, FiFilter } from 'react-icons/fi';
import axios from 'axios';
import Sidebar from './Sidebar';

const DashTeam = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    count: 0,
    total: 0,
    page: 1,
    pages: 1
  });

  // Fetch team members from backend
  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/auth/getmember', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      
      // Set the team members and pagination data
      setTeamMembers(response.data.data);
      setPagination({
        count: response.data.count,
        total: response.data.total,
        page: response.data.page,
        pages: response.data.pages
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch team members');
      console.error('Error fetching team members:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  // Filter team members based on search term
  const filteredMembers = teamMembers.filter(member => {
    return member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
           member.email.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg flex items-center">
              <FiAlertCircle className="mr-2" />
              {error}
            </div>
          )}

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Team Members</h1>
              <p className="text-sm text-gray-500">
                Showing {filteredMembers.length} of {pagination.total} members
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0">
              <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, email or role..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <FiLoader className="animate-spin text-4xl text-indigo-600" />
            </div>
          )}

          {/* Team Members Table */}
          {!loading && (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredMembers.map((member) => {
                      const joinDate = new Date(member.createdAt).toLocaleDateString();
                      
                      return (
                        <tr key={member._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                <span className="text-indigo-600 font-medium">
                                  {member.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                <div className="text-xs text-gray-500">{member.role}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a href={`mailto:${member.email}`} className="text-indigo-600 hover:underline">
                              {member.email}
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
                              {member.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {joinDate}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <FiFilter size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No team members found</h3>
              <p className="text-gray-500 mt-1">
                {searchTerm ? 'Try a different search term' : 'No members available'}
              </p>
            </div>
          )}

          {/* Pagination (if needed in future) */}
          {/* You can implement pagination controls here using the pagination state */}
        </div>
      </div>
    </div>
  );
};

export default DashTeam;