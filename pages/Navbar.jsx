import React from "react";
import Link from "next/link";
import { Box, Text, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Box display="flex" justifyContent="space-evenly" width="50%">
        <Link href="/">
          <Text>Santosh Sharma</Text>
        </Link>
        <Link href="/">
          <Text>Workspace</Text>
        </Link>
        <Link href="/Projects">
          <Button color="white" backgroundColor="black">
            Projects
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Navbar;
