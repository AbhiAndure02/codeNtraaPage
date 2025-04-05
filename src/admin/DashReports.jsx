import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { 
  FiDownload, FiFilter, FiPrinter, FiBarChart2, 
  FiPieChart, FiTrendingUp, FiCalendar 
} from 'react-icons/fi';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell, AreaChart, Area 
} from 'recharts';

const DashReports = () => {
  // Report data
  const [activeTab, setActiveTab] = useState('sales');
  const [dateRange, setDateRange] = useState('monthly');

  // Sample data - replace with API data
  const salesData = [
    { name: 'Jan', sales: 4000, returns: 2400 },
    { name: 'Feb', sales: 3000, returns: 1398 },
    { name: 'Mar', sales: 2000, returns: 9800 },
    { name: 'Apr', sales: 2780, returns: 3908 },
    { name: 'May', sales: 1890, returns: 4800 },
    { name: 'Jun', sales: 2390, returns: 3800 },
  ];

  const userData = [
    { name: 'New Users', value: 45 },
    { name: 'Returning', value: 30 },
    { name: 'Inactive', value: 25 },
  ];

  const productData = [
    { product: 'Product A', sales: 2400, stock: 120 },
    { product: 'Product B', sales: 1398, stock: 80 },
    { product: 'Product C', sales: 9800, stock: 200 },
    { product: 'Product D', sales: 3908, stock: 50 },
    { product: 'Product E', sales: 4800, stock: 150 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  // Report types
  const reportTabs = [
    { id: 'sales', name: 'Sales Report' },
    { id: 'users', name: 'User Analytics' },
    { id: 'products', name: 'Product Performance' },
    { id: 'financial', name: 'Financial Summary' },
  ];

  // Date range options
  const rangeOptions = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'yearly', label: 'Yearly' },
    { value: 'custom', label: 'Custom Range' },
  ];

  // Export functions
  const exportPDF = () => {
    console.log('Exporting to PDF...');
    // Implement PDF export logic
  };

  const exportCSV = () => {
    console.log('Exporting to CSV...');
    // Implement CSV export logic
  };

  const printReport = () => {
    console.log('Printing report...');
    // Implement print logic
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar variant="default" />
      <div className="flex-1 overflow-auto">
        <div className="p-6 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Reports Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button 
                onClick={exportPDF}
                className="flex items-center space-x-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50"
              >
                <FiDownload size={18} />
                <span>Export PDF</span>
              </button>
              <button 
                onClick={exportCSV}
                className="flex items-center space-x-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50"
              >
                <FiDownload size={18} />
                <span>Export CSV</span>
              </button>
              <button 
                onClick={printReport}
                className="flex items-center space-x-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50"
              >
                <FiPrinter size={18} />
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                {reportTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg ${activeTab === tab.id ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <FiCalendar className="text-gray-500" />
                  <select 
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    {rangeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
                  <FiFilter size={18} />
                  <span>More Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Report Content */}
          <div className="space-y-6">
            {activeTab === 'sales' && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Sales Trend Chart */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold text-gray-800">Sales Trend</h2>
                      <FiTrendingUp className="text-green-500" />
                    </div>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={salesData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="sales" stroke="#4F46E5" fill="#818CF8" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Sales vs Returns */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold text-gray-800">Sales vs Returns</h2>
                      <FiBarChart2 className="text-blue-500" />
                    </div>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={salesData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="sales" fill="#4F46E5" />
                          <Bar dataKey="returns" fill="#F59E0B" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Sales Data Table */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800">Sales Data</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Returns</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {salesData.map((item, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.sales.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.returns.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${(item.sales - item.returns).toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className={`px-2 py-1 rounded-full text-xs ${index > 0 && item.sales > salesData[index-1].sales ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {index > 0 ? `${Math.round(((item.sales - salesData[index-1].sales) / salesData[index-1].sales) * 100)}%` : 'N/A'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'users' && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* User Growth Chart */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold text-gray-800">User Growth</h2>
                      <FiTrendingUp className="text-green-500" />
                    </div>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData}> {/* Replace with actual user growth data */}
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="sales" stroke="#4F46E5" /> {/* Replace with user count */}
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* User Distribution */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold text-gray-800">User Distribution</h2>
                      <FiPieChart className="text-blue-500" />
                    </div>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={userData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {userData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'products' && (
              <>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Product Performance</h2>
                    <FiBarChart2 className="text-blue-500" />
                  </div>
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={productData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis type="number" />
                        <YAxis dataKey="product" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="#4F46E5" name="Sales Volume" />
                        <Bar dataKey="stock" fill="#F59E0B" name="Current Stock" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Product Data Table */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800">Product Details</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales/Stock Ratio</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {productData.map((item, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.product}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.sales.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stock}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {(item.sales / item.stock).toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                item.sales / item.stock > 20 ? 'bg-green-100 text-green-800' : 
                                item.sales / item.stock > 10 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {item.sales / item.stock > 20 ? 'High Demand' : 
                                 item.sales / item.stock > 10 ? 'Medium Demand' : 'Low Demand'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'financial' && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Financial Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-blue-800 mb-1">Total Revenue</h3>
                    <p className="text-2xl font-bold text-blue-900">$124,568</p>
                    <p className="text-sm text-blue-600 mt-1">+12% from last period</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-green-800 mb-1">Gross Profit</h3>
                    <p className="text-2xl font-bold text-green-900">$89,245</p>
                    <p className="text-sm text-green-600 mt-1">+8% from last period</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-purple-800 mb-1">Operating Expenses</h3>
                    <p className="text-2xl font-bold text-purple-900">$35,323</p>
                    <p className="text-sm text-purple-600 mt-1">-2% from last period</p>
                  </div>
                </div>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={salesData}> {/* Replace with financial data */}
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="sales" stroke="#4F46E5" name="Revenue" />
                      <Line type="monotone" dataKey="returns" stroke="#F59E0B" name="Expenses" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashReports;