import type { LegalDoc } from '../types/content';

export const legalDocs: Record<'terms' | 'privacy' | 'refund' | 'cookies', LegalDoc> = {
  terms: {
    slug: 'terms',
    title: 'Terms and Conditions',
    updated: 'November 2, 2026',
    sections: [
      {
        heading: '3.1 Introduction',
        paragraphs: [
          'Welcome to Devrious.',
          'These Terms and Conditions govern your access to and use of www.devrious.lk and the products and services provided by Devrious.',
          'Our business activities may include website development, custom software development, prebuilt software systems, software licensing, API development, system integration, consulting, maintenance, technical support, and other related digital services.',
          'By accessing our website, purchasing a product, requesting a service, or entering into a project agreement with us, you agree to the applicable terms described in this document.',
          'If you do not agree with these Terms and Conditions, you should not use our website or purchase our products or services.',
          'Certain products and services may be subject to additional terms, quotations, license agreements, service agreements, or statements of work. Where applicable, those additional terms will form part of the agreement between Devrious and the customer.',
          'Nothing in these Terms and Conditions excludes rights that cannot lawfully be excluded under applicable law.',
        ],
      },
      {
        heading: '3.2 Use of the Website',
        paragraphs: ['When using our website, you agree to the following:'],
        list: [
          { text: 'You must have the legal capacity to enter into a binding agreement or have the authorization required to act on behalf of the person or organization making the purchase.' },
          { text: 'You must provide accurate and current information when submitting forms, requesting quotations, registering accounts, or making purchases.' },
          { text: 'You are responsible for maintaining the confidentiality of your account credentials and for activities conducted through your account, subject to applicable law.' },
          { text: 'You must notify us promptly if you suspect unauthorized access to your account.' },
          { text: 'You may not use our website for unlawful, fraudulent, abusive, or unauthorized purposes.' },
          { text: 'You may not attempt to gain unauthorized access to our systems, interfere with website functionality, introduce malicious software, or compromise the security of our services.' },
          { text: 'You may not copy, exploit, or misuse website content or software in violation of applicable intellectual property rights.' },
        ],
        after: [
          'We reserve the right to restrict or suspend access where reasonably necessary to protect our website, users, business operations, or legal interests.',
        ],
      },
      {
        heading: '3.3 Products and Services',
        paragraphs: ['Devrious may offer the following products and services:'],
        list: [
          { text: 'Custom website design and development.' },
          { text: 'Custom software and application development.' },
          { text: 'Prebuilt software systems and digital products.' },
          { text: 'Software licenses and access rights.' },
          { text: 'API development and third-party integrations.' },
          { text: 'UI/UX design and consulting.' },
          { text: 'Software maintenance and technical support.' },
          { text: 'Hosting, deployment, and related technical services.' },
          { text: 'Other digital products and services described on our website.' },
        ],
        after: [
          'The availability, features, specifications, delivery arrangements, pricing, and support conditions of each product or service may differ.',
          'The specific terms applicable to a purchase will be communicated through the relevant product description, quotation, invoice, project proposal, or service agreement.',
        ],
      },
      {
        heading: '3.4 Product Information and Pricing',
        paragraphs: [
          'We make reasonable efforts to ensure that product descriptions, service details, screenshots, demonstrations, and pricing information are accurate and up to date.',
          'However, website content is provided for general informational purposes and may not describe every feature, limitation, integration requirement, or technical dependency of a particular product or service.',
          'Unless expressly agreed otherwise:',
        ],
        list: [
          { text: 'Prices may be changed before an order or project agreement is confirmed.' },
          { text: 'Any applicable taxes, payment gateway charges, hosting fees, or third-party service costs will be communicated where relevant.' },
          { text: 'Promotions and discounts may be subject to separate conditions and limited availability.' },
          { text: 'Features requiring additional customization, licensing, infrastructure, or third-party services may incur additional costs.' },
          { text: 'Any significant changes to an agreed project price or scope will be handled in accordance with the relevant agreement.' },
        ],
        after: [
          'If we discover a material pricing or product information error before accepting an order, we may contact the customer to clarify the error or cancel the affected order and arrange an appropriate refund of payments received for that order, subject to applicable law.',
        ],
      },
      {
        heading: '3.5 Orders and Payments',
        paragraphs: [
          'By placing an order or accepting a quotation, you agree to pay the applicable fees according to the payment terms communicated by Devrious. The available payment method depends on the product or service being purchased.',
        ],
        subsections: [
          {
            heading: '3.5.1 Payments Available Through Online Checkout',
            paragraphs: [
              'Online payments through www.devrious.lk are available only for the following categories, where an online payment option is displayed:',
            ],
            list: [
              {
                label: 'Prebuilt software systems:',
                text: 'Purchases or licenses for ready-made software products, including systems such as point-of-sale (POS) and enterprise resource planning (ERP) systems.',
              },
              {
                label: 'Prebuilt software subscriptions:',
                text: 'Recurring subscription payments associated with eligible prebuilt software systems, according to the billing frequency and price shown at purchase.',
              },
              {
                label: 'Custom software maintenance:',
                text: 'Recurring maintenance fees for custom software previously developed by Devrious, where offered, payable on a monthly or annual basis. These payments cover the agreed maintenance service only and do not include or settle the original custom development fee.',
              },
            ],
            after: [
              'Online checkout is not available for custom website or software development fees, including project deposits, development milestone payments, or the remaining balance for a custom development project. Payment arrangements for custom development work will be specified separately in the relevant quotation, invoice, or project agreement.',
              'The online payment options available for a particular product or service will be shown during the relevant purchase or payment process.',
            ],
          },
          {
            heading: '3.5.2 Payment Processing',
            paragraphs: [
              'Eligible online payments may be processed through third-party payment gateways, banks, or payment service providers.',
              'You agree to provide accurate payment information and authorize the applicable payment provider to process the transaction.',
              'Devrious does not intentionally store full payment card details when those details are handled by an external payment provider. The information collected and retained may depend on the payment method and provider.',
              'Payment transactions may also be subject to the terms and security procedures of the relevant payment provider.',
            ],
          },
          {
            heading: '3.5.3 Late or Failed Payments',
            paragraphs: [
              'If an online payment, subscription renewal, or maintenance payment is overdue or unsuccessful, we may notify the customer and request payment within a reasonable period.',
              'Where permitted by the applicable agreement and law, we may suspend access to a paid prebuilt software system, subscription, maintenance service, hosting, support, or other affected service until the outstanding amount is resolved.',
              'We will take reasonable steps to communicate any suspension where appropriate. For custom development fees, payment due dates and any consequences of late or failed payments will be governed by the relevant quotation, invoice, or project agreement.',
            ],
          },
        ],
      },
      {
        heading: '3.6 Custom Software and Website Development',
        paragraphs: [
          'Custom development services are performed according to the agreed project scope, requirements, deliverables, schedule, and payment terms.',
        ],
        subsections: [
          {
            heading: '3.6.1 Project Scope',
            paragraphs: [
              'The project proposal, quotation, statement of work, or other written agreement should identify the expected deliverables and relevant requirements.',
              'Features, integrations, revisions, or services not included in the agreed scope may require a separate quotation or change request.',
            ],
          },
          {
            heading: '3.6.2 Customer Responsibilities',
            paragraphs: ['Customers are responsible for:'],
            list: [
              { text: 'Providing accurate requirements and necessary project information.' },
              { text: 'Supplying content, branding assets, credentials, approvals, and other materials required for the project.' },
              { text: 'Ensuring that supplied materials may lawfully be used for the intended purpose.' },
              { text: 'Reviewing deliverables and providing feedback or approvals within agreed timeframes.' },
              { text: 'Maintaining suitable access to customer-controlled accounts and infrastructure.' },
              { text: 'Identifying relevant business, security, privacy, or regulatory requirements before implementation.' },
            ],
            after: ['Delays in providing required information, approvals, or access may affect project timelines.'],
          },
          {
            heading: '3.6.3 Changes to Requirements',
            paragraphs: [
              'Changes to project requirements after work has commenced may affect costs, delivery schedules, technical design, and previously agreed deliverables.',
              'Devrious may provide a revised quotation or change request for approval before undertaking additional work.',
            ],
          },
          {
            heading: '3.6.4 Delivery and Acceptance',
            paragraphs: [
              'Project deliverables will be supplied according to the applicable agreement.',
              'Where an acceptance or testing period is specified in the project agreement, the customer should review the deliverables and report material discrepancies within that period.',
              'Defects, requested changes, and new features will be assessed according to the agreed specifications and any applicable warranty or support terms.',
            ],
          },
        ],
      },
      {
        heading: '3.7 Prebuilt Software Systems and Software Licenses',
        paragraphs: [
          'Devrious may offer prebuilt software systems, including ready-made POS and ERP systems, that can be purchased or licensed for use without requiring a fully custom development project. Eligible prebuilt software systems and their subscriptions may be purchased or paid for through online checkout where that option is made available.',
          'Unless explicitly stated otherwise:',
        ],
        list: [
          { text: 'Purchasing a prebuilt software system grants the customer the license or access rights described in the applicable product terms.' },
          { text: 'The purchase does not automatically transfer ownership of the software\'s source code, underlying intellectual property, or proprietary components.' },
          { text: 'Installation, configuration, customization, hosting, training, maintenance, and support may be included, excluded, or charged separately.' },
          { text: 'Software performance may depend on compatible hardware, operating systems, hosting infrastructure, network connectivity, third-party services, and customer configuration.' },
          { text: 'Customers must comply with the applicable software license and may not redistribute, resell, or sublicense the software unless expressly authorized.' },
        ],
        after: [
          'Eligible prebuilt software systems are covered by Devrious\'s 14-day refund policy if they do not function as intended. Refund requests must be submitted within 14 calendar days of purchase and are assessed according to the Refund and Cancellation Policy published on our website.',
          'This provision does not automatically extend the same refund entitlement to custom development projects, ongoing services, or third-party products.',
        ],
      },
      {
        heading: '3.8 Intellectual Property Rights',
        paragraphs: [
          'Unless otherwise agreed in writing, intellectual property rights in Devrious\'s website, pre-existing software, reusable code libraries, frameworks, tools, templates, documentation, branding, and other proprietary materials remain with Devrious or the relevant third-party rights holder.',
        ],
        subsections: [
          {
            heading: '3.8.1 Website Content',
            paragraphs: [
              'Text, graphics, logos, illustrations, software, designs, and other materials published on www.devrious.lk may be protected by copyright, trademark, and other intellectual property laws.',
              'You may not reproduce, distribute, modify, publish, or commercially exploit these materials without appropriate authorization.',
            ],
          },
          {
            heading: '3.8.2 Custom Development Deliverables',
            paragraphs: [
              'Ownership and usage rights for custom development deliverables will be determined by the applicable project agreement.',
              'Unless otherwise agreed in writing:',
            ],
            list: [
              { text: 'The customer retains ownership of materials and intellectual property that the customer supplied to Devrious.' },
              { text: 'Devrious retains ownership of its pre-existing tools, reusable components, general-purpose libraries, development methods, and independently developed materials.' },
              { text: 'The customer receives the usage rights expressly granted in the relevant agreement after satisfying the applicable payment obligations.' },
              { text: 'Third-party software and open-source components remain subject to their respective licenses.' },
            ],
            after: [
              'If a project requires the transfer of source code, exclusive ownership, or assignment of intellectual property rights, those arrangements should be expressly documented in the relevant agreement.',
            ],
          },
          {
            heading: '3.8.3 Customer Materials',
            paragraphs: [
              'Customers grant Devrious permission to use the content, files, branding materials, data, and other assets they provide to the extent reasonably necessary to perform the agreed services.',
              'Customers represent that they have the necessary rights and permissions to provide those materials for the intended use.',
            ],
          },
        ],
      },
      {
        heading: '3.9 Confidentiality',
        paragraphs: [
          'During a project, either party may receive confidential business, technical, financial, or operational information belonging to the other party.',
          'Each party should take reasonable steps to protect the other party\'s confidential information and use it only for the purposes of the relevant business relationship.',
          'Confidentiality obligations may be further defined in a separate nondisclosure agreement or service agreement.',
          'Information that is publicly available, independently developed without use of confidential information, or lawfully obtained from another source may be excluded from confidentiality obligations where permitted by the applicable agreement and law.',
        ],
      },
      {
        heading: '3.10 Data Protection and Privacy',
        paragraphs: [
          'Devrious handles personal information in accordance with its Privacy Policy and applicable data protection laws.',
          'Customers are responsible for ensuring that personal information or other data they provide to Devrious may lawfully be used for the agreed project or service.',
          'Where Devrious develops, hosts, or maintains software that processes personal information, additional responsibilities may be established in the project agreement or a separate data processing agreement.',
          'Customers remain responsible for their own end-user notices, permissions, and legal obligations where they operate the resulting software, except to the extent otherwise agreed or required by law.',
        ],
      },
      {
        heading: '3.11 Third-Party Services and Integrations',
        paragraphs: [
          'Our products and services may integrate with or depend on third-party software, APIs, payment gateways, hosting providers, cloud platforms, domain registrars, or other external services.',
          'Such third-party services may be governed by separate terms, pricing, availability conditions, and privacy policies.',
          'Devrious does not control every aspect of third-party services and cannot guarantee their uninterrupted availability, continued compatibility, or future pricing.',
          'Where a third-party change affects a project or product, we will assess the issue and, where appropriate, discuss available alternatives or additional work with the customer.',
          'Any responsibility for third-party costs or integration support will be determined by the applicable agreement and law.',
        ],
      },
      {
        heading: '3.12 Hosting, Maintenance, and Technical Support',
        paragraphs: [
          'Hosting, maintenance, updates, backups, monitoring, and technical support are provided only where included in the applicable product or service agreement.',
          'Unless otherwise specified:',
        ],
        list: [
          { text: 'Ongoing services may require separate recurring payments.' },
          { text: 'Customers are responsible for maintaining their own copies of important business information where appropriate.' },
          { text: 'Maintenance and support may not cover unauthorized modifications, unsupported environments, or failures caused by external services.' },
          { text: 'Major upgrades, new features, migrations, and substantial changes may be charged separately.' },
          { text: 'Service availability may be affected by scheduled maintenance, security incidents, network problems, infrastructure failures, or third-party outages.' },
        ],
        after: [
          'Any specific uptime commitment, backup schedule, recovery target, or service-level agreement must be expressly agreed upon.',
        ],
      },
      {
        heading: '3.13 Warranties and Defect Correction',
        paragraphs: [
          'Devrious aims to provide software and development services that substantially meet the agreed specifications.',
          'Any express warranty, defect-correction period, maintenance commitment, or support obligation will be set out in the relevant product terms or project agreement.',
          'For prebuilt software systems, the 14-day refund policy applies to eligible cases where the software does not function as intended.',
          'For custom development projects, defect correction and warranty coverage depend on the agreed specifications, acceptance criteria, and applicable contractual terms.',
          'Nothing in these Terms and Conditions excludes any warranty or consumer right that cannot lawfully be excluded.',
        ],
      },
      {
        heading: '3.14 Refunds and Cancellations',
        paragraphs: [
          'Refunds and cancellations are governed by the Refund and Cancellation Policy published on devrious.lk.',
          'The applicable conditions may differ between:',
        ],
        list: [
          { text: 'Custom development projects.' },
          { text: 'Prebuilt software systems.' },
          { text: 'Software licenses.' },
          { text: 'Subscriptions.' },
          { text: 'Hosting and maintenance services.' },
          { text: 'Third-party products and services.' },
        ],
        after: ['Customers should review the Refund and Cancellation Policy before making a purchase.'],
      },
      {
        heading: '3.15 Limitation of Liability',
        paragraphs: [
          'To the extent permitted by applicable law, Devrious will not be liable for indirect, incidental, special, or consequential losses arising from the use of our website, software products, or services, including loss of anticipated profits, business opportunities, or business interruption.',
          'Where legally permissible, Devrious\'s liability for direct losses arising from a particular product or service will be assessed in accordance with the applicable agreement, the circumstances of the claim, and applicable law.',
          'Nothing in this section excludes or limits liability where such exclusion or limitation is prohibited by law, including any liability that cannot legally be excluded.',
          'Customers are responsible for evaluating whether a product or service is suitable for their business needs and for maintaining appropriate backups and security measures for systems under their control.',
        ],
      },
      {
        heading: '3.16 Indemnification',
        paragraphs: [
          'To the extent permitted by applicable law, customers are responsible for losses, claims, or expenses arising directly from their unlawful use of our website or services, infringement of third-party rights through materials they supply, or material breach of these Terms and Conditions.',
          'This provision does not apply to the extent that a claim results from Devrious\'s own breach, negligence, unlawful conduct, or other circumstances for which the customer cannot legally be held responsible.',
        ],
      },
      {
        heading: '3.17 Suspension and Termination',
        paragraphs: ['Devrious may suspend or terminate access to a product or service where reasonably necessary due to:'],
        list: [
          { text: 'A material breach of the applicable agreement.' },
          { text: 'Fraudulent or unlawful activity.' },
          { text: 'A serious security risk.' },
          { text: 'Persistent non-payment of amounts due.' },
          { text: 'A legal requirement or other legitimate operational reason.' },
        ],
        after: [
          'Where appropriate and legally permitted, we will provide notice and a reasonable opportunity to resolve the issue before suspension or termination.',
          'Customers may cancel a service in accordance with the applicable agreement.',
          'Termination does not automatically cancel payment obligations for work already performed, approved milestones, or other amounts properly due under the relevant agreement.',
          'Any refund or other remedy following termination will be assessed according to the applicable agreement, our Refund and Cancellation Policy, and applicable law.',
        ],
      },
      {
        heading: '3.18 Amendments to These Terms',
        paragraphs: [
          'We may update these Terms and Conditions from time to time to reflect changes in our services, products, business operations, or legal obligations.',
          'Updated terms will be published on this page with a revised "Last Updated" date.',
          'Where required by law or an applicable agreement, we will provide additional notice of material changes.',
          'Changes will not override contractual rights that have already accrued or apply retroactively where doing so is prohibited by law.',
        ],
      },
      {
        heading: '3.19 Governing Law and Disputes',
        paragraphs: [
          'These Terms and Conditions are intended to operate in accordance with the applicable laws of Sri Lanka, subject to any mandatory legal protections or rules that apply to a particular transaction.',
          'If a dispute arises, the parties should first attempt to resolve it through good-faith communication.',
          'If the dispute cannot be resolved informally, either party may pursue the remedies available through the appropriate legal channels.',
          'Nothing in this section restricts a customer\'s right to seek relief from a competent court or authority where permitted by law.',
        ],
      },
      {
        heading: '3.20 Severability',
        paragraphs: [
          'If any provision of these Terms and Conditions is found to be unlawful, invalid, or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.',
          'Any invalid provision will be interpreted or adjusted only to the extent necessary to make it enforceable where legally permissible.',
        ],
      },
      {
        heading: '3.21 Contact Us',
        paragraphs: [
          'If you have questions about these Terms and Conditions, our software products, or our services, please contact:',
        ],
        list: [
          { label: 'Company:', text: 'Devrious' },
          { label: 'Website:', text: 'devrious.lk' },
          { label: 'Email:', text: 'info@devrious.lk' },
          { label: 'Phone:', text: '0706611936' },
          { label: 'Business Address:', text: '161/6 Old Kottawa Road, Navinna, Maharagama, 10280, Sri Lanka' },
        ],
      },
    ],
  },
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    updated: 'November 2, 2026',
    sections: [
      {
        heading: '2.1 Privacy Policy',
        paragraphs: [
          'At Devrious, we are committed to protecting the privacy and security of the personal information entrusted to us.',
          'This Privacy Policy explains how we collect, use, store, disclose, and protect personal information when you visit devrious.lk, contact us, purchase our software products, use our services, or engage us for website and software development.',
          'By using our website or services, you acknowledge that your personal information may be processed as described in this policy, subject to applicable data protection laws and any consent requirements that apply.',
        ],
      },
      {
        heading: '2.2 Information We Collect',
        paragraphs: [
          'Depending on how you interact with Devrious, we may collect the following categories of information.',
        ],
        subsections: [
          {
            heading: '2.2.1 Personal Identification and Contact Information',
            paragraphs: ['This may include:'],
            list: [
              { text: 'Full name.' },
              { text: 'Email address.' },
              { text: 'Telephone number.' },
              { text: 'Business or company name.' },
              { text: 'Billing address.' },
              { text: 'Other information you voluntarily provide through contact forms, registration forms, quotations, or service agreements.' },
            ],
          },
          {
            heading: '2.2.2 Account and Transaction Information',
            paragraphs: [
              'When you purchase software or engage our services, we may collect information necessary to manage your account and transaction, including:',
            ],
            list: [
              { text: 'Account and login identifiers.' },
              { text: 'Order and invoice details.' },
              { text: 'Purchase history.' },
              { text: 'Subscription or software license information.' },
              { text: 'Billing and payment status.' },
              { text: 'Records of communications and customer support requests.' },
            ],
            after: [
              'Payment card and other sensitive payment details are generally handled by the relevant payment gateway or payment service provider. The information we receive depends on the payment method and provider used.',
            ],
          },
          {
            heading: '2.2.3 Project and Business Information',
            paragraphs: [
              'When providing web development, software development, consulting, integration, or related services, we may receive information necessary to perform the agreed work, such as:',
            ],
            list: [
              { text: 'Project specifications and business requirements.' },
              { text: 'Website content and design materials.' },
              { text: 'Software configuration details.' },
              { text: 'Technical documentation.' },
              { text: 'Data files or test data supplied for development.' },
              { text: 'Information concerning authorized project contacts and users.' },
            ],
            after: [
              'Customers should not provide unnecessary personal information or sensitive data unless it is required for the agreed service and appropriate safeguards have been arranged.',
            ],
          },
          {
            heading: '2.2.4 Technical and Usage Information',
            paragraphs: [
              'When you visit our website or use our online services, we may automatically collect certain technical information, including:',
            ],
            list: [
              { text: 'IP address.' },
              { text: 'Browser type and version.' },
              { text: 'Device and operating system information.' },
              { text: 'Pages visited and interactions with our website.' },
              { text: 'Referring website or source.' },
              { text: 'Approximate usage times and diagnostic information.' },
              { text: 'Cookies and similar tracking information, where used.' },
            ],
          },
        ],
      },
      {
        heading: '2.3 How We Use Information',
        paragraphs: ['We may use the information we collect for the following purposes:'],
        list: [
          { text: 'To respond to inquiries and provide quotations.' },
          { text: 'To deliver website development, software development, and related services.' },
          { text: 'To process orders, payments, licenses, and subscriptions.' },
          { text: 'To communicate about projects, deadlines, deliverables, and support requests.' },
          { text: 'To provide maintenance, technical assistance, updates, and troubleshooting.' },
          { text: 'To manage customer accounts and verify authorized access.' },
          { text: 'To improve our website, software products, and services.' },
          { text: 'To identify, investigate, and prevent fraud, security incidents, and unauthorized activity.' },
          { text: 'To maintain business, accounting, contractual, and transaction records.' },
          { text: 'To comply with applicable legal and regulatory requirements.' },
          { text: 'To send marketing communications where permitted by law and, where required, with your consent.' },
        ],
        after: [
          'We will not use personal information for purposes that are incompatible with the purposes described in this policy unless we have an appropriate legal basis or obtain any required consent.',
        ],
      },
      {
        heading: '2.4 Information Sharing and Disclosure',
        paragraphs: [
          'Devrious does not sell personal information to third parties.',
          'We may share information in the following circumstances.',
        ],
        subsections: [
          {
            heading: '2.4.1 Service Providers',
            paragraphs: [
              'We may share relevant information with trusted service providers that help us operate our business, including:',
            ],
            list: [
              { text: 'Payment gateways and payment processors.' },
              { text: 'Website hosting and cloud infrastructure providers.' },
              { text: 'Domain and email service providers.' },
              { text: 'Communication and customer support platforms.' },
              { text: 'Analytics and website monitoring providers.' },
              { text: 'Software development and deployment services.' },
              { text: 'Security, backup, and maintenance providers.' },
            ],
            after: [
              'Such providers may process information on our behalf or independently under their own applicable terms and privacy policies.',
              'Where required, we will take reasonable steps to ensure that appropriate contractual and security safeguards are in place.',
            ],
          },
          {
            heading: '2.4.2 Customer-Authorized Disclosures',
            paragraphs: [
              'We may disclose information when a customer authorizes us to do so, such as when collaborating with a designated project representative, integrating with a third-party service, or deploying software to a customer-controlled environment.',
            ],
          },
          {
            heading: '2.4.3 Legal Requirements',
            paragraphs: [
              'We may disclose information where reasonably necessary to comply with applicable laws, regulations, court orders, or valid legal requests, or to establish, exercise, or defend legal claims.',
            ],
          },
          {
            heading: '2.4.4 Business Transfers',
            paragraphs: [
              'If Devrious undergoes a merger, restructuring, acquisition, or sale of business assets, relevant information may be transferred as part of that transaction, subject to applicable legal requirements and appropriate safeguards.',
            ],
          },
        ],
      },
      {
        heading: '2.5 Data Security',
        paragraphs: [
          'We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, alteration, disclosure, or destruction.',
          'Depending on the nature of the information and service, these measures may include access controls, authentication, encryption, secure development practices, backups, monitoring, and restricted access to business systems.',
          'However, no method of internet transmission, electronic storage, or software security can be guaranteed to be completely secure.',
          'Customers are responsible for maintaining the confidentiality of their account credentials and notifying us promptly if they suspect unauthorized access to an account or service managed by Devrious.',
        ],
      },
      {
        heading: '2.6 Software Development Projects and Customer Data',
        paragraphs: [
          'When Devrious develops or maintains software for a customer, the parties\' responsibilities regarding personal information and business data may depend on the project agreement and the role each party performs.',
          'Unless otherwise agreed:',
        ],
        list: [
          { text: 'Customers are responsible for ensuring that they have the necessary rights and permissions to provide data for development, testing, hosting, or maintenance.' },
          { text: 'Customers should avoid supplying real personal or sensitive information for testing when synthetic or anonymized data is sufficient.' },
          { text: 'Devrious will use project data only as reasonably necessary to perform the agreed services, meet contractual obligations, maintain security, or comply with applicable law.' },
          { text: 'Access to customer systems and data should be limited to authorized personnel who need it for their assigned responsibilities.' },
          { text: 'Customers remain responsible for their own data retention, user permissions, and privacy notices where they operate the resulting software, unless the parties agree otherwise.' },
        ],
        after: [
          'Specific requirements for data processing, confidentiality, security, backups, hosting, retention, and deletion may be established in a separate agreement.',
        ],
      },
      {
        heading: '2.7 Cookies and Tracking Technologies',
        paragraphs: ['Our website may use cookies and similar technologies to:'],
        list: [
          { text: 'Support essential website functionality.' },
          { text: 'Remember user preferences.' },
          { text: 'Understand website traffic and performance.' },
          { text: 'Improve the browsing experience.' },
          { text: 'Measure marketing effectiveness, where applicable.' },
        ],
        after: [
          'You may be able to control cookies through your browser settings or any cookie preference tools made available on our website.',
          'Disabling certain cookies may affect some website functionality.',
          'Where required by applicable law, we will obtain consent before using non-essential cookies or similar tracking technologies.',
        ],
      },
      {
        heading: '2.8 Data Retention',
        paragraphs: [
          'We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including providing services, maintaining accounts, fulfilling contractual obligations, resolving disputes, protecting our business, and meeting legal or accounting requirements.',
          'The retention period depends on the nature of the information and the circumstances in which it was collected.',
          'When information is no longer required, we will take reasonable steps to delete it, anonymize it, or securely dispose of it, subject to applicable legal obligations and legitimate retention requirements.',
          'For customer projects, the handling and deletion of project files, backups, credentials, and production data may also be governed by the relevant service agreement.',
        ],
      },
      {
        heading: '2.9 International Data Transfers',
        paragraphs: [
          'Some of our service providers may store or process information outside Sri Lanka.',
          'Where personal information is transferred internationally, we will take steps to comply with applicable legal requirements and use appropriate safeguards where required.',
          'The availability and location of data storage may depend on the third-party services used for hosting, communication, payment processing, or software delivery.',
        ],
      },
      {
        heading: '2.10 Your Privacy Rights',
        paragraphs: [
          'Depending on the applicable law and the circumstances, you may have rights concerning your personal information, including the right to:',
        ],
        list: [
          { text: 'Request access to personal information we hold about you.' },
          { text: 'Request correction of inaccurate or incomplete information.' },
          { text: 'Request deletion of personal information where legally available.' },
          { text: 'Object to or request restrictions on certain processing activities where applicable.' },
          { text: 'Withdraw consent where processing is based on consent.' },
          { text: 'Request information about how your personal information is handled.' },
          { text: 'Submit a complaint to the appropriate authority where permitted by law.' },
        ],
        after: [
          'To exercise an applicable right, please contact us using the details provided below. We may need to verify your identity before responding.',
          'Some information may need to be retained to meet legal obligations, resolve disputes, or complete transactions.',
        ],
      },
      {
        heading: '2.11 Third-Party Websites and Services',
        paragraphs: [
          'Our website or software products may contain links to third-party websites, applications, APIs, payment providers, or other external services.',
          'Those services are governed by their own terms and privacy policies. Devrious does not control all third-party data collection practices and is not responsible for the privacy policies of external services.',
          'We encourage customers to review the applicable privacy notices before providing information to third parties.',
        ],
      },
      {
        heading: '2.12 Children\'s Privacy',
        paragraphs: [
          'Our website and professional services are not specifically directed at children.',
          'We do not knowingly collect personal information from children in circumstances where doing so is prohibited by applicable law. If we become aware that we have collected such information without an appropriate legal basis or required authorization, we will take reasonable steps to address the situation.',
        ],
      },
      {
        heading: '2.13 Changes to This Privacy Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices, or legal obligations.',
          'Any updates will be published on this page with a revised "Last Updated" date.',
          'We encourage you to review this policy periodically to remain informed about how we handle personal information.',
        ],
      },
      {
        heading: '2.14 Contact Us',
        paragraphs: [
          'If you have questions, concerns, or requests relating to this Privacy Policy or the handling of your personal information, please contact:',
        ],
        list: [
          { label: 'Company:', text: 'Devrious' },
          { label: 'Website:', text: 'devrious.lk' },
          { label: 'Email:', text: 'info@devrious.lk' },
          { label: 'Phone:', text: '0706611936' },
          { label: 'Business Address:', text: '161/6 Old Kottawa Road, Navinna, Maharagama, 10280, Sri Lanka' },
        ],
      },
    ],
  },
  refund: {
    slug: 'refund',
    title: 'Refund and Cancellation Policy',
    updated: 'November 2, 2026',
    sections: [
      {
        heading: '1.1 Refund and Cancellation Policy',
        paragraphs: [
          'Thank you for choosing Devrious. We value your trust and strive to provide reliable software solutions, professional web development services, and quality prebuilt software systems.',
          'This Refund and Cancellation Policy explains the conditions under which refunds, cancellations, and other remedies may be available for products and services purchased from Devrious through www.devrious.lk or other authorized sales channels.',
          'Our refund conditions depend on the type of product or service purchased, including custom development projects, prebuilt software systems, software licenses, maintenance services, and other digital services.',
          'Nothing in this policy limits any rights that customers may have under applicable law.',
        ],
      },
      {
        heading: '1.2 Custom Software and Web Development Services',
        paragraphs: [
          'Custom software development, website development, UI/UX design, API development, system integration, and other project-based services involve work performed specifically for the customer.',
          'Due to the nature of these services, payments for completed work, approved project milestones, and work already delivered are generally non-refundable, except where a refund is required by applicable law or agreed upon in writing by Devrious.',
          'The following conditions apply:',
        ],
        list: [
          {
            label: 'Project deposits:',
            text: 'Deposits or advance payments may be used to reserve development time, initiate project planning, and allocate resources. Refund eligibility depends on the project agreement, work already performed, and applicable law.',
          },
          {
            label: 'Milestone payments:',
            text: 'Payments for completed and approved milestones are generally non-refundable.',
          },
          {
            label: 'Work in progress:',
            text: 'If a project is cancelled before completion, Devrious may deduct the reasonable value of work completed and any agreed, non-recoverable expenses incurred up to the cancellation date, subject to the project agreement and applicable law.',
          },
          {
            label: 'Undelivered work:',
            text: 'Where payment has been made for work that has not been performed, the amount attributable to that undelivered work may be refundable, depending on the circumstances and the applicable agreement.',
          },
          {
            label: 'Scope changes:',
            text: 'Additional features, revisions, integrations, or requirements outside the agreed project scope may require additional payment and are not automatically covered by the original project fee.',
          },
        ],
        after: [
          'Customers should review their project proposal, quotation, service agreement, and payment terms before confirming a development project.',
        ],
      },
      {
        heading: '1.3 Prebuilt Software Systems: 14-Day Refund Policy',
        paragraphs: [
          'Devrious offers prebuilt software systems and digital software products that may be purchased or licensed for use by customers.',
          'We provide a 14-day refund period for eligible prebuilt software systems that do not function as intended, subject to the conditions described in this section.',
        ],
        subsections: [
          {
            heading: '1.3.1 Refund Eligibility',
            paragraphs: ['To qualify for a refund under this policy:'],
            list: [
              { text: 'The refund request must be submitted within 14 calendar days of the original purchase date.' },
              { text: 'The customer must provide a reasonable description of the problem, including the affected features and the circumstances in which the issue occurs.' },
              { text: 'The reported problem must relate to a material failure of the software to perform according to its advertised features, documented specifications, or agreed functionality.' },
              { text: 'The customer must reasonably cooperate with Devrious in investigating the issue and, where appropriate, testing a fix or workaround.' },
              { text: 'The problem must not be caused primarily by unauthorized modifications, unsupported environments, incompatible third-party services, incorrect configuration, misuse, or failure to meet the published system requirements.' },
            ],
          },
          {
            heading: '1.3.2 Refund Assessment',
            paragraphs: [
              'Once we receive a refund request, our team will review the reported issue and may request additional information or reasonable access to a test environment to reproduce the problem.',
              'Where appropriate, we may first attempt to resolve the issue by providing technical support, configuration assistance, a correction, or a software update.',
              'If the software has a material defect that prevents it from functioning as advertised and we cannot reasonably resolve the issue, the customer may qualify for a refund.',
              'We will communicate the outcome of the assessment to the customer.',
            ],
          },
          {
            heading: '1.3.3 What Is Not Covered',
            paragraphs: ['The 14-day refund policy does not automatically apply to:'],
            list: [
              { text: 'Custom software or website development projects.' },
              { text: 'Bespoke modifications, integrations, or additional development services.' },
              { text: 'Third-party products, subscriptions, hosting, domain registrations, or other external services purchased separately, subject to the applicable provider\'s terms and legal requirements.' },
              { text: 'Problems arising from unsupported environments, unauthorized modifications, misuse, or customer-controlled infrastructure.' },
              { text: 'Requests based solely on a change of mind, a change in business requirements, or a preference for different features, where the software otherwise functions as advertised.' },
            ],
            after: [
              'These exclusions do not override any refund rights that may apply under the law or any separate written agreement.',
            ],
          },
          {
            heading: '1.3.4 After the Refund Period',
            paragraphs: [
              'After the 14-day period, refunds for prebuilt software systems are generally not available unless required by applicable law or agreed upon by Devrious.',
              'However, customers may still contact our support team to report defects or request assistance under any applicable support, warranty, maintenance, or service agreement.',
            ],
          },
        ],
      },
      {
        heading: '1.4 Software Licenses and Digital Products',
        paragraphs: [
          'Some Devrious software products may be supplied under a license rather than as a transfer of ownership.',
          'The applicable license terms determine how the software may be used, whether modifications are permitted, and whether access is limited by duration, users, devices, or other conditions.',
          'Purchasing a software license does not automatically transfer ownership of the underlying source code, intellectual property, or other proprietary materials.',
          'Refunds for software licenses and downloadable digital products are assessed according to the applicable product terms and the 14-day policy described above, where eligible.',
        ],
      },
      {
        heading: '1.5 Subscription, Hosting, Maintenance, and Support Services',
        paragraphs: [
          'Devrious may offer online payments for subscriptions to prebuilt software systems and for recurring maintenance services for custom-developed software. Custom software development fees themselves are not payable through the website\'s online checkout; their payment arrangements are set out separately in the relevant quotation, invoice, or project agreement.',
          'For subscriptions and recurring services that are eligible for online payment, the following conditions generally apply:',
        ],
        list: [
          { text: 'Prebuilt software subscriptions may be billed according to the monthly, annual, or other subscription period displayed at purchase.' },
          { text: 'Maintenance services for custom-developed software may be paid online on a monthly or annual basis, where the relevant online payment option is provided. These payments cover the agreed maintenance service and do not constitute payment for the original software development fee.' },
          { text: 'Customers may request cancellation in accordance with the applicable subscription or maintenance agreement.' },
          { text: 'Cancellation generally prevents future renewals or charges but does not automatically entitle the customer to a refund for the current billing period.' },
          { text: 'Fees for service periods that have already started or services already provided are generally non-refundable, except where required by law or agreed upon in writing.' },
          { text: 'Any refund for prepaid but unused service periods will be assessed according to the applicable agreement and law.' },
          { text: 'If Devrious discontinues a paid service without providing an agreed alternative, we will assess any appropriate refund or other remedy under the applicable agreement and law.' },
        ],
        after: [
          'The applicable price, billing frequency, service coverage, renewal, and cancellation terms will be communicated before purchase.',
        ],
      },
      {
        heading: '1.6 Exchanges, Replacements, and Corrections',
        paragraphs: [
          'For prebuilt software systems, an exchange may involve providing an alternative eligible product, correcting a defective installation, supplying a replacement software package, or providing an appropriate technical solution.',
          'If you experience a material defect, please contact our support team within the applicable refund period.',
          'We will assess the issue and determine an appropriate solution based on the product, the nature of the problem, the applicable agreement, and any legal obligations.',
        ],
      },
      {
        heading: '1.7 Non-Refundable Items and Services',
        paragraphs: [
          'Unless otherwise required by applicable law or agreed upon in writing, the following are generally non-refundable:',
        ],
        list: [
          { text: 'Completed custom software development projects and approved milestones.' },
          { text: 'Completed website development and design work.' },
          { text: 'Bespoke software modifications, integrations, and consulting services already performed.' },
          { text: 'Third-party services, licenses, domain registrations, hosting, or other external costs that cannot be recovered.' },
          { text: 'Maintenance, support, or other services already delivered.' },
          { text: 'Work performed under an approved change request or additional scope agreement.' },
        ],
        after: [
          'Prebuilt software systems are not automatically excluded from refunds. Eligible prebuilt systems remain subject to the 14-day refund policy described in Section 1.3.',
        ],
      },
      {
        heading: '1.8 Defective or Incorrect Deliverables',
        paragraphs: [
          'If a software product or development deliverable contains a material defect, differs substantially from the agreed specifications, or was supplied incorrectly, please notify Devrious as soon as reasonably possible.',
          'Depending on the circumstances, the applicable agreement, and the nature of the issue, we may:',
        ],
        list: [
          { text: 'Correct the defect.' },
          { text: 'Provide a replacement or corrected deliverable.' },
          { text: 'Supply an appropriate workaround.' },
          { text: 'Agree on a revised delivery arrangement.' },
          { text: 'Issue a partial or full refund where appropriate or required by law.' },
        ],
        after: [
          'For custom development projects, the agreed project specifications, acceptance criteria, warranty terms, and defect-correction provisions will be considered when assessing the request.',
        ],
      },
      {
        heading: '1.9 Refund Request Procedure',
        paragraphs: [
          'To request a refund, please contact our customer support team using the contact information published on devrious.lk.',
          'Please include:',
        ],
        list: [
          { text: 'Your name and contact information.' },
          { text: 'Your order number, invoice number, or project reference.' },
          { text: 'The name of the software product or service purchased.' },
          { text: 'The purchase date.' },
          { text: 'A description of the reason for the refund request.' },
          { text: 'Relevant screenshots, error messages, or other supporting information, where applicable.' },
        ],
        after: [
          'For prebuilt software systems, requests under the 14-day refund policy must be submitted within 14 calendar days of the original purchase date.',
          'We may request additional information that is reasonably necessary to assess the request.',
        ],
      },
      {
        heading: '1.10 Refund Processing Time',
        paragraphs: [
          'We aim to review refund requests and communicate our decision within a reasonable period.',
          'Once a refund is approved, we will initiate the refund using the original payment method where possible, or another mutually agreed method where appropriate.',
          'The time required for the funds to appear in the customer\'s account may depend on the payment gateway, bank, card issuer, or other payment provider.',
          'Any processing time communicated by Devrious is an estimate unless a specific period is required by applicable law.',
        ],
      },
      {
        heading: '1.11 Refund Amounts and Transaction Fees',
        paragraphs: [
          'Where a refund is approved, the refundable amount will be determined according to the applicable agreement, the nature of the issue, and applicable law.',
          'Any deductions, including non-recoverable third-party costs or transaction fees, will be made only where permitted by applicable law and the relevant purchase terms.',
          'No deduction will be made where it is prohibited by law or inconsistent with an applicable contractual obligation.',
        ],
      },
      {
        heading: '1.12 Contact Us',
        paragraphs: [
          'If you have questions about this Refund and Cancellation Policy or would like to submit a refund request, please contact:',
        ],
        list: [
          { label: 'Company:', text: 'Devrious' },
          { label: 'Website:', text: 'devrious.lk' },
          { label: 'Email:', text: 'info@devrious.lk' },
          { label: 'Phone:', text: '0706611936' },
          { label: 'Address:', text: '161/6 Old Kottawa Road, Navinna, Maharagama, 10280, Sri Lanka' },
        ],
        after: ['We are committed to handling refund requests fairly and professionally.'],
      },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Cookie Policy',
    updated: 'November 2, 2026',
    sections: [
      {
        heading: '1. What are Cookies?',
        paragraphs: [
          'Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work or to work more efficiently, as well as to provide information to the owners of the site.',
        ],
      },
      {
        heading: '2. How We Use Cookies',
        paragraphs: ['We use cookies for the following purposes:'],
        list: [
          { label: 'Essential Cookies:', text: 'Necessary for the website to function correctly.' },
          { label: 'Analytics Cookies:', text: 'To understand how visitors interact with our website.' },
          { label: 'Preference Cookies:', text: 'To remember your settings and preferences.' },
        ],
      },
      {
        heading: '3. Types of Cookies We Use',
        paragraphs: [
          'Our website may use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device until you delete them).',
        ],
      },
      {
        heading: '4. Managing Cookies',
        paragraphs: [
          'Most web browsers allow you to control cookies through their settings. You can set your browser to block cookies or to notify you when a cookie is being set. However, please note that blocking essential cookies may impact your experience on our website.',
        ],
      },
      {
        heading: '5. Contact Us',
        paragraphs: [
          'If you have questions or concerns about our use of cookies, please contact us at: info@devrious.lk',
        ],
      },
    ],
  },
};