import React from "react";
import ResultUnit from "./ResultUnit";
import styles from "./SearchResults.module.css";

/**
 * This components receives the list of search results to be displayed
 * and maps it, pulling out each piece of data and passing it on to
 * the ResultUnit component.
 */
export default function SearchResults({ results }) {
  return (
    <div className={styles.mainDiv} data-testid="results-div">
      {results.map((value, index) => {
        const { image, title, subtitle } = value;
        return (
          // as the only was this changes is by directly changing the whole
          // content of results, not by adding, deleting, or sorting elements
          // inside, we may use the index as valid key without any future errors
          <div key={index} className={styles.resultDiv}>
            <ResultUnit image={image} title={title} subtitle={subtitle} />
          </div>
        );
      })}
    </div>
  );
}
