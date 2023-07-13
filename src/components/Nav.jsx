import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import employees from "../employeesData";
import BasicTable from "./BasicTable.jsx";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // Search Functions
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredResults = employees.filter((employee) =>
      employee.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmployees(filteredResults);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
          <Toolbar>
            <IconButton
              sx={({ p: 3 }, { background: "blue" }, { width: "50px" })}
            >
              <Avatar
                sx={({ width: "50px" }, { height: "40px" })}
                alt="Remy Sharp"
                src="data:image/png;base64,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"
              />
            </IconButton>
            <Typography
              variant="h7"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              HEXAWARE HR SHIFT PORTAL
            </Typography>
            {/* Search Functionality */}
            <Search value={searchQuery} onChange={handleSearch}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* mail icon functionality */}
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              {/* notification icon functionality */}
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              {/* profle icon functionality */}
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            {/* Mobil Device More icon or side menu */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}
