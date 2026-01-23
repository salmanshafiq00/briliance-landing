import GithubSvg from './svg/GithubSvg';
import LinkedInSvg from './svg/LinkedInSvg';
import TwitterSvg from './svg/TwitterSvg';
import FooterLink from './cards/FooterLink';
import { footerData } from '../data/footerData';

function Footer() {
    return (
        <>
            <div
                className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(55,50,47,0.12)]"
            >
                {/* Main Footer Content  */}
                <div
                    className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0"
                >
                    {/* Brand Section  */}
                    <div
                        className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8"
                    >
                        <div
                            className="self-stretch flex justify-start items-center gap-3"
                        >
                            <div
                                className="text-center text-[#49423D] text-xl font-semibold leading-4"
                            >
                                {footerData.brand.name}
                            </div>
                        </div>
                        <div
                            className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px]"
                        >
                            {footerData.brand.tagline}
                        </div>
                        {/* Social Icons  */}
                        <div
                            className="flex justify-start items-start gap-4"
                        >
                            {/* Twitter  */}
                            <div
                                className="w-6 h-6 relative overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                <TwitterSvg />
                            </div>
                            {/* LinkedIn  */}
                            <div
                                className="w-6 h-6 relative overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                <LinkedInSvg />
                            </div>
                            {/* GitHub  */}
                            <div
                                className="w-6 h-6 relative overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                <GithubSvg />
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links  */}
                    <div
                        className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8"
                    >
                        {footerData.columns.map((column, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]"
                            >
                                <div
                                    className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5"
                                >
                                    {column.title}
                                </div>
                                <div
                                    className="flex flex-col justify-end items-start gap-2"
                                >
                                    {column.links.map((link, linkIndex) => (
                                        <FooterLink
                                            key={linkIndex}
                                            label={link.label}
                                            href={link.href}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Pattern  */}
                <div
                    className="self-stretch h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)]"
                >
                    <div
                        className="absolute inset-0 w-full h-full overflow-hidden"
                    >
                        <div className="w-full h-full relative">
                            {/* Decorative pattern lines  */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;