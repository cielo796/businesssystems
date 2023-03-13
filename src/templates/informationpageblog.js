import React from "react";
import { Link, graphql } from "gatsby";
import { Col, Row, Card , Button } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Pagination } from "../components/pagination"

class InformationPageAllNews extends React.Component {
  render() {
    // 次へ戻る実装用
    const { data } = this.props
    const posts = data.allMicrocmsInformation.edge
    const { currentPageblog, pageCountblog } = this.props.pageContext
    const isFirst = currentPageblog === 1
    const isLast = currentPageblog === pageCountblog
    const prevPage = currentPageblog - 1 === 1 ? '' : (currentPageblog - 1).toString()
    const nextPage = (currentPageblog + 1).toString()
  
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
          {/* 最初のページ判定＆戻るボタン */}
          {!isFirst && (
            <Link to={`/informationblog/${prevPage}`}>
              <Button variant="primary">← Previous Page</Button>
            </Link>
          )}
          {Array.from({ length: pageCountblog }, (_, i) => (
            <li
              key={`informationblog${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              {/*レイアウトの問題もありページネーション未実装  */}
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
          {/* 最初のページ判定＆次へボタン */}
          {!isLast && (
            <Link to={`/informationblog/${nextPage}`}>
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
    allMicrocmsInformation (sort: {fields: [date], order: DESC},filter: {category: {category: {eq: "Blog"}}},limit: $limit, skip: $skip) {
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