import React, { useEffect } from 'react';

import { getRandomFood } from '../action'
import { useSelector ,useDispatch} from 'react-redux';
import Nearby from './Nearby';

import styled ,{ keyframes }from 'styled-components'



const Search = ({className}) => {
    const searchText = useSelector(state => state.food);
    const dispatch = useDispatch()
    
    const mouseMove = (evt) => {
       
            const transFormX = Math.floor(evt.clientX / 20);
            const transFormY = Math.floor(evt.clientY / 20);
            const clouds =  document.querySelectorAll('.cloudAnime');
            clouds.forEach((e)=>{
                e.style.transform =`translate(-${transFormX}px,-${transFormY}px)`;
            })
            
    }
    useEffect(()=>{
        document.getElementById("sky").addEventListener('mousemove', mouseMove);
    })
    return(
        <div className={className}>
            <section className={className+"_wrap"} id="sky">
                <h1 className={className+"_title"}>佛系找食</h1>
                <h3 className={className+"_subTitle"}>總是想不到要吃什麼嗎？<br/>
                不如就隨緣吧！</h3>
                <div className={className+"_sun"}></div>
                <div className={className+"_clouds cloud1 cloudAnime"}>
                <img src={require('../img/cloud1.svg')} alt="" />      
                </div>
                <div className={className+"_clouds cloud2 cloudAnime"}>
                <img src={require('../img/cloud2.svg')} alt=""/>      
                </div>
                <div className={className+"_clouds cloud3 cloudAnime"}>
                <img src={require('../img/cloud3.svg')} alt=""/>      
                </div>
            </section>
            {
            !searchText &&
            <button onClick={(evt)=>{ 
                evt.preventDefault();
                dispatch(getRandomFood())   
            }}>隨緣尋找
            </button>}

            {searchText && 
                <>
                <h2>就決定吃<span style={{'color':'#ffbb00'}}>{searchText}</span>了!</h2>
                <button onClick={(evt)=>{ 
                    evt.preventDefault();
                    dispatch(getRandomFood()) }}>讓我再重抽一次</button>
                <Nearby />
                </>
            }

            
        </div>
        
    )
   
}
const sunAnimation = keyframes`
     0% { box-shadow: 0 0 20px 0 #fae348; }
    100% { box-shadow: 0 0 80px 0 #fae348;}
`
const MainPage = styled(Search)`

    color:#9b9b9b;
    font-weight:100;
    &_wrap{
        overflow: hidden;
        position:relative;
    }
    &_title{
        font-size: 3rem;
        font-weight:100;
    }
    &_subTitle{
        font-size: 1rem;
        font-weight:300;
    }
    &_sun{
        width: 250px;
        height: 250px;
        border-radius:50%;
        box-shadow: 0 0 80px 0 #fae348;
        margin: 50px auto 75px; 
        background-image: radial-gradient(circle at 50% 50%, #f5f3d6, #fffab8 71%);
        animation: ${sunAnimation} 2s infinite linear alternate;
    }
    &_clouds{
        position: absolute;
      
        opacity: .8;
        &.cloud1{
            top: calc(50% + 50px);
            left: calc(50% + 150px);
        }
        &.cloud2{
            top: calc(50% - 100px);
            right: calc(50% + 150px);
        }
        &.cloud3{
            top: 10%;
            right: 10%;
            z-index:-1;
        }
    }
   
    button{
        appearance: none;
        min-width: 150px;
        background:transparent;
        padding:.5rem 1.5rem;
        border-radius: 2rem;
        border: solid 1px #9b9b9b;
        color:#9b9b9b;
        outline:0;
        cursor: pointer;
        &:hover{
            background: #9b9b9b;
            color:#fff;
        }
        &:active,&:hover{
            outline:0;
        }
    }
    .Place_result{
        display:flex;
        align-items:top;
        &_list{
            width:40%;
            max-height:400px;
            overflow-y: scroll;
        }
    }

`
export  default MainPage;