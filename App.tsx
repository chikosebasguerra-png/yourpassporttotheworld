import React, { useRef, useState } from 'react';
import { InteractiveLogo } from './components/InteractiveLogo';
import { AIConsultant } from './components/AIConsultant';
import { Navigation } from './components/Navigation';
import { Plane, Globe, ShieldCheck, Clock, CheckCircle, Users, FileText, Briefcase, GraduationCap, Home, Building2, Target, Award, Heart, Mail, PhoneCall, MapPin, Quote, Linkedin, Facebook, Twitter } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

function App() {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Testimonial Filter State
  const [activeFilter, setActiveFilter] = useState('All');

  // Calculate form progress
  const totalFields = 4;
  const filledFields = Object.values(formData).filter(val => val.trim() !== '').length;
  const progressPercentage = (filledFields / totalFields) * 100;

  const stats = [
    { label: "Visas Approved", value: "98%" },
    { label: "Countries Served", value: "140+" },
    { label: "Years Experience", value: "15+" },
  ];

  const services = [
    { 
      title: "Strategic Consultation", 
      icon: <Users className="w-8 h-8"/>, 
      desc: "Professional assessment and legal advice for complex immigration scenarios." 
    },
    { 
      title: "Business & Startup Visas", 
      icon: <Building2 className="w-8 h-8"/>, 
      desc: "Specialized pathways for Investor Visas (EB-5, Golden Visa), Startup Visas, and entrepreneurs seeking global market expansion and corporate structuring." 
    },
    { 
      title: "Migration Management", 
      icon: <FileText className="w-8 h-8"/>, 
      desc: "End-to-end management of documentation, apostilles, translations, and filing." 
    },
    { 
      title: "Work Visas", 
      icon: <Briefcase className="w-8 h-8"/>, 
      desc: "Permits for skilled workers, intra-company transfers, and digital nomad visas." 
    },
    { 
      title: "Study & Exchange", 
      icon: <GraduationCap className="w-8 h-8"/>, 
      desc: "University admissions guidance and student visa processing for global institutions." 
    },
    { 
      title: "Residence & Citizenship", 
      icon: <Home className="w-8 h-8"/>, 
      desc: "Permanent residence applications, Golden Visas, and citizenship by investment." 
    },
    { 
      title: "Tourist & Visitor", 
      icon: <Plane className="w-8 h-8"/>, 
      desc: "Expedited visitor visas for leisure, business trips, and family reunification." 
    },
  ];

  const testimonials = [
    {
      name: "Alexander V.",
      role: "Tech Entrepreneur",
      visa: "O-1 Visa (USA)",
      category: "Business",
      quote: "Elite Visa Consultants navigated the complex O-1 requirements effortlessly. I was approved in record time and my startup is now thriving in Silicon Valley."
    },
    {
      name: "Sarah Jenkins",
      role: "Digital Nomad",
      visa: "Nomad Residence (Spain)",
      category: "Residence",
      quote: "The team handled everything from my background checks to the sworn translations. Moving to Spain was stress-free thanks to their meticulous planning."
    },
    {
      name: "The Chen Family",
      role: "Investors",
      visa: "Golden Visa (Portugal)",
      category: "Investment",
      quote: "We felt supported every step of the way. Their legal team is top-tier, ensuring our investment secured our family's future in Europe."
    },
    {
      name: "Elena R.",
      role: "Graduate Student",
      visa: "Student Visa (UK)",
      category: "Study",
      quote: "My dream of studying at Oxford became a reality. They managed the tight deadlines perfectly and guided me through the interview process."
    },
    {
      name: "James L.",
      role: "Business Traveler",
      visa: "B-1/B-2 (USA)",
      category: "Tourist",
      quote: "Fastest visa processing I've ever experienced. I made it to my conference with time to spare thanks to their expedited service."
    }
  ];

  const categories = ['All', 'Business', 'Residence', 'Investment', 'Study', 'Tourist'];
  
  const filteredTestimonials = activeFilter === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-elite-cream text-elite-navy font-sans selection:bg-elite-gold selection:text-white">
      <Navigation />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 mb-6 bg-elite-gold/10 border border-elite-gold/30 rounded-full">
                <span className="text-elite-gold text-xs font-bold tracking-widest uppercase">Global Mobility Experts</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6">
                Your Passport to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-elite-gold to-yellow-600">World</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
                We navigate the complexities of global immigration so you don't have to. 
                Experience seamless visa processing with Elite Consultants.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-elite-navy text-white px-8 py-4 rounded-sm font-bold tracking-wide hover:bg-elite-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  START ASSESSMENT
                </button>
                <button className="px-8 py-4 border border-elite-navy text-elite-navy rounded-sm font-bold tracking-wide hover:bg-gray-50 transition-colors">
                  EXPLORE VISAS
                </button>
              </div>
            </motion.div>

            {/* HERO INTERACTIVE LOGO DISPLAY */}
            <motion.div 
              className="flex justify-center lg:justify-end relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Decorative Circle Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full shadow-2xl opacity-50 blur-3xl -z-10" />
              
              <div className="p-10 bg-white rounded-full shadow-2xl border border-gray-100 relative">
                 <InteractiveLogo size={300} />
                 
                 {/* Floating Badges */}
                 <motion.div 
                    className="absolute top-0 right-0 bg-elite-navy text-white p-4 rounded-xl shadow-lg flex items-center gap-3"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 >
                    <ShieldCheck className="text-elite-gold w-6 h-6" />
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Success Rate</p>
                        <p className="font-bold text-lg">99.8%</p>
                    </div>
                 </motion.div>

                 <motion.div 
                    className="absolute bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg border-l-4 border-elite-gold flex items-center gap-3"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 >
                    <Clock className="text-elite-navy w-6 h-6" />
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Processing</p>
                        <p className="font-bold text-lg text-elite-navy">Expedited</p>
                    </div>
                 </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-elite-navy py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center pt-8 md:pt-0">
                <p className="text-5xl font-serif font-bold text-elite-gold mb-2">{stat.value}</p>
                <p className="text-sm tracking-widest uppercase text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Expertise</h2>
            <div className="w-24 h-1 bg-elite-gold mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in facilitating complex immigration procedures for individuals and corporations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                className="group p-8 bg-gray-50 hover:bg-white border border-transparent hover:border-elite-gold/20 rounded-lg transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-16 h-16 bg-elite-navy text-elite-gold rounded-full flex items-center justify-center mb-6 group-hover:bg-elite-gold group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
                <div className="mt-6">
                  <span className="text-elite-gold text-sm font-bold uppercase tracking-wide group-hover:underline cursor-pointer">Learn More</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-elite-navy relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
             <Quote className="absolute -top-10 -left-10 w-96 h-96 text-white transform -rotate-12" />
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
               <h2 className="text-4xl font-serif font-bold mb-4 text-white">Client Success Stories</h2>
               <div className="w-24 h-1 bg-elite-gold mx-auto mb-6" />
               <p className="text-gray-300 max-w-2xl mx-auto">
                 Real stories from individuals and businesses who trusted us with their global mobility.
               </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${
                    activeFilter === cat 
                      ? 'bg-elite-gold text-white border-elite-gold shadow-lg transform scale-105' 
                      : 'bg-transparent text-gray-300 border-white/20 hover:bg-white/10 hover:border-white/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <motion.div 
               layout
               className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
               <AnimatePresence mode="popLayout">
                 {filteredTestimonials.map((testimonial) => (
                    <motion.div
                      layout
                      key={testimonial.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors duration-300"
                    >
                       <div className="mb-6 text-elite-gold flex justify-between items-start">
                          <Quote size={32} className="transform rotate-180" />
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-elite-gold/30 rounded-full text-elite-gold">
                            {testimonial.category}
                          </span>
                       </div>
                       <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                       <div className="border-t border-white/10 pt-6">
                          <h4 className="font-serif font-bold text-xl text-white">{testimonial.name}</h4>
                          <div className="flex flex-col mt-1">
                             <span className="text-xs font-bold text-elite-gold uppercase tracking-wider">{testimonial.role}</span>
                             <span className="text-xs text-gray-400 mt-1">{testimonial.visa}</span>
                          </div>
                       </div>
                    </motion.div>
                 ))}
               </AnimatePresence>
            </motion.div>
         </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-24 bg-elite-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6 text-elite-navy">
                Crafting Your Global Narrative
              </h2>
              <div className="w-20 h-1 bg-elite-gold mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Elite Visa Consultants, our mission extends beyond paperwork. We act as the architects of your global mobility, ensuring that every border crossing is a step towards your personal and professional growth.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our core values of <span className="font-bold text-elite-navy">Integrity</span>, <span className="font-bold text-elite-navy">Precision</span>, and <span className="font-bold text-elite-navy">Empathy</span> drive us to handle every application as if it were our own.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-elite-gold flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-serif font-bold text-elite-navy">Precision</h4>
                        <p className="text-sm text-gray-500">Zero-error policy in documentation.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-elite-gold flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-serif font-bold text-elite-navy">Commitment</h4>
                        <p className="text-sm text-gray-500">Dedicated support until approval.</p>
                    </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
               <div className="bg-white p-6 rounded-xl shadow-lg transform translate-y-8">
                  <Award className="w-10 h-10 text-elite-navy mb-4" />
                  <div className="text-3xl font-serif font-bold text-elite-gold">98%</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Approval Rate</div>
               </div>
               <div className="bg-elite-navy p-6 rounded-xl shadow-lg">
                  <Globe className="w-10 h-10 text-elite-gold mb-4" />
                  <div className="text-3xl font-serif font-bold text-white">140+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mt-1">Countries</div>
               </div>
               <div className="bg-elite-gold p-6 rounded-xl shadow-lg col-span-2 text-white flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-serif font-bold">15+</div>
                    <div className="text-xs uppercase tracking-widest text-white/80 font-bold mt-1">Years of Excellence</div>
                  </div>
                  <ShieldCheck className="w-12 h-12 text-white/80" />
               </div>
            </motion.div>
          </div>

          <div className="mt-20">
             <div className="text-center mb-12">
               <h3 className="text-3xl font-serif font-bold text-elite-navy mb-4">Meet Our Senior Agents</h3>
               <p className="text-gray-600">Experts with decades of experience in international law and diplomacy.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Eleanor Sterling", role: "Head of Corporate", desc: "Specializes in complex business migration and investor visas." },
                  { name: "Marcus Thorne", role: "Senior Legal Counsel", desc: "Former diplomatic attaché with deep knowledge of EU protocols." },
                  { name: "Priya Desai", role: "Student & Family Specialist", desc: "Dedicated to reuniting families and guiding academic futures." },
                ].map((agent, i) => (
                   <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                   >
                      <div className="w-20 h-20 bg-elite-cream rounded-full mx-auto mb-6 flex items-center justify-center text-elite-navy">
                         <Users size={32} />
                      </div>
                      <h4 className="font-serif font-bold text-xl text-elite-navy mb-1">{agent.name}</h4>
                      <p className="text-xs font-bold text-elite-gold uppercase tracking-widest mb-4">{agent.role}</p>
                      <p className="text-gray-600 text-sm">{agent.desc}</p>
                   </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

       {/* CONTACT SECTION */}
       <section id="contact" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info / Left Side */}
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6 text-elite-navy">Get in Touch</h2>
                <div className="w-20 h-1 bg-elite-gold mb-8"></div>
                <p className="text-gray-600 text-lg mb-10">
                  Ready to start your global journey? Contact us for a personalized consultation or use our AI assistant for immediate answers.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-elite-cream rounded-full flex items-center justify-center text-elite-gold shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-elite-navy text-lg">Headquarters</h4>
                      <p className="text-gray-600">100 Bishopsgate, London<br/>EC2N 4AG, United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-elite-cream rounded-full flex items-center justify-center text-elite-gold shrink-0">
                      <PhoneCall size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-elite-navy text-lg">Phone</h4>
                      <p className="text-gray-600">+44 (0) 20 7123 4567<br/>Mon-Fri, 9am - 6pm GMT</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                     <div className="w-12 h-12 bg-elite-cream rounded-full flex items-center justify-center text-elite-gold shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-elite-navy text-lg">Email</h4>
                      <p className="text-gray-600">consultations@elitevisa.com<br/>partners@elitevisa.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form / Right Side */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-serif font-bold mb-6 text-elite-navy">Send a Message</h3>
                
                {/* Form Progress Bar - Only show when not submitted */}
                {formStatus !== 'success' && (
                  <div className="mb-8">
                    <div className="flex justify-between items-end mb-2">
                       <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Form Completion</span>
                       <span className="text-xs font-bold text-elite-gold">{filledFields}/4 Fields</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                       <div 
                         className="bg-elite-gold h-1.5 rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(197,160,89,0.5)]" 
                         style={{ width: `${progressPercentage}%` }} 
                       />
                    </div>
                  </div>
                )}

                {formStatus === 'success' ? (
                   <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                     <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                     <h4 className="font-bold text-xl mb-2">Message Sent!</h4>
                     <p>Thank you for contacting Elite Visa Consultants. A senior agent will review your inquiry and respond within 24 hours.</p>
                     <button onClick={() => setFormStatus('idle')} className="mt-4 text-sm font-bold underline hover:text-green-900">Send another message</button>
                   </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-elite-gold focus:ring-1 focus:ring-elite-gold transition-colors`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-elite-gold focus:ring-1 focus:ring-elite-gold transition-colors`}
                          placeholder="john@example.com"
                        />
                        {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${formErrors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-elite-gold focus:ring-1 focus:ring-elite-gold transition-colors`}
                          placeholder="+1 (555) 000-0000"
                        />
                        {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="message">How can we help?</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-elite-gold focus:ring-1 focus:ring-elite-gold transition-colors resize-none`}
                        placeholder="I am interested in a Golden Visa for..."
                      ></textarea>
                      {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-elite-navy text-white font-bold py-4 rounded-lg hover:bg-elite-gold transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                    >
                      {formStatus === 'submitting' ? (
                        <span className="flex items-center gap-2">Processing...</span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
       </section>

      {/* FOOTER */}
      <footer className="bg-elite-navy text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
             <div className="w-8 h-8 bg-elite-gold rounded-full flex items-center justify-center font-serif font-bold text-elite-navy">E</div>
             <span className="font-serif font-bold text-lg">ELITE VISA CONSULTANTS</span>
          </div>

          <div className="flex items-center space-x-6">
             <a href="#" className="text-gray-400 hover:text-elite-gold transition-colors duration-300 transform hover:-translate-y-1">
                <Linkedin size={24} />
             </a>
             <a href="https://www.facebook.com/profile.php?id=61584498472490" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-elite-gold transition-colors duration-300 transform hover:-translate-y-1">
                <Facebook size={24} />
             </a>
             <a href="#" className="text-gray-400 hover:text-elite-gold transition-colors duration-300 transform hover:-translate-y-1">
                <Twitter size={24} />
             </a>
          </div>

          <div className="text-gray-400 text-sm">
            © 2024 Elite Visa Consultants. All rights reserved.
          </div>
        </div>
      </footer>

      <AIConsultant />
    </div>
  );
}

export default App;