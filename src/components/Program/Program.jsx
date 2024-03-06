import React from 'react'
import './Program.css'
import {programsData} from "../../data/programsData"
import RightArrow from '../../assets/rightArrow.png'

const Program = () => {
  return (
    <div className='programs' id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className="programs-categories">
            {programsData.map((category)=>(
                <div className="category">
                    {category.image}
                    <span>{category.heading}</span>
                    <span>{category.details}</span>
                    <div className="join-now"><span>join now</span><img src={RightArrow} alt="" /></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Program