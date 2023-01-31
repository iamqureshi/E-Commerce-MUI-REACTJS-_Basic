import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "../../../public/assets/banner1.png";

interface IHorizontelCardProps {
  imagePath: string;
  label: string;
}

const styles = {
  paperContainer: {},
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const card = (props: IHorizontelCardProps) => {
  return (
    <React.Fragment>
      <CardContent
        sx={{
          backgroundImage: `url(${props.imagePath})`,
          height: "455px",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* <Typography variant="h6">{props.label}</Typography> */}
        </Box>
      </CardContent>
    </React.Fragment>
  );
};

export default function VerticalCard(props: IHorizontelCardProps) {
  return (
    <Box>
      <Card sx={{ borderRadius: 3 }} variant="outlined">
        {card(props)}
      </Card>
    </Box>
  );
}
