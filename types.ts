export interface Student {
  id: number;
  name: string;
  className: string;
}

export interface AttendanceEntry {
  date: string;
  status: 'Present' | 'Absent' | 'Late';
  notes?: string;
}

export interface AttendanceData {
  [key: number]: AttendanceEntry;
}
