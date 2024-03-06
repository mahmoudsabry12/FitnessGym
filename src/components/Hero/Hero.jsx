import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import '../../App.css'
import Hero_image from "../../assets/hero_image.png"
import Hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'


const Hero = () => {
  const  transition={type:'spring', duration:3}
  const mobile = window.innerWidth <= 768 ? true : false
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>
        <div className="the-best-ad">
          <motion.div
            initial={{left: mobile ? '130px' : '238px'}}
            whileInView={{left:'8px'}}
            transition={{duration:1,type:'tween'}}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        <div className="header-text">
          <div >
            <span className='stroke-text'>Shape </span>
            <span>your</span>
          </div>

          <div ><span> ideal body</span></div>

          <div> 
            <span>In here we will make you shapee your bode gameed
            In here we will make you shapee your bode gameed  
            </span>       
          </div>

        </div>

        <div className="figures">
          <div className="fig">
            <div>
              <span> <NumberCounter end={140} start={80} delay={3} preFix="+"/>   </span>
            </div>
            <span>expert coaches</span>
          </div>
          <div className="fig">
            <div>
            <span> <NumberCounter end={890} start={600} delay={3} preFix="+"/>   </span>

            </div>
            <span>expert coaches</span>
          </div>
          <div className="fig">
            <div>
            <span> <NumberCounter end={100} start={40} delay={3} preFix="+"/>   </span>
            </div>
            <span>expert coaches</span>
          </div>
        </div>

        <div className="buttons">
          <div className="btn b">Get Started</div>
          <div className="btn">Learn More</div>
        </div>

      </div>
      <div className="right-h">
        <button>
          Join Now
        </button>
        <motion.div 
          initial={{right:'-1rem'}}
          whileInView={{right:"4rem"}}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt=""  />
          <span> Heart Rate</span>
          <span>120 bpm</span>
        </motion.div>

        <img src={Hero_image} alt="" className='hero_image' />
        <motion.img 
          initial={{right:'11rem'}}
          whileInView={{right:'20rem'}}
          transition={transition}
          src={Hero_image_back} alt="" className='hero_image_back' />

        <motion.div 
          initial={{right:'37rem'}}
          whileInView={{right:'28rem'}}
          transition={transition}
          className="calories">
          <img src={Calories} alt="" />
          <div>
            <span> Calouries Burned   </span>
            <span style={{color:"white",fontWeight:"bold",marginTop:"-15px"}}> 200 Kcal</span>
          </div>
          
        </motion.div>
      </div>
    </div>
  )
}

export default Hero