"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"

      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0],
      }}

      transition={{
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}

      whileHover={{
        scale: 1.12,
      }}

      whileTap={{
        scale: 0.92,
      }}

      className="
        group
        fixed
        bottom-6
        right-6
        z-[999]
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_10px_35px_rgba(37,211,102,.45)]
      "
    >
      <FaWhatsapp size={34} />

      <span
        className="
          pointer-events-none
          absolute
          right-20
          whitespace-nowrap
          rounded-full
          bg-zinc-900
          border
          border-zinc-700
          px-4
          py-2
          text-sm
          font-semibold
          text-white
          opacity-0
          transition-all
          duration-300
          translate-x-3
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        Fale conosco
      </span>

      <span
        className="
          absolute
          inset-0
          rounded-full
          border-2
          border-[#25D366]
          animate-ping
          opacity-20
        "
      />
    </motion.a>
  );
}