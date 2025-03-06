
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <Card className="w-full max-w-md p-6 space-y-6 animate-fadeIn bg-white shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="username" className="text-sm font-medium text-gray-700">
            Username
          </label>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            required
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
