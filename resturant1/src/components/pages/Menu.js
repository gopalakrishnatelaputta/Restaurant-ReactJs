import React,{useState} from 'react'
import Layout from '../Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography,Toolbar, Container, Grid} from '@mui/material'
import { MenuList } from '../data/data'
import { Link, useNavigate } from 'react-router-dom'
import MenuStylesCss from '../styles/MenuStylesCss.css'
import { Navbar, Nav, NavDropdown, NavbarBrand, FormControl, Dropdown,Badge } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';








function Menu  () {

  const [cartItems, setCartItems] = useState([]); // State to store cart items
  // Handle adding item to cart
  const handleAddToCart = (menu) => {
    setCartItems([...cartItems, menu]);
  };

  // const handleGoToCart = () => {
  //   navigate('/cart', { state: { cartItems } });
  // };

  return (
    <> <Layout>
    {/* <Navbar className='nav-bar'>
      <Container>
        <Navbar.Brand className='brand'>
          <h4 >Menu cart</h4>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl className='a-auto'>

          </FormControl>
        </Navbar.Text>
      </Container>
    </Navbar> */}

      <Grid className='nav-bar' Container rowSpacing='2px' sx={{display:'flex',justifyContent:'space-between'}}>
        <Grid item xs={3} className='menu-cart' sx={{ml:'25px',p:'5px'}}>Menu Cart</Grid>
        <Grid item xs={6}  ><FormControl className='search'  placeholder='Search a food item'/></Grid>
        {/* <Grid item xs={3} ><ShoppingCartIcon sx={{fontSize:'35px'}} className='cartIcon'><Badge bg="primary">New</Badge></ShoppingCartIcon></Grid> */}
        <Grid item xs={3}>

          <Dropdown alignright className='dropdown'>
            <Dropdown.Toggle variant='success'>
              <ShoppingCartIcon color='white' fontSize='80px'></ShoppingCartIcon>
              <Badge className='badge' >{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <span style={{padding:10}}  > Cart is Empty !</span>
            </Dropdown.Menu>
          </Dropdown>

        </Grid>

      </Grid>




   
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {MenuList.map((menu) => (
            <Card sx={{ maxWidth: '450px', display: "flex", m: 2, mt: 8 }}>
              <CardActionArea>
                <CardMedia sx={{ minHeight: '300px', height: '70px' }} component={'img'} src={`${menu.image}`} alt={menu.name} />
                <CardContent>
                  <Typography variant='h5' gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant='body2'>{menu.description}</Typography>
                  <Typography variant='body2'>{menu.price}</Typography>
                  <div className='buttonContainer' style={{ marginLeft: '100px' }}>
                    <Typography><Link><button onClick={() => handleAddToCart(menu)}>Add to cart+</button></Link></Typography>

                  </div>

                </CardContent>
              </CardActionArea>
            </Card>
          ))}

        </Box>
      </Layout></>
  )
}

export default Menu