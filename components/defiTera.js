import React from "react";
import { Grid, GridItem, Container, Button } from "@chakra-ui/react";
import Image from "next/image";
import security from "../assets/images/security.svg";
import yieldIcon from "../assets/images/yield.svg";
import MonitorIcon from "../assets/images/monitor.svg";
import stability from "../assets/images/stability.svg";
import InfoIcon from "../assets/images/infoIcon.svg";
import flexibility from "../assets/images/flexibility.svg";

export default function DefiTerra() {
  return (
    <div className="">
      <Container maxW="container.xl">
        <h2 className="headerText textCenterMobile">
          Take your first step <br /> into{" "}
          <span className="textGradient">DeFi</span> with{" "}
          <span className="textGradient">Terra Treasury </span>
        </h2>
        <div className="flex mt-5 centerMobile">
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
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(12, 1fr)",
          ]}
          gap={[5, 10, 20]}
          className="mt-5"
        >
          <GridItem colSpan={[1, 1, 6]} rowSpan={1}>
            <div>
              <div className="flex defiExplained alignCenter">
                <div className="mr-2">
                  <Image alt="icon" src={yieldIcon} />
                </div>
                <p>
                  <span>High Yields:</span> earn the highest stable yield in
                  crypto with terra treasury savings.
                </p>
              </div>
            </div>
          </GridItem>
          <GridItem colSpan={[1, 1, 6]} rowSpan={1}>
            <div>
              <div className="flex defiExplained alignCenter">
                <div className="mr-2">
                  <Image alt="icon" src={security} />
                </div>
                <p>
                  <span>Security:</span> Our highest priority is to maximize the
                  safety of our users funds, our partner projects, and our
                  community.
                </p>
              </div>
            </div>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(12, 1fr)",
          ]}
          gap={[5, 10, 20]}
          className="mt-5"
        >
          <GridItem colSpan={[1, 1, 6]} rowSpan={1}>
            <div>
              <div className="flex defiExplained alignCenter">
                <div className="mr-2">
                  <Image alt="icon" src={flexibility} />
                </div>
                <p>
                  <span>Flexibility:</span> Deposit and withdraw your savings
                  anytime, anywhere.No minimum deposit required for maximum
                  flexibility!
                </p>
              </div>
            </div>
          </GridItem>
          <GridItem colSpan={[1, 1, 6]} rowSpan={1}>
            <div>
              <div className="flex defiExplained alignCenter">
                <div className="mr-2">
                  <Image alt="icon" src={stability} />
                </div>
                <p>
                  <span>Stability:</span> Terra Treasury offers unparalleled
                  stable interest rates for UST and LUNA.
                </p>
              </div>
            </div>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
