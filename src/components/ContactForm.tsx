import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending message...');
    
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: new Date(),
      });
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error sending message. Please try again.');
      console.error('Error sending message:', error);
    }
  };

  return (
    <Section id="contact" className="bg-background-secondary">
      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-3 max-w-3xl mx-auto">
            <div >
              <label htmlFor="name" className="flex items-center gap-2 text-xl font-semibold mb-2 text-primary">
                <User className="w-4 h-4" />
                Name
              </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glass-effect card-hover w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/5 backdrop-blur-sm"
                  placeholder='John Doe'
                  required 
                />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-xl font-semibold mb-2 text-primary">
                <Mail className="w-4 h-4"/>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass-effect card-hover w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/5 backdrop-blur-sm"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="flex items-center gap-2 text-xl font-semibold mb-2 text-primary">
                <MessageSquare className="w-4 h-4" />
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="glass-effect card-hover w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/5 backdrop-blur-sm"
                placeholder='Your message here...'
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="card-hover w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </motion.button>
            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center ${
                  status.includes('Error') ? 'text-red-500' : 
                  status.includes('Sending') ? 'text-yellow-500' : 
                  'text-green-500'
                }`}
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactForm;