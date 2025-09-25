// import { useState } from "react";
// import { FaSearch, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

// export default function Help() {
//   const [search, setSearch] = useState("");

//   const faqs = [
//     {
//       question: "How do I reset my password?",
//       answer:
//         "Click on 'Forgot Password' on the login page. Enter your email, and you’ll receive a reset link.",
//     },
//     {
//       question: "Why am I not receiving emails?",
//       answer:
//         "Check your spam/junk folder. If the problem continues, contact support.",
//     },
//     {
//       question: "How do I update my profile?",
//       answer:
//         "Go to 'My Account' > 'Edit Profile', then update your details and save.",
//     },
//     {
//       question: "How can I contact support?",
//       answer:
//         "Scroll down to the contact section on this page or email us directly.",
//     },
//   ];

//   const filteredFaqs = faqs.filter((faq) =>
//     faq.question.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-gray-50 min-h-screen py-10 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
//           Help Center
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           Find answers to common questions or reach out to us.
//         </p>

//         {/* Search */}
//         <div className="flex items-center bg-white shadow rounded-lg px-4 py-2 mb-8">
//           <FaSearch className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             placeholder="Search for help..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full outline-none"
//           />
//         </div>

//         {/* FAQs */}
//         <div className="space-y-4">
//           {filteredFaqs.length > 0 ? (
//             filteredFaqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
//               >
//                 <h2 className="font-semibold text-indigo-600 flex items-center">
//                   <FaQuestionCircle className="mr-2" /> {faq.question}
//                 </h2>
//                 <p className="text-gray-600 mt-2">{faq.answer}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">
//               No results found. Try another keyword.
//             </p>
//           )}
//         </div>

//         {/* Contact Support */}
//         <div className="mt-12 bg-indigo-600 text-white rounded-xl p-6 shadow">
//           <h2 className="text-2xl font-bold mb-2">Still need help?</h2>
//           <p className="mb-4">
//             If you didn’t find your answer, contact our support team.
//           </p>
//           <a
//             href="mailto:support@eventpro.com"
//             className="inline-flex items-center bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
//           >
//             <FaEnvelope className="mr-2" /> Contact Support
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center">
          Help Center
        </h1>

        <p className="text-gray-700 mb-6 text-center">
          Need assistance? You can browse our guides or reach out directly to our
          support team.
        </p>

        {/* Support Options */}
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Contact Support
            </h2>
            <p className="text-gray-600 mb-3">
              Having issues with your account or events? Our support team is ready
              to assist you.
            </p>
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500"
            >
              Go to Contact Page
            </Link>
          </div>

          <div className="p-4 border rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              FAQs
            </h2>
            <p className="text-gray-600">
              Check our frequently asked questions to quickly find answers to
              common problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

