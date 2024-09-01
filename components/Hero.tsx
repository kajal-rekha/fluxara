const Hero = () => {
    return (
        <section className="bg-[#000046] text-white pt-[10rem] pb-16">
            <div className="wrapper flex flex-col gap-5 text-center">
                <h1 className="text-4xl md:text-7xl font-bold leading-relaxed ">
                    Unlock Marketing Insights with Fluxara
                </h1>
                <p className="mt-6 text-lg md:text-2xl text-white/80">
                    Dive deep into your marketing performance with Fluxara
                    advanced analytics tools. Our platform provides
                    comprehensive insights to help you optimize campaigns,
                    understand customer behavior, and drive growth.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                    <div className="bg-[#02022c]  text-white p-6 rounded-lg shadow-lg max-w-xs">
                        <h2 className="text-2xl font-semibold text-white/80">
                            Trend Analytics
                        </h2>
                        <p className="mt-2 text-white/75">
                            Analyze market trends to spot opportunities and make
                            data-driven decisions.
                        </p>
                    </div>
                    <div className="bg-[#02022c]  text-white p-6 rounded-lg shadow-lg max-w-xs">
                        <h2 className="text-2xl font-semibold text-white/80">
                            Customer Insights
                        </h2>
                        <p className="mt-2 text-white/75">
                            Gain valuable insights into customer behavior and
                            preferences to tailor your strategies and improve
                            engagement.
                        </p>
                    </div>
                    <div className="bg-[#02022c]  text-white p-6 rounded-lg shadow-lg max-w-xs">
                        <h2 className="text-2xl font-semibold text-white/80">
                            ROI Analysis
                        </h2>
                        <p className="mt-2 text-white/75">
                            Evaluate your return on investment with detailed
                            financial analysis and actionable recommendations.
                        </p>
                    </div>
                </div>
                <div>
                    <a
                        href="#features"
                        className="mt-16 inline-block bg-[#4535C1] text-white px-7 py-4 rounded-2xl font-semibold shadow-lg hover:bg-[#4535c1d6]"
                    >
                        Explore Features
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
