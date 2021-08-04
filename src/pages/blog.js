import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <ul>
        {data.allFile.nodes.map(({ name }) => (
          <li key={name}>
            {name}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage