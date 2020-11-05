import React, { useEffect } from "react";
import Head from "next/head";
import { Heading, Box, Text, useColorMode, Link } from "@chakra-ui/core";

const AnswersTable: React.FC = () => {
  // const { colorMode, setColorMode } = useColorMode();

  // useEffect(() => {
  //   if (!colorMode) {
  //     if (window.localStorage) {
  //       const savedTheme = window.localStorage.getItem("chakra-ui-color-mode");
  //       if (savedTheme == "light" || savedTheme == "dark") {
  //         setColorMode(savedTheme);
  //       } else {
  //         setColorMode("dark");
  //       }
  //     } else {
  //       setColorMode("dark");
  //     }
  //   }
  // }, [colorMode, setColorMode]);

  return (
    <>
      <Head>
        <title>Water Stadia</title>
      </Head>
      <Heading mt={3} mb={5} as="h1" size="2xl" textAlign="center">
        Applications I've Worked On
      </Heading>
      <Box maxWidth="90%" m="0 auto">
        <table className="answerTableD">
          <thead>
            <tr>
              <th>Application</th>
              <th>Description</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link
                  href="https://ingredient.now.sh/"
                  color="cyan"
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Ingredient
                </Link>
              </td>
              <td>
                A web application that helps you find food dishes and provides
                detailed info about them.
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link
                  href="https://backdrop.vercel.app/"
                  color="cyan"
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Backdrop{" "}
                </Link>
              </td>

              <td>
                A web application to change/modify webcam stream and record
              </td>
              <td>
                <Link
                  href="https://github.com/Prottoy2938/backdrop"
                  color="cyan"
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  GitHub
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <Link
                  href="https://cluster-11.github.io/open-mind/"
                  color="cyan"
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Open Mind
                </Link>
              </td>

              <td>
                a web application that you can use to train a machine learning
                model and make it recognize certain images
              </td>
              <td>
                <Link
                  href="https://github.com/cluster-11/open-mind"
                  color="cyan"
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  GitHub
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <Link
                  href="https://cipher-delta.edrini.xyz/"
                  color="red"
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Cipher Delta
                </Link>
              </td>

              <td>
                A web application that helps encode and decode plain content
              </td>
              <td>
                <Link
                  href="https://github.com/Prottoy2938/cipher-delta"
                  color="green"
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  GitHub
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <Link
                  href="https://change-svg-color.edrini.xyz/"
                  color="red"
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Change SVG Color
                </Link>
              </td>

              <td>
                A web application that helps change SVG Color Using CSS Filter
              </td>
              <td>
                <Link
                  href="https://github.com/Prottoy2938/change-svg-color"
                  color="green"
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  GitHub
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
      <Text pos="fixed" right={5} bottom={5}>
        - Prottoi
      </Text>
    </>
  );
};

export default AnswersTable;
