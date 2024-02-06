import React from 'react';
import "./Card.css"


const Card = () => {
    return (

        <div className='card'>
            <div className='mainCard'>
                <div className='container'>
                    <div className='pattern'>
                    
                    </div>
                </div>
                <div className='text'>
                    <p><span className='equi'>Equilibrium #3429</span></p>
                    <p className='mainText'>
                        Our Equilibrium collection promotes balance and calm
                    </p>
                    <div>
                        <div className='miniText'>
                            <div className='underText1'>
                                <div className='crystal'>

                                </div>

                                <div className='text1'>
                                    <p><span className='cyan'>0.014 ETH</span></p>
                                </div>
                            </div>
                            <div className='underText2'>
                                <div className='clock'>

                                </div>  

                                <div className='text2'>
                                    <p>3 days left</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='underCard'>
                        <div className='photo'></div>
                        <p><span>Creation of </span>Jules Wyvern</p>
                    </div>
                   
                </div>
               
            </div>
            
        </div>
    );
}

export default Card;
