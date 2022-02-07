import React from "react";
import { Filter } from "../components/Filter/Filter";
import { Footer } from "../components/Footer/Footer";
import { PizzaList } from "../components/Pizza/PizzaList/PizzaList";
import { Slider } from "../components/Slider/Slider";

export const Home = () => {
    return(
        <React.Fragment>
            <Slider />
            <Filter />
            <PizzaList />
            <Footer />
        </React.Fragment>
    )
};