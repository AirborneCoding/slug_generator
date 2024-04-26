"use client"
import { useNavbarContext } from "@/context/useNavbarContext";
import Image from "next/image";
import Link from "next/link";

const SubNav = ({ locale, title }: { locale: string, title: string }) => {
    // const t = useTranslations('Navbar');
    const { closeSubmenu } = useNavbarContext();
    return (
        // flex flex-row-reverse items-center pt-10 pb-2 md:pt-10
        <div className="body-container grid grid-cols-2 lg:grid-cols-3 place-items-center pt-10" onMouseOver={closeSubmenu}
        >
            <div>
                <Link href={`/${locale}`}>
                    <Image
                        src='/website/logo.png'
                        // src='/website/newlogo.png'
                        className='h-40 pt-6 w-50 md:w-64'
                        alt={title}
                        width={300}
                        height={300}
                    />
                </Link>
            </div>


            <div>
                <h1 className={`font-extrabold text-myBlue3 ${locale === "ar" ? "title text-3xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}>
                    {title}
                </h1>
            </div>

            <div>
                <a
                    href='https://justice.gov.ma/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Image
                        src='/website/logoamazigh.svg'
                        alt={title}
                        className='hidden h-36 lg:inline'
                        width={200}
                        height={200}
                    />

                </a>

            </div>
        </div>
    )
};

export default SubNav;
// text-3xl font-extrabold text-end sm:text-5xl text-myBlue3 title