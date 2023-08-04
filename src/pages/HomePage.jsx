import React from "react";
import Header from "../components/Home/Header";
import Collection from "../components/Home/Collection";
import Company from "../components/Home/Company";
import Works from "../components/Home/Works";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Collection />
      <Company />
      <Works />
      <Footer />
    </div>
  );
}
