"use client";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import { NextLink } from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  return pathname != "/team" ? (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IFAML
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" component={NextLink} href="/">
              Home
            </Button>
            {/* <Button color="inherit">Log In</Button> */}
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: "70px" }} />
    </>
  ) : (
    <div></div>
  );
};

export default Navbar;
