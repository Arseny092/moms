import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function Blog({
                                  data
                              }) {
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <div className="blog-posts">
            {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                    return (
                        <div className="blog-post-preview" key={post.id}>
                            <h1>
                                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                            </h1>
                            <Link to={post.frontmatter.path}><img src={post.frontmatter.src}></img></Link>
                            <h2>{post.frontmatter.date}</h2>
                            <p>{post.excerpt}</p>
                            <Link to={post.frontmatter.path}><button className="blog-post-btn">Читать далее</button></Link>
                        </div>
                    );
                })}
        </div>
    );
}

export const blogQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            src
          }
        }
      }
    }
  }
`;