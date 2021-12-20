import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { PizzaList } from "../components/Pizza/PizzaList/PizzaList";
import { Slider } from "../components/Slider/Slider";

export const Home = () => {
    return(
        <React.Fragment>
            <Slider />
            <PizzaList />
            <Footer />
        </React.Fragment>
    )
};