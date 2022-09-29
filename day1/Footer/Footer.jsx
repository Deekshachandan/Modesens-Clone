import "./Footer.css";
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Link,
    useColorModeValue,
    Heading,
    Text,
    Divider,
    Input
} from '@chakra-ui/react'



export default function Footer() {
    return (
        <div>

            <Box
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Container as={Stack} maxW={'6xl'} py={10}>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
                        <Stack align={'flex-start'}>
                            <Heading as='h4' size='md'>CUSTOMER CARE</Heading>
                            <Link href={"https://modesens.com/protection/"}>shopper Protection</Link>
                            <Link href={"https://modesens.com/loyalty/"}>Loyalty Program</Link>
                            <Link href={"https://modesens.com/faq/"}>Help Center</Link>
                            <Link href={"https://modesens.com/size-guide/"}>Size Guides</Link>
                            <Link href={"https://modesens.com/size-guide/"}>Contact Us /Feedback</Link>
                            <Link href={"https://modesens.com/size-guide/"}>Shipping / Returns</Link>
                        </Stack>

                        <Stack align={'flex-start'}>
                            <Heading as='h4' size='md'>INFORMATION</Heading>
                            <Link href={"https://modesens.com/about/"}>About Us</Link>
                            <Link href={"https://modesens.com/influencer/"}>Influencer Program</Link>
                            <Link href={"https://modesens.com/stores/"}>Partner Stores</Link>
                            <Link href={"https://modesens.com/fashion-sitemap/"}>Sitemap</Link>
                        </Stack>

                        <Stack align={'flex-start'}>
                            <Heading as='h4' size='md'>LEGAL</Heading>
                            <Link href={"https://modesens.com/legal/"}>Terms Of Use</Link>
                            <Link href={"https://modesens.com/disclosure/"}>Disclosure</Link>
                            <Link href={"https://modesens.com/privacy/"}>Privacy Policy</Link>
                            <Link href={"https://modesens.com/community-guidelines/"}>Community Guidelines</Link>
                        </Stack>

                        <Stack align={'flex-start'}>
                            <Heading as='h4' size='md'>SHARE THE LOVE</Heading>
                            <Text>Your friens will thank you- more than once</Text>
                            <Text>Enter email address seprated by commas</Text>
                            <Divider />
                            <Input placeholder='INVITE FRIENDS' size='md' />

                        </Stack>
                    </SimpleGrid>
                </Container>
                <Text>When you follow our links to visit a brand or retailer’s website or make a purchase, ModeSens may earn a commission.</Text>
            </Box>

            <Box mt="20px">
                <Divider />
            </Box>


            <div className='lastPart' 
            style={ {display : "flex",
                  marginTop:"40px",
                  marginLeft:"80px",
                 gap:"10px"}}>
                
                <img
                    src="https://cdn.modesens.com/static/img/20180905footer_logo.svg"
                    alt="f"
                    style={{ height: "30px", width: "30px" }} />
                           <p>© 2022, ModeSens Inc</p>

                <img
                    src="https://cdn.modesens.com/static/img/20181008footer-pit.svg"
                    alt="y"
                    
                    style={{marginLeft:"700px"}}
                    
                    />

                <img
                    src="https://cdn.modesens.com/static/img/20181008footer-tt.svg"
                    alt="u"

                />
                <img
                    src="https://cdn.modesens.com/static/img/footer-p.svg"
                    alt="u"

                />

                <img
                    src="https://cdn.modesens.com/static/img/footer-fb.svg"
                    alt="k"

                />
                <img
                    src="https://cdn.modesens.com/static/img/footer-wb.svg"
                    alt="l"

                />
                <img
                    src="https://cdn.modesens.com/static/img/footer-wx.svg"
                    alt="j"

                /></div>

<Box mt="20px">
  <Divider />
</Box>


        </div>




    )
}