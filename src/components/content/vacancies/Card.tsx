import React from "react";
import { motion } from "framer-motion";
import type { Vacancy } from "@/pages/vacancies";
import Link from "next/link";

const Card: React.FC<Vacancy> = ({
  title,
  location,
  salaryRange,
  description,
  experienceLevel,
  publishedDate,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
      <div className="flex flex-col w-full py-3">
        <div className="flex justify-between items-center">
        <h1 className="text-lg text-color-white">{title}</h1>
          <span className="flex gap-4 rounded-sm bg-color-yellow px-12 py-3 tracking-tighter text-color-black hover:bg-color-yellow/20 hover:text-color-white">
            <Link href="/apply">
              <p>Apply</p>
            </Link>
          </span>
          </div>
        <div className="h-[1px] w-full bg-color-white mt-4" />
      </div>
    // <div>
    //   <div
    //     className="flex items-center justify-between cursor-pointer py-3"
    //     onClick={() => setExpanded(!expanded)}
    //   >
    //     <h1 className="text-lg text-color-white">{title}</h1>
    //     <motion.div
    //       className="h-14 w-28 rounded-full flex items-center justify-center"
    //       style={{ borderColor: expanded ? '#FFD95A' : 'gray' }}
    //       animate={{ rotate: expanded ? 360 : 0 }}
    //       transition={{ duration: 0.3 }}
    //     >
    //       {expanded ? (
    //         <span className="bg-color-yellow/50 text-color-black rounded-lg px-3">
    //           Hide Details
    //         </span>
    //       ) : (
    //         <span className="bg-color-yellow/50 text-color-black rounded-lg px-3">
    //           Read More
    //         </span>
    //       )}
    //     </motion.div>
    //   </div>
    //   <motion.div
    //     className="overflow-hidden"
    //     initial={{ height: 0 }}
    //     animate={{ height: expanded ? "auto" : 0 }}
    //     transition={{ duration: 0.3 }}
    //   >
    //     <p className="p-2 text-color-white/80">Location: {location}</p>
    //     <p className="p-2 text-color-white/80">Salary: {salaryRange}</p>
    //     <p className="p-2 text-color-white/80">Description: {description}</p>
    //     <p className="p-2 text-color-white/80">Experience Level: {experienceLevel}</p>
    //     <p className="p-2 text-color-white/80">Published Date: {new Date(publishedDate).toLocaleDateString()}</p>
    //   </motion.div>
    //   <div className="h-[1px] w-full bg-color-white" />
    // </div>
  );
};

export default Card;
