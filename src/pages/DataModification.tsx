
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import { User, Upload, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';


const DataModification = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
       <Button 
        variant="outline" 
        className="mb-6" 
        onClick={() => navigate('/dashboard')}
        size="sm"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <h1 className="text-3xl font-bold mb-6">Data Modification</h1>
      <p className="text-gray-600 mb-8">Select the type of data modification you would like to perform</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card 
          className="hover:shadow-lg transition-all cursor-pointer"
          onClick={() => navigate('/dashboard/data-modification/student-wise')}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Student-wise Data Modification
            </CardTitle>
            <CardDescription>
              Modify data for individual students by Hostel ID or Roll Number
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Update details for a specific student by entering their Hostel ID or Roll Number.</p>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-all cursor-pointer"
          onClick={() => navigate('/dashboard/data-modification/class-wise')}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Class-wise Data Modification
            </CardTitle>
            <CardDescription>
              Upload an Excel file to modify multiple student records
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Modify student data in bulk by uploading an Excel spreadsheet with updated student information.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataModification;
