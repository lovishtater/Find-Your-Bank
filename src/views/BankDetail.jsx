import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import manImg from '../assets/manPointingBankDetails.png'

// ** Icons Imports
import BusinessIcon from "@mui/icons-material/Business";
import { useSelector } from 'react-redux';
import AppBar  from '../components/AppBar';


const BankDetail = () => {
    const { ifscCode } = useParams();

    
    const bank = useSelector((state) => state.bank?.banks?.filter((bank) => bank.ifsc === ifscCode)[0]);
  console.log(bank);
    return (
      <AppBar>
        <Card style={{ margin: "0 auto", maxWidth: "80%", marginTop: "2rem" }}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <CardContent
                sx={{
                  padding: (theme) =>
                    `${theme.spacing(3.25, 5.75, 6.25)} !important`,
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: 3.5 }}>
                  <BusinessIcon
                    sx={{ color: "primary.main", marginRight: 2.75 }}
                  />
                  {bank.bank_name}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: "18px" }}>
                  Bank ID
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 3.5 }}>
                  {bank.bank_id}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: "18px" }}>
                  IFSC Code
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 3.5 }}>
                  {bank.ifsc}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: "18px" }}>
                  Address:
                </Typography>
                <Typography variant="body2">{bank.address}</Typography>
                <Divider sx={{ marginTop: 6.5, marginBottom: 6.75 }} />
                <Grid container spacing={4}>
                </Grid>
              </CardContent>
            </Grid>
            <Grid
              item
              sm={6}
              xs={0}
            >
              <img src={manImg} alt="Man pointing towards Bank Details" />
            </Grid>
          </Grid>
        </Card>
      </AppBar>
    );
}

export default BankDetail
