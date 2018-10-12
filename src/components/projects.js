import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const ProjectQuery = graphql`
  query ProjectQuery{
    markdownRemark {
      html
    }
  }
`

const Projects = () => (
  <StaticQuery
    query={ProjectQuery}
    render={data => (
      <>
        <div
          style={{
            margin: '0 auto',
            padding: '2rem',
            maxWidth: '700px',
          }}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </>
    )}
  />
)

export default Projects
