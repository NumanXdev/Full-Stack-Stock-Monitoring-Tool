import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";

// Material UI components
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

const CustomMenu = () => {
  const [cookies, removeCookie] = useCookies(["token"]);
  const [userData, setUserData] = useState({ id: "", username: "" });
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  // The useEffect hook should not be inside try-catch
  useEffect(() => {
    if (cookies.token) {
      try {
        const decodedToken = jwtDecode(cookies.token);
        const { id, username } = decodedToken;
        setUserData({ id, username });
      } catch (error) {
        console.error("Error decoding the token", error); // Handle token decoding error
      }
    }
  }, [cookies]);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    removeCookie("token");
    window.location.href = "https://full-stack-stock-monitoring-tool.vercel.app/login";
  };

  // Avatar Name & Avatar ID
  const avatarName =
    userData.username && userData.username.length >= 10
      ? userData.username.slice(0, 2).toUpperCase()
      : userData.username.slice(0, 1);
  const userId = userData.id.slice(0, 3);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  //menu
  const [show, setShow] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setShow(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { text: "Dashboard", path: "/dashboard" },
          { text: "Orders", path: "/orders" },
          { text: "Holdings", path: "/holdings" },
          { text: "Positions", path: "/positions" },
          { text: "Funds", path: "/funds" },
          { text: "Apps", path: "/apps" },
        ].map((item, index) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding>
              <Link
                to={item.path}
                style={{ textDecoration: "none", width: "100%" }}
                onClick={() => handleMenuClick(index)}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <DoubleArrowIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      className:
                        selectedMenu === index ? activeMenuClass : menuClass,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <hr />
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Tooltip title="Your Account">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    fontSize: "0.8rem",
                    backgroundColor: "primary.main",
                  }}
                >
                  {avatarName}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          {/* DrawerList */}

          <Button onClick={toggleDrawer(true)}>
            <MenuIcon />
          </Button>
          <Drawer open={show} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> {userData.username}
            </MenuItem>

            <Divider />

            <MenuItem onClick={logout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      </div>
    </div>
  );
};

export default CustomMenu;
