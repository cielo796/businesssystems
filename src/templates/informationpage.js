import React from "react";
import { Link, graphql } from "gatsby";
import { Col, Row, Card , Button } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Pagination } from "../components/pagination"

const InformationPageAll = ({ data }) => (
  <Layout>
    <SEO title="記事一覧" />
    <Row>
      <Col className="space"></Col>
    </Row>
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
            <Card style={{ paddingTop:`0.5rem` }}>
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
    <Pagination totalCount={data.allMicrocmsInformation.totalCount} />
  </Layout>
);

export default InformationPageAll;

export const query = graphql`
query ($limit: Int!, $skip: Int!) {
    allMicrocmsInformation (sort: {fields: [date], order: DESC},limit: $limit, skip: $skip) {
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