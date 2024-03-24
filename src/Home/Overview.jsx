import {
  Box,
  Typography,
  TextField,
  Divider,
  Avatar,
  AvatarGroup,
  MenuItem,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import AvatarPicture from "../assets/images/avatarpicture.jpg";
import pencil from "../assets/images/pencil.png";
import group626 from "../assets/images/Group626.png";
import orangeAddSquare from "../assets/images/orange-add-square.png";
import yelloBox from "../assets/images/yelloBox.png";
import menu from "../assets/images/menu.png";
import { FilterAltOutlined, MenuOutlined, PeopleAltOutlined } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Cards } from "./Cards";
import { Header } from "./Header";

export const Overview = () => {
  return (
    <>
    
    <Box className="overviewBox" sx={{ width:{xs:'95%',md:"100%"}, margin:{xs:'0 auto',md: "0px 50px"} }}>
    <MenuOutlined sx={{display:{xs:'block',md:'none'}}}/>
    <Header/>
      {/* for overview and avatar */}
      <Box
        className="overviewandavatar"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap:'10px'
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "63px" }}>
          <Typography
            sx={{
              color: "#0D062D",
              textTransform: "capitalize",
              lineHeight: "56px",
              fontSize: "46px",
              fontWeight: "500",
              fontFamily: "Inter",
            }}
          >
            Overview
          </Typography>
          <Box sx={{ display: "flex" }}>
            <img src={pencil} />

            <img src={group626} />
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={orangeAddSquare} />
          <Typography
            sx={{
              color: "#FAA32C",
              textTransform: "capitalize",
              lineHeight: "19px",
              fontSize: "16px",
              fontWeight: "500",
              fontFamily: "Inter",
              verticalAlign: "center",
            }}
          >
            Invite
          </Typography>
          <AvatarGroup>
            <Avatar src={AvatarPicture} />
            <Avatar src={AvatarPicture} />
            <Avatar src={AvatarPicture} />
            <Avatar src={AvatarPicture} />
            <Avatar src={AvatarPicture} />
            <Avatar src={AvatarPicture} />
          </AvatarGroup>
        </Box>
      </Box>
      {/* for the filter buttonand others below the overview and invite */}
      <Box sx={{display:'flex',flexWrap:'wrap',gap:'10px',alignItems:'flex-start',justifyContent:'space-between',margin:'40px 0 40px 0'}}>
        <Box sx={{display:'flex',justifyContent:'space-between',gap:'12px'}}>
          {/* filter */}
          <TextField
            select
            defaultValue="All"
            label="Filter"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <FilterAltOutlined />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="To do">To do</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="done">done</MenuItem>
          </TextField>
          {/* date */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{ borderRadius: "8px" }} />
          </LocalizationProvider>
        </Box>

        <Box sx={{display:'flex',alignItems:'center',gap:'20px'}}>
          <Button
            variant="outlined"
            sx={{ color: "#787486", fontFamily: "Inter" }}
            startIcon={<PeopleAltOutlined />}
          >
            {" "}
            Share
          </Button>
          <Divider flexItem orientation="vertical" />
          <img src={yelloBox}/>
          <img src={menu}/>
        </Box>
      </Box>

      {/* Cards */}
      <Cards />
    </Box>
    </>
  );
};
