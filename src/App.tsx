import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardCards from "./Pages/DashboardCards/HorizontelCard";
import DesktopNavbar from "./Pages/Navbar/DesktopNavbar";
import BoltIcon from "@mui/icons-material/Bolt";
import { navigationMenu } from "./RawData/NavigationMenu";
import HorizontelCard from "./Pages/DashboardCards/HorizontelCard";
import VerticalCard from "./Pages/DashboardCards/VerticalCard";

export default function App() {
  return (
    <Box>
      <DesktopNavbar />
      <Box>
        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={3.5} md={3} lg={2.1}>
                <Box>
                  <Typography
                    variant="h6"
                    color="initial"
                    className="TypoHeading"
                  >
                    Explore
                  </Typography>
                </Box>
                <Box>
                  <List>
                    {navigationMenu?.map((item: any, index: number) => {
                      return (
                        <ListItem disablePadding key={index}>
                          <ListItemButton sx={{ p: 0, pt: 2 }}>
                            <ListItemIcon>{item.Icon}</ListItemIcon>
                            <ListItemText primary={item.MenuName} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Grid>
              <Grid item xs={8.5} md={9} lg={9.9}>
                <Box>
                  <Typography
                    variant="h6"
                    color="initial"
                    className="TypoHeading"
                  >
                    <span>
                      {<BoltIcon sx={{ fontSize: "25px", color: "green" }} />}
                    </span>{" "}
                    New In
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <HorizontelCard imagePath="assets/patern.png" label="Get 50% Off" />
                        </Grid>
                        <Grid item xs={12}>
                          <HorizontelCard imagePath="assets/banner3.png" label="New Collection Daily Wear"/>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <VerticalCard imagePath="assets/product4.png" label="New Collection Daily Wear"/>
                        </Grid>
                        <Grid item xs={6}>
                          <VerticalCard imagePath="assets/product5.png" label="New Collection Daily Wear"/>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <VerticalCard imagePath="assets/product2.png" label="New Collection Daily Wear"/>
                        </Grid>
                        <Grid item xs={6}>
                          <VerticalCard imagePath="assets/product1.png" label="New Collection Daily Wear"/>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <HorizontelCard imagePath="assets/banner2.png" label="Get 50% Off" />
                        </Grid>
                        <Grid item xs={12}>
                          <HorizontelCard imagePath="assets/banner1.png" label="New Collection Daily Wear"/>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <HorizontelCard imagePath="assets/banner1.png" label="Get 50% Off" />
                        </Grid>
                        <Grid item xs={12}>
                          <HorizontelCard imagePath="assets/banner4.png" label="New Collection Daily Wear"/>
                        </Grid>
                      </Grid>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <VerticalCard imagePath="assets/product1.png" label="New Collection Daily Wear"/>
                        </Grid>
                        <Grid item xs={6}>
                          <VerticalCard imagePath="assets/product6.png" label="New Collection Daily Wear"/>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
