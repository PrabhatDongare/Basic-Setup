// import React from 'react'

import { Box } from "@mui/material"

import SentimentAnalysis from "./pages/SentimentAnalysis"


function App() {

  return (
    <Box height="60vh" border="2px solid black" sx={{ width:"55vw", background:'#E9EAEC' }} >
      <SentimentAnalysis/> 
      {console.log("works!")}
    </Box>
  )
}

export default App
