import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className='Plans-container'>
        <div className="blur plan-blur-1"></div>
        <div className="blur plan-blur-2"></div>
        <div className="Plans-header">
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now with us</span>
        </div>
        <div className="plans">
            {plansData.map((plan, i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span> $ {plan.price}</span>

                    {plan.features.map((feature, i) =>(
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}> {feature}</span>
                        </div>
                    ))}
                    <div >
                        <span>show more benefits -></span>
                    </div>
                    <button className='btn'> join now</button>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Plans