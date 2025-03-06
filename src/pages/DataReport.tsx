
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import { FileText, Users, Calendar, ArrowLeft} from 'lucide-react';
import { Button } from '../components/ui/button';


const DataReport = () => {
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
      <h1 className="text-3xl font-bold mb-6">Data Report</h1>
      <p className="text-gray-600 mb-8">Select the type of report you would like to generate</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card 
          className="hover:shadow-lg transition-all cursor-pointer"
          onClick={() => navigate('/dashboard/data-report/student-wise')}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Student-wise Data Report
            </CardTitle>
            <CardDescription>
              Generate reports for individual students
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>View and export detailed reports for specific students.</p>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-all cursor-pointer"
          onClick={() => navigate('/dashboard/data-report/class-wise')}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Class-wise Data Report
            </CardTitle>
            <CardDescription>
              Generate reports by class
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>View and export data reports organized by class.</p>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-all cursor-pointer"
          onClick={() => navigate('/dashboard/data-report/year-wise')}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Year-wise Data Report
            </CardTitle>
            <CardDescription>
              Generate reports by academic year
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>View and export data reports organized by academic year.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataReport;
