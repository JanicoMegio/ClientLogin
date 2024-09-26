import Container from "@mui/material/Container";
import Logo from "../assets/images/asialink_group.png"


export default function Content() {
    return (
        <Container sx={{ alignItems: "center", textAlign:"center", mt: 5, }}>
            <img src={Logo} alt="" style={{ maxWidth: '400px', maxHeight: '350px', width: '100%', height: '100%'}}/>
        </Container>
    );
}