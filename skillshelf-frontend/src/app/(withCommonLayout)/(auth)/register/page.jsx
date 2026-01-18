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

    try {
      // Register user via backend API
      const response = await fetch('https://skillshelf-backend.vercel.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Success - show message and redirect
        setSuccess('Account created successfully! Redirecting to login...');
        
        // Redirect to login after 2 seconds
        setTimeout(() => {
          router.push('/dashboard');
        }, 2000);
      } else {
        setError(data.error || 'Registration failed. Please try again.');
        setIsLoading(false);
      }
    } catch (err) {
      setError('Could not connect to server. Please make sure the backend is running.');
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
