import React from 'react'
import Layout from '../Layout/Layout'
import { Box, Typography } from '@mui/material'
import Background from "../images/New1.avif"
import AboutStyleCss from "../styles/AboutStyleCss.css"

const About = () => {
  return (
    
        <Layout>
          
          <Box
  className='about'
  style={{
    backgroundImage: `url(${Background})`,
    marginTop: "-30px",
    height: "900px",
    width: "100%",
  }}
  sx={{
    mt: 0,
    textAlign: "center",
    p: 2,
    "& h3": { fontWeight: "bold", my: 2, fontSize: '2rem' },
    "& p": { textAlign: "justify" },
    "@media (max-width:600px)": { mt: 0 },
    "& h3": { fontSize: '2.5rem' },
  }}
>
          <Typography variant='h4' sx={{mt:10 ,color:'goldenrod',textAlign:"center",p:2,"& h4":{fontWeight:"bold",my:4,fontSize:'2rem'},"& p":{textAlign :"justify",},"@media (max-width:600px)":{mt: 0},"& h4":{fontSize:'2.5rem'}}}>Welcome to RaviChandra Restaurant  </Typography>
          <p style={{ color: '#AACCFF' ,fontSize:'1.7rem', width:'90%',textAlign:'center',}}>
          RaviChandra Restaurant and More was established about a year ago to 
          mesmerise the desi populace in the India with 
          bona fide biryanis. And leaving millions in awe of the 
          flavours offered, the brand soon emerged a household 
          name and expanded wings to regions across the globe.
          </p>
          <p style={{ color: '#107896   ' ,fontSize:'1.7rem', width:'90%',textAlign:'center'}}>
          Today, standing as a proud chain of restaurants tha
          is adored by millions across continents,
          Biryanis and More Pvt Ltd has outlets in more than 12+ cities across the globe.
          </p>
        </Box>
      
        </Layout>
    
   
  )
}

export default About