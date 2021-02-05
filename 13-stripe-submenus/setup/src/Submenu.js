import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current; //gets the dom node
    const { center, bottom } = location; //get the coordinates
    submenu.style.left = `${center}px`; //change css
    submenu.style.top = `${bottom}px`; //change css
  }, [location]); //everytime location change, it trigger re-render submenu dom

  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
    >
      submenu
    </aside>
  );
};

export default Submenu;
