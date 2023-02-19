import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col, } from "react-bootstrap";
import { Link, graphql } from "gatsby";
import header02 from "../images/header03.png";
import preparation from "../images/preparation.png";
import LINEPaper from "../images/LINEMarktingWhitePape.png";
import noimg from "../images/NOIMAGE.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const ContactDone = () => (
    <Layout>
    <SEO title="LINEホワイトペーパー資料請求" />
    {/* 全体レイアウト設定 */}
    <Row style={{ maxWidth: `1280px` }}>
        <img src={preparation} style={{ width: `100%`, marginBottom: `2rem` }} />
    </Row>
    <CardGroup>
      <Card>
      <Link to={`/linewhitepaper`}>
        <Card.Img variant="top" src={LINEPaper} /></Link>
        <Card.Body>
          <Card.Title>売上を増やすLINEマーケティングとは</Card.Title>
          <Card.Text>
            LINE公式アカウントの紹介や連携事例に集客支援やマーケティングオートメーションの事例を紹介しています。
          </Card.Text>
          <Link to={`/linewhitepaper`}>
          <Button variant="primary">詳細へ</Button></Link>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={noimg} />
        <Card.Body>
          <Card.Title>NoImages</Card.Title>
          <Card.Text>
            準備中です。
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={noimg} />
        <Card.Body>
        <Card.Title>NoImages</Card.Title>
          <Card.Text>
            準備中です。
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    <Row>
      <Col className="space"></Col>
    </Row>
  </Layout>
  );
export default ContactDone

    