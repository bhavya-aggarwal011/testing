import React, { useState } from 'react';
import StudentCard from './StudentCard';
import { Student, AttendanceData } from './types';
import './App.css';

const DUMMY_STUDENTS: Student[] = [
  { id: 1, name: 'Alice Johnson', className: '10th Grade' },
  { id: 2, name: 'Bob Williams', className: '10th Grade' },
];

const DUMMY_ATTENDANCE: AttendanceData = {
  1: { date: '2025-09-08', status: 'Present', notes: 'Attended all classes.' },
  2: { date: '2025-09-08', status: 'Absent', notes: 'Sick leave.' },
};

const DUMMY_ACTIVITIES = [
  { id: 101, title: 'Math Test', date: '2025-09-10' },
  { id: 102, title: 'Science Project', date: '2025-09-15' },
];

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(DUMMY_STUDENTS);
  const [attendance, setAttendance] = useState<AttendanceData>(DUMMY_ATTENDANCE);
  const [activities, setActivities] = useState<any[]>(DUMMY_ACTIVITIES);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Smart Curriculum & Attendance App</h1>
      </header>
      <main className="app-main">
        <section className="dashboard-section">
          <h2>Student Dashboard</h2>
          <div className="student-list">
            {students.map(student => (
              <StudentCard
                key={student.id}
                student={student}
                attendance={attendance[student.id]}
              />
            ))}
          </div>
        </section>
        <section className="activities-section">
          <h2>Upcoming Activities</h2>
          <ul>
            {activities.map(activity => (
              <li key={activity.id}>
                <strong>{activity.title}</strong> - Due: {activity.date}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
