import React, { Fragment, useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { TrainerContext } from "../../context/trainer/TrainerContext";
import ReviewHeader from "../pages/ReviewHeader";
import ReviewForm from "../pages/ReviewForm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  /* &:last-child {
    background: whi;
  } */
`;
const Main = styled.div`
  /* padding-left: 50px; */
`;

const PublicProfile = () => {
  const { getReviews, getTrainerById } = useContext(TrainerContext);
  const [trainer, setTrainer] = useState({});
  const [trainerReviews, setTrainerReviews] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    currentTrainer();
    currentTrainerReviews();
  }, []);

  const currentTrainer = async () => {
    const res = await getTrainerById(id);
    console.log("currentTrainer", res);
    setTrainer(res);
  };

  const currentTrainerReviews = async () => {
    const res = await getReviews(trainer._id);
    console.log("currentTrainerReviews", res);
    setTrainerReviews(res);
  };

  return (
    <Fragment>
      <Wrapper>
        <Column>
          <Main>
            <ReviewHeader trainer={trainer} />
            <div className="reviews"></div>
          </Main>
        </Column>
        <Column>
          <ReviewForm
            profileId={id}
            name={trainer.name}
            setTrainerReviews={setTrainerReviews}
            trainerReviews={trainerReviews}
          />
        </Column>
      </Wrapper>
    </Fragment>
  );
};

export default PublicProfile;
