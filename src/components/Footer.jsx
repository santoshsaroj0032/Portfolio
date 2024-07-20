import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
	const year = new Date().getFullYear();

	const handleMailClick = (event) => {
		event.preventDefault();
		window.location.href = 'mailto:santoshsaroj0032@gmail.com';
	};

	return (
		<div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-4'>
				<p className='text-white text-center w-full sm:w-auto font-light'>
					© {year} All rights reserved.
				</p>
				<div className='text-white flex justify-around sm:w-[250px] w-full'>
					<a
						href="mailto:santoshsaroj0032@gmail.com"
						onClick={handleMailClick}
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1'
					>
						<FiMail className='text-xl' />
					</a>
					<a
						href="https://twitter.com/Sant_Saroj2589"
						target='_blank'
						rel="noopener noreferrer"
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1'
					>
						<FaTwitter className='text-xl' />
					</a>
					<a
						href="https://www.linkedin.com/in/santosh-saroj-573b33241/"
						target='_blank'
						rel="noopener noreferrer"
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1'
					>
						<AiFillLinkedin className='text-xl' />
					</a>
					<a
						href="https://github.com/santoshsaroj0032"
						target='_blank'
						rel="noopener noreferrer"
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1'
					>
						<FaGithub className='text-xl' />
					</a>
					<a
						href="https://www.instagram.com/santosh_sa.roj"
						target='_blank'
						rel="noopener noreferrer"
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1'
					>
						<AiFillInstagram className='text-xl' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
