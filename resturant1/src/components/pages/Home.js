import React from 'react'
import Layout from '../Layout/Layout'
import { Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import Banner from "../images/banner.jpeg"
import HomeCssStyles from "../styles/HomeCssStyles.css"


const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${Banner})`,marginTop:"-30px",
        height:"900px",width:"100%"
        }}>

          <div className="headerContainer">
            <h1>Celebrate your day...</h1>
            <p>India's most delicious Food...</p>
              <Link to="/menu">
              <button>ORDER NOW</button>
              </Link>
          
          </div>

        </div>
        {/* <div className='about' style={{backgroundImage:`url(${Banner})`,width:"100%",marginTop:"-30px",height:"650px"}}>


        </div> */}

    </Layout>

  )
}

export default Home