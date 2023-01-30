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
import DashboardCards from "./Pages/DashboardCards/DashboardCards";
import DesktopNavbar from "./Pages/Navbar/DesktopNavbar";
import BoltIcon from "@mui/icons-material/Bolt";
import { navigationMenu } from "./RawData/NavigationMenu";

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
                          <DashboardCards />
                        </Grid>
                        <Grid item xs={12}>
                          <DashboardCards />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <DashboardCards />
                        </Grid>
                        <Grid item xs={12}>
                          <DashboardCards />
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
