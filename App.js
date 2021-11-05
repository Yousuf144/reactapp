import logo from './logo.svg';
import './App.css';
import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ListIcon from '@mui/icons-material/List';
import * as React from 'react';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { fontSize, fontWeight, textAlign } from '@mui/system';
import Divider from '@mui/material/Divider';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';

function App(props) {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const top100Films = [
    { label: 'Products', year: 1994 },
    { label: 'Suplier', year: 1972 },
   ]

  //  slider 
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://s.alicdn.com/@img/imgextra/i2/O1CN01eDYIeP1DSyFsa06Oi_!!6000000000216-0-tps-990-400.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://s.alicdn.com/@img/imgextra/i3/O1CN01VNUdjq1ftoijrNU7P_!!6000000004065-2-tps-990-400.png',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://s.alicdn.com/@img/imgextra/i2/O1CN01tzlNNl28xaqEZItHA_!!6000000007999-0-tps-990-400.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://s.alicdn.com/@img/imgextra/i1/O1CN01aX23AE1uRABJ4InsG_!!6000000006033-0-tps-990-400.jpg',
  },
];

const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
   

   
  return (
<Grid container>
<Grid>
  <img src="https://img.alicdn.com/imgextra/i2/O1CN01M8HhVB1bBc1pL6eaT_!!6000000003427-2-tps-1920-60.png" width="100%" height="60px" ></img>
</Grid>

{/* search bar  */}
<Grid container>
  
<Grid xs={2}>
<img src="https://s.alicdn.com/@img/tfs/TB1pDDmmF67gK0jSZPfXXahhFXa-2814-380.png" className="mainlogo"></img>
</Grid>

<Grid xs={6} className='search'>
  <Grid container>
    <Grid xs={2} >
    <FormControl sx={{  Width: 80 ,}}>
        <Select sx={{height:"43px",borderTopLeftRadius:"12px",borderBottomLeftRadius:"17px"}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Products</em>
          </MenuItem>
          <MenuItem value="supplier">Supplier</MenuItem>
        </Select>
      </FormControl>
    </Grid>
<Grid xs={6}>
<Typography className="searchtxt">
  What Are you looking for..
</Typography>
</Grid>
<Grid xs={1}>
<CameraAltOutlinedIcon  className="camerast" fontSize="medium" sx={{margin:"5px 5px 5px 15px"}}/>

</Grid>
<Grid xs={1} className="searchright1">
<SearchIcon sx={{color:"white"}} className="searchst" fontSize="medium"/>

</Grid>
<Grid xs={2}  className="searchright">
<Button variant="contained" sx={{color:"white",'&:hover':{backgroundColor:"#ff6a00"},backgroundColor:"#ff6a00",margin: "-27px", boxShadow: "none"}}>Search</Button>

</Grid>
    </Grid>


</Grid>

<Grid xs={4} className="rigtbar">
  <Grid container>
    <Grid xs={3} >
    <Grid container>
                <Grid xs={4}>
<PersonOutlineOutlinedIcon  className="camerast" sx={{fontSize:"45px"}}/>

                </Grid>
                <Grid xs={8}>
                  <Typography sx={{fontSize:"12px",paddingLeft:"15px",paddingTop:"10px"}}>
                    Sign In Join Free
                  </Typography>
                </Grid>
    </Grid>
    </Grid>

    <Grid xs={3} sx={{paddingLeft:"40px"}}>
<SmsOutlinedIcon  className="camerast" sx={{fontSize:"25px"}}/>
<Typography sx={{fontSize:"12px",margin:"-9px"}}>Messages</Typography>
    </Grid>

    <Grid xs={3} sx={{paddingLeft:"40px"}}>
<CardGiftcardOutlinedIcon  className="camerast" sx={{fontSize:"25px"}}/>
<Typography sx={{fontSize:"12px",marginTop:"-7px"}}>Order</Typography>
    </Grid>
    <Grid xs={3} sx={{paddingLeft:"30px"}}>
<ShoppingCartOutlinedIcon  className="camerast" sx={{fontSize:"25px"}}/>
<Typography sx={{fontSize:"12px",marginTop:"-7px",marginLeft:"6px"}}>Cart</Typography>
    </Grid>

  </Grid>
</Grid>

</Grid>
{/* end search bar  */}

{/* navigation bar  */}
<Grid container>
<Card  sx={{ width:"100%" ,borderTop:"1px solid #dedbdb"}}>
      <CardContent  sx={{paddingBottom:"1px","&:last-child":{paddingBottom:"6px",paddingTop:"12px"}}}>
        <Grid container>
          <Grid xs={1} >
<Grid container>
            <Grid xs={2}>
            <ListIcon  className="" fontSize="small" />

              </Grid>
              <Grid xs={8}>
              <Typography sx={{fontSize:"13px",marginLeft:"8px",marginTop:""}}>
                    Categories
                  </Typography>
                </Grid>
                <Grid xs={2}>
                  <ArrowDropDownSharpIcon sx={{marginTop:"-2px"}}/>
                  </Grid>
</Grid>
              </Grid>
              <Divider orientation="vertical" flexItem sx={{marginLeft:"15px"}}></Divider>
        

            <Grid xs={7}>
    <Grid container>
               <Grid xs={2}>
<Typography sx={{fontSize:"13px",paddingLeft:"20px"}}>Ready To Ship</Typography>
                </Grid>
                <Grid xs={2} sx={{PaddingLeft:"40px"}}>
<Typography sx={{fontSize:"13px",marginLeft:"45x"}}>Personal Protective</Typography>
                </Grid>

                <Grid xs={2}>
<Typography sx={{fontSize:"13px",marginLeft:"25px"}}>Trade Shows</Typography>
                </Grid>
                <Grid xs={2}>
                  <Grid container>
                    <Grid xs={11}>
<Typography sx={{fontSize:"13px",marginLeft:"15px"}}>Buyer Central</Typography>

                    </Grid>
                    <Grid xs={1}>
                  <ArrowDropDownSharpIcon sx={{marginTop:"-2px",marginLeft:"-10px"}}/>

                    </Grid>
                    </Grid>
                </Grid>
                <Grid xs={2}>
                  <Grid container>
                    <Grid xs={11} >
<Typography sx={{fontSize:"13px",marginLeft:"20px"}}>Sell on Alibaba</Typography>
                    </Grid>
                    <Grid xs={1}>
                  <ArrowDropDownSharpIcon sx={{marginTop:"-2px",marginLeft:"-2px"}}/>

                    </Grid>
                    </Grid>
                </Grid>
                <Grid xs={2}>
                  <Grid container>
                    <Grid xs={10} sx={{marginLeft:"-35px"}}>
<Typography sx={{fontSize:"13px" ,textAlign:"right",}}>Help</Typography>

                    </Grid>
                    <Grid xs={1}>
                  <ArrowDropDownSharpIcon sx={{marginTop:"-2px",marginLeft:"0px"}}/>

                    </Grid>
                    </Grid>
                </Grid>
      </Grid>

             </Grid>

              <Grid xs={3}>
                <Grid container>
                  <Grid xs={2} sx={{paddingLeft:"60px"}}>
</Grid>
<Divider orientation="vertical" flexItem sx={{marginLeft:"25px"}}></Divider>
<Grid xs={4}>
<Grid container>
                    <Grid xs={11} >
<Typography sx={{fontSize:"13px",marginLeft:"20px"}}>English-US</Typography>
                    </Grid>
                    <Grid xs={1}>
                  <ArrowDropDownSharpIcon sx={{marginTop:"-2px",marginLeft:"-2px"}}/>

                    </Grid>
                    </Grid>
  </Grid>
  <Divider orientation="vertical" flexItem sx={{marginLeft:"15px"}}></Divider>
<Grid xs={4}>
<Grid container>
                    <Grid xs={11} >
<Typography sx={{fontSize:"13px",marginLeft:"20px"}}>Ship To:<img src="https://cdn.countryflags.com/thumbs/pakistan/flag-400.png" width="27px" height="14px"></img></Typography>
                    </Grid>
                    <Grid xs={1}>
                  <ArrowDropDownSharpIcon sx={{marginTop:"-2px",marginLeft:"-2px"}}/>

                    </Grid>
                    </Grid>
  </Grid>
                  </Grid>
                
          </Grid>
</Grid>
      
      </CardContent>
    </Card>


</Grid>

{/* end navigation  */}

<Grid container sx={{backgroundColor:"#E6F2FE"}} height="50px" >
  <Grid xs={2}>

  </Grid>
<Grid xs={8}  >
  
<Typography textAlign="center" sx={{padding:"12px"}}> <img src="https://s.alicdn.com/@img/tfs/TB1IxWhvYY1gK0jSZTEXXXDQVXa-24-24.svg" width="18px" height="18px"></img>See FAQs on the coronavirus (COVID-19) and Alibaba.com shipments &nbsp;&nbsp;&nbsp;&nbsp;Learn More </Typography>
</Grid>
<Grid xs={2}>
<CloseOutlinedIcon sx={{float:"right",padding:"12px"}}/>
</Grid>
</Grid>

{/* left navigation  */}

<Grid xs={12} className="mainst">
<Card className="leftnav">
  <CardContent>
      <Grid container>
        <Grid xs={3}>
          <Grid container>
            <Grid xs={12} sx={{}}>
              <Typography fontSize="medium" sx={{fontWeight:"600", paddingBottom:"10px" , marginBottom:"10px",marginLeft:"20px",borderBottom:"1px solid #00000040",width:"85%"}}>
                My Markets
              </Typography>
            </Grid>
            <Divider orientation="horizontal" flexItem ></Divider>
<Grid xs={2}>
     <img src="https://sc02.alicdn.com/kf/HTB12RuNUmzqK1RjSZFH7623CpXa6.png_50x50xz.jpg" width="35px" height="px"></img>
</Grid>
<Grid xs={8}>
      <Typography fontSize="small" sx={{paddingTop:"5px"}}>
      Consumer Electronics
      </Typography>
</Grid>
<Grid xs={2}>
      <ArrowRightIcon sx={{paddingTop:"5px"}}/>
 </Grid>

 <Grid xs={2}>
     <img src="https://sc02.alicdn.com/kf/HTB1gUuPUkzoK1RjSZFl761i4VXaw.png_50x50xz.jpg" width="35px" height="px"></img>
</Grid>
<Grid xs={8}>
      <Typography fontSize="small" sx={{paddingTop:"5px"}}>
      Apparel
      </Typography>
</Grid>
<Grid xs={2}>
      <ArrowRightIcon sx={{paddingTop:"5px"}}/>
 </Grid>

 <Grid xs={2}>
     <img src="https://sc02.alicdn.com/kf/HTB1JdWLUhTpK1RjSZR0762EwXXa6.png_50x50xz.jpg" width="35px" height="px"></img>
</Grid>
<Grid xs={8}>
      <Typography fontSize="small" sx={{paddingTop:"5px"}}>
      Vehicles & Accessories
      </Typography>
</Grid>
<Grid xs={2}>
      <ArrowRightIcon sx={{paddingTop:"5px"}}/>
 </Grid>


 <Grid xs={2}>
     <img src="https://sc02.alicdn.com/kf/HTB1AkuTUgHqK1RjSZJn762NLpXa2.png_50x50xz.jpg" width="35px" height="px"></img>
</Grid>
<Grid xs={8}>
      <Typography fontSize="small" sx={{paddingTop:"5px"}}>
      Sports & Entertainment
      </Typography>
</Grid>
<Grid xs={2}>
      <ArrowRightIcon sx={{paddingTop:"5px"}}/>
 </Grid>


 <Grid xs={2}>
     <img src="https://sc02.alicdn.com/kf/H5e92ef24edc94162b72c331cbd6fbe6fn.png_50x50xz.jpg" width="35px" height="px"></img>
</Grid>
<Grid xs={8}>
      <Typography fontSize="small" sx={{paddingTop:"5px"}}>
      Machinery
      </Typography>
</Grid>
<Grid xs={2}>
      <ArrowRightIcon sx={{paddingTop:"5px"}}/>
 </Grid>


 <Grid xs={2}>
     <img src="https://sc02.alicdn.com/kf/HTB1RxCkXHys3KVjSZFn760FzpXaP.png_50x50xz.jpg" width="35px" height="px"></img>
</Grid>
<Grid xs={8}>
      <Typography fontSize="small" sx={{paddingTop:"5px"}}>
      Home & Garden
      </Typography>
</Grid>
<Grid xs={2}>
      <ArrowRightIcon sx={{paddingTop:"5px"}}/>
 </Grid>


 <Grid xs={2}>
     <img src="https://sc02.alicdn.com/kf/HTB1K6G0UcfpK1RjSZFO7616nFXah.png_50x50xz.jpg" width="35px" height="px"></img>
</Grid>
<Grid xs={8}>
      <Typography fontSize="small" sx={{paddingTop:"5px"}}>
      Beauty & Personal Care
      </Typography>
</Grid>
<Grid xs={2}>
      <ArrowRightIcon sx={{paddingTop:"5px"}}/>
 </Grid>


 <Grid xs={2}>
     <img src="https://img.alicdn.com/tfs/TB1SFxHuVY7gK0jSZKzXXaikpXa-36-36.png" width="30px" height="25px"></img>
</Grid>
<Grid xs={8}>
      <Typography fontSize="small" sx={{paddingTop:"5px"}}>
      All Categories
      </Typography>
</Grid>
<Grid xs={2}>
      <ArrowRightIcon sx={{paddingTop:"5px"}}/>
 </Grid>
            </Grid>
        </Grid>



        <Grid xs={7}>
        <Box>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "350px",
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>

        </Grid>


        <Grid xs={2}>
          <Grid container >
    <Grid xs={12} className="probuyer">  

<Typography fontSize="small" xs> <img src="https://img.alicdn.com/imgextra/i1/O1CN01h1du8I1IZRwJhj11v_!!6000000000907-2-tps-102-36.png" width="30px" height="15px"></img>
&nbsp; Pro Buyer Exclusive 
</Typography>
<Typography fontSize="small" sx={{paddingTop:"5px"}}>
Get payment terms and much more
</Typography>
<Button  variant="contained" sx={{color:"black",'&:hover':{backgroundColor:"#F2CB8E"},marginTop:"5px",borderRadius:"20px",backgroundColor:"#F2CB8E"}} fullWidth={true}>Update</Button>
    </Grid>

<Grid xs={12} className="onlinetrade">
  <Typography fontSize="small" sx={{fontWeight:600}}>
  Home & Garden 2021 Online Trade Show
  </Typography>
  </Grid>

  <Grid xs={8} className="rightit" sx={{borderBottom:"1px solid #00000040" ,borderWidth:"50%"}}>
<Typography fontSize="medium" sx={{fontWeight:600}} >
Home & Garden 2021 Online Trade Show
</Typography>
    </Grid>
    <Grid xs={3}>
      <img src="https://i.alicdn.com/img/imgextra/i3/O1CN01rHG3DG1wp66sdIKKe_!!6000000006356-2-tps-350-350.png_100x100.jpg" className="rightitimg" width="55px" height=""></img>
      </Grid>

      <Grid xs={8} className="rightit" sx={{borderBottom:"1px solid #00000040" ,borderWidth:"50%"}}>
<Typography fontSize="medium" sx={{fontWeight:600}} >
Digital Booths
</Typography>
    </Grid>
    <Grid xs={3}>
      <img src="https://i.alicdn.com/img/imgextra/i3/O1CN01i1pN3924J3K92CAMq_!!6000000007369-2-tps-350-350.png_100x100.jpg" className="rightitimg" width="55px" height=""></img>
      </Grid>

</Grid>



        </Grid>



      </Grid>
  </CardContent>
</Card>
</Grid>

{/* end navigation  */}

 {/* after slider card  */}
 <Grid xs={12} className="mainst">
   <Grid container>
<Grid xs={3.5} className="cardpd">
<Card>
  <CardContent>
    <Grid xs={12}>
<Typography sx={{fontWeight:600}}> <img src="https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png" width="16px"></img>
  &nbsp; New Arrival
</Typography>

<Grid container>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/Hf945bf555b9546679f4b77d6af80f328i.jpg_120x120.jpg" className="cardimg" width="90px"></img>
<Typography textAlign="center">
  $1.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/H49c38e30fd8c48b4ac0a4c66aa3649c2O.jpg_120x120xz.jpg" className="cardimg" width="90px" ></img>
<Typography textAlign="center">
  $4.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg" className="cardimg" width="90px"></img>
<Typography textAlign="center">
  $3.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
</Grid>
    </Grid>
  </CardContent>
</Card>


</Grid>

<Grid xs={3.5} className="cardmd">
<Card>
  <CardContent>
    <Grid xs={12}>
<Typography sx={{fontWeight:600}}> <img src="https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png" width="16px"></img>
  &nbsp; New Arrival
</Typography>

<Grid container>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/Hf945bf555b9546679f4b77d6af80f328i.jpg_120x120.jpg" className="cardimg" width="90px"></img>
<Typography textAlign="center">
  $1.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/H49c38e30fd8c48b4ac0a4c66aa3649c2O.jpg_120x120xz.jpg" className="cardimg" width="90px" ></img>
<Typography textAlign="center">
  $4.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg" className="cardimg" width="90px"></img>
<Typography textAlign="center">
  $3.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
</Grid>
    </Grid>
  </CardContent>
</Card>


</Grid>

<Grid xs={3.5} className="cardmd">
<Card>
  <CardContent>
    <Grid xs={12}>
<Typography sx={{fontWeight:600}}> <img src="https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png" width="16px"></img>
  &nbsp; New Arrival
</Typography>

<Grid container>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/Hf945bf555b9546679f4b77d6af80f328i.jpg_120x120.jpg" className="cardimg" width="90px"></img>
<Typography textAlign="center">
  $1.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/H49c38e30fd8c48b4ac0a4c66aa3649c2O.jpg_120x120xz.jpg" className="cardimg" width="90px" ></img>
<Typography textAlign="center">
  $4.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg" className="cardimg" width="90px"></img>
<Typography textAlign="center">
  $3.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
</Grid>
    </Grid>
  </CardContent>
</Card>


</Grid>

<Grid xs={3.5} className="cardpd">
<Card>
  <CardContent>
    <Grid xs={12}>
<Typography sx={{fontWeight:600}}> <img src="https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png" width="16px"></img>
  &nbsp; New Arrival
</Typography>

<Grid container>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/Hf945bf555b9546679f4b77d6af80f328i.jpg_120x120.jpg" className="cardimg" width="90px"></img>
<Typography textAlign="center">
  $1.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/H49c38e30fd8c48b4ac0a4c66aa3649c2O.jpg_120x120xz.jpg" className="cardimg" width="90px" ></img>
<Typography textAlign="center">
  $4.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg" className="cardimg" width="90px"></img>
<Typography textAlign="center">
  $3.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
</Grid>
    </Grid>
  </CardContent>
</Card>


</Grid>

<Grid xs={3.5} className="cardmd">
<Card>
  <CardContent>
    <Grid xs={12}>
<Typography sx={{fontWeight:600}}> <img src="https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png" width="16px"></img>
  &nbsp; New Arrival
</Typography>

<Grid container>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/Hf945bf555b9546679f4b77d6af80f328i.jpg_120x120.jpg" className="cardimg" width="90px"></img>
<Typography textAlign="center">
  $1.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/H49c38e30fd8c48b4ac0a4c66aa3649c2O.jpg_120x120xz.jpg" className="cardimg" width="90px" ></img>
<Typography textAlign="center">
  $4.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg" className="cardimg" width="90px"></img>
<Typography textAlign="center">
  $3.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
</Grid>
    </Grid>
  </CardContent>
</Card>


</Grid>

<Grid xs={3.5} className="cardmd">
<Card>
  <CardContent>
    <Grid xs={12}>
<Typography sx={{fontWeight:600}}> <img src="https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png" width="16px"></img>
  &nbsp; New Arrival
</Typography>

<Grid container>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/Hf945bf555b9546679f4b77d6af80f328i.jpg_120x120.jpg" className="cardimg" width="90px"></img>
<Typography textAlign="center">
  $1.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/H49c38e30fd8c48b4ac0a4c66aa3649c2O.jpg_120x120xz.jpg" className="cardimg" width="90px" ></img>
<Typography textAlign="center">
  $4.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
<Grid xs={4} sx={{padding:"5px"}}>
<img src="https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg" className="cardimg" width="90px"></img>
<Typography textAlign="center">
  $3.2
</Typography>
<Typography textAlign="center" fontSize="small">
  Trending Now
  </Typography>
</Grid>
</Grid>
    </Grid>
  </CardContent>
</Card>


</Grid>
</Grid>





 </Grid>
{/* end after slider card  */}

{/* customizd product  */}

<Grid xs={12} className="mainst">
<Grid container>
<Grid xs={5.5} className="cardpd">
<Card>
  <CardContent>
<Typography variant="h5" sx={{fontWeight:600}}>
Customized products
</Typography>
<Typography>
Partner with one of 60,000 experienced manufacturers with design & production capabilities and on-time
</Typography>
<Grid container>
<Grid xs={5.5} className="cardin">
<Typography sx={{fontWeight:600}} fontSize="small">
  Top Ranking Suplier
</Typography>
<Grid container sx={{padding:"5px"}}>
  <Grid xs={3.5}>
  <img src="https://s.alicdn.com/@sc04/kf/Hff7732f61c6542049c66ba55232f77bf6.png_100x100xz.jpg"></img>
    </Grid>
    <Grid xs={3.5}>
    <img src="https://s.alicdn.com/@sc04/kf/H29ab1d02d9ff42089c338be06d216454n.jpg_100x100xz.jpg"></img>
    </Grid>
    <Grid xs={3.5}>
    <img src="https://s.alicdn.com/@sc04/kf/Hef0880e57d0a4148bf9b383c75f36973P.jpg_100x100xz.jpg"></img>
    </Grid>
  </Grid>

  </Grid>
  <Grid xs={5.5} className="cardin">
<Typography sx={{fontWeight:600}} fontSize="small">
  Weekly Deals
</Typography>
<Grid container sx={{padding:"5px"}}>
  <Grid xs={3.5}>
    <img src="https://s.alicdn.com/@sc04/kf/Hff7732f61c6542049c66ba55232f77bf6.png_100x100xz.jpg"></img>
    </Grid>
    <Grid xs={3.5}>
    <img src="https://s.alicdn.com/@sc04/kf/H29ab1d02d9ff42089c338be06d216454n.jpg_100x100xz.jpg"></img>
    </Grid>
    <Grid xs={3.5}>
    <img src="https://s.alicdn.com/@sc04/kf/Hef0880e57d0a4148bf9b383c75f36973P.jpg_100x100xz.jpg"></img>
    </Grid>
  </Grid>

  </Grid>
</Grid>

  </CardContent>
</Card>
</Grid>

<Grid xs={5.3} className="cardmdl">
<Card>
  <CardContent>
<Typography variant="h5" sx={{fontWeight:600}}>
Ready-to-ship products
</Typography>
<Typography>
Source from 15 million products that are ready to ship, and leave the facility within 15 days.
</Typography>
<Grid container>
<Grid xs={5.5} className="cardin">
<Typography sx={{fontWeight:600}} fontSize="small">
  Top Ranking Suplier
</Typography>
<Grid container sx={{padding:"5px"}}>
  <Grid xs={3.5}>
  <img src="https://s.alicdn.com/@sc04/kf/Hff7732f61c6542049c66ba55232f77bf6.png_100x100xz.jpg"></img>
    </Grid>
    <Grid xs={3.5}>
    <img src="https://s.alicdn.com/@sc04/kf/H29ab1d02d9ff42089c338be06d216454n.jpg_100x100xz.jpg"></img>
    </Grid>
    <Grid xs={3.5}>
    <img src="https://s.alicdn.com/@sc04/kf/Hef0880e57d0a4148bf9b383c75f36973P.jpg_100x100xz.jpg"></img>
    </Grid>
  </Grid>

  </Grid>
  <Grid xs={5.5} className="cardin">
<Typography sx={{fontWeight:600}} fontSize="small">
  Weekly Deals
</Typography>
<Grid container sx={{padding:"5px"}}>
  <Grid xs={3.5}>
    <img src="https://s.alicdn.com/@sc04/kf/Hff7732f61c6542049c66ba55232f77bf6.png_100x100xz.jpg"></img>
    </Grid>
    <Grid xs={3.5}>
    <img src="https://s.alicdn.com/@sc04/kf/H29ab1d02d9ff42089c338be06d216454n.jpg_100x100xz.jpg"></img>
    </Grid>
    <Grid xs={3.5}>
    <img src="https://s.alicdn.com/@sc04/kf/Hef0880e57d0a4148bf9b383c75f36973P.jpg_100x100xz.jpg"></img>
    </Grid>
  </Grid>

  </Grid>
</Grid>

  </CardContent>
</Card>
</Grid>

</Grid>
</Grid>
 {/* end customized produuct  */}



{/* just for you  */}

<Grid container className="mainst">
  <Grid xs={12}>
    <Grid container>
      <Grid xs={3} sx={{marginLeft:"4%"}}>
<Typography variant="h4">
  Just For You
</Typography>
      </Grid>
      <Grid xs={9} className="justline">
</Grid>
    </Grid>
    </Grid>
<Grid xs={2} sx={{marginLeft:"4%",marginBottom:"2%"}}>
<Card >
  <CardContent>
    <img src="https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg" width="200px" height="178px"></img>
    <Typography fontSize="small">
    Baby Boy Rashie swimsuit with Sun Protection Boys
    </Typography>
    <Typography fontSize="small" fontWeight="600">
    $7.50 - $13.50 
    </Typography>
    <Typography fontSize="small" variant="h5">
 2 Pieces (Min. Order)
    </Typography>
  </CardContent>
</Card>
</Grid>
<Grid xs={2} sx={{marginLeft:"1.8%",marginBottom:"2%"}}>
<Card >
  <CardContent>
    <img src="https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg" width="200px" height="178px"></img>
    <Typography fontSize="small">
    Baby Boy Rashie swimsuit with Sun Protection Boys
    </Typography>
    <Typography fontSize="small" fontWeight="600">
    $7.50 - $13.50 
    </Typography>
    <Typography fontSize="small" variant="h5">
 2 Pieces (Min. Order)
    </Typography>
  </CardContent>
</Card>
</Grid>
<Grid xs={2} sx={{marginLeft:"1.8%",marginBottom:"2%"}}>
<Card >
  <CardContent>
    <img src="https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg" width="200px" height="178px"></img>
    <Typography fontSize="small">
    Baby Boy Rashie swimsuit with Sun Protection Boys
    </Typography>
    <Typography fontSize="small" fontWeight="600">
    $7.50 - $13.50 
    </Typography>
    <Typography fontSize="small" variant="h5">
 2 Pieces (Min. Order)
    </Typography>
  </CardContent>
</Card>
</Grid>
<Grid xs={2} sx={{marginLeft:"1.8%",marginBottom:"2%"}}>
<Card >
  <CardContent>
    <img src="https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg" width="200px" height="178px"></img>
    <Typography fontSize="small">
    Baby Boy Rashie swimsuit with Sun Protection Boys
    </Typography>
    <Typography fontSize="small" fontWeight="600">
    $7.50 - $13.50 
    </Typography>
    <Typography fontSize="small" variant="h5">
 2 Pieces (Min. Order)
    </Typography>
  </CardContent>
</Card>
</Grid>
<Grid xs={2} sx={{marginLeft:"1.8%",marginBottom:"2%"}}>
<Card >
  <CardContent>
    <img src="https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg" width="200px" height="178px"></img>
    <Typography fontSize="small">
    Baby Boy Rashie swimsuit with Sun Protection Boys
    </Typography>
    <Typography fontSize="small" fontWeight="600">
    $7.50 - $13.50 
    </Typography>
    <Typography fontSize="small" variant="h5">
 2 Pieces (Min. Order)
    </Typography>
  </CardContent>
</Card>
</Grid>

<Grid xs={2} sx={{marginLeft:"4%",marginBottom:"2%"}}>
<Card >
  <CardContent>
    <img src="https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg" width="200px" height="178px"></img>
    <Typography fontSize="small">
    Baby Boy Rashie swimsuit with Sun Protection Boys
    </Typography>
    <Typography fontSize="small" fontWeight="600">
    $7.50 - $13.50 
    </Typography>
    <Typography fontSize="small" variant="h5">
 2 Pieces (Min. Order)
    </Typography>
  </CardContent>
</Card>
</Grid>
<Grid xs={2} sx={{marginLeft:"1.8%",marginBottom:"2%"}}>
<Card >
  <CardContent>
    <img src="https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg" width="200px" height="178px"></img>
    <Typography fontSize="small">
    Baby Boy Rashie swimsuit with Sun Protection Boys
    </Typography>
    <Typography fontSize="small" fontWeight="600">
    $7.50 - $13.50 
    </Typography>
    <Typography fontSize="small" variant="h5">
 2 Pieces (Min. Order)
    </Typography>
  </CardContent>
</Card>
</Grid>
<Grid xs={2} sx={{marginLeft:"1.8%",marginBottom:"2%"}}>
<Card >
  <CardContent>
    <img src="https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg" width="200px" height="178px"></img>
    <Typography fontSize="small">
    Baby Boy Rashie swimsuit with Sun Protection Boys
    </Typography>
    <Typography fontSize="small" fontWeight="600">
    $7.50 - $13.50 
    </Typography>
    <Typography fontSize="small" variant="h5">
 2 Pieces (Min. Order)
    </Typography>
  </CardContent>
</Card>
</Grid>
<Grid xs={2} sx={{marginLeft:"1.8%",marginBottom:"2%"}}>
<Card >
  <CardContent>
    <img src="https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg" width="200px" height="178px"></img>
    <Typography fontSize="small">
    Baby Boy Rashie swimsuit with Sun Protection Boys
    </Typography>
    <Typography fontSize="small" fontWeight="600">
    $7.50 - $13.50 
    </Typography>
    <Typography fontSize="small" variant="h5">
 2 Pieces (Min. Order)
    </Typography>
  </CardContent>
</Card>
</Grid>
<Grid xs={2} sx={{marginLeft:"1.8%",marginBottom:"2%"}}>
<Card >
  <CardContent>
    <img src="https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg" width="200px" height="178px"></img>
    <Typography fontSize="small">
    Baby Boy Rashie swimsuit with Sun Protection Boys
    </Typography>
    <Typography fontSize="small" fontWeight="600">
    $7.50 - $13.50 
    </Typography>
    <Typography fontSize="small" variant="h5">
 2 Pieces (Min. Order)
    </Typography>
  </CardContent>
</Card>
</Grid>

</Grid>
{/* end just for you */}

 {/* Fotter  */}
<Grid container className="footer">
  <Grid xs={12} sx={{marginTop:"4%"}}>
<Typography textAlign="center" sx={{color:"white",}}>
Trade Alert - Delivering the latest product trends and industry news straight to your inbox.
</Typography>
  </Grid>
  <Grid xs={8}>
  <Box
    >
  <TextField id="filled-helperText"  helperText="We’ll never share your email address with a third-party." width="30%" defaultValue="Your Email"   variant="filled" sx={{marginLeft:"50%",marginTop:"2%",marginBottom:"2%",'& .MuiInputBase-root': {
      color: 'white',
    },color:"white"}}  />
  </Box>
  </Grid>
  <Grid xs={1}>
  <Button variant="outlined" fullWidth={true} sx={{border:"1px solid white",marginTop:"24%",marginLeft:"-100%",marginBottom:"2%",'& .MuiInputBase-root': {
      color: 'white',
    },color:"white"}}>Search</Button>
  </Grid>
  <Grid container>
    <Grid xs={2} sx={{marginLeft:"5%",marginBottom:"2%"}}>
<Grid xs={12} >
<Typography variant="h6" sx={{color:"white"}}>
Customer Services
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
Help Center
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
Contact Us
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
Report Abuse
</Typography>

<Typography fontSize="small" sx={{color:"white"}}>
Submit a Dispute
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
Policies & Rules
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
Get Paid for Your Feedback
</Typography>
</Grid>
    </Grid>

    <Grid xs={2} sx={{marginLeft:"1%",marginBottom:"2%"}}>
<Grid xs={12} >
<Typography variant="h6" sx={{color:"white"}}>
About US
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
About Alibaba.com
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
About Alibaba Group
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
Site Map</Typography>
</Grid>
    </Grid>

    <Grid xs={2} sx={{marginLeft:"",marginBottom:"2%"}}>
<Grid xs={12} >
<Typography variant="h6" sx={{color:"white"}}>
Source on Alibaba.com</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
About Alibaba.com
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
Site Map</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
Site Map</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
About Alibaba Group
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
Site Map</Typography>
</Grid>
    </Grid>

    <Grid xs={2} sx={{marginLeft:"2%",marginBottom:"2%"}}>
<Grid xs={12} >
<Typography variant="h6" sx={{color:"white"}}>
Sell on Alibaba.com</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
About Alibaba.com
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
About Alibaba Group
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
Site Map</Typography>
</Grid>
    </Grid>

     
    <Grid xs={2} sx={{marginLeft:"2%",marginBottom:"2%"}}>
<Grid xs={12} >
<Typography variant="h6" sx={{color:"white"}}>
Trade Services</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
About Alibaba.com
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
About Alibaba Group
</Typography>
<Typography fontSize="small" sx={{color:"white"}}>
Site Map</Typography>
</Grid>
    </Grid> 
     
  </Grid>
  <Grid xs={12}>
  <Typography fontSize="small" textAlign="center" color="white" sx={{marginBottom:"1%"}}>
  Alibaba.com Site: International - Español - Português - Deutsch - Français - Italiano - हिंदी - Pусский - 한국어 - 日本語 - اللغة العربية - ภาษาไทย - Türk - Nederlands - tiếng Việt - Indonesian - עברית
  </Typography>
  <Typography fontSize="small" textAlign="center" color="white" sx={{paddingLeft:"20%",marginRight:"20%",marginBottom:"1%"}}>
  Alibaba Group | Taobao Marketplace | Tmall.com | Juhuasuan | AliExpress | Alibaba.com | 1688.com | Alimama | Fliggy | Tmall Taobao World
Alibaba Cloud | AliOS | AliTelecom | Autonavi | UCWeb | Umeng | Xiami | DingTalk | Alipay | Lazada | Alibaba Security
  </Typography>
  <Typography fontSize="small" textAlign="center" color="white" sx={{paddingLeft:"25%",marginRight:"25%",marginBottom:"1%"}}>
  Browse Alphabetically: Onetouch | Showroom | Country Search | Suppliers | Affiliate
  </Typography>
  <Typography fontSize="small" textAlign="center" color="white" sx={{paddingLeft:"22%",marginRight:"22%",marginBottom:"1%"}}>
  Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use - User Information Legal Enquiry Guide
  </Typography>
  <Typography fontSize="small" textAlign="center" color="white" sx={{paddingLeft:"22%",marginRight:"22%",marginBottom:"3%"}}><img src="https://img.alicdn.com/tfs/TB1VtZtebH1gK0jSZFwXXc7aXXa-65-70.gif" width="20px" sx={{marginTop:"2%"}} ></img>
  © 1999-2021 Alibaba.com. All rights reserved. <img src="https://img.alicdn.com/tfs/TB1QhYprKT2gK0jSZFvXXXnFXXa-20-20.png" width="20px" sx={{marginTop:"2%"}} ></img> 浙公网安备 33010002000092号 浙B2-20120091-4
  </Typography>
  </Grid>
</Grid>
  {/* fotter end  */}

</Grid>
  );
}

export default App;
