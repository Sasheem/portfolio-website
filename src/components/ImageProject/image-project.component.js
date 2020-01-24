import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ImageProject = () => {
  const data = useStaticQuery(graphql`
    query {
      projectImage: file(relativePath: { eq: "project1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2880) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      //   sizes="(max-width: 500px) 100vw, 500px"
      fluid={data.projectImage.childImageSharp.fluid}
      style={{
        display: 'block',
        margin: '0 auto',
        height: '100%',
        width: 'auto',
        borderRadius: '2%',
      }}
    />
  )
}

export default ImageProject
