
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const ConstructionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract the page name from the URL path
  const pathSegments = location.pathname.split('/');
  const pageName = pathSegments[pathSegments.length - 1]
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Determine the parent page to navigate back to
  const parentPath = location.pathname.split('/').slice(0, -1).join('/');

  return (
    <div className="container mx-auto p-6">
      <Button 
        variant="outline" 
        className="mb-6" 
        onClick={() => navigate(parentPath)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      
      <Card className="max-w-2xl mx-auto">
        <CardContent className="flex flex-col items-center justify-center p-12">
          <AlertTriangle className="h-24 w-24 text-yellow-500 mb-6" />
          <h2 className="text-2xl font-bold text-center mb-2">
            {pageName} Page Under Construction
          </h2>
          <p className="text-gray-600 text-center mb-6">
            We're currently working on this feature. Please check back later.
          </p>
          <Button 
            onClick={() => navigate(parentPath)}
            className="mt-4"
          >
            Return to Previous Page
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConstructionPage;
