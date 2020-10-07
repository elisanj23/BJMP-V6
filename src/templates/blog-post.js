import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Chip from '@material-ui/core/Chip'
import heroStyles from '../components/hero.module.css'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/styles'
import '../components/style-1.css'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import Collect from './collectRecent'
import window from 'global'
import {
  EmailShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookShareButton} from "react-share"

import {
  EmailIcon,
  TelegramIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  FacebookIcon} from "react-share"
// Scroltip function should be seperated from this file

function ScrollTop(props) {
  const { children, window } = props
  const classes = useStyles()
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '.header'
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}
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

// Scroltip function should be seperated from this file

class BlogPostTemplate extends React.Component {
  render() {


    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')


  const url=this.props.location.href

  console.log(url)
    return (
      <Layout location={this.props.location}>
        <div className="container">
          <div className="container pt-2 pt-md-2 pb-8">
            <Helmet title={`${post.title} | ${siteTitle}`} />
            <Card>
              <CardContent>
                <div className="sticky-box-shadow">
                  <ScrollTop {...this.props}>
                    <Fab
                      color="primary"
                      size="small"
                      aria-label="scroll back to top"
                    >
                      <KeyboardArrowUpIcon />
                    </Fab>
                  </ScrollTop>
                </div>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={12} sm={12} md={8}>
                    
                    <div className="wrapper">
                      <h1 className="section-headline">{post.title}</h1>
                      <div>
                        {post.tags &&
                          post.tags.map(tag => (
                            <Chip label={tag} key={tag} color="primary" />
                          ))}
                      </div>
                      <p
                        style={{
                          display: 'block',
                        }}
                      >
                        {post.publishDate}
                      </p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.body.childMarkdownRemark.html,
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>

                   <Grid container item xs={12} spacing={3}>

                    <form noValidate autoComplete="off">
                      <Card >
                        <CardContent>
                          <div className="col-12 text-center">
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                            Recent Posts
                            </Typography>

                           
                        
                          </div>
                         <Collect />
                        </CardContent>
                      </Card>
                    </form>
                  </Grid>


                
</Grid>
                    
                



                </Grid>
              </CardContent>
            </Card>
          </div>
        </div>



 <Grid container item xs={12} spacing={3} style={{position:"fixed" ,top:"35%",left:"2%",width:"50px"}}>


<FacebookShareButton url={url}>


<FacebookIcon size={32} round={true} />

</FacebookShareButton>

< EmailShareButton url={url}>


< EmailIcon size={32} round={true} />

</ EmailShareButton>

< WhatsappShareButton url={url}>


< WhatsappIcon size={32} round={true} />

</ WhatsappShareButton>
< TwitterShareButton url={url}>


< TwitterIcon size={32} round={true} />

</ TwitterShareButton>
< LinkedinShareButton url={url}>


< LinkedinIcon size={32} round={true} />

</ LinkedinShareButton>
< TelegramShareButton url={url}>


< TelegramIcon size={32} round={true} />

</ TelegramShareButton>

</Grid>

      
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      tags
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
