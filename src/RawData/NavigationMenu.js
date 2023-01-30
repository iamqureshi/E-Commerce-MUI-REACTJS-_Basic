import BoltIcon from "@mui/icons-material/Bolt"
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import HotTubIcon from '@mui/icons-material/HotTub';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

export const navigationMenu = [
    {
        MenuName: "New In",
        Icon: <BoltIcon color="primary" />,
        label:"New In"
    },
    {
        MenuName: "Clothing",
        Icon: <AccessibilityNewIcon color="secondary" />,
        label:"Clothing"
    },
    {
        MenuName: "Shoes",
        Icon: <SnowshoeingIcon color="info" />,
        label:"Shoes"
    },
    {
        MenuName: "Accessaries",
        Icon: <HotTubIcon color="warning"/>,
        label:"Accessaries"
    },
    {
        MenuName: "Gifts & Living",
        Icon: <LocalAtmIcon color="error" />,
        label:"Gifts & Living"
    },
]