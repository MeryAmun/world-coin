import React, { useState } from "react";
import "./navbar.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
//import { StyledEngineProvider } from '@mui/material/styles';
import { navbarLinkItems } from "../../utils/utils";
import { logo } from "../../assets";

const drawerWidth = 240;
const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div
      onClick={handleDrawerToggle}
      className="navbar__mobile-screen"
    >
      <div className="navbar__logo-box">
        <Link to="/" className="">
          <img src={logo} alt="" />
        </Link>
      </div>
      <Divider />
      <div className="navbar__mobile-links">
        {navbarLinkItems.map((item) => (
          <Link to={item.path} key={item.name} className="navbar__link">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    // <StyledEngineProvider injectFirst>
    <div style={{ width: "100%" }}>
      <CssBaseline />
      <div component="nav" className="navbar">
        <div className="navbar__logo">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="navbar__logo-desktop">
            <Link to="/" className="navbar__link">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <Toolbar sx={{ marginRight: "-200px" }}>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              width: "100%",
              marginRight: "0px",
            }}
          >
            {navbarLinkItems.map((item, index) => (
              <Link to={item.path} key={index} className="navbar__link">
                {item.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </div>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
    // </StyledEngineProvider>
  );
};

export default Navbar;
