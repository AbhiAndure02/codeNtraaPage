import React from 'react';
import Sidebar from './Sidebar';
import { 
  FiActivity, FiUsers, FiDollarSign, FiCalendar, 
  FiFileText, FiSettings, FiBarChart2, FiTrendingUp 
} from 'react-icons/fi';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';

const DashboardPage = () => {
  // Sample data - replace with real data from your API
  const stats = [
    { title: "Total Visitors", value: "1,254", change: "+12%", icon: <FiUsers className="text-blue-500" size={24} /> },
    { title: "Total Revenue", value: "$8,542", change: "+8%", icon: <FiDollarSign className="text-green-500" size={24} /> },
    { title: "Active Projects", value: "24", change: "+4", icon: <FiActivity className="text-purple-500" size={24} /> },
    { title: "Pending Tasks", value: "7", change: "-2", icon: <FiFileText className="text-orange-500" size={24} /> }
  ];

  const recentActivities = [
    { id: 1, user: "Abhishek Andure", action: "created a new project", time: "2 mins ago" },
    { id: 2, user: "Neha Jadhav", action: "updated the dashboard", time: "15 mins ago" },
    { id: 3, user: "Amar Ambure", action: "completed task #245", time: "1 hour ago" },
    { id: 4, user: "Shushama  kalagapure", action: "uploaded new files", time: "3 hours ago" },
    { id: 5, user: "Shubham akare", action: "commented on project", time: "5 hours ago" }
  ];

  const quickActions = [
    { title: "Create Project", icon: <FiFileText size={20} />, color: "bg-blue-100 text-blue-600" },
    { title: "Add User", icon: <FiUsers size={20} />, color: "bg-green-100 text-green-600" },
    { title: "Generate Report", icon: <FiActivity size={20} />, color: "bg-purple-100 text-purple-600" },
    { title: "Schedule Event", icon: <FiCalendar size={20} />, color: "bg-orange-100 text-orange-600" }
  ];

  // Chart data
  const revenueData = [
    { name: 'Jan', revenue: 4000, profit: 2400 },
    { name: 'Feb', revenue: 3000, profit: 1398 },
    { name: 'Mar', revenue: 2000, profit: 9800 },
    { name: 'Apr', revenue: 2780, profit: 3908 },
    { name: 'May', revenue: 1890, profit: 4800 },
    { name: 'Jun', revenue: 2390, profit: 3800 },
    { name: 'Jul', revenue: 3490, profit: 4300 },
  ];

  const projectProgressData = [
    { name: 'Website Redesign', progress: 75 },
    { name: 'Mobile App', progress: 45 },
    { name: 'Dashboard UI', progress: 90 },
    { name: 'API Development', progress: 30 },
    { name: 'Database Migration', progress: 60 },
  ];

  const pieData = [
    { name: 'Completed', value: 45 },
    { name: 'In Progress', value: 30 },
    { name: 'Pending', value: 15 },
    { name: 'On Hold', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Gantt chart data
  const ganttData = [
    {
      task: 'Project Research',
      start: new Date(2023, 0, 1),
      end: new Date(2023, 0, 15),
      color: '#4F46E5'
    },
    {
      task: 'UI Design',
      start: new Date(2023, 0, 10),
      end: new Date(2023, 0, 25),
      color: '#10B981'
    },
    {
      task: 'Development',
      start: new Date(2023, 0, 20),
      end: new Date(2023, 1, 10),
      color: '#F59E0B'
    },
    {
      task: 'Testing',
      start: new Date(2023, 1, 5),
      end: new Date(2023, 1, 20),
      color: '#EF4444'
    },
    {
      task: 'Deployment',
      start: new Date(2023, 1, 15),
      end: new Date(2023, 1, 28),
      color: '#8B5CF6'
    }
  ];

  // Simple Gantt chart component
  const GanttChart = ({ data }) => {
    const minDate = new Date(Math.min(...data.map(item => item.start)));
    const maxDate = new Date(Math.max(...data.map(item => item.end)));
    const totalDays = (maxDate - minDate) / (1000 * 60 * 60 * 24);
    
    return (
      <div className="mt-4">
        {data.map((item, index) => {
          const startDay = (item.start - minDate) / (1000 * 60 * 60 * 24);
          const duration = (item.end - item.start) / (1000 * 60 * 60 * 24);
          const widthPercent = (duration / totalDays) * 100;
          const leftPercent = (startDay / totalDays) * 100;
          
          return (
            <div key={index} className="mb-2">
              <div className="text-sm mb-1">{item.task}</div>
              <div className="relative h-6 bg-gray-200 rounded overflow-hidden">
                <div 
                  className="absolute h-full rounded"
                  style={{
                    left: `${leftPercent}%`,
                    width: `${widthPercent}%`,
                    backgroundColor: item.color
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar variant="default" />
      <div className="flex-1 overflow-auto">
        <div className="p-6 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
                <FiCalendar className="text-gray-600" />
                <span>Last 30 Days</span>
              </button>
              <button className="p-2 bg-white border rounded-lg hover:bg-gray-50">
                <FiSettings className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                    <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change} from last week
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-opacity-20 bg-gray-200">
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Revenue Overview</h2>
                <FiTrendingUp className="text-green-500" />
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#4F46E5" fill="#818CF8" />
                    <Area type="monotone" dataKey="profit" stroke="#10B981" fill="#6EE7B7" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Project Progress Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Project Progress</h2>
                <FiBarChart2 className="text-blue-500" />
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={projectProgressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="progress" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                      {activity.user.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        <span className="font-semibold">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gantt Chart Section */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Project Timeline</h2>
                <GanttChart data={ganttData} />
              </div>
            </div>

            {/* Quick Actions and Pie Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg ${action.color} hover:opacity-90 transition-opacity`}
                  >
                    <div className="mb-2">{action.icon}</div>
                    <span className="text-sm font-medium">{action.title}</span>
                  </button>
                ))}
              </div>

              {/* Tasks Distribution Pie Chart */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Tasks Distribution</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Upcoming Events</h2>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="flex-shrink-0 mr-3 text-blue-600">
                      <FiCalendar size={18} />
                    </div>
                    <a href="https://meet.google.com/utc-qsec-jro" className="flex flex-col">
                      <p className="text-sm font-medium">Team Meeting</p>
                      <p className="text-xs text-gray-500">Daily Metting</p>
                    </a>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <div className="flex-shrink-0 mr-3 text-purple-600">
                      <FiCalendar size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Project Deadline</p>
                      <p className="text-xs text-gray-500">Tomorrow, 11:59 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;