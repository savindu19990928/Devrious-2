export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export const LEGAL_UPDATED = '1 August 2026';

export const PRIVACY_SECTIONS: LegalSection[] = [
{
  id: 'overview',
  title: 'Overview',
  paragraphs: [
  'Devrious builds digital products and business systems for organisations. This policy explains what information we collect when you use our website or work with us, why we collect it, and the choices you have.',
  'We keep data collection deliberately small. If we do not need a piece of information to do the work or to reply to you, we do not ask for it.']

},
{
  id: 'information-we-collect',
  title: 'Information we collect',
  paragraphs: [
  'We collect information in three situations: when you contact us, when you become a client, and when you browse the website.'],

  bullets: [
  'Contact details you submit — name, email address, phone number, company, and the content of your message.',
  'Project information shared with us during an engagement, including documents and data required to design or build your system.',
  'Basic technical data such as browser type, device type, and pages visited, used only to keep the site working well.']

},
{
  id: 'how-we-use-it',
  title: 'How we use information',
  paragraphs: [
  'Information is used to respond to enquiries, deliver and support the work we have agreed, issue invoices, and meet legal obligations.',
  'We do not sell personal information, and we do not share it with third parties for marketing purposes.']

},
{
  id: 'client-data',
  title: 'Client data and confidentiality',
  paragraphs: [
  'Data you share during an engagement remains yours. We access it only to perform the agreed work, and we restrict access to the team members involved in your project.',
  'Where we host or process data on your behalf, we follow the security practices agreed in your contract, including access control, encryption in transit, and separation between client environments.']

},
{
  id: 'cookies',
  title: 'Cookies and analytics',
  paragraphs: [
  'Our website uses only the cookies required for the site to function and, where enabled, privacy-respecting analytics to understand which pages are useful. You can block cookies in your browser without losing access to the content.']

},
{
  id: 'retention',
  title: 'Retention',
  paragraphs: [
  'Enquiry information is kept only while it is still useful to the conversation. Client project data is kept while the engagement and any agreed support arrangement are active, after which it is returned or deleted on request.']

},
{
  id: 'your-rights',
  title: 'Your rights',
  paragraphs: [
  'You can ask us what information we hold about you, request a correction, request deletion, or withdraw consent for us to contact you.'],

  bullets: [
  'Request a copy of your information',
  'Ask for inaccurate information to be corrected',
  'Ask for information to be deleted where we have no legal reason to keep it',
  'Object to a specific use of your information']

},
{
  id: 'third-parties',
  title: 'Third-party services',
  paragraphs: [
  'We use a small number of established providers for email, hosting, and project management. Each provider processes information only on our instruction, and we review them before use.']

},
{
  id: 'changes',
  title: 'Changes to this policy',
  paragraphs: [
  'If this policy changes, the updated version is published on this page with a new revision date. Material changes affecting active clients are communicated directly.']

},
{
  id: 'contact-privacy',
  title: 'Contacting us',
  paragraphs: [
  'Questions about privacy, or a request relating to your information, can be sent to info@devrious.lk or +94 70 661 1936. We respond as quickly as we can.']

}];


export const TERMS_SECTIONS: LegalSection[] = [
{
  id: 'agreement',
  title: 'These terms',
  paragraphs: [
  'These terms apply to the use of the Devrious website and to enquiries made through it. Client engagements are governed by a separate signed agreement, which takes precedence over anything on this page.']

},
{
  id: 'use-of-site',
  title: 'Use of this website',
  paragraphs: [
  'You may read, share, and reference the content on this site. You may not copy the site design, reproduce case study material as your own, or use the content to train commercial models without written permission.']

},
{
  id: 'services',
  title: 'Our services',
  paragraphs: [
  'Descriptions of services on this website are indicative. The exact scope, deliverables, sequence, and price for any engagement are defined in a written proposal and confirmed in a signed agreement before work begins.']

},
{
  id: 'proposals',
  title: 'Proposals and estimates',
  paragraphs: [
  'Estimates are based on the information available at the time. Where discovery reveals materially different requirements, we re-estimate and agree the change with you before continuing.']

},
{
  id: 'payment',
  title: 'Payment terms',
  paragraphs: [
  'Unless agreed otherwise, discovery is invoiced on commencement, build work is invoiced per phase or milestone, and retainers are invoiced in advance. Invoices are payable on the terms stated on the invoice.']

},
{
  id: 'intellectual-property',
  title: 'Intellectual property',
  paragraphs: [
  'On full payment, ownership of the custom code, designs, and documentation produced for your project transfers to you.',
  'Devrious retains ownership of its pre-existing tools, internal libraries, and general know-how, and may reference the engagement in its portfolio unless confidentiality has been agreed.']

},
{
  id: 'confidentiality',
  title: 'Confidentiality',
  paragraphs: [
  'Both parties keep commercial and technical information shared during an engagement confidential, and use it only for the purpose of the work. This obligation continues after the engagement ends.']

},
{
  id: 'client-portal-terms',
  title: 'Client portal',
  paragraphs: [
  'Access to the Devrious client portal is provided to named users at active client organisations. Accounts must not be shared, and access may be revoked when an engagement ends or if credentials are misused.']

},
{
  id: 'warranties',
  title: 'Warranties and support',
  paragraphs: [
  'Delivered work is warranted against defects as set out in your agreement. The warranty covers defects in what we built, not changes made by others or issues in third-party services.']

},
{
  id: 'liability',
  title: 'Liability',
  paragraphs: [
  'Nothing in these terms excludes liability that cannot be excluded by law. Otherwise, our total liability in connection with an engagement is limited to the fees paid for that engagement, and neither party is liable for indirect or consequential loss.']

},
{
  id: 'governing-law',
  title: 'Governing law',
  paragraphs: [
  'These terms are governed by the laws of Sri Lanka. Disputes are handled first through direct discussion between both parties in good faith.']

},
{
  id: 'contact-terms',
  title: 'Questions',
  paragraphs: [
  'For anything relating to these terms, contact info@devrious.lk or +94 70 661 1936.']

}];