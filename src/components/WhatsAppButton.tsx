"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
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
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-green-500/50
        animate-pulse
      "
    >
      <FaWhatsapp size={34} />
    </a>
  );
}