
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Wallet, CreditCard } from 'lucide-react';

const FeePayment = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Fee Payment</h1>
      <p className="text-gray-600 mb-8">Select the type of fee payment you would like to perform</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card 
          className="hover:shadow-lg transition-all cursor-pointer"
          onClick={() => navigate('/dashboard/fee-payment/hostel-admission')}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Hostel Admission Fee
            </CardTitle>
            <CardDescription>
              Manage hostel admission fees
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Process and track hostel admission fees for students.</p>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-all cursor-pointer"
          onClick={() => navigate('/dashboard/fee-payment/mess-due')}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Mess Due Fee
            </CardTitle>
            <CardDescription>
              Manage mess due payments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Process and track mess due payments for hostel residents.</p>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-all cursor-pointer"
          onClick={() => navigate('/dashboard/fee-payment/other-fees')}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Other Fees
            </CardTitle>
            <CardDescription>
              Manage miscellaneous fees
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Process and track other miscellaneous fees for hostel residents.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeePayment;
