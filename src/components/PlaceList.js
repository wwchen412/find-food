import React from 'react';
import styled from 'styled-components';
import Rating from './Rating';


const Place = styled.div`

    display: inline-block;
    width: calc((100% - 2rem) /2);
    border: 1px solid #eee;
    padding: 1rem;
    border-radius: 1rem;
    margin-right: .5rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    background:#fff;
    @media (max-width: 575px) {
      width: calc(100% - 1rem);
      margin:0 auto 1rem;
    }
  h3{
    text-overflow : ellipsis;
    white-space : nowrap;
    overflow: hidden;
  }
  .star {
  position: relative;
  
  display: inline-block;
  width: 0;
  height: 0;
  
  margin-left: .9em;
  margin-right: .9em;
  margin-bottom: 1.2em;
  border-right:  .3em solid transparent;
  border-bottom: .7em  solid #FC0;
  border-left:   .3em solid transparent;
  font-size: 8px;
  
  &:before, &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: .6em;
    left: -1em;
    border-right:  1em solid transparent;
    border-bottom: .7em  solid #FC0;
    border-left:   1em solid transparent;
    transform: rotate(-35deg);
  }
  &:after {  
    transform: rotate(35deg);
  }
}
  .star--empty{
    border-bottom: .7em  solid #ccc;
    &:before, &:after{
      border-bottom: .7em  solid #ccc;
    }
  }
`;
const PlaceList = (props)=> {
    return(
        <Place key={props.placeId}>
            <h3>{props.placeName}</h3>
            <Rating rating={props.rating} key={props.placeId}></Rating>
        </Place>
    )
}

export default PlaceList;