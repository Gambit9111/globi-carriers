import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Footer from "./Footer";
import Image from "next/image";
import globi from "../../../public/icons/globi-icon.svg";
import { useRouter } from "next/router";

type Header2Props = {};

const links = [
  { href: "/", name: "Home" },
  { href: "/about-us", name: "About Us" },
  { href: "/vacancies", name: "Vacancies" },
  { href: "/employers", name: "Employers" },
  { href: "/apply", name: "Apply" },
];

const Header2: React.FC<Header2Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentURL = router.asPath;
  console.log(currentURL)

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // TODO find a different wy to do this
  // ? prevents the page to be scrolled down when the header menu is active, prevents to scroll down to see the bottom of the footer which i put in the menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const variants = {
    // @ts-ignore
    open: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.15,
      },
    }),
    closed: { opacity: 0 },
  };

  return (
    <>
      <header className="sticky top-0 z-10 mx-16 hidden items-center gap-8 border-b border-white/50 bg-color-black py-4 text-color-white xl:flex">
        <motion.div
          className="ml-4 flex h-12 w-12 items-center justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }}
        >
          <Link href="/">
            <Image src={globi} width={150} alt="logo" />
          </Link>
        </motion.div>

        <div className="flex gap-12">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.2 }}
          >
            <Link
              href="/"
              className={
                currentURL === "/" ? 'text-xl font-light uppercase text-color-yellow' : 'text-xl font-light uppercase text-color-white/50 hover:text-color-yellow'
              }
            >
              Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.2 }}
          >
            <Link
              href="/about-us"
              className={
                currentURL === "/about-us" ? 'text-xl font-light uppercase text-color-yellow' : 'text-xl font-light uppercase text-color-white/50 hover:text-color-yellow'
              }
            >
              About Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.2 }}
          >
            <Link
              href="/vacancies"
              className={
                currentURL === "/vacancies" ? 'text-xl font-light uppercase text-color-yellow' : 'text-xl font-light uppercase text-color-white/50 hover:text-color-yellow'
              }
            >
              Vacancies
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.2 }}
          >
            <Link
              href="/employers"
              className={
                currentURL === "/employers" ? 'text-xl font-light uppercase text-color-yellow' : 'text-xl font-light uppercase text-color-white/50 hover:text-color-yellow'
              }
            >
              Employers
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.2 }}
          >
            <Link
              href="/apply"
              className={
                currentURL === "/apply" ? 'text-xl font-light uppercase text-color-yellow' : 'text-xl font-light uppercase text-color-white/50 hover:text-color-yellow'
              }
            >
              Apply
            </Link>
          </motion.div>
        </div>
      </header>
      {/* mobile */}
      <header className="sticky top-0 z-10 mx-4 flex items-center bg-color-black py-4 text-color-white xl:hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute top-20 h-[1px] w-full bg-color-white"
        />
        <motion.button
          className="z-30"
          onClick={handleToggle}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {isOpen ? (
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 18L24 6M8 6L24 18"
                stroke="#F6F2EC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9H27M5 15.75H27"
                stroke="#F6F2EC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.button>
        <motion.div
          className="ml-4 flex h-12 w-12 items-center justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <Link href="/">
            <Image src={globi} width={150} alt="logo" />
          </Link>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed left-0 top-[5.05rem] z-20 h-[calc(100vh-5.05rem)] w-full overflow-auto bg-color-black flex flex-col justify-between"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5 }}
            >
              <ul className="space-y-4 p-4 pt-16 text-3xl font-light uppercase text-color-white/50">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    custom={i}
                    variants={variants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link className="hover:text-color-yellow" href={link.href}>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header2;
