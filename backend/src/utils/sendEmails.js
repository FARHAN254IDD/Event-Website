// // backend/src/utils/sendEmail.js
import nodemailer from "nodemailer";

const sendEmails = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to,
      subject,
      html,
    });

    console.log("✅ Email sent to:", to);
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    throw new Error("Email could not be sent");
  }
};

export default sendEmails;



// backend/src/utils/sendEmail.js
// import nodemailer from "nodemailer";

// const sendEmails = async ({ to, subject, html }) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       // host: process.env.SMTP_HOST || "smtp.gmail.com",
//       // port: Number(process.env.SMTP_PORT) || 465, // 465 = SSL, 587 = STARTTLS
//       // secure: Number(process.env.SMTP_PORT) === 465, // true if port is 465
//       service: "gmail", // ✅ easier than host/port
//       auth: {
//         user: process.env.SMTP_USER, // your Gmail
//         pass: process.env.SMTP_PASS, // 16-char App Password
//       },
//     });

//     const info = await transporter.sendMail({
//       from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
//       to,
//       subject,
//       html,
//     });

//     console.log("✅ Email sent:", info.messageId);
//   } catch (err) {
//     console.error("❌ Email sending failed:", err);
//     throw new Error("Email could not be sent");
//   }
// };

// export default sendEmails;

