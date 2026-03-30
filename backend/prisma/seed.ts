import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Roles
  const roleNames = ['Employee', 'Manager', 'HR Admin', 'Super Admin'];
  const roles: Record<string, string> = {};
  for (const name of roleNames) {
    const role = await prisma.role.upsert({
      where: { name },
      update: {},
      create: { name, isSystem: true },
    });
    roles[name] = role.id;
  }
  console.log('✅ Roles seeded');

  // Default department
  const dept = await prisma.department.upsert({
    where: { name: 'Administration' },
    update: {},
    create: { name: 'Administration' },
  });
  console.log('✅ Default department seeded');

  // Default shift
  await prisma.shift.upsert({
    where: { id: 'default-shift' },
    update: {},
    create: {
      id: 'default-shift',
      name: 'General (9AM - 6PM)',
      startTime: '09:00',
      endTime: '18:00',
      lateAfter: '09:15',
      totalHours: 9,
    },
  });
  console.log('✅ Default shift seeded');

  // Leave types
  const leaveTypes = [
    { name: 'Earned Leave', annualQuota: 18 },
    { name: 'Sick Leave', annualQuota: 12 },
    { name: 'Casual Leave', annualQuota: 6 },
  ];
  for (const lt of leaveTypes) {
    await prisma.leaveType.upsert({
      where: { name: lt.name },
      update: {},
      create: lt,
    });
  }
  console.log('✅ Leave types seeded');

  // Super Admin user
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@hexalog.in';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123456';
  const passwordHash = await bcrypt.hash(adminPassword, 12);

  await prisma.employee.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: 'Super Admin',
      email: adminEmail,
      dateOfJoining: new Date(),
      departmentId: dept.id,
      roleId: roles['Super Admin'],
      passwordHash,
      status: 'ACTIVE',
    },
  });
  console.log(`✅ Super Admin seeded: ${adminEmail}`);
  console.log('');
  console.log('🎉 Seeding complete!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
