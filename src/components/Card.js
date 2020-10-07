import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Images from '../images/logo.png'
import avatar from '../images/undraw_profile_pic_ic5t.svg'
import './style-1.css'

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1,0,auto',
    padding: '30px 20px 30px 20px !important',
  },
  cover: {
    width: '60%',
  },
}))

export default function MediaControlCard() {
  const classes = useStyles()

  return (
    <>
      <div className="container">
        <div className="container pt-8 pt-md-10 pb-8">
          <h2 className="title-3 text-dark ">
            Membership Application
          </h2>
    <p > Quick Download TEST</p>

             <div className="MuiPaper-root-634 MuiCard-root-633 jss839 jss631 jss846 MuiPaper-elevation1-638 MuiPaper-rounded-635">
             <span className="MuiTypography-root-592 jss666 jss843 MuiTypography-body1-594">
                  <img src={avatar} style={{width:"100px",height:"100px"}}></img>
                </span>

              <div className="MuiCardContent-root-665">
                <span className="MuiTypography-root-592 jss666 jss843 MuiTypography-body1-594">
                   Member
                </span>
 <p className="MuiTypography-root-592 jss668 jss845 MuiTypography-body1-594">
                Members shall consist of employees, officers, and directors
                    of the BJMP, including member retirees; or any government
                    employees belonging to the same department/branch/office,
                    including member-retirees; and immediate members of the
                    families (up to second degree of consanguinity or affinity)
                </p>



                    
                 
                
             
                 <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  
                >
                  <a href="https://drive.google.com/uc?export=download&id=1Y5vy8UYQ6PuiZNWI2SLzs85alxf2XSfG">
                    Membership Form
                  </a>
                </Typography>
                   <small> Click the Link to Download your Forms</small>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                
                >
                  <a href="https://drive.google.com/uc?export=download&id=1W0NDeD5ZxA3vhD-MwZmUKYf9shc5hEUY">
                    Withdrawal Slip
                  </a>
                </Typography>
                  <small> Click the Link to Download your Forms</small>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
               
                >
                  <a href="https://drive.google.com/uc?export=download&id=1KDgliGCfpbhNKK9VHRBJ2HtDuHs8hNNL">
                    Deposit Form
                  </a>
                </Typography>
              
                 <small> Click the Link to Download your Forms</small>
              </div>
            </div>






        </div>
      </div>
    </>
  )
}




          
          //<Card>///
          //   <CardContent>
          //     <div className="col-12">
          //       <h2 className="title-3 text-dark " className={classes.content}>
          //         Quick Download
          //       </h2>
          //       <p> Click the Link to Download your Forms</p>

              //   <img
              //   className="MuiCardMedia-root-662 jss840 jss841 jss842"
              //  src={Images}
              // />

          //       <Typography
          //         variant="subtitle1"
          //         color="textSecondary"
          //         className={classes.content}
          //       >
          //         <a href="https://websiteinventorph.com/wp-content/uploads/2019/02/MEMBERSHIP-APPLICATION-FORM-FINAL-1.docx">
          //           Membership Form
          //         </a>
          //       </Typography>
          //       <Typography
          //         variant="subtitle1"
          //         color="textSecondary"
          //         className={classes.content}
          //       >
          //         <a href="https://websiteinventorph.com/wp-content/uploads/2019/02/withdrawal-slip.jpg">
          //           Withdrawal Slip
          //         </a>
          //       </Typography>
          //       <Typography
          //         variant="subtitle1"
          //         color="textSecondary"
          //         className={classes.content}
          //       >
          //         <a href="https://websiteinventorph.com/wp-content/uploads/2019/02/deposit.jpg">
          //           Deposit Form
          //         </a>
          //       </Typography>
          //     </div>
          //   </CardContent>
         
           
          // </Card>
