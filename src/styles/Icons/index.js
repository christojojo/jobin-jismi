import React from "react";
import iconSet from "./selection.json";
import IcoMoon from "react-icomoon";

const Icons = ({size="20px", className="", icon="arrow-forward", ...props }) => {
  return <IcoMoon icon={icon} className={className} size={size} iconSet={iconSet} {...props} />;
};

export default Icons;