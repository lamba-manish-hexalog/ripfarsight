export const leaveApprovalTemplate = (name: string, status: string, note?: string): string => `
<div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
  <h2 style="color:#1a56db;margin-bottom:8px">RipFarSight — Leave ${status}</h2>
  <p>Hi ${name},</p>
  <p>Your leave request has been <strong>${status.toLowerCase()}</strong>.</p>
  ${note ? `<p style="background:#f9fafb;padding:12px;border-radius:6px;border-left:3px solid #3b82f6">Manager's note: <em>${note}</em></p>` : ''}
  <p style="color:#6b7280;font-size:12px;margin-top:24px">RipFarSight HR System | Hexalog</p>
</div>`;

export const welcomeTemplate = (name: string, email: string, tempPassword: string): string => `
<div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
  <h2 style="color:#1a56db">Welcome to RipFarSight!</h2>
  <p>Hi ${name}, your HR account has been created.</p>
  <table style="width:100%;border-collapse:collapse;margin:16px 0">
    <tr><td style="padding:8px;color:#6b7280">Login Email</td><td style="padding:8px;font-weight:600">${email}</td></tr>
    <tr style="background:#f9fafb"><td style="padding:8px;color:#6b7280">Temporary Password</td><td style="padding:8px;font-weight:600;font-family:monospace">${tempPassword}</td></tr>
  </table>
  <p style="color:#dc2626;font-size:13px">⚠️ Please change your password immediately after first login.</p>
  <p style="color:#6b7280;font-size:12px;margin-top:24px">RipFarSight HR System | Hexalog</p>
</div>`;

export const payslipTemplate = (name: string, month: string, year: number): string => `
<div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
  <h2 style="color:#1a56db">Your Payslip — ${month} ${year}</h2>
  <p>Hi ${name}, please find your payslip attached to this email.</p>
  <p style="color:#6b7280;font-size:12px;margin-top:24px">RipFarSight HR System | Hexalog</p>
</div>`;

export const expenseStatusTemplate = (name: string, amount: number, status: string): string => `
<div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
  <h2 style="color:#1a56db">Expense Claim Update</h2>
  <p>Hi ${name}, your expense claim of <strong>₹${amount.toLocaleString('en-IN')}</strong> is now <strong>${status}</strong>.</p>
  <p style="color:#6b7280;font-size:12px;margin-top:24px">RipFarSight HR System | Hexalog</p>
</div>`;
