"use client";

import FeatureSection from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Navbar />
            <Hero />
            <FeatureSection />
            <Footer />
        </div>
    );
};

export default HomePage;
