import './App.css';
import {useState} from 'react'
import { Button, TextField } from '@mui/material';

function App() {
  let result;
  const [toValue, setToValue] = useState(0);
  const [randomOne, setRandomOne] = useState();
  const [randomTwo, setRandomTwo] = useState();

  const [fromValue, setFromValue] = useState(0);
  const [place,setPlace] = useState(0)


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    for (let i = 0; i < 5; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 1000);
    }
    console.log('Done');
}

  const submitValue = async () => {
    const frmdetails = {
        'from value' : fromValue,
        'to value' : toValue,
        'place': place
    }
    if(place === 0)
    {
      for (let i = 0; i < 100; i++) {
        await sleep(30);
        console.log(i);
        setRandomOne(Math.floor(Math.random() * (parseInt(toValue) - parseInt(fromValue))) + parseInt(fromValue))
        
    }
    }
    else
    {
      for (let i = 0; i < 100; i++) {
        await sleep(20);
        console.log(i);
        do{
          setRandomTwo(Math.floor(Math.random() * (parseInt(toValue) - parseInt(fromValue))) + parseInt(fromValue))
          }
          while(randomTwo === randomOne)        
    }
     

    }

    setPlace(place+1);
    console.log(parseInt(toValue))
    console.log(parseInt(fromValue))

    console.log(frmdetails);
}
return (
    <div className="App">
      <h1>AAJ 2022 ومضة</h1>
      <TextField
          label="from"
          id="outlined-size-small"
          size="small"
          onChange={e => setFromValue(e.target.value)}
        />  
          <TextField
          label="to"
          id="outlined-size-small"
          size="small"
          onChange={e => setToValue(e.target.value)}

        /> 
        
      <br></br>
      <br></br>
      <Button onClick={submitValue} variant="contained">Randommm!</Button>
      <br></br>
      <br></br>
      <TextField
          id="outlined-size-small"
          size="big"
          color="success"
          value={randomOne}
        /> 
         <TextField
          id="outlined-size-small"
          size="big"
          color="success"
          value={randomTwo}

        /> 
        
       
      
    </div>
  );
}

export default App;
