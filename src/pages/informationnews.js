import React from "react";
import { Link, graphql } from "gatsby";
import { Col, Row, Card , Button } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { PaginationNews } from "../components/paginationnews"

const InformationNewsPage = ({ data }) => (
  <Layout>
    <SEO title="記事一覧" />
    <Row>
      <Col className="space"></Col>
    </Row>
    {/* NEWSページ一覧を生成 */}
    <Row>
      <Col className="title-obi">
        <h1 className="h1-font">記事一覧</h1>
      </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
    {data.allMicrocmsInformation.edges.map(({ node }) => (
          <Col xs={12} md={6} key={node.id}>
            <Card style={{ paddingTop:`0.5rem` }}  className="cardre">
           <Link to={`/information/${node.id}`}>
            <Card.Img variant="top" src={node.articleimage.url} /></Link>
              <Card.Body>
                <Card.Title>{node.title}</Card.Title>
                  <Card.Text>
                    {node.except}
                  </Card.Text>
                <Link to={`/information/${node.id}`}>
                <Button variant="primary">記事を読む</Button></Link>
              </Card.Body>
            </Card>
          </Col>
    ))}
    </Row>
    <Row>
      <Col className="space"> </Col>
    </Row>
    <Link to={`/informationnews/2`}>
         <Button variant="primary">Next Page →</Button>
    </Link>
    {/* <PaginationNews totalCount={data.allMicrocmsInformation.totalCount} /> */}
  </Layout>
);

export default InformationNewsPage;

export const query = graphql`
query postnews {
    allMicrocmsInformation (
        sort: {fields: [date], order: DESC}
        filter: {category: {category: {eq: "NEWS"}}}
        ,limit: 15, skip: 0
        ) {
      totalCount
      edges {
        node {
          id
          except
          body
          title
          date(formatString: "YYYY年MM月DD日")
          category {
            category
          }
          articleimage {
            url
            height
            width
          }
        }
      }
    }
  }  
`