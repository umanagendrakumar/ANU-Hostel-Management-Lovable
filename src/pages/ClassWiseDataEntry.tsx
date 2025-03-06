
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import { ArrowLeft, Upload, File } from 'lucide-react';

const ClassWiseDataEntry = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
          selectedFile.type === 'application/vnd.ms-excel') {
        setFile(selectedFile);
      } else {
        toast.error('Please upload an Excel file (.xlsx or .xls)');
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
          droppedFile.type === 'application/vnd.ms-excel') {
        setFile(droppedFile);
      } else {
        toast.error('Please upload an Excel file (.xlsx or .xls)');
      }
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast.error('Please select a file to upload');
      return;
    }
    
    // In a real implementation, you would handle the file upload here
    toast.success(`File "${file.name}" uploaded successfully`);
    // Reset the file state after successful upload
    setFile(null);
  };

  return (
    <div className="container mx-auto p-6">
      <Button 
        variant="outline" 
        className="mb-6" 
        onClick={() => navigate('/dashboard/data-entry')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Data Entry
      </Button>
      
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Class-wise Data Entry</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-gray-600">
            Upload an Excel file containing multiple student records. The file should follow the required format.
          </p>
          
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              isDragging ? 'border-primary bg-primary/5' : 'border-gray-300'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium mb-2">Drop your Excel file here</h3>
            <p className="text-sm text-gray-500 mb-4">or</p>
            <input
              type="file"
              id="file-upload"
              accept=".xlsx,.xls"
              className="hidden"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload">
              <Button variant="outline" className="cursor-pointer" onClick={() => document.getElementById('file-upload')?.click()}>
                Browse Files
              </Button>
            </label>
          </div>

          {file && (
            <div className="bg-accent/30 p-4 rounded-md flex items-center justify-between">
              <div className="flex items-center">
                <File className="h-5 w-5 mr-2 text-accent-foreground" />
                <span className="text-sm font-medium">{file.name}</span>
              </div>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={() => setFile(null)}
                className="text-xs"
              >
                Remove
              </Button>
            </div>
          )}
          
          <Button 
            onClick={handleUpload} 
            className="w-full" 
            disabled={!file}
          >
            <Upload className="mr-2 h-4 w-4" /> Upload Class Data
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClassWiseDataEntry;
