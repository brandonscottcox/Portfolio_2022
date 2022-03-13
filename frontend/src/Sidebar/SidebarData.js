import React from "react";
// import InfoIcon from "@material-ui/icons/Info";
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
  {
    title: "Contact",
    icon: <ContactMailIcon />,
    link: "/contact",
  },
];
