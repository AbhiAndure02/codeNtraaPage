import React, { useState, useEffect } from 'react';
import { FiPlus, FiCheck, FiClock, FiAlertCircle, FiEdit2, FiTrash2, FiX, FiSave } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DashActivity = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  
  const [activities, setActivities] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState(null);
  const [newActivity, setNewActivity] = useState({
    activity: '',
    projectId: '',
    userId: currentUser._id,
    status: 'pending'
  });

  // Fetch activities, projects, and users from API
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('Please login first');
      navigate('/admin/auth/login');
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch activities
        const activitiesResponse = await axios.get('/api/activity', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        // Fetch projects
        const projectsResponse = await axios.get('/api/project', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        // Fetch users
        const usersResponse = await axios.get('/api/auth/getmember', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setActivities(activitiesResponse.data || []);
        setProjects(projectsResponse.data.data || []);
        setUsers(usersResponse.data.data || []);
        setError('');
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity(prev => ({ ...prev, [name]: value }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingActivity(prev => ({ ...prev, [name]: value }));
  };

  const addActivity = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('Please login first');
      navigate('/admin/auth/login');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('/api/activity', newActivity, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setActivities([...activities, response.data]);
      setIsAddModalOpen(false);
      setNewActivity({
        activity: '',
        projectId: '',
        userId: currentUser._id,
        status: 'pending'
      });
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add activity');
    } finally {
      setLoading(false);
    }
  };

  const openEditModal = (activity) => {
    setEditingActivity({ ...activity });
    setIsEditModalOpen(true);
  };

  const updateActivity = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('Please login first');
      navigate('/admin/auth/login');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.put(`/api/activity/${editingActivity._id}`, editingActivity, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setActivities(activities.map(activity => 
        activity._id === editingActivity._id ? response.data : activity
      ));
      setIsEditModalOpen(false);
      setEditingActivity(null);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update activity');
    } finally {
      setLoading(false);
    }
  };

  const deleteActivity = async (id) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('Please login first');
      navigate('/admin/auth/login');
      return;
    }

    try {
      setLoading(true);
      await axios.delete(`/api/activity/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setActivities(activities.filter(activity => activity._id !== id));
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete activity');
    } finally {
      setLoading(false);
    }
  };

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: <FiClock className="mr-1" /> },
      'In Progress': { color: 'bg-blue-100 text-blue-800', icon: <FiAlertCircle className="mr-1" /> },
      completed: { color: 'bg-green-100 text-green-800', icon: <FiCheck className="mr-1" /> },
      'In Progress': { color: 'bg-blue-100 text-blue-800', icon: <FiAlertCircle className="mr-1" /> }
    };

    const config = statusConfig[status] || statusConfig.pending;
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.icon}
        {status}
      </span>
    );
  };

  const getProjectName = (projectId) => {
    if (!projectId) return 'No Project';
    const project = projects.find(p => p._id === projectId);
    return project ? project.name : projectId; // Return projectId if project not found
  };

  const getUserName = (userId) => {
    if (!userId) return 'Unknown User';
    const user = users.find(u => u._id === userId);
    return user ? user.name : userId; // Return userId if user not found
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="flex-1 overflow-auto p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Activity Management</h1>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
            >
              <FiPlus className="mr-2" />
              Add Activity
            </button>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg flex items-center">
              <FiAlertCircle className="mr-2" />
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : activities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No activities found. Add a new activity to get started.</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {activities.map(activity => (
                      <tr key={activity._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {activity.activity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {getProjectName(activity.projectId)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {getUserName(activity.userId)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {formatDate(activity.timestamp)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={activity.status} />
                        </td>

                        {
                          currentUser._id === activity.userId && (
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button 
                            onClick={() => openEditModal(activity)}
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                          >
                            <FiEdit2 />
                          </button>
                          <button 
                            onClick={() => deleteActivity(activity._id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FiTrash2 />
                          </button>
                        </td>
                        )}
                  
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Add Activity Modal */}
          <AnimatePresence>
            {isAddModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Add New Activity</h2>
                    <button onClick={() => setIsAddModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                      <FiX size={20} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Activity</label>
                      <input
                        type="text"
                        name="activity"
                        value={newActivity.activity}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                      <select
                        name="projectId"
                        value={newActivity.projectId}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="">Select Project</option>
                        {projects.map(project => (
                          <option key={project._id} value={project._id}>{project.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        name="status"
                        value={newActivity.status}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsAddModalOpen(false)}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={addActivity}
                      disabled={loading}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Adding...
                        </>
                      ) : (
                        <>
                          <FiPlus className="mr-2" />
                          Add Activity
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Edit Activity Modal */}
          <AnimatePresence>
            {isEditModalOpen && editingActivity && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Edit Activity</h2>
                    <button onClick={() => setIsEditModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                      <FiX size={20} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Activity</label>
                      <input
                        type="text"
                        name="activity"
                        value={editingActivity.activity}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                      <select
                        name="projectId"
                        value={editingActivity.projectId}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="">Select Project</option>
                        {projects.map(project => (
                          <option key={project._id} value={project._id}>{project.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        name="status"
                        value={editingActivity.status}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsEditModalOpen(false)}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={updateActivity}
                      disabled={loading}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </>
                      ) : (
                        <>
                          <FiSave className="mr-2" />
                          Save Changes
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default DashActivity;