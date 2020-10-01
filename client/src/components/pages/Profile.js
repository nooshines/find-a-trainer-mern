import React, { Fragment, useState, useContext, useEffect } from "react";
import { TrainerContext } from "../../context/trainer/TrainerContext";
import AuthContext from "../../context/auth/authContext";

const Profile = (props) => {
  const { getTrainerProfile } = useContext(TrainerContext);
  const authContext = useContext(AuthContext);
  const { user } = authContext;
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

  console.log("user in profile", user);

  return (
    <Fragment>
      <div className="profile-page p-2">
        <img src={profile.imageUrl} className="round-img my-1 imageUrl" />
        <h2 className="primary-color-test">Name :</h2>
        <h3>{profile.name}</h3>
        <h2 className="primary-color-test">bio:</h2>
        <h3>{profile.bio}</h3>
        <h2 className="primary-color-test">certificate: </h2>
        <h3>{profile.certificate}</h3>
        <h2 className="primary-color-test">address:</h2>
        <h3>{profile.address}</h3>
        <input
          type="submit"
          className="btn btn-primary my-3"
          value="   Edit   "
          onClick={onClickHandler}
        />
      </div>
    </Fragment>
  );
};

export default Profile;
