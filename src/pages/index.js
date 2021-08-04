import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage 
        // src="https://www.teahub.io/photos/full/35-358921_anime-in-philippines-slam-dunk-slam-dunk-hd.jpg" 
        src="../images/onizuka.png" 
        alt="Onizuka with a guitar on his back"
      />
    </Layout>
  );
}

export default IndexPage
