import React from 'react';
import { Student, AttendanceEntry } from './types';
import './StudentCard.css';

interface StudentCardProps {
  student: Student;
  attendance: AttendanceEntry;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, attendance }) => {
  const attendanceStatusClass = attendance.status.toLowerCase();
  
  return (
    <div className={`student-card ${attendanceStatusClass}`}>
      <h3>{student.name}</h3>
      <p>Class: {student.className}</p>
      <p>
        Attendance: <span className="status">{attendance.status}</span>
      </p>
      {attendance.notes && <p className="notes">Notes: {attendance.notes}</p>}
    </div>
  );
};

export default StudentCard;
