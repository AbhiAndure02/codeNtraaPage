import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

const DashSettings = () => {
  const {currentUser} = useSelector((state) => state.user)

  // State for various settings
  const [profile, setProfile] = useState({
    name: currentUser.name,
    email: currentUser.email,
    avatar: ''
  });
  
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    newsletter: true
  });
  
  const [security, setSecurity] = useState({
    twoFactor: false,
    password: ''
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({ ...prev, [name]: checked }));
  };

  const handleSecurityChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSecurity(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Settings saved:', { profile, notifications, security });
    alert('Settings saved successfully!');
  };

  return (
    <div className="flex h-screen">
      <Sidebar variant="default" />
      <div className="flex-1 overflow-auto">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Settings</h1>
          
          <form onSubmit={handleSubmit}>
            {/* Profile Settings */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Profile Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Profile Picture</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProfile({...profile, avatar: e.target.files[0]})}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Notification Settings */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Notification Preferences</h2>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="email"
                    checked={notifications.email}
                    onChange={handleNotificationChange}
                    className="form-checkbox h-5 w-5 text-indigo-600 rounded"
                  />
                  <span className="text-gray-700">Email Notifications</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="push"
                    checked={notifications.push}
                    onChange={handleNotificationChange}
                    className="form-checkbox h-5 w-5 text-indigo-600 rounded"
                  />
                  <span className="text-gray-700">Push Notifications</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={notifications.newsletter}
                    onChange={handleNotificationChange}
                    className="form-checkbox h-5 w-5 text-indigo-600 rounded"
                  />
                  <span className="text-gray-700">Monthly Newsletter</span>
                </label>
              </div>
            </div>
            
            {/* Security Settings */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Security Settings</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="twoFactor"
                    checked={security.twoFactor}
                    onChange={handleSecurityChange}
                    className="form-checkbox h-5 w-5 text-indigo-600 rounded"
                  />
                  <span className="text-gray-700">Enable Two-Factor Authentication</span>
                </label>
                <div>
                  <label className="block text-gray-700 mb-2">Change Password</label>
                  <input
                    type="password"
                    name="password"
                    value={security.password}
                    onChange={handleSecurityChange}
                    placeholder="Enter new password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            
            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Save Settings
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashSettings;