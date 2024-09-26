import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Use Grid from MUI
import DPO from "../assets/images/DPO.png";
import Logo from "../assets/images/logo.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

export default function Footer() {
    return (
        <Grid container spacing={1} sx={{ bgcolor: '#ffffff', flexGrow: 1, p: 5 }}>
            <Grid item xs={12}  md={6} lg={3}>
                <Typography>Asialink Finance Corporation</Typography>
                <Typography>SEC Registration No.: A199711768</Typography>
                <br />
                <Typography>CGFD 0967-365-7324 / 0926-017-0248</Typography>
                <Typography>FLCD 8818-5990</Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={7}>
                <Typography>Advisory:</Typography>
                <br />
                <Typography>
                    Welcome to Asialink Finance Corporation’s portal. By accessing this website, you agree to be governed by the Terms and Conditions and Data Privacy Policy herein set forth. If you find the Terms and Conditions and Data Privacy Policy unacceptable, kindly discontinue accessing this website. We advise you to study the Terms and Conditions in the disclosure statements before proceeding with the loan transaction.
                </Typography>
            </Grid>

            <Grid item sm={6} lg={2} sx={{ textAlign: 'center' }}>
                <img src={DPO} style={{ maxWidth: '100px', maxHeight: '150px', width: '100%', height: '100%' }} alt="DPO Logo" />
            </Grid>

            <Grid item sm={6} lg={3}>
                <Box sx={{ p: 2, m: 1, height: '90px', width: '100%', bgcolor: '#00237D', textAlign: 'center' }}>
                    <img src={Logo} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} alt="Company Logo" />
                </Box>
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 3,
                        flexDirection: 'row',
                    }}
                >
                    <FacebookRoundedIcon fontSize="medium" />
                    <FacebookRoundedIcon fontSize="medium" />
                    <FacebookRoundedIcon fontSize="medium" />
                    <FacebookRoundedIcon fontSize="medium" />
                </Grid>
            </Grid>

            <Grid container item xs={12} sm={12} md={5}>
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

            <Grid item xs={12} sm={12} md={4}>
                <List sx={{ width: '100%', maxWidth: '400px', alignItems: 'center' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FacebookRoundedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="210 AIC Gold Tower, F. Ortigas Jr. Rd., Ortigas Center, Pasig City 1600, Philippines " />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FacebookRoundedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="8706-5198" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FacebookRoundedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="customerservices@asialinkfinance.com.ph" />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}
