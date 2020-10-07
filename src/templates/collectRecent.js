import React from 'react'
import { graphql,StaticQuery } from 'gatsby'
import get from 'lodash/get'
import {Link} from "gatsby"
import ArticlePreview from '../components/article-preview'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Img from 'gatsby-image'
import '../components/style-1.css'
import Card from '@material-ui/core/Card'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
// import Side from './sidebar-recent'
import CardHeader from '@material-ui/core/CardHeader'
import Zoom from '@material-ui/core/Zoom'

class RootIndex extends React.Component {
  render() {



    return (

      <>
  
<StaticQuery query={pageQuery1} render={(data)=>
<div>
{data.allContentfulBlogPost.edges.map(({node})=>(

<>
 
    
<Link key={node.slug} to={`/blog/${node.slug}`}>
  <Card className="box-shadow" >
   <Img alt="" fluid={node.heroImage.fluid} />
        <CardHeader title={node.title} subheader={node.publishDate} />
         </Card> 
      </Link>


</>
))}
</div>



}></StaticQuery>
      </>
    )
  }
}

export default RootIndex

export const pageQuery1 = graphql`
  query sideBar {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC } limit:3) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
            heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
