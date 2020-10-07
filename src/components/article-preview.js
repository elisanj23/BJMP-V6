import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Chip from '@material-ui/core/Chip'

// import cx from 'clsx'
import { makeStyles } from '@material-ui/styles'

// import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'

import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
// import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded'
// import TextInfoContent from '@mui-treasury/components/content/textInfo'
// import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide'
// import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01'
// import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy'

export default ({ article }) => (
  <Grid item xs={12} sm={6} md={3} >
   <Link to={`/blog/${article.slug}`}>
    <Card className="box-shadow" >
     
        <Img alt="" fluid={article.heroImage.fluid} />
     
    
        <CardHeader title={article.title} subheader={article.publishDate} />
     
      <CardContent>
        <Typography
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
        {article.tags &&
          article.tags.map(tag => (
            <Chip label={tag} key={tag} color="primary" />
          ))}
      </CardContent>
    </Card>
     </Link>
  </Grid>
)
