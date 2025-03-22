
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// Importing project images
import foodDeliveryImg from '../assets/food_del.png';
import bookStoreImg from '../assets/book_store.png';
import ecommerceImg from '../assets/e_commerce.png'; 
import dashboardImg from '../assets/dashboard.png';
import carPredictionImg from '../assets/carPre.png';
import chatAppImg from '../assets/chat_app.png';



const Projects = () => {
  const projects = [
    {
      name: 'Food Delivery Application',
      description: 'A full-stack MERN application for food ordering and delivery.',
      image: foodDeliveryImg,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/Anuragyadav1/food-delivery-app',
      live: 'https://food-del-frontend-0a4a.onrender.com/'
    },
    {
      name: 'Book Store Application',
      description: 'A MERN stack application for browsing and purchasing books online.',
      image: bookStoreImg,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
      github: 'https://github.com/Anuragyadav1/Book-Store',
      live: 'https://bookstore-my-first-application.vercel.app/'
    },
    {
      name: 'E-commerce Application',
      description: 'A fully responsive e-commerce front-end using React and Stripe for payments.',
      image: ecommerceImg, // New Image
      technologies: ['React', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/Anuragyadav1/Mock-Ecommerce',
      live: 'https://mock-ecommerce-1.onrender.com/'
    },
    {
      name: 'Innovative Dashboard',
      description: 'A MERN-based dashboard with an enhanced UI/UX, exceeding design standards.',
      image: dashboardImg,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Google OAuth'],
      github: 'https://github.com/Anuragyadav1/EMotored-Assignment',
      live: 'https://emotored-assignment-frontend.onrender.com/',
    },
    {
      name: 'Used Car Price Prediction',
      description: 'A machine learning model predicting used car resale prices with 92% accuracy.',
      image: carPredictionImg,
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit', 'Joblib'],
      github: 'https://github.com/Anuragyadav1/car-dekho',
      // live: 'https://used-car-prediction-app.onrender.com/'
    },
    {
      name: 'Real-Time Chat Application',
      description: 'A MERN + Socket.IO chat app with real-time messaging, JWT authentication, and a fully responsive UI.',
      image: chatAppImg,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'Zustand', 'Tailwind CSS', 'Daisy UI'],
      github: 'https://github.com/Anuragyadav1/Chat-Application',
      live: 'https://my-chat-app-ogqb.onrender.com/'
    }
  ];

  return (
    <div name='projects' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-8 md:py-12'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#64ffda]'>Projects</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='relative overflow-hidden rounded-lg shadow-lg bg-[#112240] hover:shadow-[#64ffda]/20 transition duration-300'>
              <img src={project.image} alt={project.name} className='w-full h-48 object-cover' />
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-[#ccd6f6] mb-2'>{project.name}</h3>
                <p className='text-[#8892b0] mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className='bg-[#172a45] px-2 py-1 rounded text-xs text-[#64ffda]'>{tech}</span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <a 
                    href={project.github} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='flex items-center text-[#ccd6f6] hover:text-[#64ffda] transition duration-300 mr-16'
                  >
                    <FaGithub className='mr-1' />
                    GitHub
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='flex items-center text-[#ccd6f6] hover:text-[#64ffda] transition duration-300'
                    >
                      <FaExternalLinkAlt className='mr-1' />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
