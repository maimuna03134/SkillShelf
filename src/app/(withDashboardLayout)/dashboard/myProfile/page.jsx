'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { User as UserIcon } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || session.user.email?.split('@')[0] || '',
        email: session.user.email || '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }
  }, [session]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setMessage('Profile updated successfully!');
    setIsEditing(false);
    setLoading(false);
    
    setTimeout(() => setMessage(''), 3000);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage('New passwords do not match!');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    if (formData.newPassword.length < 6) {
      setMessage('Password must be at least 6 characters long');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setMessage('Password changed successfully!');
    setFormData({
      ...formData,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setLoading(false);
    
    setTimeout(() => setMessage(''), 3000);
  };

  if (status === 'loading') {
    return (
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#17a2b7]"></div>
        </div>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="p-6 lg:p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Access Denied
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Please log in to view your profile.
          </p>
        </div>
      </div>
    );
  }

  const user = session.user;
  const isGoogleUser = session.user.image && !session.user.isMock;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1a1a1a]">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            My Profile
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Manage your account information
          </p>
        </div>

        {/* Message */}
        {message && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
            <p className="text-green-800 dark:text-green-200 text-sm">
              {message}
            </p>
          </div>
        )}

        {/* Read-Only Notice for Mock Users */}
        {user.isMock && (
          <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <strong>Read-Only Mode:</strong> You're using a demo account. Profile changes are simulated and won't be saved.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Summary Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#24292d] rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
              <div className="text-center">
                {isGoogleUser && user.image ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#17a2b7]"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-[#17a2b7] to-[#24292d] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-4xl font-bold">
                      {formData.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {formData.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {user.email}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-[#17a2b7] dark:text-[#17a2b7] rounded-full text-sm font-semibold capitalize">
                    {user.role}
                  </div>
                  {user.isMock && (
                    <div className="inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-[#f7c32f] dark:text-[#f7c32f] rounded-full text-sm font-semibold">
                      Demo Account
                    </div>
                  )}
                  {isGoogleUser && (
                    <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">
                      Google Account
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-3">
                  <Link
                    href="/dashboard"
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-[#17a2b7] dark:hover:text-[#17a2b7] transition-colors"
                  >
                    <UserIcon size={20} className="mr-3" />
                    <span>View Dashboard</span>
                  </Link>
                  {user.role !== 'admin' && (
                    <Link
                      href="/dashboard/myCourse"
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-[#17a2b7] dark:hover:text-[#17a2b7] transition-colors"
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>My Courses</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Edit Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white dark:bg-[#24292d] rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Personal Information
                </h3>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-3 border-2 border-[#17a2b7] text-[#17a2b7] bg-transparent hover:bg-[#f7c32f] hover:border-[#f7c32f] hover:text-[#24292d] dark:text-[#17a2b7] dark:hover:text-[#24292d] rounded-lg transition-all font-medium"
                  >
                    Edit Profile
                  </button>
                )}
              </div>

              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-[#17a2b7] text-gray-900 dark:text-white bg-white dark:bg-[#1a1a1a] disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:cursor-not-allowed transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Email cannot be changed
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    value={user.role}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 cursor-not-allowed capitalize"
                  />
                </div>

                {isEditing && (
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-semibold transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Change Password */}
            {!isGoogleUser && (
              <div className="bg-white dark:bg-[#24292d] rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Change Password
                </h3>

                <form onSubmit={handleChangePassword} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-[#17a2b7] text-gray-900 dark:text-white bg-white dark:bg-[#1a1a1a] transition-all"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-[#17a2b7] text-gray-900 dark:text-white bg-white dark:bg-[#1a1a1a] transition-all"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-[#17a2b7] text-gray-900 dark:text-white bg-white dark:bg-[#1a1a1a] transition-all"
                      placeholder="Confirm new password"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !formData.currentPassword || !formData.newPassword || !formData.confirmPassword}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Changing Password...' : 'Change Password'}
                  </button>
                </form>
              </div>
            )}

            {/* Google Account Notice */}
            {isGoogleUser && (
              <div className="bg-white dark:bg-[#24292d] rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Account Security
                </h3>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    <strong>Google Account:</strong> Your account is secured by Google. Password changes should be made through your Google account settings.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
