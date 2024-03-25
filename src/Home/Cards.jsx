import { styled } from "@mui/material/styles";
import AvatarPicture from "../assets/images/avatarpicture.jpg";
import {
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  Avatar,
  AvatarGroup,
  CardMedia,
} from "@mui/material";
import {
  Circle,
  FolderOutlined,
  MoreHoriz,
  TextsmsOutlined,
} from "@mui/icons-material";
import flower from "../assets/images/flower.jpg";
import wall from "../assets/images/wall.jpg";
import vase from "../assets/images/vase.jpg";
import PlantCareApp from "../assets/images/PlantCareApp.jpg";

const OverallCard = styled(Box)(() => ({
  backgroundColor: "#F5F5F5",
  borderRadius: "16px 16px 0px 0px",
  display: "flex",
  flexDirection: "column",
  maxWidth: "354px",
  padding: "21px",
}));

const TitleBox = styled(Box)(() => ({
  display: "flex",
  gap: "12px",
  width: "100%",
}));

const TitleTypography = styled(Typography)(() => ({
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#0D062D",
}));

const SmallCircles = styled(Box)(() => ({
  width: "20px",
  height: "20px",
  backgroundColor: "#E0E0E0",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
/* Rectangle 1066 */

const CardBox = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
  background: "#FFFFFF",
  borderRadius: "16px",
}));
const StatusBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-Between",
}));
const Low = styled(Box)(() => ({
  backgroundColor: "rgba(223, 168, 116, 0.2)",
  borderRadius: "4px",
  padding: "4px",
}));
const Completed = styled(Box)(() => ({
  backgroundColor: "rgba(131, 194, 157, 0.2)",
  borderRadius: "4px",
  padding: "4px",
}));

const LowTypography = styled(Box)(() => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "15px",
  color: "#D58D49",
}));
const HighTypography = styled(Box)(() => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "15px",
  color: "#D8727D",
}));
const CompletedTypography = styled(Box)(() => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "15px",
  color: "#68B266",
}));

const CardTitleTypography = styled(Typography)(() => ({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "22px",
  textAlign: "left",
  color: "#0D062D",
  margin: "6px 0 6px 0",
}));
const CardTextTypography = styled(Typography)(() => ({
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "15px",
  textAlign: "left",
  color: "#787486",
  margin: "6px 0 6px 0",
}));
const CardFooter = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  alignItems: "center",
}));
const FooterTypography = styled(Typography)(() => ({
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "15px",
}));
const CommentAndFileBox = styled(Box)(() => ({
  display: "flex",
  gap: "5px",
  alignItems: "center",
}));

export const Cards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        paddingBottom: "20px",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: { sm: "center", lg: "space-between" },
      }}
    >
      {/* 1st overall card */}
      <OverallCard>
        <TitleBox>
          <Circle fontSize="small" sx={{ color: "#5030E5" }} />
          <TitleTypography> To Do</TitleTypography>
          <SmallCircles>4</SmallCircles>
        </TitleBox>
        <Divider
          sx={{ border: "3px solid #5030E5", margin: "28px 0 28px 0" }}
        />
        {/* 1st card */}
        <CardBox>
          <CardContent>
            <StatusBox>
              <Low>
                <LowTypography>Low</LowTypography>
              </Low>
              <MoreHoriz />
            </StatusBox>

            <CardTitleTypography>Brainstorming</CardTitleTypography>
            <CardTextTypography>
              Brainstorming brings team members diverse experience into play.
            </CardTextTypography>
          </CardContent>
          <CardFooter>
            <Box>
              <AvatarGroup>
                <Avatar src={AvatarPicture} />
                <Avatar src={AvatarPicture} />
                <Avatar src={AvatarPicture} />
              </AvatarGroup>
            </Box>
            <CommentAndFileBox sx={{ display: "flex" }}>
              <TextsmsOutlined />
              <FooterTypography>12 Comments</FooterTypography>
              <FolderOutlined />
              <FooterTypography>3 files</FooterTypography>
            </CommentAndFileBox>
          </CardFooter>
        </CardBox>
        {/* 2nd card */}
        <CardBox>
          <CardContent>
            <StatusBox>
              <Low>
                <HighTypography>High</HighTypography>
              </Low>
              <MoreHoriz />
            </StatusBox>

            <CardTitleTypography>Research</CardTitleTypography>
            <CardTextTypography>
              User research helps you to create an optimal product for users.
            </CardTextTypography>
          </CardContent>
          <CardFooter>
            <Box>
              <AvatarGroup>
                <Avatar src={AvatarPicture} />
                <Avatar src={AvatarPicture} />
              </AvatarGroup>
            </Box>
            <CommentAndFileBox sx={{ display: "flex" }}>
              <TextsmsOutlined />
              <FooterTypography>10 Comments</FooterTypography>
              <FolderOutlined />
              <FooterTypography>3 files</FooterTypography>
            </CommentAndFileBox>
          </CardFooter>
        </CardBox>
        {/* 3rd card */}
        <CardBox>
          <CardContent>
            <StatusBox>
              <Low>
                <HighTypography>High</HighTypography>
              </Low>
              <MoreHoriz />
            </StatusBox>

            <CardTitleTypography>Wireframes</CardTitleTypography>
            <CardTextTypography>
              Low fidelity wireframes include the most basic content and
              visuals.
            </CardTextTypography>
          </CardContent>
          <CardFooter>
            <Box>
              <AvatarGroup>
                <Avatar src={AvatarPicture} />
                <Avatar src={AvatarPicture} />
                <Avatar src={AvatarPicture} />
              </AvatarGroup>
            </Box>
            <CommentAndFileBox sx={{ display: "flex" }}>
              <TextsmsOutlined />
              <FooterTypography>12 Comments</FooterTypography>
              <FolderOutlined />
              <FooterTypography>3 files</FooterTypography>
            </CommentAndFileBox>
          </CardFooter>
        </CardBox>
      </OverallCard>

      {/* 2nd overall Card */}
      <OverallCard>
        <TitleBox>
          <Circle fontSize="small" sx={{ color: "#FFA500" }} />
          <TitleTypography> In progress</TitleTypography>
          <SmallCircles>3</SmallCircles>
        </TitleBox>
        <Divider
          sx={{ border: "3px solid #FFA500", margin: "28px 0 28px 0" }}
        />
        {/* 1st card */}
        <CardBox>
          <CardContent>
            <StatusBox>
              <Low>
                <LowTypography>Low</LowTypography>
              </Low>
              <MoreHoriz />
            </StatusBox>

            <CardTitleTypography>Onboarding Illustrations</CardTitleTypography>
            <CardMedia component="img" src={flower} />
          </CardContent>
          <CardFooter>
            <Box>
              <AvatarGroup>
                <Avatar src={AvatarPicture} />
                <Avatar src={AvatarPicture} />
                <Avatar src={AvatarPicture} />
              </AvatarGroup>
            </Box>
            <CommentAndFileBox sx={{ display: "flex" }}>
              <TextsmsOutlined />
              <FooterTypography>132 Comments</FooterTypography>
              <FolderOutlined />
              <FooterTypography>32 files</FooterTypography>
            </CommentAndFileBox>
          </CardFooter>
        </CardBox>
        {/* 2nd card */}
        <CardBox>
          <CardContent>
            <StatusBox>
              <Low>
                <LowTypography>Low</LowTypography>
              </Low>
              <MoreHoriz />
            </StatusBox>

            <CardTitleTypography>Moodboard</CardTitleTypography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <CardMedia component="img" src={vase} />
              <CardMedia component="img" src={wall} />
            </Box>
          </CardContent>
          <CardFooter>
            <Box>
              <AvatarGroup>
                <Avatar src={AvatarPicture} />
              </AvatarGroup>
            </Box>
            <CommentAndFileBox sx={{ display: "flex" }}>
              <TextsmsOutlined />
              <FooterTypography>1 Comments</FooterTypography>
              <FolderOutlined />
              <FooterTypography>23 files</FooterTypography>
            </CommentAndFileBox>
          </CardFooter>
        </CardBox>
      </OverallCard>

      {/* 3rd overall Card */}
      <OverallCard>
        <TitleBox>
          <Circle fontSize="small" sx={{ color: "#76A5EA" }} />
          <TitleTypography> Done</TitleTypography>
          <SmallCircles>2</SmallCircles>
        </TitleBox>
        <Divider
          sx={{ border: "3px solid #8BC48A", margin: "28px 0 28px 0" }}
        />
        {/* 1st card */}
        <CardBox>
          <CardContent>
            <StatusBox>
              <Completed>
                <CompletedTypography>Completed</CompletedTypography>
              </Completed>
              <MoreHoriz />
            </StatusBox>

            <CardTitleTypography>Mobile App Design </CardTitleTypography>
            <CardMedia component="img" src={PlantCareApp} />
          </CardContent>
          <CardFooter>
            <Box>
              <AvatarGroup>
                <Avatar src={AvatarPicture} />
              </AvatarGroup>
            </Box>
            <CommentAndFileBox sx={{ display: "flex" }}>
              <TextsmsOutlined />
              <FooterTypography>132 Comments</FooterTypography>
              <FolderOutlined />
              <FooterTypography>32 files</FooterTypography>
            </CommentAndFileBox>
          </CardFooter>
        </CardBox>

        {/* 2nd card */}
        <CardBox>
          <CardContent>
            <StatusBox>
              <Completed>
                <CompletedTypography>Completed</CompletedTypography>
              </Completed>
              <MoreHoriz />
            </StatusBox>

            <CardTitleTypography>Design System</CardTitleTypography>
            <CardTextTypography>
              It just needs to adapt the UI from what you did before
            </CardTextTypography>
          </CardContent>
          <CardFooter>
            <Box>
              <AvatarGroup>
                <Avatar src={AvatarPicture} />
                <Avatar src={AvatarPicture} />
                <Avatar src={AvatarPicture} />
              </AvatarGroup>
            </Box>
            <CommentAndFileBox sx={{ display: "flex" }}>
              <TextsmsOutlined />
              <FooterTypography>12 Comments</FooterTypography>
              <FolderOutlined />
              <FooterTypography>3 files</FooterTypography>
            </CommentAndFileBox>
          </CardFooter>
        </CardBox>
      </OverallCard>
    </Box>
  );
};
