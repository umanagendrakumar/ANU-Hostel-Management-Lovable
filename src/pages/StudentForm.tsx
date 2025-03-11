
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '../components/ui/select';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardFooter 
} from '../components/ui/card';
import { format } from 'date-fns';
import { Calendar } from '../components/ui/calendar';
import { toast } from 'sonner';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger, 
} from '../components/ui/popover';
import { cn } from '../lib/utils';
import { ArrowLeft, CalendarIcon, Save } from 'lucide-react';

const StudentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [date, setDate] = useState<Date>();

  // Form state would be more complex in a real application
  const [formData, setFormData] = useState({
    hostelId: id || '',
    rollNo: '',
    fullName: '',
    age: '',
    degree: '',
    course: '',
    year: '',
    department: '',
    college: '',
    phoneNumber: '',
    email: '',
    nativePlace: '',
    address: '',
    distance: '',
    category: '',
    physicallyChallened: '',
    bloodGroup: '',
    messOption: '',
    scholarshipHolder: '',
    previousResident: '',
    previousYear: '',
    previousHostel: '',
    previousRoomNo: '',
    fatherName: '',
    occupation: '',
    annualIncome: '',
    parentContact: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        hostel_id: "H123",
        roll_no: "123456",
        full_name: "John Doe",
        dob: "2002-05-15",
        age: "22",
        degree: "BTech",
        year: "3rd",
        course: "CSE",
        department: "Computer Science",
        college: "XYZ University",
        student_phone: "9876543210",
        email: "johndoe@example.com",
        address: "123 Street, City",
        native_place: "Hometown",
        distance: "50km",
        category: "General",
        blood_group: "B+",
        scholarship: "No",
        physically_challenged: "No",
        mess_option: "Veg",
        previous_resident: "No",
        father_name: "Mr. Doe",
        occupation: "Engineer",
        annual_income: "500000",
        guardian_phone: "9876543210"
    };

    try {
        const response = await fetch("http://localhost/submit_student.php", {
            method: "POST",
            // credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`Server Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        console.log(result);
        alert(result.message);
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong! " + error.message);
    }
};


  return (
    <div className="container mx-auto p-6">
      <Button 
        variant="outline" 
        className="mb-6" 
        onClick={() => navigate('/dashboard/data-entry/student-wise')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Student Search
      </Button>
      
      <Card>
        <CardHeader>
          <CardTitle>Student Information Form</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            {/* Basic Information Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Basic Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label htmlFor="hostelId" className="text-sm font-medium">
                    Hostel ID
                  </label>
                  <Input
                    id="hostelId"
                    name="hostelId"
                    value={formData.hostelId}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="rollNo" className="text-sm font-medium">
                    Roll No
                  </label>
                  <Input
                    id="rollNo"
                    name="rollNo"
                    value={formData.rollNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full Name (in BLOCK LETTERS)
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="uppercase"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="dob" className="text-sm font-medium">
                    Date of Birth
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="age" className="text-sm font-medium">
                    Age
                  </label>
                  <Input
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    type="number"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="degree" className="text-sm font-medium">
                    Degree
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('degree', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select degree" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ug">Under Graduate</SelectItem>
                      <SelectItem value="pg">Post Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="course" className="text-sm font-medium">
                    Course
                  </label>
                  <Input
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="year" className="text-sm font-medium">
                    Year
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('year', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="I">I</SelectItem>
                      <SelectItem value="II">II</SelectItem>
                      <SelectItem value="III">III</SelectItem>
                      <SelectItem value="IV">IV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="department" className="text-sm font-medium">
                    Department
                  </label>
                  <Input
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Contact Information Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label htmlFor="college" className="text-sm font-medium">
                    College
                  </label>
                  <Input
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phoneNumber" className="text-sm font-medium">
                    Student Ph No
                  </label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    type="tel"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email ID
                  </label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="nativePlace" className="text-sm font-medium">
                    Native Place (Certificate shall be enclosed)
                  </label>
                  <Input
                    id="nativePlace"
                    name="nativePlace"
                    value={formData.nativePlace}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="address" className="text-sm font-medium">
                    Permanent Address
                  </label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="distance" className="text-sm font-medium">
                    Distance
                  </label>
                  <Input
                    id="distance"
                    name="distance"
                    value={formData.distance}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Personal Details Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Personal Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">
                    Category
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SC">SC</SelectItem>
                      <SelectItem value="ST">ST</SelectItem>
                      <SelectItem value="BC-A">BC-A</SelectItem>
                      <SelectItem value="BC-B">BC-B</SelectItem>
                      <SelectItem value="BC-C">BC-C</SelectItem>
                      <SelectItem value="BC-D">BC-D</SelectItem>
                      <SelectItem value="BC-E">BC-E</SelectItem>
                      <SelectItem value="Minority">Minority</SelectItem>
                      <SelectItem value="OC">O.C.</SelectItem>
                      <SelectItem value="EWS">E.W.S.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="physicallyChallened" className="text-sm font-medium">
                    Physically Challenged
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('physicallyChallened', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="bloodGroup" className="text-sm font-medium">
                    Blood Group
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('bloodGroup', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select blood group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A+">A+</SelectItem>
                      <SelectItem value="A-">A-</SelectItem>
                      <SelectItem value="B+">B+</SelectItem>
                      <SelectItem value="B-">B-</SelectItem>
                      <SelectItem value="AB+">AB+</SelectItem>
                      <SelectItem value="AB-">AB-</SelectItem>
                      <SelectItem value="O+">O+</SelectItem>
                      <SelectItem value="O-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="messOption" className="text-sm font-medium">
                    Mess Option
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('messOption', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select mess option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="non-vegetarian">Non-vegetarian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="scholarshipHolder" className="text-sm font-medium">
                    Scholarship Holder
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('scholarshipHolder', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {/* Previous Hostel Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Previous Hostel Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label htmlFor="previousResident" className="text-sm font-medium">
                    Previous Resident of University Hostel
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('previousResident', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {formData.previousResident === 'yes' && (
                  <>
                    <div className="space-y-2">
                      <label htmlFor="previousYear" className="text-sm font-medium">
                        If Yes, Year
                      </label>
                      <Input
                        id="previousYear"
                        name="previousYear"
                        value={formData.previousYear}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="previousHostel" className="text-sm font-medium">
                        Hostel
                      </label>
                      <Input
                        id="previousHostel"
                        name="previousHostel"
                        value={formData.previousHostel}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="previousRoomNo" className="text-sm font-medium">
                        Room No.
                      </label>
                      <Input
                        id="previousRoomNo"
                        name="previousRoomNo"
                        value={formData.previousRoomNo}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Parent/Guardian Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Parent/Guardian Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label htmlFor="fatherName" className="text-sm font-medium">
                    Father's Name
                  </label>
                  <Input
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="occupation" className="text-sm font-medium">
                    Occupation
                  </label>
                  <Input
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="annualIncome" className="text-sm font-medium">
                    Annual Income
                  </label>
                  <Input
                    id="annualIncome"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    type="number"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="parentContact" className="text-sm font-medium">
                    Parent / Guardian Cell
                  </label>
                  <Input
                    id="parentContact"
                    name="parentContact"
                    value={formData.parentContact}
                    onChange={handleChange}
                    type="tel"
                    required
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="ml-auto">
              <Save className="mr-2 h-4 w-4" /> Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default StudentForm;
