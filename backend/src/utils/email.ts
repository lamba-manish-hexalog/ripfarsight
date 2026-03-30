import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  attachments?: nodemailer.Attachment[];
}

export const sendEmail = async (opts: EmailOptions): Promise<void> => {
  await transporter.sendMail({
    from: `"RipFarSight HR" <${process.env.GMAIL_ADDRESS}>`,
    ...opts,
  });
};
