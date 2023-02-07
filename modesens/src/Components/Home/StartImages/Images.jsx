import { Heading, Text, Divider, Box, Button } from "@chakra-ui/react";
import "./HomeImages.css";
import { useNavigate } from "react-router-dom";

export default function HomeSmallImages() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product");
  };

  return (
    <div className="top">
      <div
        className="main"
        style={{
          width: "80%",
          margin: "auto",
          // border: "4px solid black"
        }}
      >
        <div style={{ padding: "20px" }}>
          <Heading as="h5" size="sm">
            New Partners and Designers
          </Heading>
          <Text mt="2">
            Check out the new retail partners and brands who just joined the
            ModeSens family.
          </Text>
        </div>

        <div
          className="one"
          styles={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2,auto)",
            gap: "10px",
          }}
        >
          <div className="two">
            <img
              src="https://cdn.modesens.com/banner/20220708-BLUEMERCURY-logo.png"
              alt=""
            />
            <img
              src="https://cdn.modesens.com/banner/20220708-Tag-Heuer-logo.png"
              alt=""
            />
            <img
              src="https://cdn.modesens.com/banner/20220708-NAP-LOUNGEWEAR-logo.png"
              alt=""
            />
            <img
              src="https://cdn.modesens.com/banner/20220708-MONTBLANC-logo.png"
              alt=""
            />
            <img
              src="https://cdn.modesens.com/banner/20220708-DR-MARTENS-logo.png"
              alt=""
            />
            <img
              src="https://cdn.modesens.com/banner/20220708-REPETTO-logo.png"
              alt=""
            />
          </div>

          <div>
            <div className="three">
              <img
                src="https://cdn.modesens.com/banner/20220708-NOBLEMARS-logo.png"
                alt=""
              />
              <img
                src="https://cdn.modesens.com/banner/20220708-ERNO-LASZLO-logo.png"
                alt=""
              />
              <img
                src="https://cdn.modesens.com/banner/20220708-D1MILANO-logo.png"
                alt=""
              />
              <img
                src="https://cdn.modesens.com/banner/20220708-LAPOINTE-logo.png"
                alt=""
              />
              <img
                src="https://cdn.modesens.com/banner/20220708-MONNALISA-logo.png"
                alt=""
              />
              <img
                src="https://cdn.modesens.com/banner/20220708-MANGO-logo.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <Box mt={2}>
          <Divider />
        </Box>

        <div style={{ marginTop: "10px" }}>
          <Text>Special Offers</Text>
        </div>

        <div className="four">
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220922-modesens-Tweed-364x484-F.jpg"
              alt=""
            />
            <h3>Queenly Dropped In</h3>
            <Text>Commemorate this iconic styles</Text>
            <Button onClick={handleClick}>Shop Now</Button>
          </div>

          <div>
            <img
              src="https://cdn.modesens.com/banner/20220922-modesens-Pajamas-364x484-F.jpg"
              alt=""
            />
            <h3>Double Trouble</h3>
            <Text>Pajamas for daily wear day and night</Text>
            <Button onClick={handleClick}>Shop Now</Button>
          </div>

          <div>
            <img
              src="https://cdn.modesens.com/banner/20220926-modesens-LordTaylor-364x484.jpg"
              alt=""
            />
            <h3>Lord And Taylor</h3>
            <Text>REIMAGINED</Text>
            <Button onClick={handleClick}>Shop Now</Button>
          </div>
        </div>

        <Box mt={2} mb={2}>
          <Divider />
        </Box>

        <div className="five">
          <div>
            <img
              src="https://cdn.modesens.com/availability/50917509?w=400&"
              alt=""
            />
            <p>BURBERRY</p>
            <p>The Cotton T-Shirt is</p>
            <p>$275</p>
          </div>

          <div>
            <img
              src="https://cdn.modesens.com/availability/53328288?w=400&"
              alt=""
            />
            <p>BURBERRY</p>
            <p>Ribbed Cashmere And</p>
            <p>$484</p>
          </div>

          <div>
            <img
              src="https://4.imimg.com/data4/AA/HC/MY-26596027/men-s-fancy-t-shirt-500x500.jpg"
              alt=""
            />
            <p>BURBERRY</p>
            <p>Ribbed Cashmere And</p>
            <p>$484</p>
          </div>
        </div>

        <Box mt="3">
          <Button colorScheme="black" color="white">
            SHOP NOW
          </Button>
        </Box>

        <div className="six">
          <div>
            <Text>ModeSens App</Text>
            <h3>
              A seamless experience that takes your style to the next level.
            </h3>
            <Button mt={2} colorScheme="blue">
              DOWNLOAD NOW
            </Button>
            <img
              src="https://cdn.apkmonk.com/images/com.modesens.androidapp.png"
              alt=""
            />
          </div>

          <div>
            <Text>Browser Extension</Text>
            <h3>
              Get timely, accurate product information every time you browse.
            </h3>
            <Button mt={2} colorScheme="blue">
              INSTALL NOW
            </Button>
            <img
              src="https://cdn.modesens.com/static/img/20211109downloadright.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
