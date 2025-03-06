
import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Logo from '../components/Logo';
import { 
  FileText, 
  PenSquare, 
  DollarSign, 
  BarChart, 
  LogOut,
  Home
} from 'lucide-react';
import DataEntry from './DataEntry';
import StudentWiseDataEntry from './StudentWiseDataEntry';
import ClassWiseDataEntry from './ClassWiseDataEntry';
import StudentForm from './StudentForm';
import DataModification from './DataModification';
import StudentWiseModification from './StudentWiseModification';
import ClassWiseModification from './ClassWiseModification';
import StudentModificationForm from './StudentModificationForm';
import FeePayment from './FeePayment';
import DataReport from './DataReport';
import ConstructionPage from './ConstructionPage';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { 
      title: 'Data Entry', 
      path: '/dashboard/data-entry',
      icon: FileText 
    },
    { 
      title: 'Data Modification', 
      path: '/dashboard/data-modification',
      icon: PenSquare 
    },
    { 
      title: 'Fee Payment', 
      path: '/dashboard/fee-payment',
      icon: DollarSign 
    },
    { 
      title: 'Data Report', 
      path: '/dashboard/data-report',
      icon: BarChart 
    },
  ];

  // Check if on dashboard home page
  const isHomePage = location.pathname === '/dashboard' || location.pathname === '/dashboard/';

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo />
          <h1 className="text-lg font-semibold hidden md:block">Hostel Management</h1>
        </div>
        
        <div className="flex items-center gap-2">
          {!isHomePage && (
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')} className="transition-all hover:bg-gray-100 rounded-full">
              <Home className="h-5 w-5 text-primary" />
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/')}
            className="transition-all hover:bg-gray-100 rounded-full"
          >
            <LogOut className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-auto">
        {isHomePage ? (
          <DashboardHome navigationItems={navigationItems} navigate={navigate} />
        ) : (
          <Routes>
            <Route path="/" element={<DashboardHome navigationItems={navigationItems} navigate={navigate} />} />
            
            {/* Data Entry Routes */}
            <Route path="data-entry" element={<DataEntry />} />
            <Route path="data-entry/student-wise" element={<StudentWiseDataEntry />} />
            <Route path="data-entry/class-wise" element={<ClassWiseDataEntry />} />
            <Route path="data-entry/student-form/:id" element={<StudentForm />} />
            
            {/* Data Modification Routes */}
            <Route path="data-modification" element={<DataModification />} />
            <Route path="data-modification/student-wise" element={<StudentWiseModification />} />
            <Route path="data-modification/class-wise" element={<ClassWiseModification />} />
            <Route path="data-modification/student-form/:id" element={<StudentModificationForm />} />
            
            {/* Fee Payment Routes */}
            <Route path="fee-payment" element={<FeePayment />} />
            <Route path="fee-payment/hostel-admission" element={<ConstructionPage />} />
            <Route path="fee-payment/mess-due" element={<ConstructionPage />} />
            <Route path="fee-payment/other-fees" element={<ConstructionPage />} />
            
            {/* Data Report Routes */}
            <Route path="data-report" element={<DataReport />} />
            <Route path="data-report/student-wise" element={<ConstructionPage />} />
            <Route path="data-report/class-wise" element={<ConstructionPage />} />
            <Route path="data-report/year-wise" element={<ConstructionPage />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

type DashboardHomeProps = {
  navigationItems: Array<{
    title: string;
    path: string;
    icon: React.ElementType;
  }>;
  navigate: (path: string) => void;
}

const DashboardHome = ({ navigationItems, navigate }: DashboardHomeProps) => (
  <div className="space-y-8 animate-fadeIn">
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">Welcome to Hostel Management</h1>
      <p className="text-gray-600 mt-2 text-center md:text-left">Select an option below to get started</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {navigationItems.map((item) => (
        <div 
          key={item.path}
          className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          onClick={() => navigate(item.path)}
        >
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <item.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-center md:text-left">{item.title}</h3>
            <p className="text-gray-600 text-sm text-center md:text-left">
              {item.title === 'Data Entry' && 'Enter new student data or upload class data'}
              {item.title === 'Data Modification' && 'Update existing student information'}
              {item.title === 'Fee Payment' && 'Manage various fee payments'}
              {item.title === 'Data Report' && 'Generate and view various reports'}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;
