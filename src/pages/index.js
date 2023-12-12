import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const CoolList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <CoolList>
        {data.allContentfulBlogPost.edges.map(edge => (
          <div key={edge.node.id}>
            <Link to={edge.node.slug}>
              <GatsbyImage image={edge.node.heroImage.gatsbyImageData} />
            </Link>
            <h1>{edge.node.title}</h1>
            <p>{edge.node.body.childMarkdownRemark.excerpt}</p>
          </div>
        ))}
      </CoolList>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            gatsbyImageData
          }
        }
      }
    }
  }
`
