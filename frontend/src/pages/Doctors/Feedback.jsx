// Assuming this is Feedback.jsx
import React, { useState } from 'react';
import avatar from '../../assets/images/avatar-icon.png';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';

// Function to format the date
const formatDate = (dateString) => {
  // Your date formatting logic goes here
  // For example: return new Date(dateString).toLocaleDateString();
  return dateString;
};

const Feedback = () => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false)


  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All reviews (272)
        </h4>

        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img src={avatar} alt="" className='w-full h-full object-cover rounded-full' />
            </figure>

            <div>
              <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                Thisara Perera
              </h5>
              <p className='text-[14px] leading-6 text-textColor'>
                {formatDate("27-11-2023")}
              </p>
              <p className='text__pera font-medium text-[15px]'>
                Good service, highly recommended
              </p>
            </div>
          </div>

          <div className='flex gap-1'>
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color='#0067FF' />
            ))}
          </div>
        </div>
      </div>

       {!showFeedbackForm && (
         <div className="text-center "> 
         <button className='btn' onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
            </button>
            </div>  
       )}
        {showFeedbackForm && <FeedbackForm/>}


    </div>
  );
};

export default Feedback;
