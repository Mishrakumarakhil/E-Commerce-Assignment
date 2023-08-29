import React, { useState, useEffect, useRef } from "react";
import { menuItems } from "./utils";
import { Link } from "react-router-dom";

const MenuList = () => {
  const [visibleMenuItems, setVisibleMenuItems] = useState([]);
  const [hiddenMenuItems, setHiddenMenuItems] = useState([]);
  const menuRef = useRef(null);

  const calculateVisibleItems = () => {
    if (menuRef.current) {
      const menuWidth = menuRef.current.offsetWidth;
      const menuItemWidth = 120;
      const minVisibleItems = 1;

      let numVisibleItems = Math.max(
        minVisibleItems,
        Math.floor(menuWidth / menuItemWidth)
      );

      const visibleItems = menuItems.slice(0, numVisibleItems);
      const hiddenItems = menuItems.slice(numVisibleItems);

      setVisibleMenuItems(visibleItems);
      setHiddenMenuItems(hiddenItems);
    }
  };

  useEffect(() => {
    // Calculate visible and hidden menu items on initial load and when the screen width changes
    calculateVisibleItems();

    const handleResize = () => {
      calculateVisibleItems();
    };

    // Throttle the resize event for better performance
    let throttleTimeout;
    window.addEventListener("resize", () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
          handleResize();
        }, 200);
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="menu" ref={menuRef}>
        {visibleMenuItems.map((menuItem) => (
          <div key={menuItem.id}>
            <Link
              className="anchor-link"
              to={`/${menuItem.value.toLowerCase()}`}
            >
              {menuItem.value}
            </Link>
          </div>
        ))}
        {hiddenMenuItems.length > 0 && (
          <div className="more">
            More &#9662;
            <div className="submenu">
              {hiddenMenuItems.map((menuItem) => (
                <div key={menuItem.id}>
                  <Link to={`/${menuItem.value.toLowerCase()}`}>
                    {menuItem.value}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default MenuList;
