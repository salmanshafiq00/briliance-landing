// Reusable link component for footer
function FooterLink({ label, href }) {
    return (
        <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
            <a href={href}>{label}</a>
        </div>
    );
}

export default FooterLink;
