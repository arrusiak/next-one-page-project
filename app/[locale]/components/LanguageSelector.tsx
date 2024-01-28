"use client";
import Link from "next/link";
import {useLocale} from "next-intl";
import { IoIosArrowDown } from "react-icons/io";
import {useState} from "react";

const LanguageSwitcherDropdown = () => {
    const locale = useLocale();
    const [isHidden, setIsHidden] = useState(true);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex items-center w-full py-2 uppercase text-sm"
                    onClick={toggleVisibility}
                >
                    <p> {locale}</p>
                    <IoIosArrowDown style={{color: '#92a7a3'}} className="ml-2"/>
                </button>
            </div>
            <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                style={{ display: isHidden ? 'none' : 'block' }}>
                <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <Link href="/en" locale="en">
                        <h2 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">English</h2>
                    </Link>
                    <Link href="/ru" locale="ru">
                        <h2 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Russian</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcherDropdown;
