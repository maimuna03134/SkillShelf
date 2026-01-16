'use client';

import RegisterForm from '@/components/form/RegisterForm';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear messages when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  const validateForm = () => {
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    // Check password length
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    // Check phone format (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid phone number');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      // Mock registration - In real app, this would be an API call
      // Check if user already exists (mock check)
      const existingUsers = ['admin@skillshelf.com', 'user@skillshelf.com'];
      
      if (existingUsers.includes(formData.email)) {
        setError('An account with this email already exists');
        setIsLoading(false);
        return;
      }

      // Success - show message and redirect
      setSuccess('Account created successfully! Redirecting to login...');
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/login');
      }, 2000);

    } catch (err) {
      setError('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <RegisterForm
      formData={formData}
      error={error}
      success={success}
      isLoading={isLoading}
      showPassword={showPassword}
      showConfirmPassword={showConfirmPassword}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onTogglePassword={handleTogglePassword}
      onToggleConfirmPassword={handleToggleConfirmPassword}
    />
  );
}
