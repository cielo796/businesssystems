import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col, } from "react-bootstrap";
import { Link, graphql } from "gatsby";
import patop from "../images/patop.png";
import pa1 from "../images/pa1.png";
import pa2 from "../images/pa2.png";
import pa3 from "../images/pa3.png";
import pa4 from "../images/pa4.png";
import pa5 from "../images/pa5.png";
import noimg from "../images/NOIMAGE.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Powerautomatefeature = () => (
    <Layout>
    <SEO title="PowerAutomate講座" />
    {/* 全体レイアウト設定 */}
    <Row style={{ maxWidth: `1280px` }}>
        <img src={patop} style={{ width: `100%`, marginBottom: `2rem` }} />
    </Row>
    <CardGroup>
      <Card>
        <a href="https://systemdx.net/information/b4648b77-67d4-537d-8f5d-751172cc5985">
        <Card.Img variant="top" src={pa1} />
        </a>
        <Card.Body>
          <Card.Title>【Power Automate入門】Excel処理の自動化をMicrosoft PowerAutomateで試してみた【第一回】</Card.Title>
          <Card.Text>
            PowerAutomateとはPowerAutomateとはMicrosoft社が提供するビジネスプラットフォーム、PowerPlatformの1サービスです。
          </Card.Text>
          <a href="https://systemdx.net/information/b4648b77-67d4-537d-8f5d-751172cc5985">
            <Button variant="primary">詳細へ</Button>
          </a>
        </Card.Body>    
      </Card>
      <Card>
        <a href="https://systemdx.net/information/8f2f390b-cf72-50cd-8ee5-c824709245f7">
        <Card.Img variant="top" src={pa2} />
        </a>
        <Card.Body>
          <Card.Title>【Power Automate入門】MicrosoftPowerAutomateでPDFから文字を抽出する【第二回】</Card.Title>
          <Card.Text>
            PowerAutomateでPDFから文字を抽出しExcelに転記
          </Card.Text>
          <a href="https://systemdx.net/information/8f2f390b-cf72-50cd-8ee5-c824709245f7">
            <Button variant="primary">詳細へ</Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <a href="https://systemdx.net/information/ae128103-8610-5306-b364-4ae7de969cc7">
        <Card.Img variant="top" src={pa3} />
        </a>
        <Card.Body>
          <Card.Title>【Power Automate入門】MicrosoftPowerAutomateでデスクトップアプリケーションの操作を自動化【第三回】</Card.Title>
          <Card.Text>
            PowerAutomateでメモ帳に自動入力
          </Card.Text>
          <a href="https://systemdx.net/information/ae128103-8610-5306-b364-4ae7de969cc7">
            <Button variant="primary">詳細へ</Button>
          </a>
        </Card.Body>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card>
        <a href="https://systemdx.net/information/aa5ba9ca-a8ad-54ab-b536-b4b4dbd24d67">
        <Card.Img variant="top" src={pa4} />
        </a>
        <Card.Body>
          <Card.Title>【Power Automate入門】MicrosoftPowerAutomateでWebスクレイピング【第四回】</Card.Title>
          <Card.Text>
            PowerAutomateでWebスクレイピング
          </Card.Text>
          <a href="https://systemdx.net/information/aa5ba9ca-a8ad-54ab-b536-b4b4dbd24d67">
            <Button variant="primary">詳細へ</Button>
          </a>
        </Card.Body>    
      </Card>
      <Card>
        <a href="https://systemdx.net/information/4509e547-6ffe-55a4-8d6c-84d6e80cf4f2">
        <Card.Img variant="top" src={pa5} />
        </a>
        <Card.Body>
          <Card.Title>【Power Automate入門】MicrosoftPowerAutomateで添付ファイルの自動保存【第五回】</Card.Title>
          <Card.Text>
            PowerAutomateで添付ファイルの自動保存
          </Card.Text>
          <a href="https://systemdx.net/information/4509e547-6ffe-55a4-8d6c-84d6e80cf4f2">
            <Button variant="primary">詳細へ</Button>
          </a>
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
export default Powerautomatefeature
