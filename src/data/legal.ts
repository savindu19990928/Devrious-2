import type { LegalDoc } from '../types/content';

export const legalDocs: Record<'terms' | 'privacy' | 'cookies', LegalDoc> = {
  terms: {
    slug: 'terms',
    title: 'Terms of Service',
    updated: 'October 08, 2026',
    sections: [
    {
      heading: '1. Agreement to Terms',
      paragraphs: [
      'By accessing or using the services provided by Devrious, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.']

    },
    {
      heading: '2. Services',
      paragraphs: [
      'Devrious provides custom software development, ERP solutions, and consulting services. The specific scope of work, timelines, and fees for any project will be governed by a separate Service Agreement or Statement of Work.']

    },
    {
      heading: '3. Intellectual Property',
      paragraphs: [
      'Unless otherwise agreed in writing, all source code, designs, and documentation developed by Devrious remain our intellectual property until full payment for the respective services has been received, at which point ownership or license rights will transfer according to the project contract.']

    },
    {
      heading: '4. Limitation of Liability',
      paragraphs: [
      'In no event shall Devrious be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.']

    },
    {
      heading: '5. Governing Law',
      paragraphs: [
      'These terms shall be governed by and defined following the laws of Sri Lanka. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Sri Lanka.']

    },
    {
      heading: '6. Changes to Terms',
      paragraphs: [
      'We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date of these Terms of Service.']

    }]

  },
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    updated: 'October 8, 2026',
    sections: [
    {
      heading: '1. Introduction',
      paragraphs: [
      'Welcome to Devrious ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.']

    },
    {
      heading: '2. Information We Collect',
      paragraphs: [
      'We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, such as:'],

      list: [
      { text: 'Name and Contact Data (Email, Phone, Address)' },
      { text: 'Company Information' },
      { text: 'Information provided in contact forms or inquiries' }]

    },
    {
      heading: '3. How We Use Your Information',
      paragraphs: ['We use personal information collected via our website for a variety of business purposes, including:'],
      list: [
      { text: 'To provide and manage our services' },
      { text: 'To communicate with you regarding your inquiries' },
      { text: 'To send administrative information or marketing communications (with your consent)' },
      { text: 'To improve our website and service offerings' }]

    },
    {
      heading: '4. Data Security',
      paragraphs: [
      'We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that no electronic transmission over the internet can be guaranteed to be 100% secure.']

    },
    {
      heading: '5. Contact Us',
      paragraphs: ['If you have questions or comments about this policy, you may email us at: info@devrious.lk']
    }]

  },
  cookies: {
    slug: 'cookies',
    title: 'Cookie Policy',
    updated: 'October 08, 2026',
    sections: [
    {
      heading: '1. What are Cookies?',
      paragraphs: [
      'Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work or to work more efficiently, as well as to provide information to the owners of the site.']

    },
    {
      heading: '2. How We Use Cookies',
      paragraphs: ['We use cookies for the following purposes:'],
      list: [
      { label: 'Essential Cookies:', text: 'Necessary for the website to function correctly.' },
      { label: 'Analytics Cookies:', text: 'To understand how visitors interact with our website.' },
      { label: 'Preference Cookies:', text: 'To remember your settings and preferences.' }]

    },
    {
      heading: '3. Types of Cookies We Use',
      paragraphs: [
      'Our website may use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device until you delete them).']

    },
    {
      heading: '4. Managing Cookies',
      paragraphs: [
      'Most web browsers allow you to control cookies through their settings. You can set your browser to block cookies or to notify you when a cookie is being set. However, please note that blocking essential cookies may impact your experience on our website.']

    },
    {
      heading: '5. Contact Us',
      paragraphs: ['If you have any questions about our use of cookies, please contact us at: info@devrious.lk']
    }]

  }
};