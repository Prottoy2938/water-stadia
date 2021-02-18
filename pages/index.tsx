import React from "react";
import Head from "next/head";
import { Heading, Box, Text, Link } from "@chakra-ui/core";

const AnswersTable: React.FC = () => {
  return (
    <>
      <Head>
        <title>Water Stadia</title>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Box>
        <Heading mt={5} mb={10} as="h1" size="xl" textAlign="center">
          Applications I've Worked On
        </Heading>
        <Box width={["95%", "90%", "75%", "800px"]} m="0 auto">
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
                    href="https://surveywave.xyz/"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    SurveyWave
                  </Link>
                </td>

                <td>
                  <Link
                    href="https://surveywave.xyz/"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    A Web Platform That Helps You Do Surveys and Get Peoples
                    Feedback
                  </Link>
                </td>
                <td></td>
              </tr>

              <tr>
                <td>
                  <Link
                    href="https://cluster-11.github.io/open-mind/"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Open Mind
                  </Link>
                </td>

                <td>
                  <Link
                    href="https://cluster-11.github.io/open-mind/"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    A web application that you can use to train a machine
                    learning model and make it recognize certain images
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://github.com/cluster-11/open-mind"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    GitHub
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <Link
                    href="https://cipher-delta.vercel.app/"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Cipher Delta
                  </Link>
                </td>

                <td>
                  <Link
                    href="https://cipher-delta.vercel.app"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    A web application that helps encode and decode text content
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://github.com/Prottoy2938/cipher-delta"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    GitHub
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://detect-text-toxicity.vercel.app"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Text Toxicity Detection
                  </Link>
                </td>

                <td>
                  <Link
                    href="https://detect-text-toxicity.vercel.app"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    A webapp that helps you detect text toxicity
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://github.com/Prottoy2938/detect-text-toxicity-frontend"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    GitHub
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://change-svg-color.vercel.app"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Change SVG Color
                  </Link>
                </td>

                <td>
                  <Link
                    href="https://change-svg-color.vercel.app"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    A web application that helps change SVG Color Using CSS
                    Filter
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://github.com/Prottoy2938/change-svg-color"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    GitHub
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://backdrop.vercel.app/"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Backdrop{" "}
                  </Link>
                </td>

                <td>
                  <Link
                    href="https://backdrop.vercel.app/"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    A web application to change/modify webcam stream and record
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://github.com/Prottoy2938/backdrop"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    GitHub
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://ingredient.now.sh/"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Ingredient
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://ingredient.now.sh/"
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    A web application that helps you find food dishes and
                    provides detailed info about them.
                  </Link>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Link href="https://github.com/Prottoy2938">
          <Text
            pos="fixed"
            right={5}
            bottom={5}
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Prottoi
          </Text>
        </Link>
      </Box>
    </>
  );
};

export default AnswersTable;
