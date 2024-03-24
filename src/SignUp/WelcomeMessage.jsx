import { Box, Typography } from "@mui/material";
import logo from "../assets/images/AudeaseWhiteBackground.png";


export const WelcomeMessage = () => {
  return (
  
      <Box
      className="help"
        sx={{
          width: { xs: "286px", sm: "344px" },
          display: "flex",
          flexDirection: "column",
          // marginTop:{xs:}
          
        }}
      >
        <Box
        className='imageBox'
          sx={{
            display: "flex",
            marginBottom: {xs:'8px',sm:"43px"},
            width: { xs: "97px", sm: "132px" },
            alignSelf: { xs: "center", lg: "auto" },
            // alignSelf:'auto'
           
            
          }}
        >
          <img src={logo} alt="logo" />
        </Box>
        <Typography
          sx={{
            textAlign: { xs: "center", lg: "left" },
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: { xs: "24px", sm: "36px" },
            lineHeight: "46px",
            color: "#615F65",
            marginBottom: "16px",
          }}
        >
          Welcome back to Audease
        </Typography>
        <Typography
          sx={{
            fontFamily: "Switzer",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: { xs: "12px", sm: "14px" },
            lineHeight: "24px",
            display: "flex",
            // alignItems: "center",
            textAlign: { xs: "center", lg: "left" },
            color: "#5A5A5A",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          quaerat repellendus molestias vero abdolor sit amet consectetur,
          adipisicing elit. Fugit quaerat repellendus molestias vero ab.
        </Typography>
      </Box>
   
  );
};


