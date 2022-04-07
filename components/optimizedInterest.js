import React from "react";
import { Grid, GridItem, Container, Button } from "@chakra-ui/react";
import Image from "next/image";
import InfoIcon from "../assets/images/info.svg";
import MonitorIcon from "../assets/images/monitor.svg";
import { motion } from "framer-motion";

export default function OptimizedInterest() {
  const svgVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0, strokeWidth: 0 },
    visible: {
      opacity: 1,
      strokeWidth: 1,
      pathLength: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="section">
      <Container maxW="container.xl">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={12}
          className="alignCenter optimizedInterest"
        >
          <GridItem colSpan={[1, 1, 1]}>
            <div>
              <h2 className="headerText">
                Terra Treasury offers{" "}
                <span className="textGradient">optimized interest</span>
              </h2>
              <p className="subHeader mt-2">
                Terra Treasury’s yield is stable, secure and attractive.It is
                powered by staking returns and 3rd. generation arbitrage farming
                from multiple proof of stake blockchains & DEX’s.
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
          <GridItem colSpan={[1, 1, 1]} className="secondGrid">
            <div className="centerMobile rolingSvg">
              <motion.svg
                variants={svgVariant}
                initial="hidden"
                animate="visible"
                width="567"
                height="567"
                viewBox="0 0 567 567"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M431.206 279.926C431.206 363.476 363.476 431.206 279.926 431.206C196.377 431.206 128.647 363.476 128.647 279.926C128.647 196.377 196.377 128.647 279.926 128.647C363.476 128.647 431.206 196.377 431.206 279.926ZM143.775 279.926C143.775 355.121 204.732 416.078 279.926 416.078C355.121 416.078 416.078 355.121 416.078 279.926C416.078 204.732 355.121 143.775 279.926 143.775C204.732 143.775 143.775 204.732 143.775 279.926Z"
                  fill="#151A20"
                  strokeWidth="1"
                />
                <motion.path
                  d="M464.559 281.118C464.559 382.429 382.429 464.559 281.118 464.559C179.806 464.559 97.6765 382.429 97.6765 281.118C97.6765 179.806 179.806 97.6765 281.118 97.6765C382.429 97.6765 464.559 179.806 464.559 281.118ZM116.021 281.118C116.021 372.298 189.937 446.215 281.118 446.215C372.298 446.215 446.215 372.298 446.215 281.118C446.215 189.937 372.298 116.021 281.118 116.021C189.937 116.021 116.021 189.937 116.021 281.118Z"
                  fill="#151A20"
                />
                <motion.path
                  d="M495.529 282.309C495.529 400.067 400.067 495.529 282.309 495.529C164.55 495.529 69.0882 400.067 69.0882 282.309C69.0882 164.55 164.55 69.0882 282.309 69.0882C400.067 69.0882 495.529 164.55 495.529 282.309ZM87.5164 282.309C87.5164 389.89 174.728 477.101 282.309 477.101C389.89 477.101 477.101 389.89 477.101 282.309C477.101 174.728 389.89 87.5164 282.309 87.5164C174.728 87.5164 87.5164 174.728 87.5164 282.309Z"
                  fill="#151A20"
                />
                <motion.path
                  d="M531.265 283.5C531.265 420.337 420.337 531.265 283.5 531.265C146.663 531.265 35.7353 420.337 35.7353 283.5C35.7353 146.663 146.663 35.7353 283.5 35.7353C420.337 35.7353 531.265 146.663 531.265 283.5ZM54.9816 283.5C54.9816 409.707 157.293 512.018 283.5 512.018C409.707 512.018 512.018 409.707 512.018 283.5C512.018 157.293 409.707 54.9816 283.5 54.9816C157.293 54.9816 54.9816 157.293 54.9816 283.5Z"
                  fill="#151A20"
                />
                <motion.path
                  d="M567 283.5C567 440.073 440.073 567 283.5 567C126.927 567 0 440.073 0 283.5C0 126.927 126.927 0 283.5 0C440.073 0 567 126.927 567 283.5ZM20.5625 283.5C20.5625 428.716 138.284 546.438 283.5 546.438C428.716 546.438 546.438 428.716 546.438 283.5C546.438 138.284 428.716 20.5625 283.5 20.5625C138.284 20.5625 20.5625 138.284 20.5625 283.5Z"
                  fill="#151A20"
                />
                <motion.path
                  variants={pathVariants}
                  strokeWidth="1"
                  d="M102.476 78.8571C98.7136 74.6041 92.2009 74.1936 88.0871 78.1074C41.6226 122.312 11.4402 181.056 2.65537 244.789C-6.5982 311.923 8.50269 380.15 45.2217 437.109C81.9407 494.068 137.849 535.989 202.814 555.276C267.78 574.563 337.506 569.94 399.357 542.246C461.208 514.551 511.093 465.616 539.971 404.309C568.85 343.001 574.811 273.377 556.776 208.053C538.741 142.728 497.903 86.025 441.66 48.218C388.267 12.3264 324.345 -4.28083 260.425 0.940492C254.766 1.40278 250.735 6.53442 251.402 12.1733V12.1733C252.069 17.8121 257.181 21.8214 262.842 21.3751C321.878 16.7211 380.875 32.1339 430.189 65.2832C482.352 100.348 520.228 152.938 536.955 213.525C553.682 274.112 548.153 338.686 521.369 395.546C494.585 452.407 448.319 497.793 390.954 523.479C333.589 549.165 268.92 553.452 208.667 535.564C148.413 517.675 96.56 478.795 62.5042 425.968C28.4485 373.14 14.4428 309.861 23.0252 247.597C31.1388 188.734 58.9325 134.459 101.721 93.5193C105.824 89.5938 106.238 83.1101 102.476 78.8571V78.8571Z"
                  fill="#F72585"
                  stroke-dashoffset="1000"
                  stroke-dasharray="1000"
                />
                <motion.path
                  variants={pathVariants}
                  d="M54.4033 348.508C49.2904 349.959 43.95 346.993 42.6987 341.828C29.6596 288.002 35.0142 231.252 58.0709 180.694C82.461 127.212 125.071 84.1439 178.289 59.1832C231.507 34.2225 291.866 28.9955 348.583 44.436C405.299 59.8765 454.679 94.9786 487.9 143.471C521.121 191.964 536.019 250.688 529.933 309.153C523.847 367.618 497.173 422.015 454.676 462.626C412.18 503.236 356.629 527.415 297.948 530.843C242.476 534.083 187.622 518.58 142.139 486.981C137.774 483.948 136.937 477.897 140.137 473.653V473.653C143.336 469.41 149.359 468.582 153.734 471.6C195.563 500.458 245.912 514.604 296.826 511.629C350.948 508.468 402.184 486.167 441.379 448.711C480.575 411.255 505.177 361.084 510.79 307.161C516.404 253.237 502.663 199.075 472.022 154.349C441.382 109.623 395.838 77.2475 343.527 63.0064C291.216 48.7654 235.546 53.5863 186.462 76.6081C137.378 99.6298 98.0777 139.353 75.5822 188.68C54.4202 235.083 49.4265 287.142 61.2294 336.571C62.4638 341.74 59.5162 347.058 54.4033 348.508V348.508Z"
                  fill="#4E9C11"
                />
                <motion.path
                  variants={pathVariants}
                  d="M378.66 102.489C381.064 98.0039 386.66 96.2989 391.038 98.8938C425.935 119.58 454.267 149.834 472.618 186.156C492.357 225.225 499.594 269.422 493.346 312.745C487.098 356.069 467.667 396.42 437.693 428.319C407.719 460.217 368.653 482.118 325.802 491.046C282.95 499.975 238.389 495.499 198.169 478.226C157.949 460.953 124.02 431.72 100.989 394.497C77.9582 357.274 66.9412 313.865 69.4344 270.164C71.7523 229.535 85.6436 190.484 109.375 157.581C112.352 153.454 118.164 152.782 122.158 155.934V155.934C126.153 159.087 126.817 164.869 123.857 169.008C102.46 198.931 89.935 234.362 87.8326 271.214C85.5549 311.138 95.6197 350.795 116.66 384.801C137.701 418.807 168.698 445.513 205.441 461.293C242.185 477.073 282.895 481.163 322.043 473.006C361.191 464.849 396.88 444.841 424.263 415.699C451.647 386.558 469.398 349.694 475.106 310.115C480.815 270.536 474.203 230.158 456.17 194.466C439.525 161.521 413.892 134.041 382.325 115.153C377.958 112.541 376.257 106.975 378.66 102.489V102.489Z"
                  fill="#6493F1"
                />
                <motion.path
                  variants={pathVariants}
                  d="M454.107 302.2C459.135 302.813 463.732 299.233 464.093 294.181C467.038 252.955 455.972 211.837 432.541 177.572C407.38 140.777 369.683 114.403 326.493 103.377C283.304 92.3512 237.578 97.4282 197.859 117.659C158.14 137.89 127.146 171.891 110.669 213.309C94.1924 254.726 93.3597 300.726 108.327 342.713C123.294 384.699 153.036 419.8 191.997 441.455C230.957 463.111 276.47 469.84 320.03 460.384C360.596 451.579 396.883 429.299 423.063 397.317C426.272 393.397 425.39 387.637 421.315 384.629V384.629C417.239 381.62 411.516 382.503 408.285 386.405C384.769 414.81 352.348 434.598 316.139 442.457C276.935 450.967 235.973 444.911 200.909 425.421C165.844 405.932 139.076 374.341 125.606 336.553C112.135 298.765 112.885 257.365 127.714 220.09C142.543 182.814 170.438 152.213 206.185 134.005C241.932 115.797 283.085 111.228 321.956 121.151C360.826 131.074 394.754 154.811 417.398 187.926C438.313 218.511 448.281 255.163 445.859 291.959C445.526 297.014 449.078 301.588 454.107 302.2V302.2Z"
                  fill="#F9D85E"
                />
                <motion.path
                  variants={pathVariants}
                  d="M423.642 279.926C427.819 279.926 431.226 283.316 431.017 287.488C429.423 319.356 417.783 349.978 397.668 374.913C375.966 401.814 345.706 420.472 311.924 427.783C278.143 435.094 242.876 430.616 211.993 415.095C181.111 399.574 156.474 373.946 142.183 342.475C127.893 311.004 124.809 275.588 133.447 242.121C142.085 208.654 161.922 179.154 189.659 158.53C217.395 137.906 251.357 127.401 285.894 128.765C317.906 130.029 348.622 141.418 373.666 161.19C376.945 163.778 377.255 168.573 374.506 171.719V171.719C371.756 174.864 366.99 175.167 363.697 172.596C341.267 155.089 313.855 145.008 285.297 143.881C254.214 142.654 223.648 152.108 198.685 170.669C173.723 189.231 155.869 215.781 148.095 245.901C140.321 276.022 143.096 307.896 155.958 336.22C168.819 364.544 190.992 387.609 218.787 401.578C246.581 415.547 278.321 419.577 308.725 412.997C339.128 406.418 366.362 389.625 385.894 365.414C403.839 343.17 414.288 315.897 415.868 287.487C416.1 283.316 419.464 279.926 423.642 279.926V279.926Z"
                  fill="#4E9C11"
                />
              </motion.svg>
            </div>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
