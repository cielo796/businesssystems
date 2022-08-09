import React from "react";
import { Link, graphql } from "gatsby";
import { Col, Row, Card , Button } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Pagination } from "../components/pagination"

class InformationPageAllNews extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMicrocmsInformation.edge
    const { currentPageNews, pageCountNews } = this.props.pageContext
    const isFirst = currentPageNews === 1
    const isLast = currentPageNews === pageCountNews
    const prevPage = currentPageNews - 1 === 1 ? '' : (currentPageNews - 1).toString()
    const nextPage = (currentPageNews + 1).toString()
  
  return (
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
            <Card style={{ paddingTop:`0.5rem` }} className="cardre">
           <Link to={`/informationnews/${node.id}`}>
            <Card.Img variant="top" src={node.articleimage.url} /></Link>
              <Card.Body>
                <Card.Title>{node.title}</Card.Title>
                  <Card.Text>
                    {node.except}
                  </Card.Text>
                <Link to={`/informationnews/${node.id}`}>
                <Button variant="primary">記事を読む</Button></Link>
              </Card.Body>
            </Card>
          </Col>
    ))}
    </Row>
    <Row>
      <Col className="space"> </Col>
    </Row>
    <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={`/informationnews/${prevPage}`}>
              <Button variant="primary">← Previous Page</Button>
            </Link>
          )}
          {Array.from({ length: pageCountNews }, (_, i) => (
            <li
              key={`informationnews${i + 1}`}
              style={{
                margin: 0,
              }}
            >
             {/*  <Link
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#007acc' : '',
                }}
              >
                {i + 1}
              </Link> */}
            </li>
          ))}
          {!isLast && (
            <Link to={`/informationnews/${nextPage}`}>
              <Button variant="primary">Next Page →</Button>
            </Link>
          )}
        </ul>
  </Layout>
  )
  }
}

export default InformationPageAllNews;

export const query = graphql`
query ($limit: Int!, $skip: Int!) {
    allMicrocmsInformation (sort: {fields: [date], order: DESC},filter: {category: {category: {eq: "NEWS"}}},limit: $limit, skip: $skip) {
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