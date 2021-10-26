import React, {useState , useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Data from '../dataS.json'
import Timetable from '../Components/Timetable';
import axios from 'axios';

function DataHeader() {
    const [data, setData] = useState('');
    const [selectData, setSelectData] = useState('');
    const [selectTable, setSelectTable] = useState('');
    const[url , setUrl] = useState('');
    const [table , setTable] = useState('');
    const[idleTeacher, setIdleTeacher] = useState('');
    const[extraTeacher, setEtraTeacher] = useState('');

    const handleData = (event) => {
      setData(event.target.value);
    };
    const handleSelect = (event) => {
        setSelectData(event.target.value);
    }
    const handleTable = (event) =>{
        setSelectTable(event.target.value);
    }

    useEffect(
        async () =>{
         if(selectTable !== ''){
      let url = '/' + selectData + '/' ;
      if(data == 'updated')
       url += 'updated/' ;
      url += selectTable ;
      console.log(url);
      
      let response = await axios.get(url);
     setTable(response.data.data);
     setUrl(url);
     console.log(response);
         }
       },[data, selectData, selectTable])

       useEffect(
         async()=>{
         let response =await axios.get('/teacher/idleTeacher'); 
         setIdleTeacher(response.data.idleTeacher);
         
         response =await axios.get('/teacher/ExtraTeacher'); 
         setEtraTeacher(response.data.ExtraTeacher);
         },[] )

    return (
        <>
        <Typography variant="h3" component="div" gutterBottom>
          Time Table
        </Typography>
        
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          label="Age"
          onChange={handleData}
        >
          <MenuItem value={'orignal'}>Orignal</MenuItem>
          <MenuItem value={'updated'}>Updated</MenuItem>
        </Select>
        </FormControl>
        {
        data ===''?<span></span>
        : <>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectData}
          label="Age"
          onChange={handleSelect}
        >
          <MenuItem value={'Teacher'}>Teacher</MenuItem>
          <MenuItem value={'Student'}>Student</MenuItem>
        </Select>
        </FormControl>

         { selectData ===''?<span></span>
        : <>
            {
              selectData === 'Teacher' ?  
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
           <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={selectTable}
             label="Age"
             onChange={handleTable}
           >
             <MenuItem value={'hindi'}>Hindi</MenuItem>
             <MenuItem value={'english'}>English</MenuItem>
             <MenuItem value={'maths'}>Math</MenuItem>
             <MenuItem value={'kannada'}>Kannada</MenuItem>
             <MenuItem value={'science'}>Science</MenuItem>
   
           </Select>
           </FormControl>
          :
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectTable}
          label="Age"
          onChange={handleTable}
        >
          <MenuItem value={'6th'}>Sixth</MenuItem>
          <MenuItem value={'7th'}>Seventh</MenuItem>
          <MenuItem value={'8th'}>Eight</MenuItem>
          <MenuItem value={'9th'}>Ninth</MenuItem>
          <MenuItem value={'10th'}>Tenth</MenuItem>

        </Select>
        </FormControl>
        }
        </>
        }
        </>
         }
         <Timetable url = {url} table = {table}/>
         {
           data === 'updated' ? 
           <>
           <Typography variant="h5" component="div" gutterBottom>
          IdleTeachers : {idleTeacher}  ExtraTeacher : {extraTeacher}
           </Typography>
           </>
           :<span></span>
         }
        </>
        
    )
}

export default DataHeader
