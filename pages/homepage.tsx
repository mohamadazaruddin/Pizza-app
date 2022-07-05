import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Stack,
  Button,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { IconButton, useBreakpointValue, Container } from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMyLocation, MdAccessTimeFilled } from "react-icons/md";
import Slider from "react-slick";
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Homepage() {
  //   const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  //   const cards = [
  //     {
  //       image:
  //         "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/STONE-1450WEB_445e032a-622d-4717-8718-8cbc67141636_1400x.jpg?v=1652696915",
  //     },
  //     {
  //       image:
  //         "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-bottom-2_1920x.jpg?v=1616659104",
  //     },
  //     {
  //       image:
  //         "https://images.bewakoof.com/uploads/grid/app/flash-sale-desktop-banner-tshirts-1652671862.gif",
  //     },
  //   ];
  {
    /* <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box key={index} height={"500px"} position="relative">
              <Image src={card.image} height="100%" w="100%" />
            </Box>
          ))}
        </Slider> */
  }
  const details = [
    {
      icon: <FaPhoneAlt />,
      title: "000 (123) 456 7890",
      description: "A small river named Duden flows",
      pizza: "/pizza-1.jpg",
      meal: "Italian Pizza",
      mealdescription:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    },
    {
      icon: <MdMyLocation />,
      title: "198 West 21th Street",
      description: "Suite 721 New York NY 10016",
      pizza: "/pizza-2.jpg",
      meal: "Greek Pizza",
      mealdescription:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    },
    {
      icon: <MdAccessTimeFilled />,
      title: "Open Monday-Friday",
      description: "8:00am - 9:00pm",
      pizza: "/pizza-3.jpg",
      meal: "Caucasian Pizza",
      mealdescription:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    },
    {
      meal: "American Pizza",
      pizza: "/pizza-4.jpg",
      mealdescription:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    },
    {
      meal: "Tomatoe Pie",
      pizza: "/pizza-5.jpg",
      mealdescription:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    },
    {
      meal: "Margherita",
      pizza: "/pizza-6.jpg",
      mealdescription:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    },
  ];

  return (
    <Box>
      {" "}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Box
        backgroundImage="./bg_3.jpg"
        w={"100%"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
      >
        <Box
          py={"100px"}
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          w="100%"
          h="100%"
          bg={"#0000009e"}
        >
          <Box textAlign={"center"} maxW="50%">
            <Text
              fontSize={"30px"}
              color="#fac564"
              fontFamily={"cursive"}
              m="0"
            >
              Welcome
            </Text>
            <Heading
              color={"#fff"}
              fontSize="40px"
              fontWeight={"normal"}
              m="0"
              textTransform={"uppercase"}
            >
              We cooked your desired Pizza Recipe
            </Heading>
            <Text color={"#cfcfcf"} fontSize="20px">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </Text>
            <Box mt="25px">
              <Button
                bg={"#fac564"}
                p="16px 24px"
                border={"1px solid #fca564"}
                mx="10px"
                variant="solid"
              >
                Check
              </Button>
              <Button
                variant="outline"
                p="16px 24px"
                border={"1px solid #fca564"}
                mx="10px"
                bg="transparent"
                color={"#fff"}
              >
                Call us
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box bg={"#000"} p="25px 25px">
        <Grid
          templateColumns={{ md: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
          gap={6}
        >
          {details.map((element, i) => (
            <GridItem w="100%" key={i}>
              <Box display={"flex"}>
                <Box
                  color="#fca564"
                  display={"flex"}
                  mx={10}
                  mt="5px"
                  fontSize="20px"
                >
                  {element.icon}
                </Box>
                <Box>
                  <Heading color={"#fff"} m="0" fontSize="18px">
                    {element.title}
                  </Heading>

                  <Text color={"gray"} m="10px 0px 0px 0px">
                    {element.description}
                  </Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box
        py="50px"
        backgroundImage="./bg_4.jpg"
        w={"100%"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
      >
        <Box textAlign={"center"}>
          <Heading color="#fff">HOT PIZZA MEALS</Heading>
          <Text color="gray" mt="20px">
            Far far away, behind the word mountains, far from the countries
            Vokalia <br />
            and Consonantia, there live the blind texts.
          </Text>
          <Grid
            templateColumns={{ md: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
            gap={0}
            mt="20px"
          >
            {details.map((items, i) => (
              <GridItem w="100%" bg="#00000059" mb={"20px"} key={i}>
                <Flex>
                  <Box
                    backgroundImage={items.pizza}
                    // height="100%"
                    overflow={"hidden"}
                    w={"50%"}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize={"cover"}
                  ></Box>
                  <Box p={"15px"} width={"50%"} h={"100%"} textAlign="start">
                    <Heading
                      fontSize={"20px"}
                      color="#fff"
                      display={"inline-block"}
                    >
                      {items.meal}
                    </Heading>
                    <Text color="gray">{items.mealdescription}</Text>

                    <Button
                      mt="10px"
                      bg={"#fac564"}
                      w="100%"
                      border={"1px solid #fca564"}
                      variant="solid"
                    >
                      Order
                    </Button>
                  </Box>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
