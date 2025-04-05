import React, { useState, useEffect } from 'react';
import { FiPlus, FiCheck, FiClock, FiAlertCircle, FiEdit2, FiTrash2, FiX, FiSave } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProjectStart, addProjectSucess, deleteProjectStart, deleteProjectSuccess, getProjectFailure, getProjectStart, getProjectSuccess, updateProjectStart, updateProjectSuccess } from '../redux/project/projectSlice';

const DashProject = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    status: 'pending',
    deadline: '',
    createdBy: currentUser._id
  });

  // Fetch projects from API
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('Please login first');
      navigate('/login');
      return;
    }

    const fetchProjects = async () => {
      try {
        dispatch(getProjectStart)
        setLoading(true);
        const response = await axios.get('/api/project', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProjects(response.data.data || []);
        dispatch(getProjectSuccess(response.data.data));
        setError('');
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch projects');
        dispatch(getProjectFailure(response.data.data))
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProject(prev => ({ ...prev, [name]: value }));
  };

  const addProject = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('Please login first');
      navigate('/admin/auth/login');
      return;
    }

    try {
      setLoading(true);
      dispatch(addProjectStart)
      const response = await axios.post('/api/project', newProject, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProjects([...projects, response.data]);
      setIsAddModalOpen(false);
      setNewProject({
        name: '',
        description: '',
        status: 'pending',
        deadline: '',
        createdBy: currentUser._id
      });
      dispatch(addProjectSucess)
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add project');
      dispatch(getProjectFailure(response.data.data))
    } finally {
      setLoading(false);
    }
  };

  const openEditModal = (project) => {
    setEditingProject({ ...project });
    setIsEditModalOpen(true);
  };

  const updateProject = async (id) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('Please login first');
      navigate('/login');
      return;
    }

    try {
      setLoading(true);
      dispatch(updateProjectStart)
      const response = await axios.put(`/api/project/${editingProject._id}`, editingProject, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProjects(projects.map(project => 
        project._id === editingProject._id ? response.data : project
      ));
      setIsEditModalOpen(false);
      setEditingProject(null);
      dispatch(updateProjectSuccess(project));
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update project');
      dispatch(getProjectFailure(response.data.data))
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    const token = localStorage.getItem('authToken');
    dispatch(deleteProjectStart)
    setLoading(true);
    setError('');
    if (!token) {
      setError('Please login first');
      navigate('/login');
      return;
    }

    try {
      setLoading(true);
      await axios.delete(`/api/project/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProjects(projects.filter(project => project._id !== id));
      setError('');
      dispatch(deleteProjectSuccess)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete project');
      dispatch(getProjectFailure(response.data.data))
    } finally {
      setLoading(false);
    }
  };

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: <FiClock className="mr-1" /> },
      'in-progress': { color: 'bg-blue-100 text-blue-800', icon: <FiAlertCircle className="mr-1" /> },
      completed: { color: 'bg-green-100 text-green-800', icon: <FiCheck className="mr-1" /> }
    };

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusConfig[status].color}`}>
        {statusConfig[status].icon}
        {status.replace('-', ' ')}
      </span>
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No deadline';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
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
            <h1 className="text-2xl font-bold text-gray-800">Project Management</h1>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
            >
              <FiPlus className="mr-2" />
              Add Project
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
          ) : projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found. Add a new project to get started.</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {projects.map(project => (
                      <tr key={project._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {project.name}
                        </td>
                        <td className="px-6 py-4 text-gray-500 max-w-xs truncate">
                          {project.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={project.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {formatDate(project.deadline)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button 
                            onClick={() => openEditModal(project)}
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                          >
                            <FiEdit2 />
                          </button>
                          <button 
                            onClick={() => deleteProject(project._id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FiTrash2 />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Add Project Modal */}
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
                    <h2 className="text-xl font-bold">Add New Project</h2>
                    <button onClick={() => setIsAddModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                      <FiX size={20} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                      <input
                        type="text"
                        name="name"
                        value={newProject.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        name="description"
                        value={newProject.description}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows="3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        name="status"
                        value={newProject.status}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                      <input
                        type="date"
                        name="deadline"
                        value={newProject.deadline}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
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
                      onClick={addProject}
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
                          Add Project
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Edit Project Modal */}
          <AnimatePresence>
            {isEditModalOpen && editingProject && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Edit Project</h2>
                    <button onClick={() => setIsEditModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                      <FiX size={20} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                      <input
                        type="text"
                        name="name"
                        value={editingProject.name}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        name="description"
                        value={editingProject.description}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows="3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        name="status"
                        value={editingProject.status}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                      <input
                        type="date"
                        name="deadline"
                        value={formatDateForInput(editingProject.deadline)}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
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
                      onClick={updateProject}
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

export default DashProject;