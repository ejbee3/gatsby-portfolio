import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="project-container">
      <SEO title={frontmatter.title} description={frontmatter.excerpt} />
      <nav>
        <Link style={{padding: 0.5 + "rem", fontSize: "1.2rem"}} to="/">Back to Home</Link>
      </nav>
      <div style={{paddingLeft: 1 + "rem", marginTop: 2.5 + "rem"}}>
        <h1>
          {frontmatter.title} -  <span style={{fontSize: 1.4 + "rem", fontStyle: "italic"}}> {frontmatter.date}
          </span>
        </h1>
        <div
          className="project-content"
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
      excerpt
    }
  }
`