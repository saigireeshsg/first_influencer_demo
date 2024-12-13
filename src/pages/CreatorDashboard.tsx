import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  BarChart3, 
  MessageSquare, 
  Search,
  Bell,
  Settings,
  LogOut,
  TrendingUp,
  Users,
  DollarSign
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function CreatorDashboard() {
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
          <h2 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Creator Dashboard
          </h2>
        </div>
        <nav className="mt-6">
          {[
            { icon: Briefcase, label: 'Opportunities', active: true },
            { icon: BarChart3, label: 'Performance' },
            { icon: MessageSquare, label: 'Messages' },
            { icon: Settings, label: 'Settings' },
          ].map((item) => (
            <motion.button
              key={item.label}
              className={`w-full flex items-center px-6 py-3 space-x-3 ${
                item.active 
                  ? 'bg-pink-50 text-pink-600 border-r-4 border-pink-600' 
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
            <p className="text-gray-600">Here's how your content is performing</p>
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
              className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-pink-600 font-medium">JD</span>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: TrendingUp, label: 'Engagement Rate', value: '5.2%', trend: '+0.8%' },
            { icon: Users, label: 'Total Followers', value: '125K', trend: '+2.3K' },
            { icon: DollarSign, label: 'Campaign Earnings', value: '$12,450', trend: '+15.2%' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-xl shadow-sm p-6"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
                  <stat.icon className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-gray-600 font-medium">{stat.label}</h3>
              </div>
              <div className="flex items-end space-x-2">
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-sm text-green-500 font-medium">{stat.trend}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Campaigns */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Campaigns</h2>
          <div className="space-y-4">
            {[
              { brand: 'Nike', campaign: 'Summer Collection', deadline: '3 days left', value: '$2,500' },
              { brand: 'Sephora', campaign: 'Beauty Launch', deadline: '1 week left', value: '$1,800' },
              { brand: 'Gymshark', campaign: 'Fitness Challenge', deadline: '5 days left', value: '$3,000' },
            ].map((campaign) => (
              <motion.div
                key={campaign.brand}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50"
                whileHover={{ x: 4 }}
              >
                <div>
                  <h3 className="font-medium text-gray-900">{campaign.brand}</h3>
                  <p className="text-sm text-gray-600">{campaign.campaign}</p>
                </div>
                <div className="text-right">
                  <p className="text-pink-600 font-medium">{campaign.value}</p>
                  <p className="text-sm text-gray-500">{campaign.deadline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Opportunities */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">New Opportunities</h2>
          <div className="space-y-4">
            {[
              { brand: 'Adidas', type: 'Sports & Fitness', match: '95%' },
              { brand: 'L\'Oreal', type: 'Beauty & Skincare', match: '88%' },
              { brand: 'Samsung', type: 'Technology', match: '82%' },
            ].map((opportunity) => (
              <motion.div
                key={opportunity.brand}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50"
                whileHover={{ x: 4 }}
              >
                <div>
                  <h3 className="font-medium text-gray-900">{opportunity.brand}</h3>
                  <p className="text-sm text-gray-600">{opportunity.type}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-green-600">{opportunity.match} match</span>
                  <motion.button
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}