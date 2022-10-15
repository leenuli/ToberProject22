import { BottomNavigation, BottomNavigationAction } from "@mui/material";
function Footer() {
  return (
    <BottomNavigation position="fixed">
      <BottomNavigationAction label="Love" icon={<div>❤️️</div>} />
    </BottomNavigation>
  );
}

export default Footer;
