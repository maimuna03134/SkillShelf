'use client';

import LoginForm from '@/components/form/LoginForm';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Mock credentials
const MOCK_CREDENTIALS = {
  admin: {
    email: 'admin@skillshelf.com',
    password: 'admin123',
    role: 'admin'
  },
  user: {
    email: 'user@skillshelf.com',
    password: 'user123',
    role: 'user'
  }
};

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check credentials
    const user = Object.values(MOCK_CREDENTIALS).find(
      cred => cred.email === formData.email && cred.password === formData.password
    );

    if (user) {
      // Set cookies
      document.cookie = "auth=true; path=/; max-age=86400"; // 24 hours
      document.cookie = `userEmail=${user.email}; path=/; max-age=86400`;
      document.cookie = `userRole=${user.role}; path=/; max-age=86400`;
      
      // Redirect to dashboard
      router.push('/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
      setIsLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginForm
      formData={formData}
      error={error}
      isLoading={isLoading}
      showPassword={showPassword}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onTogglePassword={handleTogglePassword}
    />
  );
}
