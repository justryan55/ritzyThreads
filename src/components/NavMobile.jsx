import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import router from "../pages/Routes";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
    </div>
  );
};
