
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import { User, Upload, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const DataEntry = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 md:p-6 animate-fadeIn">
      <Button 
        variant="outline" 
        className="mb-6" 
        onClick={() => navigate('/dashboard')}
        size="sm"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Data Entry</h1>
      <p className="text-gray-600 mb-6 md:mb-8">Select the type of data entry you would like to perform</p>
      
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <Card 
          className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          onClick={() => navigate('/dashboard/data-entry/student-wise')}
        >
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="bg-primary/10 p-2 rounded-full">
                <User className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl">Student-wise Data Entry</CardTitle>
            </div>
            <CardDescription>
              Enter data for individual students by Hostel ID or Roll Number
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base">Add or update details for a specific student by entering their Hostel ID or Roll Number.</p>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          onClick={() => navigate('/dashboard/data-entry/class-wise')}
        >
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="bg-primary/10 p-2 rounded-full">
                <Upload className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl">Class-wise Data Entry</CardTitle>
            </div>
            <CardDescription>
              Upload an Excel file containing multiple student records
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base">Import student data in bulk by uploading an Excel spreadsheet with student information.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataEntry;
