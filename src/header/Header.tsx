import React from "react";
import Navbar from "./Navbar";
import { useTranslations } from "next-intl";
import SubNav from "./SubNav";

const Header = ({ locale }: { locale: string }) => {

    const t = useTranslations('Navbar');

    return (
        <header>
            <Navbar
                home={t('Home')}
                observatory={t('Observatory')}
                statistics={t('Statistics')}
                articles={t('Articles')}
                publications={t('Publications')}
                reports={t('Reports')}
                missions={t('Missions')}
                contact={t('Contact')}
                search={t('search')}
                locale={locale}
            />
            <div className='ff'>
                <div className="body-container">
                    <SubNav locale={locale} />
                </div>
            </div>
        </header>
    )
};

export default Header;
