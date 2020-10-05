import React, { Fragment, useState, useContext, useEffect } from "react";
import { TrainerContext } from "../../context/trainer/TrainerContext";
import styled from "styled-components";

const Image = styled.div`
  img {
    width: 250px;
    height: 250px;
  }
`;

const Edit = styled.div`
  margin-bottom: 50px;
  margin-top: 50px;
  input {
    font-size: 14px;
    width: 150px;
    height: 60px;
    cursor: pointer;
    background: #ed733f;
    color: white;
    border: none;
  }
`;

const Profile = (props) => {
  const { getTrainerProfile } = useContext(TrainerContext);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    trainetProfile();
  }, []);

  const onClickHandler = () => {
    console.log("clicked");
    props.history.push("/editprofile");
  };

  const trainetProfile = async () => {
    const res = await getTrainerProfile();
    console.log("res", res);
    setProfile(res);
  };

  return (
    <Fragment>
      <h1 className="my-3">Welcome {profile.name}</h1>
      <Image>
        {" "}
        <img src={profile.imageUrl} />{" "}
      </Image>
      <h2>Name :</h2>
      <h4>{profile.name}</h4>
      <h2>bio:</h2>
      <h4>{profile.bio}</h4>
      <h2>certificate: </h2>
      <h4>{profile.certificate}</h4>
      <h2>address:</h2>
      <h4>{profile.address}</h4>
      <Edit>
        <input
          type="submit"
          value="   Edit Profile    "
          onClick={onClickHandler}
        />
      </Edit>
    </Fragment>
  );
};

export default Profile;
