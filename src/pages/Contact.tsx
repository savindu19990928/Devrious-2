import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/TextArea';
import { Button } from '../components/ui/Button';
import emailjs from 'emailjs-com';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        'service_qa8tthr',
        'template_cjvlawq',
        formData,
        'fMGXtkaGqd2N9nwyW'
      )
      .then(() => {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setIsSuccess(false);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return <>
    <div className="bg-gray-50 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
        Have a project in mind? Let's discuss how we can help you achieve your
        goals.
      </p>
    </div>

    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-[#10B981]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@devrious.lk</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-[#FBBF24]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+94 70 661 1936</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-rose-50 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-[#FB7185]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Location</h3>
                  <p className="text-gray-600">Remote Team</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/12LXEx3idTT/" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#10B981] hover:text-white transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/devrious.lk/?igsh=cWRkMXM5YWV4NHVw&utm_source=qr#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#FB7185] hover:text-white transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/devrious/" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#FBBF24] hover:text-white transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="p-8">
            {isSuccess ? <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-[#10B981]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600">
                Thank you for contacting us. We'll be in touch shortly.
              </p>
              <Button variant="outline" className="mt-6" onClick={() => setIsSuccess(false)}>
                Send another message
              </Button>
            </div> : <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="name" label="Your Name" placeholder="John Doe" value={formData.name} onChange={handleInputChange} required />
                <Input name="email" label="Email Address" type="email" placeholder="john@example.com" value={formData.email} onChange={handleInputChange} required />
              </div>
              <Input name="subject" label="Subject" placeholder="Project Inquiry" value={formData.subject} onChange={handleInputChange} required />
              <TextArea name="message" label="Message" placeholder="Tell us about your project..." value={formData.message} onChange={handleInputChange} required />
              <Button type="submit" size="lg" fullWidth disabled={isSubmitting} className="flex items-center justify-center">
                {isSubmitting ? <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </> : 'Send Message'}
              </Button>
            </form>}
          </Card>
        </div>
      </div>
    </Section>
  </>;
}