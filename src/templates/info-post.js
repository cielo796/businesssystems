import React from "react"; 
import { Link, graphql } from "gatsby";
import { Col, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

//ReactShare
import {
    FacebookIcon,
    FacebookShareButton,
    TwitterShareButton,
    TwitterIcon,
    LineShareButton,
    LineIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'react-share'

const InformationPost = ({ data }) => { 
    const post = data.microcmsInformation // ㊟ allMicrocmsInformation で ない
        return ( 
        <Layout> 
        <SEO title ={post. title} />
         <Row>
          <Col className ="space">
              </Col> 
                </Row>
                {/* 記事の中身を生成 */}
                <Row>
                    <Col className =" title-obi">
                    <h1 className =" h1-font">{ post. title}</h1>
                     </Col>
                </Row> 
                <Row> 
                    <Col> {post. date}{` `}{ post. category. category}
                    </Col> 
                </Row> 
                <Row> 
                    < Col className =" space"></ Col > 
                </Row> 
                <Row>
                < Col > 
                    < div dangerouslySetInnerHTML ={{ __html: post. body }} /> 
                </ Col >
                </ Row >
                < Row >
                < Col className =" space"></ Col > 
                </ Row >
                <p>共有する</p>
                {/* SNSShareButton */}
                <div className="share-flex">
                    <FacebookShareButton title={post.title} url={`/information/${post.id}`}>
                        <FacebookIcon size={28} round />
                    </FacebookShareButton>
                    <TwitterShareButton title={post.title} url={`${data.site.siteMetadata.siteUrl}/information/${post.id}`}>
                        <TwitterIcon size={28} round />            
                    </TwitterShareButton>
                    <LinkedinShareButton title={post.title} url={`/information/${post.id}`}>
                        <LinkedinIcon  size={28} round />
                    </LinkedinShareButton>
                    <LineShareButton title={post.title} url={`${data.site.siteMetadata.siteUrl}/information/${post.id}`}>
                        <LineIcon size={28} round />
                    </LineShareButton>
                </div>
            </ Layout >    
         ) 
    } 
    
export default InformationPost;

export const query = graphql `
 query($ id: String!) {
    microcmsInformation( id: { eq: $ id }) {
        id
        title
        date( formatString: "YYYY 年 MM 月 DD 日")
        body 
        category {
          category
         } 
       } 
    site {
        siteMetadata {
          siteUrl
        }
      }
    }
    `

