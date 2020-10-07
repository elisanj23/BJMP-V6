import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Gallery from '../components/gallery'
import Grid from '@material-ui/core/Grid'
import Cards from '../components/Card'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import '../components/style-1.css'

import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'

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
      '.page-home'
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

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    var items = posts.slice(0, 4)

    return (
      <Layout location={this.props.location}>
        {/* Idont know why the scrolltip working but the good thing its no other effect to ether element except the border box of the navbar */}
        <ScrollTop>bjmpslai</ScrollTop>

        <div className="sticky-box-shadow">
          <ScrollTop {...this.props}>
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </div>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero />
          <Gallery />
          <div className="container">
            <div className="container pt-8 pt-md-10">
              <div className="row justify-content-start">
                <div className="col-12">
                  <h2 className="title-3 text-dark mb-1">
                    News and Announcements
                  </h2>
                  <p> Check out the Latest Information </p>
                </div>
                <Grid
                  container
                  item
                 
                  xs={12}
                  spacing={3}
                  style={{ margin: '0 !important' }}
                >
                  {items.map(({ node }) => {
                    return (
                      // <li key={node.slug}>

                      // </li>

                      <ArticlePreview key={node.slug} article={node} />
                    )
                  })}
                </Grid>
              </div>
              <div className="col-12 text-center">
                <a className="button button-primary mt-2" href="/blog">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <Cards></Cards>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
