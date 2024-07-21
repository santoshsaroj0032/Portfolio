import React from "react";
import dance from '../assets/dance.jpg';
import foodie from '../assets/foodie.jpg';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
                <div className="flex flex-wrap gap-2 pl-2">
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className="text-[14px] text-blue-500"
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'Food Delivery Application',
        description: 'Co People is a dynamic web application I crafted using React, Node JS and React. This project is a modern and engaging social platform that allows users to connect, share content and interact seamlessly.',
        image: foodie,
        git: 'https://github.com/santoshsaroj0032/Food-Delivery-Application',
        technologies: ['MongoDb', 'ReactJS', 'NodeJS']
    },
    {
        title: 'Dance Academy',
        description: 'SnapShot is a stunning portfolio that I exclusively designed using React JS and tailwind CSS. This Project serves as a representation of a photographer’s work, highlighting their portfolio and services.',
        image: dance,
        git: "https://github.com/santoshsaroj0032/DanceAcademy",
        technologies: ['NodeJs', 'ExpressJs', 'MongoDb', 'PUG', 'CSS']
    }
];

export default Projects;
