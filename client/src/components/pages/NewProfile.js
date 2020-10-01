import React, { Fragment, useState, useContext, useRef } from "react";
import { TrainerContext } from "../../context/trainer/TrainerContext";

const NewProfile = (props) => {
  const { createTrainer, trainers, setTrainers } = useContext(TrainerContext);
  const [formData, setFormData] = useState({
    name: "",
    certificate: "",
    address: "",
    bio: "",
    imageUrl: "",
  });

  const file = useRef(null);

  const { name, certificate, address, bio } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const multiFormData = new FormData();
    multiFormData.append(
      "avatar",
      file.current.files[0],
      file.current.files[0].name
    );
    multiFormData.append("name", name);
    multiFormData.append("certificate", certificate);
    multiFormData.append("address", address);
    multiFormData.append("bio", bio);
    const newTrainer = await createTrainer(multiFormData);
    console.log("newTrainer", newTrainer);
    setTrainers([...trainers, newTrainer]);
    setFormData({
      name: "",
      certificate: "",
      address: "",
      bio: "",
      imageUrl: "",
    });
    props.history.push("/profile");
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" name="name" value={name} onChange={onChange} />
          <small className="form-text">please enter your name</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="certificate"
            value={certificate}
            onChange={onChange}
          />
          <small className="form-text">please enter your Certificate</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            value={address}
            onChange={onChange}
          />
          <small className="form-text">please enter your Address</small>
        </div>

        <div className="form-group">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="avatar"
              ref={file}
            />
          </div>
          <small className="form-text text-muted">
            please choose your profile picture
          </small>
        </div>

        <div className="form-group">
          <textarea name="bio" value={bio} onChange={onChange} />
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <input type="submit" className="btn btn-primary my-1" />
      </form>
    </Fragment>
  );
};

export default NewProfile;
