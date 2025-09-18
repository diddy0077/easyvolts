import React, { useState,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaProjectDiagram, FaPhone, FaComments, FaEnvelope, FaCheckCircle, FaUpload } from 'react-icons/fa';
import { FiCheckCircle,FiFileText,FiX} from 'react-icons/fi';

const heroImage = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2940";

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
};



const formSteps = [
  { id: 1, name: 'Tell Us About You', icon: <FaUser /> },
  { id: 2, name: 'Share Your Project Goals', icon: <FaProjectDiagram /> },
  { id: 3, name: 'Choose How to Connect', icon: <FaPhone /> },
];

export default function GetStarted() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    solutionType: [],
    projectDescription: '',
    file: null,
    contactMethod: '',
  });

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },[])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        solutionType: checked
          ? [...prev.solutionType, value]
          : prev.solutionType.filter(item => item !== value),
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentStep(prev => prev + 1);
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true)
  setIsSubmitting(true);

  try {
    const response = await fetch('https://easyvolts-server.onrender.com/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), 
    });

    if (response.ok) {
      console.log('Form submitted successfully!');
      setCurrentStep(4);
    } else {
      console.error('Submission failed:', response.statusText);
    }
  } catch (error) {
    console.error('Network error:', error);
  } finally {
    setIsSubmitting(false);
    setLoading(false)
  }
};

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.form key="step1" onSubmit={handleNext} variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Tell Us About You</h3>
            <p className="text-gray-600 mb-6">
              Don’t worry, your information is safe. We’ll only contact you about your project.
            </p>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name (required)"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address (required)"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number (required)"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name (optional)"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <div className="flex justify-end">
              <motion.button
                type="submit"
                className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next: Your Project
              </motion.button>
            </div>
          </motion.form>
        );
      case 2:
        return (
          <motion.form key="step2" onSubmit={handleNext} variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Share Your Project Goals</h3>
            <p className="text-gray-600 mb-6">
              The more details you share, the better we can understand your vision and deliver exactly what you need.
            </p>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Type of Solution (choose one or more)</label>
              <div className="space-y-2">
                {['Web Application', 'Mobile Application', 'Software Solution', 'Cybersecurity / Security Solutions', 'Tech Training / Consultation'].map(type => (
                  <label key={type} className="flex items-center space-x-2 text-gray-700">
                    <input
                      type="checkbox"
                      name="solutionType"
                      value={type}
                      checked={formData.solutionType.includes(type)}
                      onChange={handleInputChange}
                      className="form-checkbox text-purple-600 rounded transition duration-300"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <textarea
              name="projectDescription"
              placeholder="Tell us what you want to achieve."
              value={formData.projectDescription}
              onChange={handleInputChange}
              rows="6"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            ></textarea>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Upload Files / References (optional)</label>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaUpload className="w-8 h-8 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">SVG, PNG, JPG (Max 5MB)</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                </label>
                {/* Display selected file name if a file is chosen */}
              </div>
              {formData.file && (
  <div className="flex items-center justify-between p-3 mt-2 rounded-lg bg-gray-100 text-gray-700 border border-gray-200">
    <div className="flex self-start items-center space-x-2">
      <FiFileText size={18} />
      <span>{formData.file.name}</span>
    </div>
    <button
      type="button"
      onClick={() => setFormData(prev => ({ ...prev, file: null }))}
      className="text-red-500 hover:text-red-700 transition"
      aria-label="Remove selected file"
    >
      <FiX size={20} />
    </button>
  </div>
)}
            </div>
            <div className="flex justify-between">
              <motion.button
                type="button"
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="text-gray-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back
              </motion.button>
              <motion.button
                type="submit"
                className="bg-purple-600 text-white font-semibold py-3 md:px-8 px-3 text-sm rounded-full hover:bg-purple-700 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next: Connect with Us
              </motion.button>
            </div>
          </motion.form>
        );
      case 3:
        return (
          <motion.form key="step3" onSubmit={handleSubmit} variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Choose How You'd Like to Connect</h3>
            <p className="text-gray-600 mb-6">
              Pick the method that works best for you — we’re here to help every step of the way!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'call', label: 'Schedule a Free Consultation Call', icon: <FaPhone size={32} /> },
                { name: 'chat', label: 'Chat with Our Expert', icon: <FaComments size={32} /> },
                { name: 'quote', label: 'Request a Custom Quote via Email', icon: <FaEnvelope size={32} /> },
              ].map(option => (
                <label key={option.name} className={`flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-colors ${
                  formData.contactMethod === option.name ? 'border-purple-600 bg-purple-50 shadow-lg' : 'border-gray-300 hover:border-purple-400'
                }`}>
                  <input
                    type="radio"
                    name="contactMethod"
                    value={option.name}
                    checked={formData.contactMethod === option.name}
                    onChange={handleInputChange}
                    className="hidden"
                  />
                  <div className="text-purple-600 mb-4">{option.icon}</div>
                  <span className="text-center font-semibold">{option.label}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between">
              <motion.button
                type="button"
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="text-gray-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back
              </motion.button>
              <motion.button
  type="submit"
  className="bg-purple-600 text-white font-semibold py-3 md:px-8 px-5 rounded-full hover:bg-purple-700 transition-colors cursor-pointer"
  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
  disabled={isSubmitting} 
>
  {isSubmitting ? 'Submitting...' : 'Submit Project'}
</motion.button>
            </div>
          </motion.form>
        );
      case 4:
        return (
          <motion.div key="confirmation" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="text-center py-16 px-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="text-green-500 text-6xl mb-6 "
            >
              <FaCheckCircle />
            </motion.div>
            <h3 className="md:text-4xl text-2xl font-bold text-gray-900 mb-4">Thank You for Reaching Out!</h3>
            <p className="text-md text-gray-600 text-center">
              One of our EasyVolts experts will contact you shortly to discuss your project and next steps.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  const numSteps = 4;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans pt-16">
      <section className="relative overflow-hidden py-24 md:py-32 text-center text-white bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let’s Bring Your Idea to Life
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Getting started with EasyVolts is simple. Just follow the steps below, and we’ll guide you from concept to launch.
          </motion.p>
          <motion.a
            href="#get-started-form"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.a>
        </div>
      </section>

    
      <section id="get-started-form" className="py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-center">Progress</h2>
            <div className="relative flex justify-between items-center">
              <div className="absolute top-6 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2"></div>
              <motion.div
                className="absolute top-6 left-0 h-1 bg-purple-600 transform -translate-y-1/2"
                initial={{ width: '0%' }}
                animate={{ width: `${(currentStep - 1) / (numSteps - 1) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              ></motion.div>
              {formSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`relative z-10 flex flex-col items-center transition-transform duration-300 ${currentStep >= step.id ? 'text-purple-600' : 'text-gray-400'}`}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: currentStep === step.id ? 1.2 : 1, opacity: 1 }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${currentStep > step.id ? 'bg-purple-600 text-white' : 'bg-white border-2'}`}>
                    {step.icon}
                  </div>
                  <span className={`mt-2 text-sm font-semibold text-center transition-colors duration-300 ${currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'}`}>
                    Step {step.id}
                  </span>
                </motion.div>
              ))}
              <motion.div
                key="step4"
                className={`relative z-10 flex flex-col items-center transition-transform duration-300 ${currentStep === 4 ? 'text-purple-600' : 'text-gray-400'}`}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: currentStep === 4 ? 1.2 : 1, opacity: 1 }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${currentStep === 4 ? 'bg-purple-600 text-white' : 'bg-white border-2'}`}>
                  <FiCheckCircle />
                </div>
                <span className={`mt-2 text-sm font-semibold text-center transition-colors duration-300 ${currentStep === 4 ? 'text-gray-900' : 'text-gray-500'}`}>
                  Complete
                </span>
              </motion.div>
            </div>
          </div>

       
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}