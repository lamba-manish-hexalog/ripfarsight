// Global TypeScript types for RipFarSight frontend

export type Role = 'Employee' | 'Manager' | 'HR Admin' | 'Super Admin';
export type EmployeeStatus = 'ACTIVE' | 'INACTIVE';
export type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'LATE' | 'HALF_DAY';
export type LeaveStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED';
export type ExpenseStatus = 'PENDING' | 'MANAGER_APPROVED' | 'HR_APPROVED' | 'REIMBURSED' | 'REJECTED';

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone?: string;
  dateOfJoining: string;
  department: { id: string; name: string };
  role: { id: string; name: Role };
  manager?: { id: string; name: string };
  status: EmployeeStatus;
  createdAt: string;
}

export interface AttendanceRecord {
  id: string;
  date: string;
  clockIn: string | null;
  clockOut: string | null;
  status: AttendanceStatus;
  hoursWorked?: number;
}

export interface LeaveBalance {
  leaveType: { id: string; name: string; annualQuota: number };
  balance: number;
  year: number;
}

export interface LeaveRequest {
  id: string;
  leaveType: { id: string; name: string };
  fromDate: string;
  toDate: string;
  days: number;
  reason: string;
  status: LeaveStatus;
  reviewNote?: string;
  createdAt: string;
}

export interface Payroll {
  id: string;
  month: number;
  year: number;
  grossPay: number;
  netPay: number;
  pfEmployee: number;
  esiEmployee: number;
  professionalTax: number;
  payslipPath?: string;
}

export interface ExpenseClaim {
  id: string;
  category: string;
  amount: number;
  description: string;
  receiptPath?: string;
  status: ExpenseStatus;
  createdAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
