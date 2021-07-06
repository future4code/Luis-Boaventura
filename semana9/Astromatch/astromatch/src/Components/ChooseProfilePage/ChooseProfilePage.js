import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ChooseButtons from "./ChooseButtons";
import axios from "axios";
import styled from 'styled-components'

const Loading = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin-top: 70px;
`;

const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
   align-items: center; 
`;

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

  const getProfileChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Luis-Claudio-Boaventura/person"
      )
      .then((response) => {
        setProfileToChoose(response.data.profile);
      });
  };

  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: profileToChoose.id,
    };
    setProfileToChoose(undefined);

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Luis-Claudio-Boaventura/choose-person",
        body
      )
      .then((response) => {
        getProfileChoose();
      });
  };

  useEffect(() => {
    getProfileChoose();
  }, []);

  const onClickNo = () => {
    chooseProfile(false);
  };

  const onClickYes = () => {
    chooseProfile(true);
  };

  return (
    <ProfilePageContainer>
      {profileToChoose ? (
        <>
          <ProfileCard profile={profileToChoose} />
          <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
        </>
      ) : (
        <Loading src='https://flevix.com/wp-content/uploads/2019/12/Wave-Loader-1.svg' />
      )}
    </ProfilePageContainer>
  );
}

export default ChooseProfilePage;
