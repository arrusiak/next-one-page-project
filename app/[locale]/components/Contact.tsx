"use client"
import React from 'react';
import { useState } from 'react';
import { CgDanger } from "react-icons/cg";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setIsSuccess(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length === 0) {
            setIsSuccess(true);
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                message: ''
            });

            // Clear errors
            setErrors({});

        } else {
            setErrors(validationErrors);
        }
    };
    const validateForm = (data) => {
        const errors = {};

        const validateField = (fieldName, errorMessage) => {
            if (!data[fieldName].trim()) {
                errors[fieldName] = errorMessage;
            }
        };

        validateField('firstname', 'Firstname is required');
        validateField('lastname', 'Lastname is required');
        validateField('message', 'Message is required');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            errors.email = 'Invalid email format';
        }

        return errors;
    };
    return (
        <div className="contact-container relative">
            <form  autoComplete="off" onSubmit={handleSubmit} className="contact-section absolute">
                <h4 className="contact-title">Submit you request here!</h4>
                <p className="f-18 text-center text-white">Your success is our success. We are dedicated to understanding and prioritizing your unique goals, providing personalized solutions that stand the test of time.</p>
                <div className="flex f-18 w-full gap-5 items-end column-block">
                    <div className="w-full">
                        <input type="text"
                               id="firstname"
                               name="firstname"
                               value={formData.firstname}
                               onChange={handleChange}
                               className={errors.firstname ? 'input-standard inputError' : 'input-standard'}
                               placeholder="Name *"/>
                        {errors.firstname && <p className="err-message flex items-center mt-3"><CgDanger className="mr-3"/> {errors.firstname}</p>}
                    </div>
                    <div className="w-full">
                        <input type="text"
                               id="lastname"
                               name="lastname"
                               value={formData.lastname}
                               onChange={handleChange}
                               className={errors.lastname ? 'input-standard inputError' : 'input-standard'}
                               placeholder="Name *"/>
                        {errors.lastname && <p className="err-message flex items-center mt-3"><CgDanger className="mr-3"/> {errors.lastname}</p>}
                    </div>
                </div>
                <div className="w-full">
                    <input type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                           className={errors.email ? 'input-standard f-18 inputError' : 'input-standard f-18'}
                           placeholder="Email *"/>
                    {errors.email && <p className="err-message flex items-center mt-3"><CgDanger className="mr-3"/> {errors.email}</p>}
                </div>
                <div className="w-full">
                    <textarea
                              className={errors.message ? 'input-standard f-18 big-input inputError' : 'input-standard f-18 big-input'}
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Message *"></textarea>
                    {errors.message && <p className="err-message flex items-center mt-3"><CgDanger className="mr-3" /> {errors.message}</p>}
                </div>
                <button type="submit" className="uppercase white-btn-mid f-18">  {isSuccess ? 'SEND' : 'Join The Wait List'} </button>
                {isSuccess && <p className="f-18" style={{ color: '#56B76B' }}>Your request is submitted!</p>}
            </form>
        </div>
    );
};

export default Contact;
