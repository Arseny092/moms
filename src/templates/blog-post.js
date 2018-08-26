import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

export default function Template({
                                     data
}) {
    const { markdownRemark: post } = data;
    return (
        <div className="blog-post-container">
            <Helmet title={`Mommys band blog - ${post.frontmatter.title}`} />
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <Link to="/blog"><button className="blog-post-btn2">К списку постов</button></Link>
        </div>
    );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;