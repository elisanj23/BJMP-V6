import React from 'react'
import { Link } from 'gatsby'
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'
import Container from './container'
import Navigation from './navigation'
import './style-1.css'
import Footer from '../components/Footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        />
        <Container>
          <div id="wrapper" className="wrapper">
            <Navigation />
            {children}
          </div>

          <Footer></Footer>
        </Container>
      </>
    )
  }
}

export default Template
