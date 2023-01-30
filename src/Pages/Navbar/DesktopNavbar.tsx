import {
  Box,
  Container,
  Hidden,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import style from "./DesktopNavbar.module.css";

export default function DesktopNavbar() {
  return (
    <Box>
      <Container
      maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width:"100%",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={"bolder"}
            sx={{
              fontSize: "32px",
            }}
            color="initial"
          >
            Shopping
          </Typography>
          <TextField
          fullWidth
            sx={{ ml: 10 }}
            size="small"
            variant="standard"
            placeholder="Search here"
            onChange={(e: any) => {
              console.log(e.target.value);
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            }}
          />
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
        <Hidden mdDown>
          <Stack direction={"row"} spacing={4} sx={{ ml:6}}>
            <Typography variant="subtitle1" className={style.fontBold}>
              Home
            </Typography>
            <Typography variant="subtitle1" className={style.fontBold}>
              Service
            </Typography>
            <Typography variant="subtitle1" className={style.fontBold}>
              Blog
            </Typography>
            <Typography variant="subtitle1" className={style.fontBold}>
              Contact
            </Typography>
          </Stack>
        </Hidden>
      </Container>
    </Box>
  );
}
