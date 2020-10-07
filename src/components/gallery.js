import 'react-image-gallery/styles/css/image-gallery.css'
import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import ImageGallery from 'react-image-gallery'
import image1 from '../images/img1.jpg'
import image2 from '../images/img2.jpg'
import image3 from '../images/img3.jpg'
import image4 from '../images/img4.jpg'
import image5 from '../images/img5.jpg'
import image6 from '../images/img6.jpg'

export default class Gallery extends React.Component {
  render() {
    const images = [
      {
        original: image1,
        thumbnail: image1,
      },
      {
        original: image2,
        thumbnail: image2,
      },
      {
        original: image3,
        thumbnail: image3,
      },

      {
        original: image4,
        thumbnail: image4,
      },

      {
        original: image5,
        thumbnail: image5,
      },

      {
        original: image6,
        thumbnail: image6,
      },
    ]

    return (
      <div className="container pt-8 pt-md-10">
        <div className=" justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-1">Gallery</h2>
            <p>Our BJMPSLAI Family</p>
          </div>
      
            <div
              className=""
              style={{
                margin: '0 auto',
                width: '67%',
                transition: 'all 1s ease',
              
              }}
            >
              <ImageGallery
                items={images}
                infinite
                lazyload={true}
                showFullscreenButton={false}
                showThumbnails={false}
                showPlayButton={false}
               autoPlay={true}
                showBullets={true}
                  style={{
                margin: '20 15px',
                 backgroundColor:'black'
              }}
              />
            </div>
          
        </div>
      </div>
    )
  }
}

// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import GridList from '@material-ui/core/GridList'
// import GridListTile from '@material-ui/core/GridListTile'
// import tileData from './tileData'

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//   },
// }))

// /**
//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//  * [etc...]
//  *
//  *  */

// export default function ImageGridList() {
//   const classes = useStyles()

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={160} className={classes.gridList} cols={3}>
//         {tileData.map(tile => (
//           <GridListTile key={tile.img} cols={tile.cols || 1}>
//             <img src={tile.img} alt={tile.title} />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   )
// }
