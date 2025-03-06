
import React from 'react';
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        <Logo />
        <div className="flex justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
