'use client'
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Image from 'next/image';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ArticleIcon from '@mui/icons-material/Article';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import RangeSlider from "./components/RangeSlider";
import RangeSliderTime from "./components/RangeSliderTime";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Home() {

  return (
    <main>
      <ResponsiveAppBar/>
      <Box sx={{ pl: 10, pr: 10, pt: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', justifyContent: 'center' }}>
          <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <Typography variant="h3">
                Course Registration Made Easy
              </Typography>
              <Button variant="contained" color="primary" component="a" href="https://www.youtube.com/watch?v=iUMMb2LxTek" target = "_blank">
                View Demo
              </Button>
               <a href="#welcome" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary">
                    Get Started
                  </Button>
                </a>
            </Box>
          <Image
            src="/embedded-pic.jpg"
            alt="course registration pic"
            width={700}
            height={400}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
      </Box>
      <Box sx={{ p: 10, display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4">
            Features
          </Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 35,}}>
          <SearchIcon color="none" sx = {{fontSize: 60}}/>
          <GroupAddIcon color="none" sx = {{fontSize: 60}}/>
          <BorderColorIcon color="none" sx = {{fontSize: 60}}/>
          <ArticleIcon color="none" sx = {{fontSize: 60}}/>
        </Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 10}}>
        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8,}}>
          <Typography>Search professor/class info in popup <br></br> (Under construction)</Typography>
          <Typography>Coordinate courses with friends <br></br> (Under construction)</Typography>
          <Typography>Highlight courses by your preferences <br></br> (Under construction)</Typography>
          <Typography>Generate course schedule with AI <br></br> (Under construction)</Typography>
        </Box>
      </Box>

      <Box sx = {{display: 'flex', pt: 10, pl: 10, pb: 10, flexDirection: 'column', justifyContent: 'center'}}>
          <div id="welcome"> 
            <Typography variant="h5" sx ={{pt: 10}}>
              Welcome to the SCU schedule helper
            </Typography>
          </div>
          <Typography sx={{pt: 5}}>
              Course registration can be tedious so we have designed a tool to help with the process. It is recommended to login with your scu email in order to access data from SCU course evaluations.
          </Typography>
          <Typography variant="h5" sx={{pt: 5}}>
            Fill in your course preferences below:
          </Typography>
          <Typography variant="h6" sx={{pt: 5}}>
            Preferred Professor Quality:
          </Typography>
          <RangeSlider></RangeSlider>
          <Typography variant="h6" sx={{pt: 5}}>
            Preferred Course Difficulty:
          </Typography>
          <RangeSlider></RangeSlider>
          <Typography variant="h6" sx={{pt: 5}}>
            Preferred Course Times:
          </Typography>
          <Typography sx={{pt: 5}}>
            Time Window 1
          </Typography>
          <RangeSliderTime></RangeSliderTime>
          <Typography sx={{pt: 5}}>
            Time Window 2
          </Typography>
          <RangeSliderTime></RangeSliderTime>
          <Typography variant="h6" sx={{pt: 5}}>
            Meeting Day Preferences:
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="M W F" />
            <FormControlLabel control={<Checkbox />} label="T TH" />
            <FormControlLabel control={<Checkbox />} label="M W" />
            <FormControlLabel control={<Checkbox />} label="M" />
            <FormControlLabel control={<Checkbox />} label="T" />
            <FormControlLabel control={<Checkbox />} label="W" />
            <FormControlLabel control={<Checkbox />} label="TH" />
            <FormControlLabel control={<Checkbox />} label="F" />
          </FormGroup>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', pb: 10}}>
        <Button variant="contained" color="primary">
            Submit Preferences
        </Button>
      </Box>
    </main>
       
  );
}
