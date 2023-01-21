import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col, } from "react-bootstrap";

const ContactDone = () => (
    <Layout>
     <SEO title=" お問い合わせ送信完了"/>
      < Container fluid=" md" style={{ width:` 80%` }}>
         < Row >
          < Col className=" space"></ Col >
           </ Row >
            < h1 style ={{ fontSize: ` 1. 2 rem ` }}> 登録完了 </h1 >
                <p> メルマガの登録ありがとうございます。</p>
                <p>解除の操作を行った場合でも同ページが表示されますので正常に登録解除されています。</p>
              < Row >
                   < Col className =" space"></ Col > 
                </ Row > 
        </ Container >
    </Layout> 
    ) 
    export default ContactDone