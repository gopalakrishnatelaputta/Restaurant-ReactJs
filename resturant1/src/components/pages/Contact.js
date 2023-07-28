import React from 'react'
import Layout from '../Layout/Layout'
import { Box,Table,TableCell,TableContainer,TableHead,TableRow,Typography,TableBody} from '@mui/material'
import { TableBar } from '@mui/icons-material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ContactBackground from "../images/Contactbackground1.jpg"

const Contact = () => {
  return (
    <Layout >
      
      <Box sx={{ backgroundImage: `url(${ContactBackground})`, 
          backgroundPosition: 'center',backgroundSize:'cover',mt:-8,width:'1530px',ml:0,mb:0,height:650,mr:0}}>
        <Box sx={{my:10,ml:10,"& h5":{fontWeight:'bold',nb:2,color:"cyan"}}}>
          <Typography variant='h5'>
            Contact My Reastaurant
          </Typography>
         
         <p  style={{ color: '#B5C689' ,fontSize:'1.3rem'}}> Service options: Dine-in · Drive-through · Door delivery Avaliable</p>
           <p style={{ color: '#B5C689   ' ,fontSize:'1.3rem'}}>Address: 12, Old Club Rd, Kothapeta, Guntur, Andhra Pradesh 522001</p>
          <p style={{ color: '#B5C689   ' ,fontSize:'1.3rem'}}>Hours: Open ⋅ Closes 4:30 pm ⋅ Reopens 7:02 pm</p>
          <p style={{ color: '#B5C689   ' ,fontSize:'1.3rem'}}>Updated by this business 8 weeks ago</p>
          {/* <p style={{ color: 'brown   ' ,fontSize:'1.3rem'}}>Phone: 083670 00088</p>
           <p style={{ color: 'brown   ' ,fontSize:'1.3rem'}}>Order: swiggy.com</p>  */}
  

        </Box >
        <Box sx={{ m:3,width:'600px',ml:4,"@media (max-width:600px)":{width:'300px'}}}>
          <TableContainer>
            <Table aria-label='Contact Table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:"#CD594A",color:'white'}}align='center'>
                    Contact Details
                  </TableCell>
                </TableRow>

              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{bgcolor:"#CD594A",color:'white'}}align='center'>
                      <SupportAgentIcon sx={{color:'red', pt :1}} /> +1800 258-456789 (Toll free)
                  </TableCell>
    
                </TableRow>
                <TableRow>
                <TableCell sx={{bgcolor:"#CD594A",color:'white'}}align='center'>
                      <EmailIcon sx={{color : "skyblue",pt:1}}/> ravichandra123@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{bgcolor:"#CD594A",color:'white'}}align='center'>
                      <AddIcCallIcon sx={{color:"green",pt :1}}></AddIcCallIcon>  +91 8374846811
                  </TableCell>
                </TableRow>

              </TableBody>

            </Table>
          </TableContainer>
        </Box>
        </Box> 
       
    </Layout>
  )
}

export default Contact