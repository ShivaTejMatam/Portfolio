//import { certifications } from "@/lib/certifications";

// const Certifications = () => {
//   return (
//     <section id="certifications" className="py-10 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
//           Certifications
//         </h2>
//         <div className="grid gap-6">
//           {certifications.map((cert, idx) => (
//             <div 
//               key={idx}
//               className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                 {cert.title}
//               </h3>
//               <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
//                 <span className="mr-4">{cert.issuedBy}</span>
//                 <span>{cert.issueDate}</span>
//               </div>
//               {cert.certificatePdf && (
//                 <a 
//                   href={cert.certificatePdf}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 mb-4"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
//                   </svg>
//                   View Certificate
//                 </a>
//               )}
//               <p className="text-gray-600 dark:text-gray-300">
//                 {cert.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "@/lib/certifications";

export default function Certifications() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      <section id="certifications" className="pt-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Certifications
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-4 p-6 border-none rounded-md shadow-md text-white w-full mx-auto cursor-pointer"
              onClick={() => toggleOpen(index)}
            >
              <div className="flex justify-between items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {cert.title}
                      <span className="font-bold group-hover:opacity-100 opacity-0 transition-opacity duration-300 ml-3">{">"}</span>
                    </h3>
                    <p className="text-sm text-gray-300">{cert.issuedBy}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 text-left sm:text-right w-full sm:w-auto">
                  {cert.issueDate}
                </p>
              </div>

              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`overflow-hidden mt-2 ${openIndex === index ? "pt-4" : ""}`}
              >
                <p className="text-gray-300 leading-relaxed mb-4">
                  {cert.description}
                </p>
                {cert.certificatePdf && (
                  <div className="mt-3">
                    <a
                      href={cert.certificatePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#D14309] hover:text-[#FF5722] transition-colors"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      View Certificate
                    </a>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
