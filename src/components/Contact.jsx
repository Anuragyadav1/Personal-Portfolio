import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-start p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-[600px] space-y-4'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300'>Contact</p>
          {/* <p className='text-gray-300 py-4'>Submit the form below or send me an email - 10anuragyadav2002@gmail.com</p> */}
          
        </div>
        <input className='w-full p-2 bg-[#ccd6f6] text-black rounded' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} required />
        <input className='w-full p-2 bg-[#ccd6f6] text-black rounded' type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} required />
        <textarea className='w-full p-2 bg-[#ccd6f6] text-black rounded' name="message" rows="5" placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
        <button className='text-white border-2  hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] px-4 py-3 mx-auto flex items-center duration-300' type='submit'>
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
