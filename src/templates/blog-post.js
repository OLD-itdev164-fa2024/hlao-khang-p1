import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"

const H1 = styled.h1`
  margin: 0px
  margin-bottom: 4px
`

const BlogPost = ({ data }) => {
  const { title, body, heroImage, image } = data.contentfulBlogPost

  return (
    <Layout heroImage={heroImage}>
      <H1>{title}</H1>
      <div>
        <GatsbyImage image={image.gatsbyImageData} />
        <div
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500)
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 200)
      }
    }
  }
`
