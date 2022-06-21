import {
  Box,
  Link,
  IconButton,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon);

  return (
    <Flex
      minWidth="max-content"
      paddingX={4}
      paddingY={2}
      alignItems="center"
      gap="2"
    >
      <Box>
        <Heading size="md">
          {" "}
          <NextLink href="/" passHref>
            <Link>ERAYLEE</Link>
          </NextLink>{" "}
        </Heading>
      </Box>
      <Spacer />
      <NextLink href="/gallery" passHref>
        <Link>作品</Link>
      </NextLink>

      <NextLink href="/about" passHref>
        <Link>关于</Link>
      </NextLink>
      <IconButton
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        icon={<SwitchIcon />}
        onClick={toggleColorMode}
      ></IconButton>
      <Link>Github</Link>
    </Flex>
  );
};
