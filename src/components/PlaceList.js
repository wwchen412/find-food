import React from 'react';
import styled from 'styled-components';

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
  h3{
    text-overflow : ellipsis;
    white-space : nowrap;
    overflow: hidden;
  }
`;
const PlaceList = (props)=> {
    return(
        <Place key={props.placeId}>
            <h3>{props.placeName}</h3>
            <p>{props.rating}</p>
        </Place>
    )
}

export default PlaceList;