import React from "react";
import { Grid, GridItem, Container, Button } from "@chakra-ui/react";
import Image from "next/image";
import heroLogo from "../assets/images/heroLogo.png";
import { motion } from "framer-motion";
import coin from "../assets/images/coin.svg";

export default function HeroSection() {
  return (
    <div className="animatorContent">
      <div className="heroSection">
        <Container maxW="container.xl">
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(12, 1fr)",
            ]}
            gap={10}
            className="alignCenter heroSec"
          >
            <GridItem colSpan={[1, 1, 5]} className="centerMobile">
              <div className="spinningLogo">
                <Image alt="spinning logo" src={heroLogo}></Image>
              </div>
            </GridItem>
            <GridItem colSpan={[1, 1, 7]}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <h2 className="headerText">
                  Terra Treasury <br /> First Decentralized {""}
                  <span className="textGradient">3rd Gen. Savings</span>{" "}
                  <span className="textGradient">Protocol</span>
                </h2>
                <div className="flex mt-3 centerMobile">
                  <div className="mr-1">
                    <Button className="earnBtn">
                      <p className="mr-1">Earn 34.87% APY</p>{" "}
                    </Button>
                  </div>
                  <div>
                    <Button className="defaultBtn">
                      <div className="flex alignCenter">
                        <div className="mr-1">
                          <Image alt="infoIcon" src={coin}></Image>
                        </div>{" "}
                        <p>Save Now</p>
                      </div>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </GridItem>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
