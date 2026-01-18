'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function getUserFromCookies() {
  if (typeof document === 'undefined') return null;
  
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {});

  if (cookies.auth === 'true') {
    return {
      email: cookies.userEmail,
      role: cookies.userRole || 'user'
    };
  }
  return null;
}

export default function ManageUsersPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const currentUser = getUserFromCookies();
    if (currentUser?.role !== 'admin') {
      router.push('/dashboard');
    } else {
      setUser(currentUser);
      fetchUsers();
    }
  }, [router]);

  const fetchUsers = () => {
    // Mock users data - in real app, fetch from Express.js API
    const mockUsers = [
      {
        id: 1,
        name: 'Admin User',
        email: 'admin@skillshelf.com',
        role: 'admin',
        enrollmentCount: 0,
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        name: 'Regular User',
        email: 'user@skillshelf.com',
        role: 'user',
        enrollmentCount: 0,
        createdAt: new Date().toISOString()
      }
    ];
    setUsers(mockUsers);
  };

  const handleRoleChange = async (userId, newRole) => {
    // In real app, send to Express.js API
    // await fetch(`http://localhost:5000/api/users/${userId}`, {
    //   method: 'PATCH',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ role: newRole })
    // });

    setUsers(users.map(u => 
      u.id === userId ? { ...u, role: newRole } : u
    ));
    
    setMessage('User role updated successfully');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDeleteUser = async (userId) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    // In real app, send to Express.js API
    // await fetch(`http://localhost:5000/api/users/${userId}`, {
    //   method: 'DELETE'
    // });

    setUsers(users.filter(u => u.id !== userId));
    
    setMessage('User deleted successfully');
    setTimeout(() => setMessage(''), 3000);
  };

  const viewUserDetails = (userId) => {
    const userDetails = users.find(u => u.id === userId);
    setSelectedUser({
      ...userDetails,
      enrollments: [] // Mock empty enrollments
    });
  };

  if (!user) {
    return null;
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Manage Users
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          View and manage all registered users
        </p>
      </div>

      {/* Message */}
      {message && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg">
          {message}
        </div>
      )}

      {/* Users Table */}
      <div className="bg-white dark:bg-[#24292d] rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Enrollments
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#24292d] divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#17a2b7] to-[#24292d] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {u.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {u.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{u.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                      className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent bg-white dark:bg-[#1a1d23] text-gray-900 dark:text-white"
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {u.enrollmentCount} courses
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => viewUserDetails(u.id)}
                      className="text-[#17a2b7] hover:text-[#138a9d]"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDeleteUser(u.id)}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#24292d] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  User Details
                </h2>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Name
                  </label>
                  <p className="text-lg text-gray-900 dark:text-white">
                    {selectedUser.name}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email
                  </label>
                  <p className="text-lg text-gray-900 dark:text-white">
                    {selectedUser.email}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Role
                  </label>
                  <p className="text-lg text-gray-900 dark:text-white capitalize">
                    {selectedUser.role}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Joined
                  </label>
                  <p className="text-lg text-gray-900 dark:text-white">
                    {new Date(selectedUser.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Enrolled Courses ({selectedUser.enrollments?.length || 0})
                </h3>
                {selectedUser.enrollments && selectedUser.enrollments.length > 0 ? (
                  <div className="space-y-3">
                    {selectedUser.enrollments.map((enrollment) => (
                      <div
                        key={enrollment.id}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {enrollment.course?.name}
                          </h4>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {enrollment.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-[#17a2b7] to-[#24292d] h-2 rounded-full"
                            style={{ width: `${enrollment.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          Enrolled: {new Date(enrollment.enrolledAt).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">No enrollments yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
