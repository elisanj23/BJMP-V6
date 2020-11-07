import React from 'react'
import Layout from '../components/layout'

import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

export default function Product() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <Layout>
      <div className="container">
        <div className="container pt-5 pt-md-5 pb-3">
          <h1>Services</h1>
          <div className={classes.root}>

            <ExpansionPanel
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>
                  Savings Deposit
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Earns <u>6% interest per annum</u> which is added or posted to savings deposit account every end of the quarter.
                </Typography>
              </ExpansionPanelSummary>
             
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>
                  Capital Contribution
                </Typography>
                <Typography className={classes.secondaryHeading}>
                A member of the BJMPSLAI is a part owner of the association. Thus a member has a mandatory contribution of One Million One Hundred  Thousand Pesos (P1,100,000) and entitled to receive an annual dividend.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                The One Million One Hundred Thousand Pesos (P1,100,000) is payable as follows:
                <ul>
                  <li>Initial Payment of  P1000 upon acceptance of membership.</li>
                  <li>Monthly Payment of P250 thru payroll deduction by the BJMP Finance until the P1,100,000 maximum capcon is fully paid.</li>
                </ul>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>Loans</Typography>
                <Typography className={classes.secondaryHeading}>
                Aquire Loans with 11.5% interest per annum
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
  
                <ul>
                  <li>Must be a Member</li>
                  <li>BJMP ID Photocopy</li>
                  <li>ATM Photocopy (Front only)</li>
                  <li>If from Region, fill out these forms and Send the requirements via courier. Please use designated paper size if indicated. Download, Print and Fill up all forms.</li>
  
                </ul>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === 'panel5'}
              onChange={handleChange('panel5')}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Updating Monthly Savings / Capcon{' '}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Updating Monthly Savings / Capcon{' '}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                
                        <ul>
                          <li>ATD Form</li>
                          <li> BJMP ID</li>
                        </ul>

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === 'panel6'}
              onChange={handleChange('panel6')}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Loan Amortization Schedule{' '}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Loan Amortization Schedule{' '}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                
                        <ul>
                          <li><a href="https://assets.ctfassets.net/sbpgtx1gm6ht/2gKdW55VAFP9CfU7NaPzDM/2c03815f9a95a30084b217961b7cb45f/AMORTIZATION-SCHEDULE-10.525.pdf">Loan Amortization Schedule PDF</a></li>
       
                        </ul>

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
           
          </div>
        </div>
      </div>
    </Layout>
  )
}
