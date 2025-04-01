// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "motion/react";

// const LETTER_DELAY = 0.025;
// const BOX_FADE_DURATION = 0.025;
// const FADE_DELAY = 4;
// const MAIN_FADE_DURATION = 0.2;
// const SWAP_DELAY_IN_MS = 4000;

// const Typewrite = ({ texts }) => {
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTextIndex((prev) => (prev + 1) % texts.length);
//     }, SWAP_DELAY_IN_MS);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <motion.p
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6, delay: 1.2 }} // "Hello !" tugaganidan keyin boshlanadi
//       className="w-full relative h-[60px] sm:h-[80px] mb-2.5 sm:text-5xl text-3xl font-light font-Poppins text-center"
//     >
//       {texts[textIndex].split("").map((l, i) => (
//         <motion.span key={`${textIndex}-${i}`} className="relative">
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2 + i * LETTER_DELAY, duration: 0 }} // Kechikish "Hello !" ga bog'liq
//           >
//             {l}
//           </motion.span>
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: [0, 1, 0] }}
//             transition={{
//               delay: 1.2 + i * LETTER_DELAY,
//               times: [0, 0.1, 1],
//               duration: BOX_FADE_DURATION,
//               ease: "easeInOut",
//             }}
//             className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
//           />
//         </motion.span>
//       ))}
//     </motion.p>
//   );
// };

// export default Typewrite