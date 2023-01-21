import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import header02 from "../images/header03.png";
import LINEPaper from "../images/LINEMarktingWhitePaper.png";
import Button from 'react-bootstrap/Button';

// レイアウトページ未実装
const linewhitepaper = () => (
  <Layout>
    <SEO title="LINEホワイトペーパー資料請求" />
    {/* 全体レイアウト設定 */}
    <Row style={{ maxWidth: `1280px` }}>
        <img src={header02} style={{ width: `100%`, marginBottom: `2rem` }} />
    </Row>
    {/* Row 600px */}
    <Row>
        <Col xs={12} md={6} style={{ maxWidth: `640px` }}>
          <Row>
            <div className="menu-font">売上を増やすLINEマーケティングとは</div>
          </Row>
          <Row>
            <div className="box"> 
              <p>資料概要</p>
            </div>
            </Row>
          <Row className="box2">
          <p>この資料ではLINE公式アカウントの紹介や連携事例に集客支援やマーケティングオートメーションの事例を紹介しています。</p>
          <div className="orcolor"> 
            <p>資料の項目</p>
          </div>
              <ul>
                <li>マーケティングのお悩み</li>
                <li>なぜLINEなのか</li>
                <li>LINE公式アカウントとは</li>
                <li>LINEとは</li>
                <li>LINE拡張ツールとは</li>
                <li>活用例</li>
              </ul>
          </Row>
          <Row>
            <div className="mgcenter"> 
              <a href="https://forms.zohopublic.jp/goubarasaasis/form/DL/formperma/XuNbEh0w53yIstEbV8wvro076pgFca9Sn3rJE7Synt8">
                <Button variant="primary" size="lg">
                  資料請求はこちらから
                </Button>
              </a>
            </div>
          </Row>
        </Col>
        <Col xs={12} md={6} style={{ maxWidth: `640px` }}>
          <Row className="imgcenter">
            <img src={LINEPaper} width="500"/>
          </Row>
        </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
  </Layout>
);

export default linewhitepaper;