import styled from "styled-components";

export const Header = styled.header`
  background-color: #323232;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: white;
`;

export const HeaderButton = styled.button`
  background-color: #282B2E;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  margin: 0px 5px;
  padding: 12px 24px;

  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }

  &:hover {
    background-color: #2F3236;
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const UtilButtonsDiv = styled.div`
  position: absolute;
  width:9%;
  height: 70px;
  top: 0%;
  left: 0%;
  background: 323232;
`
export const UtilButtonsSound = styled.button`
  background: #373838;
  margin-left: 10px;
  position: relative;
  height: 45px;
  width: 45px;
  top: 50%;
  left: 20%;
  border-radius: 50%;
  border: 1px solid #3C3F40;
  transform: translate(-50%, -50%);
  cursor:pointer;
`
export const UtilButtonsEmail = styled.button`
  background: #373838;
  position: relative;
  margin-left: 10px;
  height: 45px;
  width: 45px;
  top: 50%;
  left: 20%;
  border-radius: 50%;
  border: 1px solid #3C3F40;
  transform: translate(-50%, -50%);
  cursor:pointer;
`

export const WhaleModeDiv = styled.div`
  position: absolute;
  width: 20%;
  height: 70px;
  top: 0%;
  left: 9%;
  background: #323232;
`
export const WhaleModeBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  opacity: 0.7;
  border-radius: 30px;
  border: 1px solid #414341;
  top: 50%;
  left: 50%;
  background-image: linear-gradient(to right, #5B543F,#36383C);
  transform: translate(-50%, -50%);
  // filter: blur(2px);
  opacity:
  // -webkit-filter: blur(2px);
`

export const WhaleModeHeader = styled.h1`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  font-weight: 20;
  font-size: 12px;
  position: relative;
  left: 10%;
  top: 8px;
  color: white;
`

export const WhaleModeTXT = styled.p`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  font-weight: 20;
  font-size: 10px;
  position: relative;
  left: 60%;
  top: 10%;
  transform: translate(-50%, -50%);
`

export const BetaBorder = styled.div`
  position: absolute;
  width: 40px;
  height: 20px;
  // opacity: .6;
  left: 40%;
  top: 35%;
  padding: 0px;
  background: red;
  // border: 1px solid white;
  border-radius: 30px;
`

export const BetaTXT = styled.p`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  font-weight: 20;
  font-size: 10px;
  position: absolute;
  color: white;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
`

export const TryNowBtn = styled.button`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  // letter-spacing: 3px;
  height: 35px;
  width: 100px;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  background: #1E2124;
  border-radius: 20% / 50%;
  border: .5px solid #545659;
  position: absolute;
  color: #F0B912;
  cursor:pointer;
`
