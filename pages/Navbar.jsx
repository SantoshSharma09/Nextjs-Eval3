import React from "react";
import Link from "next/link";
import { Box, Text, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white", height:"60px", paddingTop:"15px" }}>
      <Box display="flex" justifyContent="space-evenly" width="50%">
        <Link href="/">
          <Text>Santosh Sharma</Text>
        </Link>
        <Link href="/">
          <Text>Workspace</Text>
        </Link>
        <Link href="/Projects">
          <Text color="white" backgroundColor="black">
            Projects
          </Text>
        </Link>
      </Box>
    </div>
  );
};

export default Navbar;
