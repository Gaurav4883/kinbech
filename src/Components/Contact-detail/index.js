import React from 'react'


import { Button, Grid, Typography,Card,CardContent,TextField } from '@mui/material'


const ContactDetail = () => {
          
  return (
    <div style={{marginBottom:"30px"}}>
           <Typography gutterBottom variant="h3" align="center">
                    Do you need help?
          </Typography>
         
          <Card style={{maxWidth:550,margin:"0 auto" , padding:"20px 5px"}} >
                    <CardContent>
                    <Typography gutterBottom variant="h3">
                    Contact us
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
          Fill up the form and our team will get back to you within 24 hrs
          </Typography>
                      <form>  
                              <Grid container spacing={1}>
                                        <Grid xs={12} sm={6} item>
                                                  <TextField label="First Name" placeholder='Enter first name' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                                  <TextField label="Last Name" placeholder='Enter Last name' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid xs={12} item>
                                                  <TextField type='email' label="Email" placeholder='Enter Email' variant='outlined' fullWidth/>
                                        </Grid>
                                        <Grid xs={12} item>
                                                  <TextField type = "number" label="Phone" placeholder='Enter phone name' variant='outlined' fullWidth/>
                                        </Grid>
                                        <Grid xs={12} item>
                                                  <TextField  label="Message" multiline rows ={4} placeholder='Type your message here' variant='outlined' fullWidth/>
                                        </Grid>
                                        <Grid xs={12} sm={4}>

                                        </Grid>
                                        <Grid xs={12} sm={3} item >
                                                  <Button variant="contained" color="primary" align="center" fullWidth>Submit</Button>

                                        </Grid>
                              </Grid>
                              </form>           
                    </CardContent>
          </Card>
    </div>
  )
}

export default ContactDetail