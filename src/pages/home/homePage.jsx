import React from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./home.module.css";
import FeatureCard from "../../components/featureCard/FeatureCard";
import placeholder from "../../assets/UntitledImage.png";

export default function homePage() {
  const cards = [
    { title: "Lorem ipsum", subtitle: "Est venenatis", imageSrc: placeholder },
    { title: "Dolor sit", subtitle: "Aliquet lectus", imageSrc: placeholder },
    { title: "Amet lorem", subtitle: "Sed ultricies", imageSrc: placeholder },
  ];
  return (
    <>
      <NavBar />

      <main>
        <section className={styles.bannerImage}>
          <div className={styles.bannerContent}>
            {/* left column */}
            <div className={styles.bannerLeft}>
              <h2 className={styles.bannerTitle}>Lorem ipsum dolor sit amet</h2>
            </div>

            {/* right column (blank for now) */}
            <div className={styles.bannerRight}></div>

            {/* search row, spans both columns */}
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>Search</button>
            </div>
          </div>
        </section>

        <section className={styles.featuresGrid}>
          {cards.map((c, i) => (
            <FeatureCard
              key={i}
              imageSrc={c.imageSrc}
              title={c.title}
              subtitle={c.subtitle}
            />
          ))}
        </section>
      </main>
    </>
  );
}
