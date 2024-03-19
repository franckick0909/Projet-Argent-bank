import React from "react";
import "./Home.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";

import Feature from "../../Components/Feature/Feature";
import dataFeature from "../../dataFeature.json";
import iconChat from "../../assets/img/icon-chat.webp";
import iconMoney from "../../assets/img/icon-money.webp";
import iconSecurity from "../../assets/img/icon-security.webp";


const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature image={iconChat} alt={dataFeature[0].alt} title={dataFeature[0].title} children={dataFeature[0].children}  />
          <Feature image={iconMoney} alt={dataFeature[1].alt} title={dataFeature[1].title} children={dataFeature[1].children}  />
          <Feature image={iconSecurity} alt={dataFeature[2].alt} title={dataFeature[2].title} children={dataFeature[2].children}  />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
