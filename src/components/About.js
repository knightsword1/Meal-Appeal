// import User from "./User";
// import UserClass from "./UserClass";

// import { Component } from "react";

// import UserContext from "../utils/UserContext";

// class About extends Component {
//   constructor(props) {
//     super(props);

//     console.log("Parent Constructor");
//   }

//   componentDidMount() {
//     // console.log("Parent Did Mount");
//   }

//   render() {
//     // console.log("Parent Render");
//     return (
//       <div className="min-h-screen">
//         <h1>About Class Component</h1>

//         {/* Example of UserContext in class based component */}
//         <div>
//           LoggedIn User :
//           <UserContext.Consumer>
//             {({ loggedInUser }) => (
//               <h1 className="font-bold">{loggedInUser}</h1>
//             )}
//           </UserContext.Consumer>
//         </div>
//         <h2>
//           This is Meal Appeal . Order Hot n' Fresh, scrumptious meals and get it
//           delivered safe and quick. Enjoy!!!😋
//         </h2>
//         <h4>Made in India with 💖</h4>

//         <User name={"Ayush Sinha (function)"} />
//         {/* <UserClass name={"Ayush Sinha (class)"} location={"Patna Class"} /> */}
//       </div>
//     );
//   }
// }
// // const About = () => {
// //   return (
// //     <div>
// //       <h1>About</h1>
// //       <h2>
// //         This is Meal Appeal . Order Hot n' Fresh, scrumptious meals and get it
// //         delivered safe and quick. Enjoy!!!😋
// //       </h2>
// //       <h4>Made in India with 💖</h4>

// //       {/* <User name={"Ayush Sinha (function)"} /> */}
// //       <UserClass name={"Ayush Sinha (class)"} location={"Patna Class"} />
// //     </div>
// //   );
// // };

// export default About;

// src/pages/AboutUs.jsx
import React from "react";
import { Link } from "react-router";
import { FaUtensils, FaClock, FaSmile, FaLeaf } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-44 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Meal Appeal
          </h1>
        </div>
      </div>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg">
          At <strong>Meal Appeal</strong>, our mission is to bring delicious,
          fresh, and affordable meals to your doorstep with just a few clicks.
          We connect you with local restaurants and chefs who care about quality
          and taste.
        </p>
      </section>

      {/* Story Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg">
            Founded in 2024 by food lovers and tech geeks, Meal Appeal started
            as a small project to make food ordering easier. Today, we serve
            thousands of happy customers and hundreds of partner restaurants
            across the city.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Meal Appeal?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <FaUtensils className="text-4xl text-yellow-500 mb-3 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Tasty Meals</h3>
            <p className="text-gray-600">
              Handpicked dishes from top local chefs and restaurants.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <FaClock className="text-4xl text-yellow-500 mb-3 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your food hot and fresh in under 30 minutes.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <FaSmile className="text-4xl text-yellow-500 mb-3 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Customer First</h3>
            <p className="text-gray-600">
              Our support team is here to make your experience amazing.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <FaLeaf className="text-4xl text-yellow-500 mb-3 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Sustainable</h3>
            <p className="text-gray-600">
              We partner with eco-friendly kitchens and delivery services.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-400 py-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Ready to satisfy your cravings?
        </h2>
        <p className="text-lg text-gray-800 mb-4">
          Browse menus, place an order, and enjoy amazing meals from Meal
          Appeal!
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition"
        >
          View Menu
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
