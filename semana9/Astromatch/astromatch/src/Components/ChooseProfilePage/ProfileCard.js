import React from "react";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
  margin: 16px;
  height: 50vh;
  border: 1px solid black;
  border-radius: 15px;
  box-sizing: border-box;
`;
const ProfilePicture = styled.img`
  width: 100%;
  display: block;
  max-height: 35vh;
  border-radius: 15px 15px 0 0 ;
`;
const ProfileInfo = styled.div`
  padding: 0 3px;
`;

const Info = styled.h1`
font-family: sans-serif;
font-size: medium;
`

function ProfileCard(props) {
  return (
    <ProfileCardContainer>
      <ProfilePicture src={props.profile.photo} />
      <ProfileInfo>
        <Info>
          {props.profile.name}, {props.profile.age}
        </Info>
        <Info>{props.profile.bio}</Info>
      </ProfileInfo>
    </ProfileCardContainer>
  );
}

export default ProfileCard;
