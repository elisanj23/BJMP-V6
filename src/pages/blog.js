import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Grid from '@material-ui/core/Grid'
class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <div className="container pt-5 pt-md-5  mb-3">
          <div className=" justify-content-start">
            <Helmet title={siteTitle} />
            {/* <div className={styles.hero}>News And Announcements</div> */}
            <div className="col-12">
              <h2 className="title-3 text-dark mb-3">News And Announcements</h2>
            </div>
            <div className="container pt-3 pt-md-3">
              <div className=" justify-content-start">
                <Grid
                  container
                  item
                  xs={12}
                  spacing={3}
                  style={{ margin: '0 !important' }}
                >
                  {posts.map(({ node }) => {
                    return (
                      // <li key={node.slug}>

                      // </li>

                      <ArticlePreview key={node.slug} article={node} />
                    )
                  })}
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
  }
`
