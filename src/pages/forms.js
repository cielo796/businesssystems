// src/pages/contact.js

import React from 'react';
import ContactForm from '../components/ContactForm';
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
    </Layout>
  );
};

export default ContactPage;