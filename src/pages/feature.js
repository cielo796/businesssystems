import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col, } from "react-bootstrap";
import { Link, graphql } from "gatsby";
import headerf from "../images/headerw.png";
import noimg from "../images/NOIMAGE.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import feater from "../images/PAFeater.png";

const Feature = () => (
    <Layout>
    <SEO title="LINEホワイトペーパー資料請求" />
    {/* 全体レイアウト設定 */}
    <Row style={{ maxWidth: `1280px` }}>
        <img src={headerf} style={{ width: `100%`, marginBottom: `2rem` }} />
    </Row>
    <CardGroup>
      <Card>
      <Link to={`/powerautomatefeature`}>
        <Card.Img variant="top" src={feater} /></Link>
        <Card.Body>
          <Card.Title>PowerAutoMate特集</Card.Title>
          <Card.Text>
            MicrosoftのRPAサービス、PowerAutoMateの特集です。
          </Card.Text>
          <Link to={`/powerautomatefeature`}>
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
export default Feature

