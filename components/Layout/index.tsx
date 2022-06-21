import React, { PropsWithChildren } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Flex, Container, Box } from "@chakra-ui/react";
import Head from "next/head";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Eraylee </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" minH="100vh">
        <Box flex={1}>
          <Header />
          <Container>{children}</Container>
        </Box>
        <Footer />
      </Flex>
    </>
  );
};