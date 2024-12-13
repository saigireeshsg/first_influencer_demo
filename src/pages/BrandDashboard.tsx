import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BarChart3, 
  MessageSquare, 
  Search,
  Bell,
  Settings,
  LogOut
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function BrandDashboard() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
      navigate('/auth');
    } catch (error: any) {
      toast.error('Error signing out');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <motion.div 
        className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-lg"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
            Brand Dashboard
          </h2>
        </div>
        <nav className="mt-6">
          {[
            { icon: Users, label: 'Creators', active: true },
            { icon: BarChart3, label: 'Analytics' },
            { icon: MessageSquare, label: 'Messages' },
            { icon: Settings, label: 'Settings' },
          ].map((item, index) => (
            <motion.button
              key={item.label}
              className={`w-full flex items-center px-6 py-3 space-x-3 ${
                item.active 
                  ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              whileHover={{ x: 5 }}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
          <motion.button
            onClick={handleSignOut}
            className="w-full flex items-center px-6 py-3 space-x-3 text-gray-600 hover:bg-gray-50 mt-auto"
            whileHover={{ x: 5 }}
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </motion.button>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
            <p className="text-gray-600">Here's what's happening with your campaigns</p>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-5 h-5" />
            </motion.button>
            <motion.div
              className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-indigo-600 font-medium">BP</span>
            </motion.div>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search creators..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Active Campaigns', value: '12', trend: '+2.5%' },
            { label: 'Total Reach', value: '1.2M', trend: '+12.3%' },
            { label: 'Engagement Rate', value: '4.8%', trend: '+0.8%' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-xl shadow-sm p-6"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-gray-600 font-medium">{stat.label}</h3>
              <div className="flex items-end space-x-2 mt-2">
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-sm text-green-500 font-medium">{stat.trend}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Campaigns */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Campaigns</h2>
          <div className="space-y-4">
            {[
              { name: 'Summer Collection Launch', status: 'Active', creators: 8 },
              { name: 'Holiday Special', status: 'Draft', creators: 12 },
              { name: 'Brand Awareness', status: 'Completed', creators: 6 },
            ].map((campaign) => (
              <motion.div
                key={campaign.name}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50"
                whileHover={{ x: 4 }}
              >
                <div>
                  <h3 className="font-medium text-gray-900">{campaign.name}</h3>
                  <p className="text-sm text-gray-600">{campaign.creators} creators</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                  campaign.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {campaign.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}