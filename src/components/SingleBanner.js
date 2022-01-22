import styled from "styled-components";
import defaultImg from "../images/RoomBanner.jpeg";
const SingleBanner = styled.header`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SingleBanner;