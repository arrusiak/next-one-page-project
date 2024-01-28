import React from 'react';
import Image from "next/image";

const data = [
    { name: 'Sales', description: 'Your success is our success. We are dedicated to understanding and prioritizing your unique goals, providing personalized solutions that stand the test of time.' },
    { name: 'Support', description: 'Your success is our success. We are dedicated to understanding and prioritizing your unique goals, providing personalized solutions that stand the test of time.'},
    { name: 'Press', description: 'Your success is our success. We are dedicated to understanding and prioritizing your unique goals, providing personalized solutions that stand the test of time.'}
];

const Services = () => {
    return (
        <div className="container mx-auto">
            <div className="custom-container flex flex-col items-center">
                <h1 className="bigger-text">Get in touch</h1>
                <p className="f-18 description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </p>
                <div className="flex justify-around column-block mt-10 service-container">
                    {data.map((info, index) => (
                        <div key={index} className="flex flex-col items-center service-block">
                            <div>
                                <h4 className="service-name text-center">{info.name}</h4>
                                <p className="service-description text-center f-18">{info.description}</p>
                            </div>
                            <a href="#" className="service-arrow">
                                <Image
                                    src="/images/arrow-up.png"
                                    alt="arrow"
                                    width="100"
                                    height="100"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
