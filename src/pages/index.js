import React from 'react'
import Helmet from 'react-helmet'
import Projects from '../components/projects'

import { graphql } from 'gatsby'

import 'typeface-lora'
import 'typeface-varela-round'

const IndexPage = ({ data }) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.description,
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Projects />
  </>
)

export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default IndexPage
