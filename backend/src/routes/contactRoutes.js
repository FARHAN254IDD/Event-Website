// // import express from "express";
// // import nodemailer from "nodemailer";
// // import dotenv from "dotenv";
// // import Contact from "../models/Contact.js";

// // dotenv.config();
// // const router = express.Router();

// // router.post("/", async (req, res) => {
// //   const { name, email, message } = req.body;

// //   if (!name || !email || !message) {
// //     return res.status(400).json({ error: "All fields are required" });
// //   }

// //   try {
// //     // 1️⃣ Save to DB
// //     const newContact = new Contact({ name, email, message });
// //     await newContact.save();

// //     // 2️⃣ Send Email
// //     const transporter = nodemailer.createTransport({
// //       service: "gmail",
// //       auth: {
// //         user: process.env.EMAIL_USER,
// //         pass: process.env.EMAIL_PASS, // App Password
// //       },
// //     });

// //     await transporter.sendMail({
// //       from: email,
// //       to: process.env.EMAIL_USER,
// //       subject: `📩 New Contact Message from ${name}`,
// //       html: `
// //         <h3>You got a new message:</h3>
// //         <p><strong>Name:</strong> ${name}</p>
// //         <p><strong>Email:</strong> ${email}</p>
// //         <p><strong>Message:</strong></p>
// //         <p>${message}</p>
// //       `,
// //     });

// //     res.json({ success: true, message: "Message sent & saved successfully!" });
// //   } catch (error) {
// //     console.error("❌ Contact Error:", error.message);
// //     res.status(500).json({ error: "Failed to send message" });
// //   }
// // });

// // export default router;



// // // import express from "express";
// // // import sendEmails from "../utils/sendEmails.js";
// // // import Contact from "../models/Contact.js";

// // // const router = express.Router();

// // // router.post("/", async (req, res) => {
// // //   const { name, email, message } = req.body;

// // //   try {
// // //     const saved = await Contact.create({ name, email, message });

// // //     await sendEmails({
// // //       to: process.env.FROM_EMAIL, // you receive it
// // //       subject: `📩 New Contact Message from ${name}`,
// // //       html: `
// // //         <p><b>Name:</b> ${name}</p>
// // //         <p><b>Email:</b> ${email}</p>
// // //         <p><b>Message:</b></p>
// // //         <p>${message}</p>
// // //       `,
// // //     });

// // //     res.json({ success: true, message: "Message sent successfully!" });
// // //   } catch (err) {
// // //     console.error("❌ Contact error:", err);
// // //     res.status(500).json({ error: "Message could not be sent" });
// // //   }
// // // });

// // // export default router;









// import express from "express";
// import { createMessage } from "../controllers/contactController.js";

// const router = express.Router();

// router.post("/", createMessage);

// export default router;

