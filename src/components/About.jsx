import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div
        className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden'
        id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>
              Introduction
            </h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👨‍💻 Hi, I'm <span  className='font-bold text-yellow-300'>Santosh Saroj</span>, a B.Tech student with a passion for MERN Stack development. 
              As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/nithin-manda-728019214/' target='_blank'>Backend Developer</a>, 
              I thrive on building robust and scalable applications.
              <br />
              
              I delve into the intricacies of software development and explore the latest technology trends.
              <br />
              🌟 On a different note, I'm also passionate about fitness and photography📸. 
              Staying fit and capturing moments through the lens isn't just a hobby; it's a way to tell stories and stay balanced.
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/113YZQX4sz4Q52T9pHT1ZWeXf__mVhHIT/view?usp=drive_link'
              text='View Resume →'
              padding='p-3'
            />
          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
