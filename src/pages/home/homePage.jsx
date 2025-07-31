import React from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./home.module.css";

export default function homePage() {
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
      </main>
    </>
  );
}
