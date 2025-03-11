import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import { ArrowLeft, Search } from 'lucide-react';

const MessDueFee = () => {
  const navigate = useNavigate();
  const [hostelId, setHostelId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hostelId.trim()) {
      toast.error('Please enter a Hostel ID');
      return;
    }
    navigate(`/dashboard/fee-payment/mess-due/details/${hostelId}`);
  };

  return (
    <div className="container mx-auto p-4 md:p-6 animate-fadeIn">
      <Button 
        variant="outline" 
        className="mb-6" 
        onClick={() => navigate('/dashboard/fee-payment')}
        size="sm"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>
      
      <Card className="max-w-xl mx-auto shadow-md hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl md:text-2xl">Mess Due Fee Payment</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="hostelId" className="text-sm font-medium">
                Enter Hostel ID
              </label>
              <div className="flex gap-2">
                <Input
                  id="hostelId"
                  placeholder="Enter Hostel ID"
                  value={hostelId}
                  onChange={(e) => setHostelId(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full">
                Proceed to Fee Details
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessDueFee;
