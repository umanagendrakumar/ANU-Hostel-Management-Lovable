import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import { ArrowLeft, Plus, User, GraduationCap, Book } from 'lucide-react';
import { toast } from 'sonner';

interface PaymentHistory {
  amount: number;
  challanNo: string;
  date: string;
}

interface YearlyFeeData {
  totalPaid: number;
  history: PaymentHistory[];
  isUpdateMode: boolean;
}

const HostelAdmissionFeeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [yearlyData, setYearlyData] = useState<Record<string, YearlyFeeData>>({
    '1': { totalPaid: 0, history: [], isUpdateMode: false },
    '2': { totalPaid: 0, history: [], isUpdateMode: false },
    '3': { totalPaid: 0, history: [], isUpdateMode: false },
    '4': { totalPaid: 0, history: [], isUpdateMode: false }
  });

  const [newPayment, setNewPayment] = useState({
    amount: '',
    challanNo: ''
  });

  const studentInfo = {
    name: "John Doe",
    academicYear: "2023-24",
    branch: "Computer Science"
  };

  const handleUpdateMode = (year: string) => {
    setYearlyData(prev => ({
      ...prev,
      [year]: { ...prev[year], isUpdateMode: !prev[year].isUpdateMode }
    }));
    setNewPayment({ amount: '', challanNo: '' });
  };

  const handlePayment = (year: string) => {
    if (!newPayment.amount || !newPayment.challanNo) {
      toast.error('Please fill in all fields');
      return;
    }

    const amount = parseFloat(newPayment.amount);
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    const payment: PaymentHistory = {
      amount,
      challanNo: newPayment.challanNo,
      date: new Date().toLocaleDateString()
    };

    setYearlyData(prev => ({
      ...prev,
      [year]: {
        totalPaid: prev[year].totalPaid + amount,
        history: [...prev[year].history, payment],
        isUpdateMode: false
      }
    }));

    setNewPayment({ amount: '', challanNo: '' });
    toast.success('Payment updated successfully');
  };

  return (
    <div className="container mx-auto p-4 md:p-6 animate-fadeIn">
      <Button 
        variant="outline" 
        className="mb-6" 
        onClick={() => navigate('/dashboard/fee-payment/hostel-admission')}
        size="sm"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span className="font-medium">Name:</span> {studentInfo.name}
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="font-medium">Academic Year:</span> {studentInfo.academicYear}
            </div>
            <div className="flex items-center gap-2">
              <Book className="h-4 w-4 text-primary" />
              <span className="font-medium">Branch:</span> {studentInfo.branch}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(yearlyData).map(([year, data]) => (
          <Card key={year} className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">
                {year}st Year HAF
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold text-primary">
                ₹{data.totalPaid}
              </div>

              {data.isUpdateMode && (
                <div className="space-y-3">
                  <Input
                    type="number"
                    placeholder="Amount"
                    value={newPayment.amount}
                    onChange={(e) => setNewPayment(prev => ({ ...prev, amount: e.target.value }))}
                  />
                  <Input
                    placeholder="Challan No"
                    value={newPayment.challanNo}
                    onChange={(e) => setNewPayment(prev => ({ ...prev, challanNo: e.target.value }))}
                  />
                  <Button 
                    className="w-full"
                    onClick={() => handlePayment(year)}
                  >
                    Pay
                  </Button>
                </div>
              )}

              {data.history.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Payment History</h4>
                  <div className="space-y-2">
                    {data.history.map((payment, index) => (
                      <div key={index} className="text-sm">
                        <p>Amount: ₹{payment.amount}</p>
                        <p>Challan: {payment.challanNo}</p>
                        <p>Date: {payment.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleUpdateMode(year)}
              >
                {data.isUpdateMode ? 'Cancel' : (
                  <>
                    <Plus className="h-4 w-4" />
                    Update Fee
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HostelAdmissionFeeDetails;
