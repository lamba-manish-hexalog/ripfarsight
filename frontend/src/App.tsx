import { Routes, Route, Navigate } from 'react-router-dom';

// Placeholder pages — to be built in subsequent tickets
const LoginPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="card max-w-md w-full mx-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">RipFarSight</h1>
        <p className="text-gray-500 mt-1">HR Management Platform</p>
      </div>
      <p className="text-center text-gray-400 text-sm">Login page — coming in HEX-734</p>
    </div>
  </div>
);

const DashboardPage = () => (
  <div className="min-h-screen bg-gray-50 p-8">
    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
    <p className="text-gray-500 mt-2">Coming in HEX-749 / HEX-750</p>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
