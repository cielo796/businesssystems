import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const ContactPage = () => (
  <Layout>
    <SEO title="お問い合わせ" />
            <Row>
            <Col className="space"></Col>
            </Row>
            <Row>
            <Col className="title-obi">
                <h1 className="h1-font">お問い合わせ</h1>
            </Col>
            </Row>
            <Row>
            <Col className="space"></Col>
            </Row>
            <Container className="" style={{width:`80%`}}>
            <Row>
                <Col>
                    {/* flexyFormとの連携設定 */}
                    <Form method="post"
                        action="https://www.flexyform.com/f/51b3b425f5ef88aec45c32c44785f9f557148c55"
                        encType="multipart/from-data" >
                    <Form.Control type="text" as="input" style={{visibility:'hidden'}} name="_empty_filed"/>
                    <Form.Group controlId="formBasicText">
                        <Form.Control type="text" as="input" placeholder="お名前" name="name" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicenterprise">
                        <Form.Control type="text" as="input" placeholder="会社名" name="enterprise" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" as="input" placeholder="メールアドレス" name="email" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Control type="text" as="input" placeholder="電話番号" name="Phone" required />
                    </Form.Group>
                    <Form.Group controlId="formTextarea">
                        <Form.Control as="textarea" placeholder="お問い合わせ内容" rows="3" name="message" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="FormControlFile" name="file" lang="ja" label="ファイル添付" />
                    </Form.Group>
                        <p>記入された個人情報は<Link to={`/privacypolicy`}>プライバシーポリシー</Link>に則り適切に管理します。</p>

                        {/* <Form>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check 
                                            type={type}
                                            id={`default-${type}`}
                                            label={`プライバシーポリシーに同意する`}
                                    />
                                </div>
                        ))}
                        </Form> */}
                        <Button variant="light" type="submit">送信</Button>
                    </Form>
                </Col>
            </Row>
            </Container>
            <Row>
            <Col className="space"></Col>
            </Row>
  </Layout>
);

export default ContactPage;