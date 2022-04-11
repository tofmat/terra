import React from "react";
import { Grid, GridItem, Container, Button } from "@chakra-ui/react";
import Image from "next/image";
import LineChart from "../assets/images/lineChart.png";
import MonitorIcon from "../assets/images/monitor.svg";
import InfoIcon from "../assets/images/infoIcon.svg";
export default function FrictionlessAccess() {
  return (
    <div>
      <div className="section animatorContent">
        <Container maxW="container.xl">
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(12, 1fr)",
            ]}
            gap={10}
          >
            <GridItem colSpan={[1, 1, 8]}>
              <div className="textCenterMobile">
                <h2 className="headerText">
                  Terra Treasury offers{" "}
                  <span className="textGradient">frictionless access</span>
                </h2>
                <p className="subHeader mt-2">
                  Earn 34.87% APY in just three simple steps. <br /> Start you
                  savings journey now and grow your portfolio today.
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
            <GridItem colSpan={[1, 1, 4]}></GridItem>
          </Grid>
          <div>
            <Image alt="linechart" src={LineChart} />
          </div>
        </Container>
      </div>
    </div>
  );
}
