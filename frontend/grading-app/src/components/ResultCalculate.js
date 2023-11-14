// Home.js
import React, { useState } from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';

function Home() {
  const [marks, setMarks] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [grade, setGrade] = useState('');
  const [result, setResult] = useState('');
  
  const calculateResult = () => {
    const IslMarks = parseInt(prompt('Enter your Islamiat Marks:'),10);
    const UrduMarks = parseInt(prompt('Enter your Urdu Marks:'),10);
    const EngMarks = parseInt(prompt('Enter your English Marks:'),10);
    const CompMarks = parseInt(prompt('Enter your Computer Marks:'),10);
    const SciMarks = parseInt(prompt('Enter your Science Marks:'),10);
    const SstMarks = parseInt(prompt('Enter your Social Studies Marks:'),10);
    const totalMarks = IslMarks + UrduMarks + EngMarks + CompMarks + SciMarks + SstMarks
    const calculatedPercentage = (totalMarks / 600) * 100;
    setPercentage(calculatedPercentage);

    if (calculatedPercentage >= 90) {
      setGrade('A+');
      setResult('Pass with Distinction');
    } else if (calculatedPercentage >= 80) {
      setGrade('A');
      setResult('Pass with Honors');
    } else if (calculatedPercentage >= 70) {
      setGrade('B');
      setResult('Pass');
    } else if (calculatedPercentage >= 60) {
      setGrade('C');
      setResult('Pass');
    } else if (calculatedPercentage >= 50) {
      setGrade('D');
      setResult('Pass');
    } else if (calculatedPercentage > 40) {
      setGrade('E');
      setResult('Pass');
    } else {
      setGrade('F');
      setResult('Sorry you are Fail');
    }
    setMarks(totalMarks)
  };

  return (
            <>
             <Button onClick={calculateResult}>Get Result</Button>
             <Table>
               <TableHead>
                 <TableRow>
                   <TableCell>Marks</TableCell>
                   <TableCell>Percentage</TableCell>
                   <TableCell>Grade</TableCell>
                   <TableCell>Result</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                 <TableRow>
                   <TableCell>{marks}</TableCell>
                   <TableCell>{percentage}%</TableCell>
                   <TableCell>{grade}</TableCell>
                   <TableCell>{result}</TableCell>
                 </TableRow>
               </TableBody>
             </Table>
             </>
  );
}

export default Home;
