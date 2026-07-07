import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FAQHero from "../components/FaqPage/FAQHero";
import SearchBar from "../components/FaqPage/SearchBar";
import FAQCategories from "../components/FaqPage/FAQCategories";
import FAQAccordion from "../components/FaqPage/FAQAccordion";
import ContactCTA from "../components/FaqPage/ContactCTA";

export default function Faq() {

  const [search, setSearch] = useState("");

  const [selected, setSelected] = useState("All");

  return (
    <>
  <Navbar />

  <FAQHero />

  <section className="py-20 bg-white">

    <div className="max-w-7xl mx-auto px-6">

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FAQCategories
        selected={selected}
        setSelected={setSelected}
      />

      <FAQAccordion
        search={search}
        selected={selected}
      />

    </div>

  </section>

  <ContactCTA />

  <Footer />
</>
  );
}