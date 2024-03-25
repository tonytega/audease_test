// import { Category, Home } from '@mui/icons-material'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Divider,
  ListItemText,
  ListItemIcon,
  Typography,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import category from "../assets/images/category.svg";
import messages from "../assets/images/message.svg";
import tasks from "../assets/images/task-square.svg";
import staff from "../assets/images/staff.svg";
import setting from "../assets/images/setting-2.svg";
import addSquare from "../assets/images/add-square.png";
import logo from "../assets/images/AudeaseWhiteBackground.png";
import lamp from "../assets/images/lamp-on.svg";
import union from "../assets/images/union.png";

import { Circle, KeyboardDoubleArrowLeft } from "@mui/icons-material";

const ListItemTextComponent = styled(ListItemText)(() => ({
  fontFamily: "Switzer",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "21.12px",
  textAlign: "left",
  color: "#787486",
}));

export const Menu = () => {
  return (
    <>
      <Box
      component='div'
        sx={{
          display: { xs: "none", md: "flex" },
          width: "300px",
          height:'100vh',
          flexDirection: "column",
          borderRight: "1px solid #DBDBDB",
          position: "sticky",
          top: "0",
          // overflowY:'hidden',
          // overFlowX:'hidden',
          overFlow:'auto'
        }}
      >
        <Box
          className="logo_and_name_box"
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "32px 0 32px 0",
            width: "300px",
            gap: "10px",
            position: "sticky",
            top: 0,
            borderBottom: "1px solid #DBDBDB",
          }}
        >
          <Box
            className="logo_box"
            sx={{
              width: "24px",
            }}
          >
            <img src={logo} alt="logo" width="24px" />
          </Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#0D062D",
            }}
          >
            Eden College
          </Typography>

          <KeyboardDoubleArrowLeft />
        </Box>
        <List>
          {/* Home */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={category} />
              </ListItemIcon>
              <ListItemTextComponent primary="Home" />
            </ListItemButton>
          </ListItem>
          {/* messages */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={messages} />
              </ListItemIcon>
              <ListItemTextComponent primary="Messages" />
            </ListItemButton>
          </ListItem>
          {/* tasks */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={tasks} />
              </ListItemIcon>
              <ListItemTextComponent primary="Tasks" />
            </ListItemButton>
          </ListItem>
          {/* staff */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={staff} />
              </ListItemIcon>
              <ListItemTextComponent primary="Staff" />
            </ListItemButton>
          </ListItem>
          {/* setting */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={setting} />
              </ListItemIcon>
              <ListItemTextComponent primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider flexItem sx={{ margin: "30.5px 13.5px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 13.5px 30.5px 13.5px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "16px",
              color: "#787486",
            }}
          >
            STAGES
          </Typography>
          <img src={addSquare} />
        </Box>
        {/* stages */}
        <List>
          {/* Application/BKSB */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Circle fontSize="small" sx={{ color: "#7AC555" }} />
              </ListItemIcon>
              <ListItemTextComponent primary="Application/BKSB" />
            </ListItemButton>
          </ListItem>
          {/* confirming funds */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Circle fontSize="small" sx={{ color: "#FFA500" }} />
              </ListItemIcon>
              <ListItemTextComponent primary="Confirming Funds" />
            </ListItemButton>
          </ListItem>
          {/* Induction */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Circle fontSize="small" sx={{ color: "#E4CCFD" }} />
              </ListItemIcon>
              <ListItemTextComponent primary="Induction" />
            </ListItemButton>
          </ListItem>
          {/* Register for laser */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Circle fontSize="small" sx={{ color: "#76A5EA" }} />
              </ListItemIcon>
              <ListItemTextComponent primary="Register for laser" />
            </ListItemButton>
          </ListItem>
        </List>

        {/* write a message */}
        <Box sx={{marginTop:'50px'}}>
          <Box sx={{ position: "absolute", width: "300px" }}>
            <img src={union} />
          </Box>
          <Box
            sx={{
              width: "66px",
              height: "66px",
              backgroundColor: " rgba(252, 214, 74, 0.7)",
              filter: " blur(17px)",
              borderRadius: "50%",
              margin: "auto",
              position: "relative",
              zIndex: 20,
            }}
          >
            <img src={lamp} color="#FBCB18" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              position: "relative",
              width: "190px",
              top: "15px",
              zIndex: 20,
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17px",
              }}
            >
              Thoughts Time
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "17px",
                color: "#787486",
              }}
            >
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </Typography>
            <TextField placeholder="Write a message" size="small">
              {" "}
            </TextField>
          </Box>
        </Box>
      </Box>
    </>
  );
};
