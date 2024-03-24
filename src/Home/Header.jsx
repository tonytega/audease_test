import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
} from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import QuestionLogo from "../assets/images/message-question.png";
import CalendarLogo from "../assets/images/calendar-2.png";
import NotificationLogo from "../assets/images/notification.png";
import AvatarPicture from "../assets/images/avatarpicture.jpg";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "space-between",
        padding: "24px 0 24px 0",
        // borderBottom:'1px solid #DBDBDB'
      }}
    >
      <TextField
        sx={{ width: { xs: "auto", lg: "417px" }, marginRight: "auto" }}
        size="small"
        placeholder="search for anything..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Box sx={{ display: "flex", gap: "10px" }}>
        <Box sx={{ display: "flex", height: "24px", gap: "24px" }}>
          <img src={QuestionLogo} />
          <img src={CalendarLogo} />
          <img src={NotificationLogo} />
        </Box>
        <Box>
          <Typography
            sx={{
              textAlign: "right",
              color: "#0d062d",
              fontFamily: "Inter",
              fontWeight: 400,
              lineHeight: "19px",
              fontSize: "16px",
            }}
          >
            Nyekachi Wihioka
          </Typography>

          <Typography
            sx={{
              textAlign: "right",
              color: "#787486",
              fontFamily: "Inter",
              fontWeight: 400,
              lineHeight: "17px",
              fontSize: "14px",
            }}
          >
            Admin
          </Typography>
        </Box>
        <Avatar src={AvatarPicture} />
      </Box>
    </Box>
  );
};
/* Desktop - 8 */
