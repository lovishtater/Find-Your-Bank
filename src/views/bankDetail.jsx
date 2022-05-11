import React from 'react'
import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'

const BankDetail = () => {
    const { id } = useParams();
    console.log(id);
  return (
    <div>
    <Typography variant="h6" color="initial">
        BankDetail -  
        {id}
    </Typography>

    </div>
  )
}

export default BankDetail