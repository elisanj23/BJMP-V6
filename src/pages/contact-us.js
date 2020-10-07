import React from 'react'
import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import '../components/style-1.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))
export default function Aboutus() {
  const classes = useStyles()
  return (
    <Layout>
      <div className="container">
        <div className="container pb-8 pt-6 mx-auto pt-md-6">
          <h1>Email Us</h1>
          <Card>
            <CardContent>
              <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" className={classes.root} noValidate autoComplete="off" action="https://formspree.io/bjmpslai.it@gmail.com" method="POST">
                <TextField
                  id="outlined-full-width"
                  label="Name"
                  name="name"
                  style={{ margin: 8 }}
                  placeholder="First and Last"
                
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  type="text"
                />
                <TextField
                  id="outlined-full-width"
                  label="Email"
                  name="_replyto"
                  style={{ margin: 8 }}
                  placeholder="email@domain.tld"
                 
                  fullWidth
                  type="email"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />

              
                  {/* <label
                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-filled"
                    data-shrink="true"
                    htmlFor="outlined-full-width"
                    id="outlined-full-width-label"
                  >
                    Message
                  </label> */}
                  
                
   <div className="MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth" style={{margin: "8px"}}>

    <TextareaAutosize
                      aria-label="minimum height"
                      rowsMin={3}
                      placeholder="Insert Your Message Here"
                      width="90%"
                      cols="1000"
                      name="message"
                       
        />
</div>

              <div class="col-12 text-center">
                 
              <input type="submit" name="_subject" id="email-subject" value="Submit" />
              </div>
              </form>
            </CardContent>
          </Card>
          <br />
          
          <h1>Contact Numbers</h1>
          <Card>
            <CardContent>
            <h2>For Loans: </h2>
            <br />
            <h3 className="contact-number">Globe: 0917 858 7163</h3>
            <h3 className="contact-number">Sun: 0942 025 9732</h3>
            </CardContent>
         
          </Card>
        </div>
      </div>
    </Layout>
  )
}
