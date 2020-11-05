import React, {useEffect} from "react";
import Head from "next/head";
import {Heading, Box, Text, useColorMode} from "@chakra-ui/core"

const AnswersTable: React.FC = () => {

  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    if (!colorMode) {
      if (window.localStorage) {
        const savedTheme = window.localStorage.getItem("chakra-ui-color-mode");
        if (savedTheme == "light" || savedTheme == "dark") {
          setColorMode(savedTheme);
        } else {
          setColorMode("dark");
        }
      } else {
        setColorMode("dark");
      }
    }
  }, [colorMode, setColorMode]);


  return (
    <>
      <Head>
        <title>Water Stadia</title>
      </Head>
      <Heading mt={3} mb={5} as="h1" size="2xl" textAlign="center">Applications I've Worked On</Heading>
      <Box w="500px" m="0 auto">
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
              <td>Ingredient</td>
              <td>http://ingredient.now.sh/</td>
              <td>Not Open Source</td>
            </tr>
          </tbody>
        </table>
      </Box>
      <Text pos="fixed" right={5} bottom={5}>- Prottoi</Text>
    </>
  );
};

export default AnswersTable;
