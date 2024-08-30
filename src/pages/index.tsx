/* eslint-disable react/no-unescaped-entities */
import SchoolIcon from "@mui/icons-material/School";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Card, Typography, useMediaQuery } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";

export default function Home() {
  const desktop = useMediaQuery("(min-width:900px)");
  return (
    <Box>
      <Head>
        <title>Gardini Dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icone.png" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Domine&family=Heebo&family=Kalnia&family=Poppins:wght@400;600;700&display=swap');
        </style>
      </Head>
      <main>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Card
            // className="vidro"
            sx={{
              background: "#0979d483",
              boxShadow: "0 8px 32px 0 #0a0549",
              borderTop: "2px solid white",
              borderBottom: "2px solid white",
              mt: 25,
              width: "100vw",
              height: "90vh",
              borderTopLeftRadius: 60,
              borderTopRightRadius: 60,
              borderBottomLeftRadius: 60,
              borderBottomRightRadius: 60,
              overflow: "visible",
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                paddingTop: 20,
              }}
            >
              <Image
                src="/foto3.png"
                alt="foto"
                width={235}
                height={250}
                style={{
                  borderRadius: "50%",
                  border: "2px solid white",
                  position: "absolute",
                  top: -130,
                }}
              ></Image>
              <Typography
                variant={"h3"}
                fontFamily={"Poppins"}
                sx={{
                  color: "#ffffff",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 5)",
                }}
              >
                Gardini Dev
              </Typography>

              <Typography
                variant={"subtitle1"}
                fontFamily={"Poppins"}
                textAlign={"center"}
                marginTop={2}
                marginBottom={2}
              >
                Aprenda Frontend todos os dias aqui!
              </Typography>
              <Button
                href="https://go.hotmart.com/D93924915H"
                target="_blank"
                className="ghost-animation-button"
                variant="contained"
                sx={{
                  width: "60%",
                  // backgroundColor: "red",
                  color: "white",
                  fontFamily: "Poppins",
                  my: 2,
                  fontSize: 20,
                  textTransform: "none",
                }}
                startIcon={<SchoolIcon />}
              >
                Aprenda Aqui!
              </Button>
              <Button
                href="https://www.tiktok.com/@gardini.dev"
                target="_blank"
                variant="contained"
                sx={{
                  width: "60%",
                  backgroundColor: "black",
                  color: "white",
                  fontFamily: "Poppins",
                  my: 2,
                  fontSize: 20,
                  textTransform: "none",
                }}
                startIcon={<SiTiktok fontSize={"20px"} />}
              >
                TikTok
              </Button>
              <Button
                href="https://www.instagram.com/gardinidev/"
                target="_blank"
                className="instaButton"
                variant="contained"
                sx={{
                  width: "60%",
                  backgroundColor: "red",
                  color: "white",
                  fontFamily: "Poppins",
                  my: 2,
                  fontSize: 20,
                  textTransform: "none",
                }}
                startIcon={<SiInstagram fontSize={"20px"} />}
              >
                Instagram
              </Button>
              <Button
                href="https://www.youtube.com/@Gardinidev"
                target="_blank"
                variant="contained"
                sx={{
                  width: "60%",
                  backgroundColor: "red",
                  color: "white",
                  fontFamily: "Poppins",
                  my: 2,
                  fontSize: 20,
                  textTransform: "none",
                }}
                startIcon={<SiYoutube fontSize={"20px"} />}
              >
                YouTube
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "60%",
                  backgroundColor: "red",
                  color: "white",
                  fontFamily: "Poppins",
                  my: 2,
                  fontSize: 20,
                  textTransform: "none",
                }}
                startIcon={<ShoppingCartIcon />}
              >
                Produtos
              </Button>
            </Box>
          </Card>
        </Box>
      </main>
    </Box>
  );
}
