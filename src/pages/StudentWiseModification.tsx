
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import { ArrowLeft, Search } from 'lucide-react';

const StudentWiseModification = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim()) {
      toast.error('Please enter a Hostel ID or Roll Number');
      return;
    }
    navigate(`/dashboard/data-modification/student-form/${studentId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <Button 
        variant="outline" 
        className="mb-6" 
        onClick={() => navigate('/dashboard/data-modification')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Data Modification
      </Button>
      
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Student-wise Data Modification</CardTitle>
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
                {/* <Button type="submit">
                  <Search className="mr-2 h-4 w-4" /> Find
                </Button> */}
              </div>
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full">
                Search Student
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentWiseModification;
