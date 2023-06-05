import React from "react";
import { default as logo } from "../../assets/Gametime_Logo.jpg";
import SearchBar from "./components/searchBar/SearchBar";
import styles from "./Search.module.css";

/**
 * Main component for the search feature screen.
 */
export default function Search() {
  return (
    <div className={styles.mainContainer}>
      <div>
        {/* found this image online, hopefully is okay to use it here */}
        <img alt="logo" src={logo} className={styles.logo} />
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}
