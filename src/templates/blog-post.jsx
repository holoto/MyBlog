import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
// import Disqus from 'disqus-react';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  EmailShareButton,
} from 'react-share'
import {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
} from 'react-share'
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  EmailIcon,
} from 'react-share'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const gitalk = new Gitalk({
      clientID: 'bbf146b5a9317b386d1a',
      clientSecret: '3ec2697fb42e369e5fdad6de6f52bea97a90ac53',
      repo: 'holoto.github.io',
      owner: 'holoto',
      admin: ['holoto'],
      perPage: 100,
      id: this.props.location, // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
    })
    gitalk.render('gitalk-container')
  }

  componentWillUnmount() {}
  render() {
    const post = this.props.data.yuqueDoc
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const shareUrl = this.props.location.href
    const title = this.props.data.yuqueDoc.title
    console.log(this)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.description} />
        <h1>{post.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.created_at}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: post.childMarkdownRemark.html }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/post/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/post/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>

        <TwitterShareButton url={shareUrl} title={post.title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <div id="gitalk-container" />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    yuqueDoc(slug: { eq: $slug }) {
      title
      slug
      description
      created_at(formatString: "MMMM DD, YYYY")
      childMarkdownRemark {
        html
      }
    }
  }
`
