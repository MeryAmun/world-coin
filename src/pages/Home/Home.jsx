import React from 'react'
import './home.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { black, formula, gif, group4, group_12, image1, image5, vector } from '../../assets'

const Home = () => {
  return (
    <div className='home'>
      <div className="home__hero-section">
        <div className="home__hero-section-left">
          <div className="home__hero-section-left-content">
            <h3 className="home__hero-section-title">
            Cost Effective Distributed AI Training Secured by Ethereum
            </h3>
            <div className="home__hero-paragraph">
              The internet is powerful because of large networks. Email, social apps, and marketplaces are examples of such networks. The more participants they have, the more powerful they become. For the first time,
            </div>
            <Link to='/whitepaper' className="home__hero-button">
              Whitepaper
            </Link>
          </div>
        </div>
        <div className="home__hero-section-right">
          <div className="home__hero-image">
            <img src={gif} alt="" />
          </div>
        </div>
      </div>
      <div className="home__section-two">
        {/* <div className="home__section-three">
      
      </div> */}
        {/* <div className="home__hero-section"> */}

        {/* </div> */}
        <div className="home__section-one">
         <div className="home__section-one-imageOne">
         <img src={black} alt="" />
         </div>
         <div className="home__section-one-imageTwo">
         <img src={group_12} alt="" />
         </div>
        
        </div>
        <div className="home__section-three">
          <div className="home__section-five">
            <div className="section__five-left">
              <h3 className="section__five-left-title">
                "Worldcoin: Transforming Global Transactions"
              </h3>
              <div className="five__left-paragraph">
                If a cryptocurrency were adopted at scale, it would vastly increase access to the internet economy and make applications possible that are now.
              </div>
            </div>
            <div className="section__four-right">
              <h5 className="section__five-right-header">
                Inputs
              </h5>
              <div className="section__four-right-image">
                <img src={vector} alt="" className='section__four-right-image' />
              </div>
              <h5 className="section__five-right-header">
                Outputs
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="home__section-three">

        <div className="home__section-five">
          <div className="section__five-right">
            <h5 className="section__five-right-header">
              Summary: the equations of back propagation
            </h5>
            {/* <div className="section__five-right-image"> */}
            <img src={formula} alt="" className='section__five-right-image' />
            {/* </div> */}
          </div>
          <div className="section__five-left">
            <h3 className="section__five-left-title">
              "Revolutionizing the Internet Economy"
            </h3>
            <div className="five__left-paragraph">
              If a cryptocurrency were adopted at scale, it would vastly increase access to the internet economy and make applications possible that are now.
            </div>
          </div>
        </div>
        {/* <div className="home__section-six-main"> */}
        <div className="home__section-six">
          <img src={image5} alt="" />
          {/* </div> */}
        </div>
      </div>
      <div className="home__section-seven">
        <div className="home__section-seven-main">
          <div className="section__seven-left">
            <h3 className="section__seven-left-title">
              Token Info
            </h3>
            <div className="seven__left-paragraph">
              If a cryptocurrency were adopted at scale, it would vastly increase access to the internet economy and make applications possible that are now.
            </div>
          </div>
          <div className="section__seven-right">
          </div>
        </div>
        <div className="home__section-eight">
          <span className="section__eight-text">Become an Orb Operator</span>
          <Link to="/about" className="home__link">
            Learn more
            <BsArrowRightShort size={20} color='#fff' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home