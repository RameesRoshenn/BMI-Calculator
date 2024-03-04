import { FormControl, TextField } from '@mui/material';
import { FormControlLabel, Radio ,RadioGroup ,FormLabel } from '@mui/material';
import Stack from '@mui/material/Stack';


import {Button} from '@mui/material'
import './App.css';
import { useState } from 'react';

function App() {
  //js code
  

  const styles = {
    input: {
      color: 'white', // Change the text color
      borderBottom: '1px solid white', // Change the line color
    },
  };
  
  
  
  const [BMI,setBMI]=useState(0)
  const [Age,setAge]=useState(0)
  const [Height,setHeight]=useState(0)
  const [Weight,setWeight]=useState(0)
  const [isAge,setIsAge]=useState(true)
  const [isHeight,setIsHeight]=useState(true)
  const [isWeight,setIsWeight]=useState(true)

  const validate =(e) =>{
  const { name, value } = e.target
  if (!!value.match(/^[0-9/*.?[0-9]+$/)) {
    if (name === 'age') {
      setAge(value)
      setIsAge(true)
    }

    else if (name === 'height') {
      setHeight(value)
      setIsHeight(true)
    }
    else {
      setWeight(value)
      setIsWeight(true)
    }
  }
  else {
    if (name === 'age') {
      setAge(value)
      setIsAge(false)
    }
    else if (name === 'height') {
      setHeight(value)
      setIsHeight(false)
    }
    else {
      setWeight(value)
      setIsWeight(false)
    }

  }
}


const handleCalculate=(e)=>{
  e.preventDefault()
  if(!Age || !Height || !Weight){
    alert('please fill the form')
  }
  else{
    
    setBMI(Weight / (Height*Height))
  }
  var status = "";

  if (BMI < 18.5) {
    status = "Underweight";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    status = "Normal";
  } else if (BMI >= 25 && BMI < 29.9) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  // Display the result
  var resultElement = document.getElementById("result");
  resultElement.innerText = "Your BMI is: "+ BMI.toFixed(2) + "\nStatus: " + status;
}











  return (
    // jsx code
    <div style={{ height: '100vh',background: 'linear-gradient(179.4deg, rgb(253, 240, 233) 2.2%, rgb(255, 194, 203) 96.2%)'
  }} className='d-flex justify-content-center w-100' >
      <div style={{ width: '500px' ,background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(45,45,66,1) 80%, rgba(56,56,73,1) 100%, rgba(0,212,255,1) 100%)' }} className=' ps-5 pe-5 pt-5 mt-4 rounded'>
        <h1 className='justify-content-center d-flex' style={{color:'white'}}> BMI CALCULATOR</h1>

        <form onSubmit={handleCalculate} className='mt-5'>
          <div className='mb-3  rounded ' style={{ height: '130px' ,background: 'rgba(0, 0, 0, 0'}}>

            <h2 style={{ color: '#00cc99' }} className='d-flex justify-content-center pt-2'>AGE</h2>




            <TextField name="age" value={Age || ''}
            onChange={(e) => validate(e)}  id="standard-basic" className='d-flex justify-content-center align-items-center pt-4' variant="standard"
            InputProps={{ style: styles.input }}
            InputLabelProps={{ style: styles.label }} />


          </div>
          {!isAge &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }

          <div className='d-flex justify-content-center rounded  ' style={{height:'80px', background: 'rgba(0, 0, 0, 0'}}>
         

            <div className='d-flex justify-content-center align-items-center '  >
             
          <FormControl>
          
              <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
              
                  <FormControlLabel name='gender' value="female" style={{ color: '#00cc99' }} control={<Radio style={{color:'white'}}  />} label="Female"  />
                  <FormControlLabel name='gender'  value="male" style={{ color: '#00cc99' }} control={<Radio style={{color:'white'}} />} label="Male" />
                  </RadioGroup>
          </FormControl>
             
            </div>

          </div>
          <div className='row'>

            <div className='rounded pt-3 mt-3 ms-3' style={{ height: '100px', width: '190px' ,background: 'rgba(0, 0, 0, 0'}} >
              <h7 style={{ color: '#00cc99' }} className='d-flex justify-content-center '>HEIGHT(m)</h7>

              <TextField name="height" value={Height || ''} onChange={(e) => validate(e)}  id="standard-basic" className='d-flex justify-content-center align-items-center pt-1' variant="standard" 
              InputProps={{ style: styles.input }}
              InputLabelProps={{ style: styles.label}}
              />

            </div>
            {!isHeight &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }
         


            <div className='rounded pt-3 mt-3 ms-3' style={{ height: '100px', width: '190px',background: 'rgba(0, 0, 0, 0' }}>
              <h7 style={{ color: '#00cc99' }} className='d-flex justify-content-center '>WEIGHT(kg)</h7>

              <TextField name="weight" value={Weight || ''} onChange={(e) => validate(e)}  id="standard-basic" className='d-flex justify-content-center align-items-center pt-1' variant="standard" InputProps={{ style: styles.input }}
              InputLabelProps={{ style: styles.label}} />

            </div>
            {!isWeight &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }
          </div>

          <div className='d-flex justify-content-center align-items-center mt-3'>
          <Stack direction="row" spacing={2}>
          <Button type='submit' style={{background:'#00cc99' , color:'white' , width:'250px' , height:'50px' , fontSize:'20px' }} variant="outlined">CALCULATE</Button>
          </Stack>
          </div>

          <div style={{ height: '100px' ,fontSize:'25px' ,color:'#00cc99' }} className='flex-column mt-4 d-flex justify-content-center align-items-center w-100 ' id='result'>
       

            
          
         
        </div>

        </form>

      </div>
    </div>
  );
}

export default App;
