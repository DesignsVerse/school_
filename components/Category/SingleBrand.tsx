// import React from "react";
// import Image from "next/image";
// import { Category } from "@/types/category";
// import { motion } from "framer-motion";
// import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

// const SingleCategory = ({ category }: { category: Category }) => {
//   const { icon, title, description, id, hoverImage } = category;

//   // Array of color pairs for background and border
//   const colorPairs = [
//     { bg: "#f0f9ff", border: "#7e57c2" }, // Light blue + Purple
//     { bg: "#fef3f2", border: "#f44336" }, // Light red + Red
//     { bg: "#f1fef2", border: "#4caf50" }, // Light green + Green
//     { bg: "#fff4e6", border: "#ff9800" }, // Light orange + Orange
//     { bg: "#f3e8ff", border: "#9c27b0" }, // Light purple + Purple
//   ];

//   const { bg, border } = colorPairs[id % colorPairs.length];

//   return (
//     <motion.div
//       variants={{
//         hidden: { opacity: 0, y: -20 },
//         visible: { opacity: 1, y: 0 },
//       }}
//       initial="hidden"
//       whileInView="visible"
//       transition={{ duration: 1, delay: id * 0.1 }}
//       viewport={{ once: true }}
//       className="tilted-box group relative max-w-md"
//       style={{
//         transform: "skewX(-10deg)",
//         backgroundColor: bg,
//         padding: "2rem",
//         borderRadius: "0.5rem",
//         display: "flex",
//         alignItems: "center",
//         position: "relative",
//         borderLeft: `4px solid ${border}`,
//         height: "200px",
//         transition: "background-color 0.3s, transform 0.3s, background-image 0.3s",
//       }}
//       whileHover={{
//         translateY: -4,
//         backgroundColor: `${border}33`, // Low opacity of border color
//         backgroundImage: hoverImage ? `url(${hoverImage})` : "none",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Circular Icon */}
//       <div
//         className="circle group-hover:bg-white"
//         style={{
//           backgroundColor: border,
//           color: "white",
//           borderRadius: "50%",
//           width: "6rem",
//           height: "6rem",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           position: "absolute",
//           left: "-3rem",
//           transform: "skewX(10deg)",
//           transition: "background-color 0.3s",
//         }}
//       >
//         <Image
//           className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden group-hover:filter-none"
//           src={icon}
//           alt={title}
//           width={32}
//           height={32}
//           style={{
//             objectFit: "contain",
//             filter: "brightness(0) invert(1)", // White icon by default
//             color: "white",
//           }}
//           // Set icon color to border color on hover
//           onMouseEnter={(e) => (e.currentTarget.style.color = border)}
//           onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
//         />
//         <Image
//           className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block group-hover:filter-none"
//           src={hoverImage || icon}
//           alt={title}
//           width={32}
//           height={32}
//           style={{
//             objectFit: "contain",
//             filter: "brightness(0) invert(1)", // White icon by default
//             color: "white",
//           }}
//           onMouseEnter={(e) => (e.currentTarget.style.color = border)}
//           onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
//         />
//       </div>

//       {/* Content */}
//       <div
//         className="tilted-content ml-16"
//         style={{
//           transform: "skewX(10deg)",
//           display: "flex",
//           alignItems: "center",
//           transition: "color 0.3s",
//         }}
//       >
//         <div>
//           <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-900 mb-1">
//             {title}
//           </h3>
//           <p className="text-gray-600 dark:text-gray-600 text-sm">
//             {description || "We can provide you with a handy in London."}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default SingleCategory;