import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Test homepage</p>
        <StaticImage
          alt="Finley Murgleton"
          src="../images/finn.jpg"
        />
    </Layout>
  )
}

export default IndexPage