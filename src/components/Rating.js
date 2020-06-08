import React from 'react';

const Rating = (props) => {
    
        const stars = parseInt(Math.round(props.rating));
        const starsArray = [];
        for(let i = 0;i<stars;i++){
            starsArray.push('star--yellow')
        }
        for(let a = starsArray.length; a < 5;a++ ){
            starsArray.push('star--empty')
        }
      
    
    return (
        <>
        { starsArray && 
            starsArray.map((star,index)=>(
                <div className={"star "+star} key={index}></div>
                ))
        }
        </>
    )
}

export default Rating;