
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useBooking } from "../hooks/BookingContext";
import { btn, wrap } from "../ui";
import Logo from "./Logo";

const LINKS = [
  ["#departments", "Departments"],
  ["#doctors", "Our Doctors"],
  ["#pharmacy", "Pharmacy"],
  ["#reviews", "Reviews"],
  ["#faq", "FAQs"],
];

const navVariants = {
  hidden: {
    opacity: 0,
    y: -18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Navbar() {
  const prog = useRef(null);
  const { openBooking } = useBooking();

  /* scroll progress bar */
  useEffect(() => {
    const f = () => {
      if (!prog.current) return;
      prog.current.style.width =
        (scrollY /
          Math.max(1, document.documentElement.scrollHeight - innerHeight)) *
          100 +
        "%";
    };

    addEventListener("scroll", f, { passive: true });
    f();

    return () => removeEventListener("scroll", f);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-[env(safe-area-inset-top,0px)] z-50 bg-glass backdrop-blur-[14px] border-b border-line"
    >
      {/* Scroll progress bar */}
      <motion.div
        ref={prog}
        initial={{ width: "0%" }}
        className="absolute left-0 -bottom-px h-[3px] w-0 z-[2] bg-[linear-gradient(90deg,var(--teal),var(--amber))]"
      />

      <div
        className={`${wrap} flex items-center justify-between h-[70px] gap-4`}
      >
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Logo href="#top" ariaLabel="Ramay Clinic home" />
        </motion.div>

        {/* Navigation links */}
        <motion.div
          variants={navVariants}
          className="flex gap-6 font-medium text-[15px] text-muted m820:hidden"
        >
          {LINKS.map(([href, label]) => (
            <motion.a
              key={href}
              href={href}
              variants={itemVariants}
              whileHover={{
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.96 }}
              className="hover:text-teal transition-colors duration-300"
            >
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* Appointment button */}
        <motion.button
          variants={itemVariants}
          className={btn("p", "px-[18px] py-[10px]")}
          onClick={() => openBooking()}
          whileHover={{
            scale: 1.045,
            y: -2,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 17,
            },
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          Book Appointment
        </motion.button>
      </div>
    </motion.nav>
  );
}
