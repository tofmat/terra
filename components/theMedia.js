import React from "react";
import { Grid, GridItem, Container, Button } from "@chakra-ui/react";
import Image from "next/image";
import cryptomiracles from "../assets/images/cryptomiracles.png";
import cryptoofficials from "../assets/images/cryptoofficials.png";
import cryptoreflect from "../assets/images/cryptoreflect.png";
import InfoIcon from "../assets/images/info.svg";
import MonitorIcon from "../assets/images/monitor.svg";

export default function TheMedia() {
  return (
    <div className="section">
      <Container maxW="container.xl">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(12, 1fr)",
          ]}
          gap={10}
          className="alignCenter"
        >
          <GridItem colSpan={[1, 1, 6]}>
            <div className="textCenterMobile">
              <h2 className="headerText">
                Terra Treasury featured in{" "}
                <span className="textGradient">the Media</span>
              </h2>
              <p className="subHeader mt-1">
                Terra Treasury has been featured in well-known online
                publications such as: CryptoOfficials.com, Cryptoreflect, and
                much more! We are in talks with other media publications which
                will bring further attention to the project.
              </p>
              <div className="flex mt-2 centerMobile">
                <div className="mr-1">
                  <Button className="learnBtn">
                    <div className="flex alignCenter">
                      <p className="mr-1">Learn More</p>{" "}
                      <div>
                        <Image alt="infoIcon" src={InfoIcon}></Image>
                      </div>
                    </div>
                  </Button>
                </div>
                <div>
                  <Button className="defaultBtn">
                    <div className="flex alignCenter">
                      <div className="mr-1">
                        <Image alt="infoIcon" src={MonitorIcon}></Image>
                      </div>{" "}
                      <p>WebApp</p>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem colSpan={[1, 1, 6]} className="partnerLogos">
            <div className="flex spaceBetween flexGapMobile">
              <div>
                <Image alt="" src={cryptomiracles}></Image>
              </div>
              <div>
                <Image alt="" src={cryptoofficials}></Image>
              </div>
            </div>
            <div className="flex justifyCenter mt-5">
              <Image alt="" src={cryptoreflect}></Image>
            </div>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
