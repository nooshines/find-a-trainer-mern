import React, {
  Fragment,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { TrainerContext } from "../../context/trainer/TrainerContext";

const EditProfile = (props) => {
  const { editTrainer, setTrainers, trainers, getTrainerProfile } = useContext(
    TrainerContext
  );
  const [formData, setFormData] = useState({
    name: "",
    certificate: "",
    address: "",
    bio: "",
    imageUrl: "",
  });

  useEffect(() => {
    trainetProfile();
  }, []);

  const { name, certificate, address, bio } = formData;

  const trainetProfile = async () => {
    const res = await getTrainerProfile();
    console.log("res in edit", res);
    const { name, certificate, address, bio } = res;
    setFormData({
      name,
      certificate,
      address,
      bio,
    });
  };

  const file = useRef(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCancelHandler = () => {
    props.history.push("/profile");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const multiFormData = new FormData();
    console.log("file.current", file.current);
    if (file.current.files.length) {
      multiFormData.append(
        "avatar",
        file.current.files[0],
        file.current.files[0].name
      );
    }
    multiFormData.append("name", name);
    multiFormData.append("certificate", certificate);
    multiFormData.append("address", address);
    multiFormData.append("bio", bio);
    // console.log("multiformdata", multiFormData);
    const editedTrainer = await editTrainer(multiFormData);
    console.log("editedTrainer", editedTrainer);
    // se the state

    props.history.push("/profile");
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Edit Your Profile</h1>
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
        <button
          type="text"
          className="btn btn-primary my-1"
          onClick={onCancelHandler}
        >
          Cancel
        </button>
      </form>
    </Fragment>
  );
};

export default EditProfile;
