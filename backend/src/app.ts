import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rate limiting
app.use('/auth/login', rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: { message: 'Too many login attempts, please try again later.' },
}));

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'RipFarSight API', timestamp: new Date().toISOString() });
});

// Routes — wired in subsequent tickets (HEX-734, HEX-737, etc.)
// app.use('/auth', authRouter);
// app.use('/employees', employeeRouter);
// app.use('/attendance', attendanceRouter);
// app.use('/leaves', leaveRouter);
// app.use('/payroll', payrollRouter);
// app.use('/expenses', expenseRouter);
// app.use('/dashboard', dashboardRouter);

// Global error handler
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('[Error]', err.message, err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 RipFarSight API running on port ${PORT}`);
});

export default app;
