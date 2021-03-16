import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
  font-size: 13px;
  
`

const Image = styled.div`
  background-image: url(${(props) => props.bgurl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 10px;
  right: 10px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`

const ImageContainer = styled.div`
  margin-bottom: 7px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`


const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  margin-top: 5px;
  
`
const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`


const Poster = ({id, title, rating, year, poster}) => {
    return (
        <Container>
            <ImageContainer>
                <Image
                    bgurl={poster !== null ? `https://image.tmdb.org/t/p/w500${poster}` : require("../assets/download.jpg")}
                />
                <Rating>⭐ {rating} / 10</Rating>
            </ImageContainer>
            <Title>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</Title>
            <Year>{year}</Year>
        </Container>
    );
};

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    poster: PropTypes.string

};

export default Poster;
