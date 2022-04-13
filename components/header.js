import {
  Container,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import MonitorIcon from "../assets/images/monitor.svg";
import menu from "../assets/images/menu.png";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="header">
      <Container maxW="container.xl">
        <div className="flex spaceBetween alignCenter">
          <div>
            <h3 className="logoText">TERRA TREASURY</h3>
          </div>
          <div className="navLinks noMobile">
            <p className="navLink">DASHBOARD</p>
            <p className="navLink">DEVELOPERS</p>
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
          <div className="hamburger" onClick={onOpen}>
            <Image alt="menu" src={menu}></Image>
          </div>
          <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                <div className="navLinks mobileNav">
                  <p className="navLink">DASHBOARD</p>
                  <p className="navLink">DEVELOPERS</p>
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
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </Container>
    </div>
  );
}
