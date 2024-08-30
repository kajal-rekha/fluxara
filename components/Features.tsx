interface Feature {
    id: number;
    title: string;
    icon: string;
}

const features: Feature[] = [
    { id: 1, title: "Launched Protocols", icon: "📄" },
    { id: 2, title: "Founders", icon: "👤" },
    { id: 3, title: "Marketing Agencies", icon: "📈" },
    { id: 4, title: "Venture Capital", icon: "💼" },
    { id: 5, title: "HNWS", icon: "💸" },
    { id: 6, title: "Seller Mandates", icon: "📝" },
    { id: 7, title: "CEX/DEX", icon: "🔄" },
    { id: 8, title: "OTC Investment", icon: "💹" },
    { id: 9, title: "Buyer Mandates", icon: "📋" },
    { id: 10, title: "Angle Investors", icon: "💵" },
    { id: 11, title: "Big Holders", icon: "💰" },
    { id: 12, title: "Market Makers", icon: "🏦" }
];

const FeatureSection: React.FC = () => {
    return (
        <section className="bg-slate-900 pb-20 features pt-5">
            <div className="wrapper pt-10">
                <div className="grid grid-cols-3  md:gap-10 gap-5 overflow-hidden">
                    <ul className="flex flex-col gap-10 items-start  mt-32 md:mt-0">
                        {features
                            .filter(
                                (_, i) => i < Math.floor(features.length / 2)
                            )
                            .map((feature) => (
                                <li
                                    key={feature.id}
                                    className={`bg-[#4535C1] text-white p-3 rounded-2xl shadow-lg w-[155%] md:w-auto ${
                                        feature.id === 2 &&
                                        "md:ml-[16rem] md:-mt-16"
                                    }  ${
                                        feature.id === 3 &&
                                        "md:ml-[5rem] md:mt-2"
                                    }  ${
                                        feature.id === 4 &&
                                        "md:ml-[8rem] md:mt-2"
                                    }   ${
                                        feature.id === 5 &&
                                        "md:ml-[15rem] md:mt-2"
                                    }  ${feature.id === 6 && " md:-mt-7"}`}
                                >
                                    <div className="flex gap-2 items-baseline">
                                        <span className="text-md bg-white p-1 rounded-full w-9 h-9 flex items-center justify-center">
                                            {feature.icon}
                                        </span>
                                        <h3 className="text-[1rem] font-semibold">
                                            {feature.title}
                                        </h3>
                                    </div>
                                </li>
                            ))}
                    </ul>

                    <div className="flex md:justify-center md:items-center ">
                        <h2 className=" text-[2.5rem] md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500  to-purple-100 relative">
                            Feature
                            <span className="block mt-3 md:mt-2 md:w-[60%] h-1 w-[70%] md:h-3 bg-gradient-to-r from-violet-500  to-purple-100 mx-auto rounded-full"></span>
                        </h2>
                    </div>

                    <ul className="flex flex-col gap-10 items-end mt-32 md:mt-0">
                        {features
                            .filter(
                                (_, i) => i >= Math.floor(features.length / 2)
                            )
                            .map((feature) => (
                                <li
                                    key={feature.id}
                                    className={`bg-[#4535C1] text-white p-3 rounded-2xl shadow-lg  w-[155%] md:w-auto ${
                                        feature.id === 8 &&
                                        "md:mr-[12rem] md:-mt-16"
                                    }  ${
                                        feature.id === 9 &&
                                        "md:mr-[6rem] md:mt-2"
                                    }  ${
                                        feature.id === 10 &&
                                        "md:mr-[6rem] md:mt-2"
                                    }   ${
                                        feature.id === 11 &&
                                        "md:mr-[14rem] md:mt-4"
                                    }  ${feature.id === 12 && " md:-mt-7"}`}
                                >
                                    <div className="flex gap-2 items-baseline">
                                        <span className="text-md bg-white p-1 rounded-full w-9 h-9 flex items-center justify-center">
                                            {feature.icon}
                                        </span>
                                        <h3 className="text-[1rem] font-semibold">
                                            {feature.title}
                                        </h3>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
