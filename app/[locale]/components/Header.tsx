import React, from 'react';
import LanguageSwitcherDropdown from './LanguageSelector';
import Image from "next/image";
import { useTranslations } from "next-intl";

const Header = () => {
    const t = useTranslations('header');

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center m-5 header-row">
                <nav className="nav-bar">
                    <ul className="flex">
                        <li>
                            <a href="#" className="uppercase f-18">
                                {t('product')}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="uppercase f-18">
                                {t('about us')}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="uppercase f-18">
                                {t('pricing')}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="uppercase f-18">
                                {t('legend')}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="uppercase f-18">
                                {t('data center')}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <p className="logo">
                        Logo
                    </p>
                </div>
                <div className="flex items-center">
                    <a href="#" className="uppercase header-btn f-18 contents"> {t('contacts')} </a>
                    <a href="#" className="uppercase white-btn-mid header-btn f-18 inline-flex items-center"> {t('join the wait list')} </a>
                    <LanguageSwitcherDropdown />
                    <div className="header-menu">
                        <Image
                            src="/images/menu.png"
                            alt="menu"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
