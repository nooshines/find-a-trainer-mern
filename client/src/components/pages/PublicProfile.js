import React, { Fragment, useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { TrainerContext } from "../../context/trainer/TrainerContext";
import ReviewHeader from "../pages/ReviewHeader";
import ReviewForm from "../pages/ReviewForm";
import ReviewBody from "../pages/ReviewBody";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 2fr);
  }
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
  }, []);

  const currentTrainer = async () => {
    const trainer = await getTrainerById(id);
    console.log("currentTrainer", trainer);
    setTrainer(trainer);
    const reviews = await getReviews(trainer._id);
    console.log("currentTrainerReviews", reviews);
    setTrainerReviews(reviews);
  };

  return (
    <Fragment>
      <Wrapper>
        <Column>
          <Main>
            <ReviewHeader trainer={trainer} trainerReviews={trainerReviews} />
            <div className="reviews">
              <ReviewBody trainerReviews={trainerReviews} />
            </div>
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
