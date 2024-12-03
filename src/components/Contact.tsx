import { Mail, MapPin, Phone } from 'lucide-react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    href: 'mailto:nathimike102@gmail.com',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    href: 'tel:+919063715497',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Location',
    href: 'https://maps.app.goo.gl/CLrcWBnZ2dN6eVtx8',
  },
];

const Contact = () => {
  return (
    <Section id="contact" className="bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mb-6 mx-auto">
            Have a question or want to work together? Drop me a message, and I'll get back to you as soon as possible.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto px-12">
            {contactInfo.map((info, index) => (
              <Card key = {index}>
                <div className="flex flex-col items-center text-center">
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-text-secondary hover:text-primary transition-colors"
                  >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    {info.icon}
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-primary">
                    {info.title}
                  </h3>
                  </a>
                </div>
              </Card>
            ))}
          </div>
          <div className="bg-white/0.5 backdrop-blur-sm rounded-xl p-8">
            <ContactForm/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;