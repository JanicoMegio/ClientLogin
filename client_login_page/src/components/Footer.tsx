import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DPO from "../assets/images/DPO.png";
import Logo from "../assets/images/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


import YouTubeIcon from '@mui/icons-material/YouTube';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Hidden from '@mui/material/Hidden';
import Container from '@mui/material/Container';



export default function Footer() {
    return (
        <Box sx={{ bgcolor: '#ffffff'}}>
            <Container>
                <Grid container spacing={1} sx={{ bgcolor: '#ffffff', flexGrow: 1, px: 5, py: 4, m: 0, width: '100%' }}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Typography variant='h5'>Asialink Finance Corporation</Typography>
                        <br />
                        <Typography>SEC Registration No.: A199711768</Typography>
                        <Typography>CGFD 0967-365-7324 / 0926-017-0248</Typography>
                        <Typography>FLCD 8818-5990</Typography>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Typography variant='h5'>Advisory:</Typography>
                        <br />
                        <Typography style={{  flexGrow: 1}}>
                            Welcome to Asialink Finance Corporation’s portal. By accessing this website, you agree to be governed by the Terms and Conditions and Data Privacy Policy herein set forth. If you find the Terms and Conditions and Data Privacy Policy unacceptable, kindly discontinue accessing this website. We advise you to study the Terms and Conditions in the disclosure statements before proceeding with the loan transaction.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={4} sx={{ textAlign: 'center' }}>
                        <img src={DPO} style={{ maxWidth: '170px', maxHeight: '250px', width: '100%', height: '100%' }} alt="DPO Logo" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Box sx={{ bgcolor: '#00237D', textAlign: 'center', height: '150px', mx: 2, mt: 4 }}>
                            <img src={Logo} style={{ maxWidth: '300px', width: '100%', height: '100%', padding: '20px' }} alt="Company Logo" />
                        </Box>
                        <Grid
                            container
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 4,
                                flexDirection: 'row',
                                margin: '5px',
                            }}
                        >
                            <FacebookIcon sx={{ color: '#00237D' }} fontSize="large" />
                            <TwitterIcon sx={{ color: '#00237D' }} fontSize="large" />
                            <InstagramIcon sx={{ color: '#00237D' }} fontSize="large" />
                            <YouTubeIcon sx={{ color: '#00237D' }} fontSize="large" />
                        </Grid>
                    </Grid>
                    <Hidden only='xl'>
                        <Grid item xs={12}>
                            <Divider sx={{
                                borderBottomWidth: 1,
                                borderColor: '#00237D',
                                margin: '20px 0'
                            }} />
                        </Grid>
                    </Hidden>
                    <Grid container item xs={12} sm={6} lg={4}>
                        <Grid item xs={6}>
                            <List>
                                <ListItem sx={{ paddingBottom: "0px" }}>
                                    <Typography>Terms and Conditions</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingBottom: "0px" }}>
                                    <Typography>Privacy Policy</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingBottom: "0px" }}>
                                    <Typography>Load Products</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingBottom: "0px" }}>
                                    <Typography>Branches</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingBottom: "0px" }}>
                                    <Typography>Payment Options</Typography>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <List>
                                <ListItem sx={{ paddingBottom: "0px" }}>
                                    <Typography>Terms and Conditions</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingBottom: "0px" }}>
                                    <Typography>Privacy Policy</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingBottom: "0px" }}>
                                    <Typography>Load Products</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingBottom: "0px" }}>
                                    <Typography>Branches</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingBottom: "0px" }}>
                                    <Typography>Payment Options</Typography>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4}>
                        <List sx={{ alignItems: 'center' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: '#00237D' }}>
                                        < LocationOnIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="210 AIC Gold Tower, F. Ortigas Jr. Rd., Ortigas Center, Pasig City 1600, Philippines " />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: '#00237D' }}>
                                        <CallIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="8706-5198" />
                            </ListItem>
                            <ListItem >
                                <ListItemAvatar >
                                    <Avatar sx={{ bgcolor: '#00237D' }}>
                                        < EmailIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="customerservice&#8203;@asialinkfinance.com.ph" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
