import React from "react";
import { Grid, GridItem, Container, Button } from "@chakra-ui/react";
import Image from "next/image";
import bigMonitor from "../assets/images/bigMonitor.png";
import oak from "../assets/images/oak.png";
import InfoIcon from "../assets/images/infoIcon.svg";
import MonitorIcon from "../assets/images/monitor.svg";

export default function GenuisWebapp() {
  return (
    <div className="genuisWebApp">
      <div className="section">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(12, 1fr)",
          ]}
          gap={20}
          className="alignCenter"
        >
          <GridItem colSpan={[1, 1, 6]}>
            <div className="centerMobile laptopMockup">
              <Image alt="MonitorMockup" src={bigMonitor} />
            </div>
          </GridItem>
          <GridItem colSpan={[1, 1, 6]} className="textCenterMobile">
            <div>
              <h2 className="headerText">
                Terra Treasury offers a{" "}
                <span className="textGradient">genius</span>
                <span className="textGradient2"> WebApp</span>
              </h2>
              <p className="subHeader mt-5">
                Built simple and secure - Enjoy the most valuable ecosystem in
                the world.
              </p>
              <div className="flex alignBase">
                <p className="subHeader mr-1">Audit in Progress by:</p>
                <div className="oakWidth">
                  <Image alt="oakLogo" src={oak} />
                </div>
              </div>
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
        </Grid>
      </div>
    </div>
  );
}
