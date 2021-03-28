import { Container, Typography, Button, Grid } from "@material-ui/core";
import logo from "./Canon-Kit.png";
import "./style.css";

const Banner = () => {
    return (
        <div className="banner" id="banner">
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Typography className="title" variant="h1">
                            Chào Mừng Đến <br /> Với TechoLogy<br /> Shop
                        </Typography>
                        <Button className="shopping-button" href="#products">
                            Shopping
                        </Button>
                    </Grid>
                    <Grid className="brand" item sm={5}>
                        <img src={logo} alt="Brand-tv" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;