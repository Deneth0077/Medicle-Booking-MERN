

import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import heroImg01 from '../assets/images/hero-img01.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureimg from "../assets/images/feature-img.png"
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import faqImg from '../assets/images/faq-img.png'
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DoctorsList from '../components/Doctors/DoctorsList';
import FaqList from '../components/Faq/FaqList';





const Home = () => {
  return (
    <>
      {/* ----------Hero section----------  */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

            {/* ---------------------hero content------------------ */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  we help pations live a helthy and longer life
                </h1>

                <p className='text__para'>
                  Discover a holistic health experience with our user-friendly app.
                  Achieve fitness goals, monitor vital signs, and access a wealth
                  of health resources. Enjoy personalized exercise plans, nutrition
                  guidance, and sync with wearables for real-time data analysis.
                </p>
                <button className='btn'>Request an Appointment</button>
              </div>
              {/* ----------------hero counter------------------ */}
              <div>
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 
                   lg:gap-[30px]'>
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                      30+
                    </h2>
                    <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                    <p className='text__para'>Years of Experience</p>
                  </div>
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                      15+
                    </h2>
                    <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                    <p className='text__para'>Clinic Location</p>
                  </div>
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                      100%
                    </h2>
                    <span className='w-[100px] h-2  bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                    <p className='text__para'>Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-[60px] mb-[5px] justify-end'>
              <div>
                <img className='w-full h-[700px]' src={heroImg01} alt="" />
              </div>
              <div className='mt-[36px]'>
                {/* <img src={heroImg02} alt="" className='w-full mb-[30px]' /> */}
                {/* <img src={heroImg03} alt="" className='w-full mb-[30px]' /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------Hero section end----------  */}

      {/* ----------Find Doctor, Location,Appointment section----------  */}
      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Provide the best medical services
            </h2>
            <p className='text__para text-center'>
              A holistic health care center located in Colombo 7.
              We offer general consultations, diabetes care,
              diet & nutrition advice, foot-care, eye care services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Doctor
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-Class care for everyone. Our health System Offers unmatched experience doctors. from the lab to the client.
                </p>
                {/* Use the imported Link component */}
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">


              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Location
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-Class care for everyone. Our health System Offers unmatched experience doctors. from the lab to the client.
                </p>
                {/* Use the imported Link component */}
                <Link to='/doctors'
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
                 mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Book Appointment
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-Class care for everyone. Our health System Offers unmatched experience doctors. from the lab to the client.
                </p>
                {/* Use the imported Link component */}
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------Find Doctor, Location,Appointment section end----------  */}

      {/* -------------About Section Start---------- */}
      <About />
      {/* -------------About Section end---------- */}

      {/* -------------Service Section Start---------- */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>Our Medical service </h2>
            <p className='text__para text-center'>
              Would-class care for everyone. our health System offers unmatched,
              exparete helth care
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* -------------Service Section end---------- */}

      {/* -------------Feature Section start---------- */}
      <section>
        <div className='container'>
          <div className='flex items-center justify-between flex-col lg:flex-row'>

            {/* -------------Feature content---------- */}
            <div className="xl:w-[670px]">
              <h2 className='heading'>
                Get virtual treatment <br />  anytime.
              </h2>
              <ul className='pl-4 mt-[30px]'>
                <li className='text__pera mt-[30px] '> 1.Sehedule the appointment directly</li>
                <li className="text__pera mt-[30px]" > 2.Search for your physician hear and contact their office</li>
                <li className="text__para mt-[30px]"> 3.If all else fails, consider reaching out to your primary care physician or the hospital where your doctor practices for assistance in obtaining the necessary contact information.</li>
              </ul>
              <Link to="/">
                <button className='btn'>Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[60px] lg:mt-0">
              <img src={featureimg} className='w-[600px] h-[700px]' alt="" />

              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] 
                   md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]'>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[3px] lg:gap-3">
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                      Tue, 24
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                      10:00Am
                    </p>
                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 
                    px-[6px] lg:py-3 lg:px-[9px]'>
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[94px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] 
                text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation</div>
                <div className="flex items-center gap-[10px] mt-2 lg:mt-[10px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>Wayne Collins</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------Feature Section end---------- */}

      {/*  -------------Our Grade Doctors---------- */}
      <section>
        <div className='container'>
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>Our Grate Doctors </h2>
            <p className='text__para text-center'>
              Would-class care for everyone. our health System offers unmatched,
              exparete helth care
            </p>
          </div>
          <DoctorsList />
        </div>
      </section>
      {/* -------------Our Grade Doctors section end-- */}

      {/*  -------------FAQ section---------- */}
      <section>
        <div className='container'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-[520px] ml-8 hidden md:block'>
              <img src={faqImg} alt=""  />
            </div>

            <div className='w-full md:w-1/2'>
              <h2 className='heading'>Most questions by our beloved patients</h2>
              <FaqList />
            </div>

          </div>
        </div>
      </section>
      {/*  -------------FAQ section end---------- */}

      {/*  -------------testimonial---------- */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>What Our Patient Say </h2>
            <p className='text__para text-center'>
              Would-class care for everyone. our health System offers unmatched,
              exparete helth care
            </p>
          </div>
  
        </div>
      </section>
      {/*  -------------testimonial end---------- */}
    </>
  );
}

export default Home;

