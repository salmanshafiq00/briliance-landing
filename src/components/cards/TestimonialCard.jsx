function TestimonialCard({ quote, name, title, image }) {
    return (
        <div className="self-stretch px-3 md:px-12 justify-center items-start gap-4 flex flex-col md:flex-row">
            {/* Testimonial Image */}
            <img
                src={image}
                alt={name}
                className="w-48 h-50 rounded-lg object-cover"
            />

            {/* Testimonial Content */}
            <div className="flex-1 px-6 py-6 shadow-[0px_0px_0px_0.75px_rgba(50,45,43,0.12)] overflow-hidden flex flex-col justify-start items-start gap-6">
                <div className="self-stretch justify-start flex flex-col text-[#49423D] text-2xl md:text-[32px] font-medium leading-10 md:leading-[42px] h-auto tracking-tight">
                    "{quote}"
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.90)] text-lg font-medium leading-[26px]">
                        {name}
                    </div>
                    <div className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.70)] text-lg font-medium leading-[26px]">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;
