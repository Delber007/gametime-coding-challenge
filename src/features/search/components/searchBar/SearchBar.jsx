import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { default as icon } from "./assets/1024px-Search_Icon.svg.png";
import { fetchSearchResults } from "./searchBarAPI";
import SearchResults from "../searchResults/SearchResults";

/**
 * This component handles the user's input and the results to be shown
 */
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [resultsList, setResultsList] = useState([]);
  const [error, setError] = useState("");
  // every time the user's query changes, we will bring up new results
  useEffect(() => {
    async function getResults() {
      const results = await fetchSearchResults(query);
      // if the input is empty, cleans the results list
      if (query === "") setResultsList([]);
      // check if fetched data is not valid, and if so set an error
      else if (results === undefined) {
        setResultsList([]);
        setError("There seems to be a problem fetching search results :(");
      }
      // otherwise set it to the fetched data,
      else setResultsList(formatResults(results));
    }
    getResults();
  }, [query]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputContainer}>
        <div>
          {/* search icon from the internet */}
          <img alt="search-icon" src={icon} className={styles.icon} />
        </div>
        <div className={styles.inputDiv}>
          <input
            className={styles.input}
            type="search"
            placeholder="e.g. Oakland"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.resultsDiv}>
        <SearchResults results={resultsList} />
      </div>
      {/* if theres an error, display it */}
      {error !== "" ? (
        <div>
          <p className={styles.errorText}>{error}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

/**
 * This pulls out only the data we will need to display, grabs a
 * maximum of 3 items per entity, and does so in the required
 * order. Then returns the list.
 * @param {Object} results
 * @returns {Array}
 */
function formatResults(results) {
  const { events, performers, venues } = results;
  let list = [];
  // There was no documentation provided for the API,
  // so each specific property needed was infered from
  // testing the end point on postman.
  for (let i = 0; i < 3 && i < events.length; i++) {
    const { event, venue } = events[i];
    list.push({
      image: event.map_url,
      title: event.name,
      subtitle: venue.name,
    });
  }
  for (let i = 0; i < 3 && i < performers.length; i++) {
    const { hero_image_url, name, category } = performers[i];
    list.push({
      image: hero_image_url,
      title: name,
      subtitle: category,
    });
  }
  for (let i = 0; i < 3 && i < venues.length; i++) {
    const { image_url, name, city } = venues[i];
    list.push({
      image: image_url,
      title: name,
      subtitle: city,
    });
  }
  return list;
}
