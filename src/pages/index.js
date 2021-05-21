import React, { useRef, useState } from "react"
import '../styles/home.css'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { FormHelperText, makeStyles, OutlinedInput} from "@material-ui/core";
import axios from "axios";
import { InfoRounded } from "@material-ui/icons";
import logo from '../images/nobgpsnalogo.png'

const useStyles = makeStyles((theme) => ({
  text: {
    width: '50%',
    // eslint-disable-next-line no-useless-computed-key
    ['@media (max-width:600px)']: {
      width: '70%'
    }
  },
  textmid: {
    width: '23%',
    // eslint-disable-next-line no-useless-computed-key
    ['@media (max-width:600px)']: {
      width: '33%'
    }
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Home() {
  const findref = useRef(null)
  let name, phone, mail, clg, regid, pwd
  const classes = useStyles()
  const [clasdet, setClasdet] = useState('clgdetail')

  function clickityclackity(){
    console.log(name, phone, mail, clg, regid, pwd)
    if (phone.length !== 10 || mail.length < 8) alert('Check your details(Phone Number and Mail)')
    else {
      axios.post('https://ctfreg.herokuapp.com/register', {
        studentName: name,
        phoneNumber: phone,
        email: mail,
        collegeName: clg,
        collegeRegId: regid,
        password: pwd
      }).then((res) => {
        if(res.data === 'account already exist!')alert('Account with same e-mail/phone already exists')
        if (res.data.message) alert('Try Again with clear details')
        alert('Registered')
      }, (error) => {
        console.log(error)
      })
    }
  }


  return <div className='home'>
    
    {/* Home Page Content */}
    <div className='contestTitle'>Clash for Flags.</div>
    <button className='movereg' onClick={()=>findref.current.scrollIntoView()}>register</button>
    <div className='titledesc'>A mini CTF styled contest designed in ease.</div>
    <div className='description'>An online challenge for students to experience the real CTF made by CSE dept of PSNA Collge of Engineering and Technology. Enter and capture the flags gradually.</div>

    {/* TIL PSNA 
    {/* <div className='tilpsna'>
      <div className='explatil'>
        <div className='tiltitle'>We, PSNACET!</div>
        <div className='tildesc'>PSNACET is a brand name in South TamilNadu for conveying Quality Education. We thrive to make students exile in their field of interest while providing support to their college life. </div>
      </div>
      <div className='svgtil'><img src={logo} alt='logo'/></div>
    </div> */}

    {/* What is CTF */}
    <div className='whatisctf'>
      <div className='svgctf'><svg width="40%" height="inherit" viewBox="0 0 128 128"><defs><linearGradient id="a" x1="114.534" y1="115.227" x2="13.466" y2="14.16" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#de6246"/><stop offset="1" stop-color="#f4d844"/></linearGradient></defs><path d="M104.125,60.628h10.613a6.75,6.75,0,1,0,0-3.5H104.125V48.652H112a1.751,1.751,0,0,0,1.423-.731l5.46-7.627a6.742,6.742,0,1,0-2.848-2.033L111.1,45.152h-6.976V38.663a1.75,1.75,0,0,0-1.75-1.75,12.848,12.848,0,0,1-7.536-2.444l9.655-11.9a6.778,6.778,0,1,0-2.715-2.208l-9.489,11.7a12.866,12.866,0,0,1-2.846-8.074,1.75,1.75,0,0,0-3.5,0,16.373,16.373,0,0,0,5.069,11.844,1.78,1.78,0,0,0,.259.262c.007,0,.016.007.023.012a16.366,16.366,0,0,0,9.33,4.221V70.493A33.115,33.115,0,0,1,86.166,97.865L64,112.989,41.834,97.865A33.115,33.115,0,0,1,27.375,70.493V40.32a16.357,16.357,0,0,0,9.29-4.2c.02-.015.043-.02.063-.035a1.767,1.767,0,0,0,.258-.261,16.388,16.388,0,0,0,4.978-10.095H77.083a1.75,1.75,0,0,0,0-3.5H40.306a1.751,1.751,0,0,0-1.75,1.75,12.866,12.866,0,0,1-2.846,8.074L26.221,20.36a6.759,6.759,0,1,0-2.715,2.208l9.655,11.9a12.848,12.848,0,0,1-7.536,2.444,1.75,1.75,0,0,0-1.75,1.75v6.489H16.9l-4.934-6.891a6.812,6.812,0,1,0-2.848,2.033l5.46,7.627A1.751,1.751,0,0,0,16,48.652h7.875v8.476H13.262a6.75,6.75,0,1,0,0,3.5H23.875v9.865c0,.439.025.874.04,1.311H15.25a1.751,1.751,0,0,0-1.564.965L8.11,83.88a6.791,6.791,0,1,0,3.123,1.58L16.33,75.3H24.2A36.6,36.6,0,0,0,34.531,96.319l-11.346,9.708a6.794,6.794,0,1,0,2.273,2.662l11.687-10c.872.723,1.77,1.421,2.716,2.066l23.153,15.8a1.746,1.746,0,0,0,1.972,0l23.153-15.8c.946-.645,1.844-1.343,2.716-2.066l11.687,10a6.748,6.748,0,1,0,2.273-2.662L93.469,96.319A36.6,36.6,0,0,0,103.8,75.3h7.869l5.1,10.156a6.686,6.686,0,1,0,3.123-1.58l-5.576-11.111a1.751,1.751,0,0,0-1.564-.965h-8.665c.015-.437.04-.872.04-1.311Zm17.125-5a3.25,3.25,0,1,1-3.25,3.25A3.254,3.254,0,0,1,121.25,55.628Zm0-24.9a3.25,3.25,0,1,1-3.25,3.25A3.254,3.254,0,0,1,121.25,30.731ZM107.24,13.158a3.25,3.25,0,1,1-3.25,3.25A3.254,3.254,0,0,1,107.24,13.158Zm-89.73,3.25a3.25,3.25,0,1,1,3.25,3.25A3.254,3.254,0,0,1,17.51,16.408ZM3.5,33.981a3.25,3.25,0,1,1,3.25,3.25A3.254,3.254,0,0,1,3.5,33.981ZM6.75,62.128A3.25,3.25,0,1,1,10,58.878,3.254,3.254,0,0,1,6.75,62.128Zm0,31.614A3.25,3.25,0,1,1,10,90.492,3.254,3.254,0,0,1,6.75,93.742Zm12.623,21.1a3.25,3.25,0,1,1,3.25-3.25A3.254,3.254,0,0,1,19.373,114.842ZM124.5,90.492a3.25,3.25,0,1,1-3.25-3.25A3.254,3.254,0,0,1,124.5,90.492Zm-12.623,21.1a3.25,3.25,0,1,1-3.25-3.25A3.254,3.254,0,0,1,111.877,111.592ZM57.654,96.553a1.75,1.75,0,1,1-1.973,2.891L52.83,97.5A1.75,1.75,0,0,1,54.8,94.607ZM48.189,32.231H79.811a1.75,1.75,0,0,1,1.6,1.039A22.985,22.985,0,0,0,93.086,44.946a1.751,1.751,0,0,1,1.039,1.6V70.493A26.618,26.618,0,0,1,82.5,92.5L64.986,104.447a1.75,1.75,0,0,1-1.972-2.891L80.529,89.6a23.119,23.119,0,0,0,10.1-19.111V47.655A26.468,26.468,0,0,1,78.7,35.731H49.3A26.468,26.468,0,0,1,37.375,47.655V70.493A23.121,23.121,0,0,0,47.47,89.6,1.75,1.75,0,0,1,45.5,92.5a26.618,26.618,0,0,1-11.623-22V46.545a1.751,1.751,0,0,1,1.039-1.6A22.985,22.985,0,0,0,46.59,33.27,1.75,1.75,0,0,1,48.189,32.231Z" fill="url(#a)"/></svg></div>
      <div className='explactf'>
        <div className='ctftitle'>Capture the flag</div>
        <div className='ctfdesc'>Capture the flag (CTF) is a special kind of competition designed to challenge its participants to solve computer security problems and/or capture and defend computer systems</div>
      </div>
    </div>

    {/* Detail Page Content */}
    <div className='contestdata'>
    
      <div className='rightholder1'>
        <div className='subtitle1'>Init Process</div>
        <div className='startOfContest'>As for this contest, it starts at the moment you start the process on the contest day!</div>
      </div>
      
      <div className='lefttholder1'>
        <div className='subtitle2'>Pile of Flags</div>
        <div className='stagesOfFlags'>As mentioned earlier, one have to start by collecting flags which will lead to next consecutive stage.</div>
      </div>
    
    </div>

    <div className='halfway'>After registering you can come back to this same site on contest day and you can start your process from here! As it progresses, after a certain amount of time all participants will be notified of the end of the competition and according to the flag rules 3 winners will be announced and they will recieve a cash award of Rupees 1000, 750 and 500 respectively</div>

    <div className='contestdata1'>
      
      <div className='leftholder2'>
        <div className='subtitle2'>Manifest-Move</div>
        <div className='surityOfFlag'>After grabbing a flag and before moving to next stage, you need to manifest the captured one in-order to make it considerable..</div>
      </div>
      
      <div className='rightholder2'>
        <div className='subtitle1'>Tick soon</div>
        <div className='timelyFlags'>Anyone can capture the flags, so capturing in optimal time leads you up the scoreboard!</div>
      </div>
    </div>

    {/* Register Participant */}
    <div className='registerparti' ref={findref}>

      <div className='inputreg'>
        <FormControl className={classes.text} variant="outlined">
            <InputLabel htmlFor="standard-adornment-amount" >Name</InputLabel>
            <OutlinedInput labelWidth={100} onChange={(e)=>name=e.target.value}/>
            <FormHelperText>Enter your Name(formal)</FormHelperText>
        </FormControl>
        <div style={{marginTop: '2%'}}></div>


        <FormControl className={classes.text} variant="outlined">
            <InputLabel htmlFor="standard-adornment-amount" >Phone</InputLabel>
            <OutlinedInput labelWidth={100} onChange={(e)=>phone=e.target.value}/>
            <FormHelperText>Actively using Phone number</FormHelperText>
        </FormControl>
        <div style={{marginTop: '2%'}}></div>

        <FormControl className={classes.text} variant="outlined">
            <InputLabel htmlFor="standard-adornment-amount" >Email</InputLabel>
            <OutlinedInput labelWidth={100} onChange={(e)=>mail=e.target.value}/>
            <FormHelperText>Actively using mail ID</FormHelperText>
        </FormControl>
        <div style={{marginTop: '2%'}}></div>

        <FormControl  className={classes.textmid} style={{marginLeft: 'none'}} variant="outlined">
            <InputLabel htmlFor="standard-adornment-amount" >College</InputLabel>
            <OutlinedInput labelWidth={100} onChange={(e)=>clg=e.target.value}/>
            <FormHelperText>College/University/Institution you are from</FormHelperText>
        </FormControl>

        <FormControl  className={classes.textmid} style={{marginLeft: '4%'}} variant="outlined">
            <InputLabel htmlFor="standard-adornment-amount" >RegisterID</InputLabel>
            <OutlinedInput labelWidth={100} onChange={(e)=>regid=e.target.value}/>
            <FormHelperText>University RegisterID</FormHelperText>
        </FormControl>
        <div style={{marginTop: '2%'}}></div>

        <FormControl className={classes.text} variant="outlined">
            <InputLabel htmlFor="standard-adornment-amount" >Password</InputLabel>
            <OutlinedInput labelWidth={100} onChange={(e)=>pwd=e.target.value}/>
            <FormHelperText>{"Remember the password you give here. Useful on contestDay ><"}</FormHelperText>
        </FormControl>
        <div style={{marginTop: '2%'}}></div>

        <button className='regbtn' onClick={clickityclackity}>Register</button>
      </div>

    </div>
  </div>
}
