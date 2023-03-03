
import React from "react";
import { Row, Col, Card , Button } from "react-bootstrap";
import { Timeline } from 'react-twitter-widgets';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import header02 from "../images/header03.png"
import C1Img from "../images/contents.jpg"
import C2Img from "../images/book.jpg"
import C3Img from "../images/marketing.jpg"
import mailmaga from "../images/Mlogo.png"
import LINEMA from "../images/LINEMarktingWhitePape.png"
import { Adsense } from '../components/googleAdsense'
import { useLocation } from "@reach/router"
import Helmet from 'react-helmet';


const IndexPage = ({data}) => {
  const location = useLocation()
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  //console.log(isRootPath);

  return (
    <Layout>
      <SEO title="Home" />
      {/* 全体レイアウト設定 */}
      <Row style={{ maxWidth: `1280px` }}>
        <img src={header02} style={{ width: `100%`, marginBottom: `2rem` }} />
      </Row>
      {/* NEWSレイアウト */}
      <Row>
        <Col xs={12} md={6} style={{ maxWidth: `400px` }}>
          <Row>
            <Col style={{ backgroundColor: `cornflowerblue`, color: `white`, padding: `0.5rem` }}>NEWS</Col>
          </Row>
          {data.news.edges.map(({ node }) => (
            <Row>
              <Card style={{ width: '28rem', paddingTop: `0.5rem` }}>
                <Link to={`/information/${node.id}`}>
                  <Card.Img variant="top" src={node.articleimage.url} /></Link>
                <Card.Body>
                  <Card.Title>{node.title}</Card.Title>
                  {/* <Card.Text> */}
                    {/* {node.except} */}
                  {/* </Card.Text> */}
                  <Link to={`/information/${node.id}`}>
                    <Button variant="primary">記事を読む</Button></Link>
                </Card.Body>
              </Card>
            </Row>
          ))}
          <div class="btn-set"><Button variant="primary"><Link to="/informationnews"><div class="whcolor">記事一覧へ</div></Link></Button></div>
        </Col>
        {/* 記事のレイアウト */}
        <Col xs={12} md={6} style={{ maxWidth: `400px` }}>
          <Row>
            <Col style={{ backgroundColor: `cornflowerblue`, color: `white`, padding: `0.5rem` }}>記事</Col>
          </Row>
          {data.blog.edges.map(({ node }) => (
            <Row>
              <Card style={{ width: '28rem', paddingTop: `0.5rem` }}>
                <Link to={`/information/${node.id}`}>
                  <Card.Img variant="top" src={node.articleimage.url} /></Link>
                <Card.Body>
                  <Card.Title>{node.title}</Card.Title>
                  {/* <Card.Text> */}
                    {/* {node.except} */}
                  {/* </Card.Text> */}
                  <Link to={`/information/${node.id}`}>
                    <Button variant="primary">記事を読む</Button></Link>
                </Card.Body>
              </Card>
            </Row>
          ))}
        </Col>
        <Col xs={12} md={6} style={{ maxWidth: `300px` }}>
          <Row style={{ backgroundColor: `white`, color: `white`, padding: `0.5rem` }}>
            <Col>
             {/* メルマガ登録 */}
              <a href="https://forms.zohopublic.jp/goubarasaasis/form/Untitled1/formperma/BK3sytC1Y28nbBln6mBPBiIU1c1ViMZBiYTV7jvbnoM">
                <img className="imgb" src={mailmaga}/>
              </a>
              {/* Twitter表示 */}
              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: 'SystemdxM' // アカウント名
                }}
                options={{
                  height: '800'
                  }}
                />
                <Adsense path={isRootPath} />
                
            </Col>
          </Row>
        </Col>
        {/* 特集レイアウト */}
        <Col xs={12} md={6} style={{ maxWidth: `400px` }}>
          <Row>
            <Col style={{ backgroundColor: `cornflowerblue`, color: `white`, padding: `0.5rem` }}>特集</Col>
          </Row>
          <Row>
              <Card style={{ width: '28rem', paddingTop: `0.5rem` }}>
                <Link to={`/linewhitepaper`}>
                  <Card.Img variant="top" src={LINEMA} /></Link>
                <Card.Body>
                  <Card.Title>売上を増やすLINEマーケティングとは</Card.Title>
                  {/* <Card.Text> */}
                    {/* {node.except} */}
                  {/* </Card.Text> */}
                  <Link to={`/linewhitepaper`}>
                    <Button variant="primary">特集ページへ</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Row>
        </Col>
        {/* コラムレイアウト */}
        <Col xs={12} md={6} style={{ maxWidth: `400px` }}>
          <Row>
            <Col style={{ backgroundColor: `cornflowerblue`, color: `white`, padding: `0.5rem` }}>コラム</Col>
          </Row>
          {data.column.edges.map(({ node }) => (
            <Row>
              <Card style={{ width: '28rem', paddingTop: `0.5rem` }}>
                <Link to={`/information/${node.id}`}>
                  <Card.Img variant="top" src={node.articleimage.url} /></Link>
                <Card.Body>
                  <Card.Title>{node.title}</Card.Title>
                  {/* <Card.Text> */}
                    {/* {node.except} */}
                  {/* </Card.Text> */}
                  <Link to={`/information/${node.id}`}>
                    <Button variant="primary">記事を読む</Button></Link>
                </Card.Body>
              </Card>
            </Row>
          ))}
        </Col>
      </Row>
      {/* MENUレイアウト */}
      <Row>
        <Col style={{ backgroundColor: `cornflowerblue`, color: `white`, padding: `0.5rem`, maxWidth: `1200px`, marginTop: `2rem` }}>MENU</Col>
      </Row>
      <Row>
        <Col style={{ maxWidth: `1200px` }}>
          <Row>
            <Col xs={6} md={4}>
              <Card style={{ marginTop: `1rem` }}>
                <Link to={`/preparation/`}>
                  <Card.Img variant="top" src={C1Img} alt={`お役立ち資料`} /></Link>
                <Card.Body>
                  <Card.Title style={{ fontSize: `1rem` }}>お役立ち資料</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card style={{ marginTop: `1rem` }}>
                <Link to={`/information/`}>
                  <Card.Img variant="top" src={C3Img} alt={`記事一覧`} /></Link>
                <Card.Body>
                  <Card.Title style={{ fontSize: `1rem` }}>記事一覧</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card style={{ marginTop: `1rem` }}>
                <Link to={`/preparation/`}>
                  <Card.Img variant="top" src={C2Img} alt={`特集コンテンツ`} /></Link>
                <Card.Body>
                  <Card.Title style={{ fontSize: `1rem` }}>特集コンテンツ</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col style={{ maxWidth: `1200px`, paddingTop: `3rem` }}></Col>
      </Row>
      <Helmet>
        <title>システムDXメディア</title>
        <meta name="description" content="業務システムを中心にDXに繋がる情報を発信." />
        <meta name="google-site-verification" content="google-site-verification: google2a2269b3f72df574.html" />
      </Helmet>
    </Layout>
  );
};

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
    filter: {category: {category: {eq: "Blog"}}}
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