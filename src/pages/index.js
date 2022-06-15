
import React from "react";
import { Row, Col, Card , Button } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import homeImg from "../images/hometop.jpg"
import C1Img from "../images/contents.jpg"
import C2Img from "../images/book.jpg"
import C3Img from "../images/marketing.jpg"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Row style={{maxWidth:`1280px`}}> 
        <img src={homeImg} style={{width:`100%`,marginBottom:`2rem`}} />
    </Row>
    <Row>
      <Col xs={12} md={6} style={{maxWidth:`400px`}}>
        <Row>
          <Col style={{backgroundColor:`cornflowerblue`,color:`white`,padding:`0.5rem`}}>NEWS</Col>
        </Row>
        {data.news.edges.map(({ node }) => (
          <Row>
            <Card style={{ width: '28rem',paddingTop:`0.5rem` }}>
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
          </Row>
        ))}
        <div class="btn-set"><Button variant="primary"><Link to = "/informationnews"><div class="whcolor">記事一覧へ</div></Link></Button></div>
      </Col>
      <Col xs={12} md={6} style={{maxWidth:`400px`}}>
        <Row>
          <Col style={{backgroundColor:`cornflowerblue`,color:`white`,padding:`0.5rem`}}>記事</Col>
        </Row>
        {data.blog.edges.map(({ node }) => (
          <Row>
            <Card>
              <Card.Header>{node.category.category }</Card.Header>
                <Card.Body>
                  <Card.Title><Link to={`/information/${node.id}`}>{node.title}</Link></Card.Title>
                </Card.Body>
              </Card>
            </Row>
        ))}
        </Col>
        <Col xs={12} md={6} style={{maxWidth:`300px`}}>
        <Row>
          <Col ></Col>
        </Row>
        </Col>
        <Col xs={12} md={6} style={{maxWidth:`400px`}}>
        <Row>
          <Col style={{backgroundColor:`cornflowerblue`,color:`white`,padding:`0.5rem`}}>特集</Col>
        </Row>
        </Col>
        <Col xs={12} md={6} style={{maxWidth:`400px`}}>
        <Row>
          <Col style={{backgroundColor:`cornflowerblue`,color:`white`,padding:`0.5rem`}}>コラム</Col>
        </Row>
        {data.column.edges.map(({ node }) => (
          <Row>
           <Card style={{ width: '28rem',paddingTop:`0.5rem` }}>
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
            </Row>
        ))}
        </Col>
    </Row>
    <Row>
      <Col style={{backgroundColor:`cornflowerblue`,color:`white`,padding:`0.5rem`,maxWidth:`1200px`,marginTop:`2rem`}}>MENU</Col>
    </Row>
    <Row>
      <Col style={{maxWidth:`1200px`}}>
        <Row>
          <Col xs={6} md={4}>
            <Card style={{marginTop:`1rem`}}>
            <Link to={`/preparation/`}>
              <Card.Img variant="top" src={C1Img} alt={`お役立ち資料`} /></Link>
              <Card.Body>
                <Card.Title style={{fontSize:`1rem`}}>お役立ち資料</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{marginTop:`1rem`}}>
            <Link to={`/information/`}>
              <Card.Img variant="top" src={C3Img} alt={`記事一覧`} /></Link>
              <Card.Body>
                <Card.Title style={{fontSize:`1rem`}}>記事一覧</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{marginTop:`1rem`}}>
              <Link to={`/preparation/`}>
              <Card.Img variant="top" src={C2Img} alt={`特集コンテンツ`} /></Link>
              <Card.Body>
                <Card.Title style={{fontSize:`1rem`}}>特集コンテンツ</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col style={{maxWidth:`1200px`, paddingTop:`3rem`}}></Col>
    </Row>
  </Layout>
);

export default IndexPage;

export const query = graphql`
query {
  column: allMicrocmsInformation(
    limit: 5, 
    sort: {fields: date, order: DESC} 
    filter: {category: {category: {eq: "コラム"}}}
    ) {
      edges {
        node {
          id
          except
          date
          title
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
  blog: allMicrocmsInformation(
    limit: 5,
    sort: {fields: date, order: DESC} 
    filter: {category: {category: {eq: "blog"}}}
     ) {
      edges {
        node {
          id
          except
          date
          title
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
    news: allMicrocmsInformation(
      limit: 5, 
      sort: {fields: date, order: DESC}
      filter: {category: {category: {eq: "NEWS"}}}
      ) {
      edges {
        node {
          id
          except
          date
          title
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