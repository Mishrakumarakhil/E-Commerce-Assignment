import React from "react";
import { menuItems } from "./utils";

const MenuList = () => {
  
  return (
    <>
      {menuItems.map((element) => {
        return (
          <div className="menu-items" key={element.id}>
            {element.value}
          </div>
        );
      })}
    </>
  );
};
export default MenuList;
