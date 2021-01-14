import React from "react"
import { graphql, Link } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
      <div style={{paddingLeft: 1 + "rem"}}>
        <h1>
          {frontmatter.title} -  <span style={{fontSize: 1.4 + "rem", fontStyle: "italic"}}> {frontmatter.date}
          </span>
        </h1>
        <div
          
          dangerouslySetInnerHTML={{ __html: html }}
        />
        
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        date(formatString: "MMMM, YYYY")
        title
      }
    }
  }
`