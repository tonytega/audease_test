import { SignUpForm } from './SignUpForm'
import { WelcomeMessage } from './WelcomeMessage'
import {Box} from '@mui/material'
export const SignUpPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "rgba(247, 157, 33, 0.15)",
        justifyContent: "center",
        paddingTop:{xs:'21px',sm:'74px'},
        alignItems: "center",
        alignSelf:'center',
        height: {lg:"100vh"},
        width: "98%",
        margin: '0 auto',
        fontWeight: "1000",
        fontFamily: "Switzer",
        display: "flex",
        borderRadius:"29px",
        gap:{xs:'35px',lg:'200px'},
        flexDirection: { xs: "column", lg: "row" },
        paddingBottom:{xs:'6px',sm:'20px'}
      }}
    >
      <WelcomeMessage />
      <SignUpForm />
    </Box>
  );
}

