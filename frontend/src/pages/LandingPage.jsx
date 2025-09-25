// import { Link } from "react-router-dom";

// function Button({ children, className }) {
//   return (
//     <button
//       className={`px-8 py-4 rounded-xl font-semibold transition shadow-lg ${className}`}
//     >
//       {children}
//     </button>
//   );
// }

// function Card({ children, className }) {
//   return (
//     <div className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition ${className}`}>
//       {children}
//     </div>
//   );
// }

// function CardContent({ children }) {
//   return <div>{children}</div>;
// }

// export default function LandingPage() {
//   return (
//     <div className="bg-gray-50 text-gray-900">
//       {/* Hero Section with Video Background */}
// <section className="relative h-screen flex items-center justify-center text-center text-white">
//   {/* Background Video */}
//   <video
//     className="absolute top-0 left-0 w-full h-full object-cover"
//     autoPlay
//     muted
//     loop
//     playsInline
//   >
//     <source src="/istockphoto-1249998309-640_adpp_is.mp4" type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>

//   {/* Overlay */}
//   <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

//   {/* Hero Content */}
//   <div className="relative z-10 px-6">
//     <h1 className="text-5xl md:text-6xl font-bold mb-6">
//       Welcome to EventAgents 
//     </h1>
//     <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
//       Your all-in-one event management platform. Discover, book, and
//       manage events with ease. Whether you’re an organizer, attendee, or
//       admin – EventAgents has you covered.
//     </p>
//     <Link to="/events">
//       <button className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-4 rounded-xl text-lg shadow-lg">
//         Explore Events
//       </button>
//     </Link>
//   </div>
// </section>


//       {/* Features Section */}
//       <section className="py-20 container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Why Choose EventAgents?
//         </h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           <Card>
//             <CardContent>
//               <h3 className="text-xl font-semibold mb-2">🎯 Easy to Use</h3>
//               <p>Browse events and book tickets in just a few clicks.</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent>
//               <h3 className="text-xl font-semibold mb-2">💳 Secure Payments</h3>
//               <p>Pay safely with M-Pesa, PayPal, or your credit card.</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent>
//               <h3 className="text-xl font-semibold mb-2">📊 For Everyone</h3>
//               <p>Admins, employees, and users each get tailored tools.</p>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="bg-gray-100 py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-12">Explore Event Categories</h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {["Concerts", "Conferences", "Sports", "Weddings"].map((cat) => (
//               <div
//                 key={cat}
//                 className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
//               >
//                 <h3 className="text-xl font-semibold">{cat}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-20 container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-12">How It Works</h2>
//         <div className="grid md:grid-cols-3 gap-12">
//           <div>
//             <span className="text-5xl">🔎</span>
//             <h3 className="text-xl font-semibold mt-4">Browse Events</h3>
//             <p className="text-gray-600 mt-2">
//               Find concerts, sports, conferences and more near you.
//             </p>
//           </div>
//           <div>
//             <span className="text-5xl">🎟️</span>
//             <h3 className="text-xl font-semibold mt-4">Book Tickets</h3>
//             <p className="text-gray-600 mt-2">
//               Secure your spot instantly with safe and easy payments.
//             </p>
//           </div>
//           <div>
//             <span className="text-5xl">🎉</span>
//             <h3 className="text-xl font-semibold mt-4">Enjoy the Show</h3>
//             <p className="text-gray-600 mt-2">
//               Attend and experience unforgettable moments.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call To Action */}
//       <section className="bg-white-600 text-black py-20 text-center">
//         <h2 className="text-3xl font-bold mb-6">
//           Ready to Experience the Future of Events?
//         </h2>
//         <Link to="/register">
//           <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg">
//             Get Started
//           </Button>
//         </Link>
//       </section>
//     </div>
//   );
// }


// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // ✅ import your auth
// import { Link } from "react-router-dom";

// function Button({ children, className }) {
//   return (
//     <button
//       className={`px-8 py-4 rounded-xl font-semibold transition shadow-lg ${className}`}
//     >
//       {children}
//     </button>
//   );
// }

// function Card({ children, className }) {
//   return (
//     <div className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition ${className}`}>
//       {children}
//     </div>
//   );
// }

// function CardContent({ children }) {
//   return <div>{children}</div>;
// }

// export default function LandingPage() {
//   const { user } = useAuth(); // ✅ check if user is logged in
//   const navigate = useNavigate();

//   const handleExplore = () => {
//     if (user) {
//       navigate("/events");   // logged in → go to events
//     } else {
//       navigate("/register"); // not logged in → go to register
//     }
//   };

//   return (
//     <div className="bg-gray-50 text-gray-900">
//       {/* Hero Section with Video Background */}
//       <section className="relative h-screen flex items-center justify-center text-center text-white">
//         {/* Background Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/istockphoto-1249998309-640_adpp_is.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

//         {/* Hero Content */}
//         <div className="relative z-10 px-6">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             Welcome to EventAgents 
//           </h1>
//           <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
//             Your all-in-one event management platform. Discover, book, and
//             manage events with ease. Whether you’re an organizer, attendee, or
//             admin – EventAgents has you covered.
//           </p>

//           {/* ✅ Explore button with logic */}
//           <button
//             onClick={handleExplore}
//             className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-4 rounded-xl text-lg shadow-lg"
//           >
//             Explore Events
//           </button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Why Choose EventAgents?
//         </h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           <Card>
//             <CardContent>
//               <h3 className="text-xl font-semibold mb-2">🎯 Easy to Use</h3>
//               <p>Browse events and book tickets in just a few clicks.</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent>
//               <h3 className="text-xl font-semibold mb-2">💳 Secure Payments</h3>
//               <p>Pay safely with M-Pesa, PayPal, or your credit card.</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent>
//               <h3 className="text-xl font-semibold mb-2">📊 For Everyone</h3>
//               <p>Admins, employees, and users each get tailored tools.</p>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="bg-gray-100 py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-12">Explore Event Categories</h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {["Concerts", "Conferences", "Sports", "Weddings"].map((cat) => (
//               <div
//                 key={cat}
//                 className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
//               >
//                 <h3 className="text-xl font-semibold">{cat}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-20 container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-12">How It Works</h2>
//         <div className="grid md:grid-cols-3 gap-12">
//           <div>
//             <span className="text-5xl">🔎</span>
//             <h3 className="text-xl font-semibold mt-4">Browse Events</h3>
//             <p className="text-gray-600 mt-2">
//               Find concerts, sports, conferences and more near you.
//             </p>
//           </div>
//           <div>
//             <span className="text-5xl">🎟️</span>
//             <h3 className="text-xl font-semibold mt-4">Book Tickets</h3>
//             <p className="text-gray-600 mt-2">
//               Secure your spot instantly with safe and easy payments.
//             </p>
//           </div>
//           <div>
//             <span className="text-5xl">🎉</span>
//             <h3 className="text-xl font-semibold mt-4">Enjoy the Show</h3>
//             <p className="text-gray-600 mt-2">
//               Attend and experience unforgettable moments.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call To Action */}
//       <section className="bg-white-600 text-black py-20 text-center">
//         <h2 className="text-3xl font-bold mb-6">
//           Ready to Experience the Future of Events?
//         </h2>
//         <Link to="/register">
//           <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg">
//             Get Started
//           </Button>
//         </Link>
//       </section>
//     </div>
//   );
// }





















import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

function Button({ children, className }) {
  return (
    <button
      className={`px-8 py-4 rounded-xl font-semibold transition shadow-lg ${className}`}
    >
      {children}
    </button>
  );
}

function Card({ children, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleExplore = () => {
    if (user) {
      navigate("/events");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/istockphoto-1249998309-640_adpp_is.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to EventAgents
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover, book, and manage events effortlessly. Whether you’re an
            organizer, attendee, or admin – EventAgents is your trusted partner.
          </motion.p>

          <motion.button
            onClick={handleExplore}
            className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-4 rounded-xl text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Explore Events
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose EventAgents?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <Card>
            <h3 className="text-xl font-semibold mb-2">🎯 Easy to Use</h3>
            <p className="text-gray-600">Browse events and book tickets in just a few clicks.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">💳 Secure Payments</h3>
            <p className="text-gray-600">Pay safely with M-Pesa, PayPal, or your credit card.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">📊 For Everyone</h3>
            <p className="text-gray-600">Admins, employees, and users each get tailored tools.</p>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Explore Event Categories</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Concerts", "Conferences", "Sports", "Weddings"].map((cat) => (
              <Card key={cat} className="bg-white text-gray-900">
                <h3 className="text-xl font-semibold">{cat}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <Card>
            <p className="italic">"EventAgents made planning our wedding so stress-free!"</p>
            <h4 className="mt-4 font-semibold">- Sarah & John</h4>
          </Card>
          <Card>
            <p className="italic">"As an organizer, the dashboard is a lifesaver."</p>
            <h4 className="mt-4 font-semibold">- Michael, Event Planner</h4>
          </Card>
          <Card>
            <p className="italic">"Smooth booking and easy payments. Highly recommend!"</p>
            <h4 className="mt-4 font-semibold">- Amina, Concert Goer</h4>
          </Card>
        </div>
      </section>





      {/* CTA */}
      <section className="bg-yellow-400 text-black py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Experience the Future of Events?
        </h2>
        <Link to="/register">
          <Button className="bg-black text-white hover:bg-gray-800 text-lg">
            Get Started
          </Button>
        </Link>
      </section>




      {/* Trusted By Section */}
<section className="bg-white py-20">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6">Trusted By Leading Brands</h2>
    <p className="text-gray-600 mb-12">
      EventAgents is proud to be trusted by organizations, startups, and communities worldwide.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
      <img
        src="https://dummyimage.com/150x60/ddd/000.png&text=Brand+1"
        alt="Brand 1"
        className="mx-auto grayscale hover:grayscale-0 transition"
      />
      <img
        src="https://dummyimage.com/150x60/ddd/000.png&text=Brand+2"
        alt="Brand 2"
        className="mx-auto grayscale hover:grayscale-0 transition"
      />
      <img
        src="https://dummyimage.com/150x60/ddd/000.png&text=Brand+3"
        alt="Brand 3"
        className="mx-auto grayscale hover:grayscale-0 transition"
      />
      <img
        src="https://dummyimage.com/150x60/ddd/000.png&text=Brand+4"
        alt="Brand 4"
        className="mx-auto grayscale hover:grayscale-0 transition"
      />
    </div>
  </div>
</section>








{/* Testimonials Section */}
<section className="bg-gray-50 py-20">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-12">What People Are Saying</h2>
    <div className="grid md:grid-cols-3 gap-10">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
        <p className="text-gray-600 mb-6">
          “EventAgents made planning our corporate conference seamless.
          Booking and management have never been this easy!”
        </p>
        <div className="flex items-center justify-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="font-semibold">Jane Mwangi</h4>
            <p className="text-gray-500 text-sm">Event Organizer</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
        <p className="text-gray-600 mb-6">
          “I booked tickets for my favorite concert in seconds. Smooth
          experience and secure payments!”
        </p>
        <div className="flex items-center justify-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="font-semibold">David Otieno</h4>
            <p className="text-gray-500 text-sm">Music Fan</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
        <p className="text-gray-600 mb-6">
          “As an admin, I love the dashboard! It saves time and gives me
          full control over users and events.”
        </p>
        <div className="flex items-center justify-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/68.jpg"
            alt="User"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="font-semibold">Peter Kariuki</h4>
            <p className="text-gray-500 text-sm">System Admin</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
