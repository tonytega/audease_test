import {
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import google from "../assets/images/ic_googlelogo.png";
import facebook from "../assets/images/ic_fblogo.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useHistory } from "react-router-dom";


export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory()
  const handleSignIn=()=>{
    history.push('/home')
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      className="formBox"
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#ffffff",
        padding: "24px",
        width: { xs: "247px", sm: "418px" },
        borderRadius: "12px",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Typography
        sx={{
          textAlign: "left",
          marginTop: "24px",
          fontWeight: 600,
          color: "#202020",
          fonSize: "24px",
          lineHeight: "32px",
        }}
      >
        Sign In
      </Typography>

      <Box sx={{ display: "flex", marginBottom: "32px" }}>
        <Typography>Dont have an account?</Typography>
        <Typography sx={{ paddingLeft: "10px" }}>Sign up</Typography>
      </Box>

      <Box
        className="InputBox"
        sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        <FormControl fullWidth>
          <TextField label="Email adress" type="email" required />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Password"
            required
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {/* where i am */}
                  <IconButton
                    onClick={handleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16.94px",
          }}
        >
          forgot password?
        </Typography>
        <Button
        onClick={handleSignIn}
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#FAA32C",
            borderRadius: "8px",
            fontFamily: "Inter",
          }}
        >
          Sign in
        </Button>
        <Divider
          sx={{
            fontSize: "14px",
            marginBottom: "24px",
            fontWeight: 400,
            color: "#898989",
          }}
        >
          or
        </Divider>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box
          sx={{
            border: "1px solid #DCDCDC",
            borderRadius: "8px",
            display: "flex",
            gap: "8px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "173px",
            height: "48px",
          }}
        >
          <img src={google} width={"16px"} height={"16px"} />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "17px",
              color: "#202020",
            }}
          >
            Google
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid #DCDCDC",
            borderRadius: "8px",
            display: "flex",
            gap: "8px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "173px",
            height: "48px",
          }}
        >
          <img src={facebook} />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "17px",
              color: "#202020",
            }}
          >
            Facebook
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ marginTop: "24px", marginBottom: "24px" }} />

      <Typography
        sx={{
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "15px",
          color: "#898989",
        }}
      >
        Protected by reCAPTCHA and subject to the Rhombus Privacy Policy and
        Terms of Service.
      </Typography>
    </Box>
  );
};
