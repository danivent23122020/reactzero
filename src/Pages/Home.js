import React from "react";
import Countries from "../Components/Countries";
import Logo from "../Components/Logo";
import Navigation from "../Components/Navigation";

const Home = () => {
    return (
        <>
            <Navigation />
            <Logo />
            <h1>Accueil</h1>
            <Countries />
        </>
    );
};

export default Home;
