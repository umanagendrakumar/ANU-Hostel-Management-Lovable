
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { Button } from '../components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8 text-center animate-fadeIn">
        <Logo />
        <h1 className="text-5xl font-extrabold text-black-800 mt-8">
        ANUCET
        </h1>
        <p className="text-lg text-gray-600 mt-4">
        Welcome to the next generation Engineering Hostel Management System. Streamlined operations, enhanced efficiency, and better student experience.
        </p>
        <Button
          onClick={() => navigate('/login')}
          className="mt-8 px-8 py-6 text-lg"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Index;
