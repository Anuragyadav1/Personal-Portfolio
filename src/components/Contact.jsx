// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert('Thank you for your message! I will get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-start p-4'>
//       <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-[600px] space-y-4'>
//         <div className='pb-8'>
//           <p className='text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300'>Contact</p>
//           {/* <p className='text-gray-300 py-4'>Submit the form below or send me an email - 10anuragyadav2002@gmail.com</p> */}
          
//         </div>
//         <input className='w-full p-2 bg-[#ccd6f6] text-black rounded' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} required />
//         <input className='w-full p-2 bg-[#ccd6f6] text-black rounded' type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} required />
//         <textarea className='w-full p-2 bg-[#ccd6f6] text-black rounded' name="message" rows="5" placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
//         <button className='text-white border-2  hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] px-4 py-3 mx-auto flex items-center duration-300' type='submit'>
//           Let's Connect
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;






// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert('Thank you for your message! I will get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
//   const whatsappMessage = encodeURIComponent("Hello! I found your portfolio and would like to connect.");
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//   return (
//     <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>
//       <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-[600px] space-y-4'>
//         <div className='pb-8'>
//           <p className='text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300'>Contact</p>
//         </div>
//         <input className='w-full p-2 bg-[#ccd6f6] text-black rounded' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} required />
//         <input className='w-full p-2 bg-[#ccd6f6] text-black rounded' type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} required />
//         <textarea className='w-full p-2 bg-[#ccd6f6] text-black rounded' name="message" rows="5" placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
//         <button className='text-white border-2 hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] px-4 py-3 mx-auto flex items-center duration-300' type='submit'>
//           Let's Connect
//         </button>
//       </form>

//       {/* WhatsApp Chat Button */}
//       <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-6">
//         <button className="bg-[#25D366] text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-[#1ebe57] duration-300">
//           <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" className="w-6 h-6" />
//           Chat on WhatsApp
//         </button>
//       </a>
//     </div>
//   );
// };

// export default Contact;






// import React from 'react';

// const Contact = () => {
//   const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
//   const whatsappMessage = encodeURIComponent("Hello! I found your portfolio and would like to connect.");
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//   return (
//     <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>
//       <form 
//         action="https://formsubmit.co/0fef8d1c63a5c985739f2a36956b3cc5 "  // 🔹 Replace with your actual email
//         method="POST"
//         className='flex flex-col w-full max-w-[600px] space-y-4'
//       >
//         <div className='pb-8'>
//           <p className='text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300'>Contact</p>
//         </div>
        
//         <input className='w-full p-2 bg-[#ccd6f6] text-black rounded' type="text" placeholder='Name' name='name' required />
//         <input className='w-full p-2 bg-[#ccd6f6] text-black rounded' type="email" placeholder='Email' name='email' required />
//         <textarea className='w-full p-2 bg-[#ccd6f6] text-black rounded' name="message" rows="5" placeholder='Message' required></textarea>
        
//         {/* 🔹 Hidden Fields for Extra Features */}
//         <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
//         <input type="hidden" name="_subject" value="New Contact Form Submission" />
//         <input type="hidden" name="_captcha" value="false" />

//         <button className='text-white border-2 hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] px-4 py-3 mx-auto flex items-center duration-300' type='submit'>
//           Let's Connect
//         </button>
//       </form>

//       {/* WhatsApp Chat Button */}
//       <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-6">
//         <button className="bg-[#25D366] text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-[#1ebe57] duration-300">
//           <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" className="w-6 h-6" />
//           Chat on WhatsApp
//         </button>
//       </a>
//     </div>
//   );
// };

// export default Contact;









// import React from 'react';

// const Contact = () => {
//   const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
//   const whatsappMessage = encodeURIComponent("Hello! I found your portfolio and would like to connect.");
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//   return (
//     <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>
//       <form 
//         action="https://formsubmit.co/0fef8d1c63a5c985739f2a36956b3cc5"  // Replace with your actual email
//         method="POST"
//         className='flex flex-col w-full max-w-[600px] space-y-4'
//       >
//         <div className='pb-8'>
//           <p className='text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300'>Contact</p>
//         </div>
        
//         <input className='w-full p-2 bg-[#ccd6f6] text-black rounded' type="text" placeholder='Name' name='name' required />
//         <input className='w-full p-2 bg-[#ccd6f6] text-black rounded' type="email" placeholder='Email' name='email' required />
//         <textarea className='w-full p-2 bg-[#ccd6f6] text-black rounded' name="message" rows="5" placeholder='Message' required></textarea>

//         {/* Hidden Fields for Advanced Features */}
//         <input type="hidden" name="_subject" value="New Contact Form Submission!" />
//         <input type="hidden" name="_autoresponse" value="Thank you for reaching out! I'll get back to you soon." />
//         {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}
//         <input type="hidden" name="_captcha" value="true" />

//         <button className='text-white border-2 hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] px-4 py-3 mx-auto flex items-center duration-300' type='submit'>
//           Let's Connect
//         </button>
//       </form>

//       {/* WhatsApp Chat Button */}
//       <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-6">
//         <button className="bg-[#25D366] text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-[#1ebe57] duration-300">
//           <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" className="w-6 h-6" />
//           Chat on WhatsApp
//         </button>
//       </a>
//     </div>
//   );
// };

// export default Contact;




import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  // const whatsappMessage = encodeURIComponent("Hello! I found your portfolio and would like to connect.");
  // const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleSubmit = (e) => {
    setIsSubmitting(true);
  };

  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>
      <form 
        action="https://formsubmit.co/0fef8d1c63a5c985739f2a36956b3cc5"
        method="POST"
        className='flex flex-col w-full max-w-[600px] space-y-4'
        onSubmit={handleSubmit}
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300'>Contact</p>
        </div>
        
        <input className='w-full p-2 bg-[#ccd6f6] text-black rounded' type="text" placeholder='Name' name='name' required />
        <input className='w-full p-2 bg-[#ccd6f6] text-black rounded' type="email" placeholder='Email' name='email' required />
        <textarea className='w-full p-2 bg-[#ccd6f6] text-black rounded' name="message" rows="5" placeholder='Message' required></textarea>

        {/* Hidden Fields for Advanced Features */}
        <input type="hidden" name="_subject" value="New Contact Form Submission!" />
        <input type="hidden" name="_autoresponse" value="Thank you for reaching out! I'll get back to you soon." />
        <input type="hidden" name="_captcha" value="true" />

        <button 
          className={`text-white border-2 px-4 py-3 mx-auto flex items-center duration-300 ${
            isSubmitting ? "bg-gray-500 cursor-not-allowed" : "hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f]"
          }`} 
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Let's Connect"}
        </button>
      </form>

      {/* WhatsApp Chat Button with "or" */}
      {/* <div className="flex flex-col items-center mt-6">
        <p className="text-gray-300">OR</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-[#25D366] text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-[#1ebe57] duration-300 mt-2">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" className="w-6 h-6" />
            Chat on WhatsApp
          </button>
        </a>
      </div> */}
    </div>
  );
};

export default Contact;


