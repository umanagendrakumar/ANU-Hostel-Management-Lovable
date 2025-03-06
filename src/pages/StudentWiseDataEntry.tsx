
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import { ArrowLeft, Search } from 'lucide-react';

const StudentWiseDataEntry = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim()) {
      toast.error('Please enter a Hostel ID or Roll Number');
      return;
    }
    navigate(`/dashboard/data-entry/student-form/${studentId}`);
  };

  return (
    <div className="container mx-auto p-4 md:p-6 animate-fadeIn">
      <Button 
        variant="outline" 
        className="mb-6" 
        onClick={() => navigate('/dashboard/data-entry')}
        size="sm"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      
      <Card className="max-w-xl mx-auto shadow-md hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl md:text-2xl">Student-wise Data Entry</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="studentId" className="text-sm font-medium">
                Enter Hostel ID or Roll Number
              </label>
              <div className="flex gap-2">
                <Input
                  id="studentId"
                  placeholder="Enter ID or Roll Number"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" variant="outline">
                  <Search className="mr-2 h-4 w-4" /> Find
                </Button>
              </div>
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full">
                Proceed to Student Form
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentWiseDataEntry;
