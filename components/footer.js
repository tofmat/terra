import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import MediumIcon from "../assets/images/MediumIcon.svg";
import monitorIcon from "../assets/images/monitorIcon.svg";
import SubtractIcon from "../assets/images/SubtractIcon.svg";
import twitterIcon from "../assets/images/twitterIcon.svg";
import bookIcon from "../assets/images/bookIcon.svg";

export default function Footer() {
  return (
    <div className="footer">
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={6}>
            <div className="flex footerLinks flexWrap">
              <p>CONTACT</p>
              <p>WHITEPAPER</p>
              <p>OFFICIAL TERRASWAP</p>
              <p>WE’RE HIRING</p>
              <p>AUDIT</p>
            </div>
          </GridItem>
          <GridItem colSpan={6}>
            <div className="flex socialsLink">
              <div className="socialLink">
                <Image src={twitterIcon} alt="" />
              </div>
              <div className="socialLink">
                <Image src={SubtractIcon} alt="" />
              </div>
              <div className="socialLink">
                <Image src={MediumIcon} alt="" />
              </div>
              <div className="flex alignCenter socialLink">
                <div className="mr-1">
                  <Image src={bookIcon} alt="" />
                </div>
                <p>DOCS</p>
              </div>
              <div className="flex alignCenter socialLink">
                <div className="mr-1">
                  <Image src={monitorIcon} alt="" />
                </div>
                <p>WEBAPP</p>
              </div>
            </div>
          </GridItem>
        </Grid>
        <p className="copyright textCenterMobile">© Copyright 2022 - Legal</p>
      </Container>
    </div>
  );
}
