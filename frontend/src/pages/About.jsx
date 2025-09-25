// export default function About() {
//   return (
//     <div className="bg-gray-50 text-gray-900">
//       {/* Header Section */}
//       <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tickewise</h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto">
//             EventAgents is your all-in-one event management system designed to make organizing and attending events seamless.
//           </p>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-16 container mx-auto px-6 text-center md:text-left">
//         <h2 className="text-3xl font-bold mb-6">Our Mission 🎯</h2>
//         <p className="text-gray-700 leading-relaxed max-w-3xl">
//           At EventAgents, our mission is to connect people through events. We provide a platform where event organizers can
//           easily manage their events, attendees can book tickets securely, and administrators can oversee everything with
//           ease. From concerts to conferences, sports to weddings – Tickewise brings people together.
//         </p>
//       </section>

//       {/* Values Section */}
//       <section className="bg-gray-100 py-16">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Core Values 💡</h2>
//           <div className="grid md:grid-cols-3 gap-10 text-center">
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
//               <h3 className="text-xl font-semibold mb-3">Innovation</h3>
//               <p className="text-gray-600">We are constantly improving our platform to make event management smarter and easier.</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
//               <h3 className="text-xl font-semibold mb-3">Trust</h3>
//               <p className="text-gray-600">We prioritize secure transactions and reliable event experiences for everyone.</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
//               <h3 className="text-xl font-semibold mb-3">Community</h3>
//               <p className="text-gray-600">Events bring people together – we exist to make that possible, anywhere and anytime.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-6">Join the Tickewise Experience 🎉</h2>
//         <p className="text-gray-700 max-w-2xl mx-auto mb-8">
//           Whether you are an organizer, attendee, or admin, EventAgents is built to give you the tools you need. 
//           Be part of the future of event management today.
//         </p>
//         <a
//           href="/events"
//           className="bg-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-purple-500 transition"
//         >
//           Explore Events
//         </a>
//       </section>
//     </div>
//   );
// }






// import { useNavigate } from "react-router-dom";

// export default function About() {
//   const navigate = useNavigate();

//   // 🔑 Handle Explore Events click
//   const handleExploreClick = () => {
//     const token = sessionStorage.getItem("token");
//     if (token) {
//       navigate("/events"); // ✅ Logged in → go to Events
//     } else {
//       navigate("/register"); // ❌ Not logged in → go to Register
//     }
//   };

//   return (
//     <div className="bg-gray-50 text-gray-900">
//       {/* Header Section */}
//       <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">About EventAgents</h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto">
//             EventAgents is your all-in-one event management system designed to make organizing and attending events seamless.
//           </p>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-16 container mx-auto px-6 text-center md:text-left">
//         <h2 className="text-3xl font-bold mb-6">Our Mission 🎯</h2>
//         <p className="text-gray-700 leading-relaxed max-w-3xl">
//           At EventAgents, our mission is to connect people through events. We provide a platform where event organizers can
//           easily manage their events, attendees can book tickets securely, and administrators can oversee everything with
//           ease. From concerts to conferences, sports to weddings – EventAgents brings people together.
//         </p>
//       </section>

//       {/* Values Section */}
//       <section className="bg-gray-100 py-16">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Core Values 💡</h2>
//           <div className="grid md:grid-cols-3 gap-10 text-center">
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
//               <h3 className="text-xl font-semibold mb-3">Innovation</h3>
//               <p className="text-gray-600">We are constantly improving our platform to make event management smarter and easier.</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
//               <h3 className="text-xl font-semibold mb-3">Trust</h3>
//               <p className="text-gray-600">We prioritize secure transactions and reliable event experiences for everyone.</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
//               <h3 className="text-xl font-semibold mb-3">Community</h3>
//               <p className="text-gray-600">Events bring people together – we exist to make that possible, anywhere and anytime.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-6">Join the EventAgents Experience 🎉</h2>
//         <p className="text-gray-700 max-w-2xl mx-auto mb-8">
//           Whether you are an organizer, attendee, or admin, EventAgents is built to give you the tools you need. 
//           Be part of the future of event management today.
//         </p>
//         <button
//           onClick={handleExploreClick}
//           className="bg-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-purple-500 transition"
//         >
//           Explore Events
//         </button>
//       </section>
//     </div>
//   );
// }















import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const navigate = useNavigate();

  // 🔑 Handle Explore Events click
  const handleExploreClick = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/events"); // ✅ Logged in → go to Events
    } else {
      navigate("/register"); // ❌ Not logged in → go to Register
    }
  };

  const timeline = [
    {
      year: "2022",
      title: "The Idea 💡",
      desc: "EventAgents was born out of a passion for connecting people through events.",
    },
    {
      year: "2023",
      title: "First Launch 🚀",
      desc: "We released our first platform version and welcomed our first users.",
    },
    {
      year: "2024",
      title: "Growing Community 🌍",
      desc: "EventAgents expanded with thousands of events across different categories.",
    },
    {
      year: "2025",
      title: "Future Ahead 🔮",
      desc: "We continue to innovate with AI-powered tools and global event support.",
    },
  ];

  // 🧮 Counter state
  const [stats, setStats] = useState({ events: 0, users: 0, partners: 0 });

  useEffect(() => {
    let events = 0, users = 0, partners = 0;

    const interval = setInterval(() => {
      if (events < 500) events += 10;
      if (users < 2000) users += 40;
      if (partners < 50) partners += 2;

      setStats({ events, users, partners });

      if (events >= 500 && users >= 2000 && partners >= 50) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About EventAgents
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            EventAgents is your all-in-one event management system designed to
            make organizing and attending events seamless.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission 🎯</h2>
          <p className="text-gray-700 leading-relaxed">
            At EventAgents, our mission is to connect people through events. We
            provide a platform where event organizers can easily manage their
            events, attendees can book tickets securely, and administrators can
            oversee everything with ease. From concerts to conferences, sports
            to weddings – EventAgents brings people together.
          </p>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Our Mission"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values 💡
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: "Innovation",
                desc: "We constantly improve our platform to make event management smarter and easier.",
              },
              {
                title: "Trust",
                desc: "We prioritize secure transactions and reliable event experiences for everyone.",
              },
              {
                title: "Community",
                desc: "Events bring people together – we exist to make that possible, anywhere and anytime.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Journey 📅
        </h2>
        <div className="relative border-l-4 border-purple-600 ml-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="mb-10 ml-6"
            >
              <div className="absolute w-6 h-6 bg-purple-600 rounded-full -left-3 border-4 border-white"></div>
              <h3 className="text-xl font-semibold">
                {item.year} – {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Counter Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-5xl font-bold">{stats.events}+</h3>
            <p className="text-lg mt-2">Events Hosted</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-5xl font-bold">{stats.users}+</h3>
            <p className="text-lg mt-2">Happy Users</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-5xl font-bold">{stats.partners}+</h3>
            <p className="text-lg mt-2">Partners Worldwide</p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet the Team 👨‍💻👩‍💻</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {["Jane Doe", "John Smith", "Alex Kim"].map((member, i) => (
            <motion.div
              key={member}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg"
            >
              <img
                src={`https://i.pravatar.cc/150?img=${i + 10}`}
                alt={member}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{member}</h3>
              <p className="text-gray-500">Event Specialist</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-6"
        >
          Join the EventAgents Experience 🎉
        </motion.h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Whether you are an organizer, attendee, or admin, EventAgents is built
          to give you the tools you need. Be part of the future of event
          management today.
        </p>
        <motion.button
          onClick={handleExploreClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-purple-500 transition"
        >
          Explore Events
        </motion.button>
      </section>
    </div>
  );
}
