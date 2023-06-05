import React, { useState } from "react";
import styles from "./ResultsUnit.module.css";
import { default as loadingGif } from "../../../../assets/loading.gif";

/**
 * This is a single search result component, may it be a venue,
 * performer, or event.
 */
export default function ResultUnit({ image, title, subtitle }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentRow}>
        <div className={styles.imageDiv}>
          {/* I noticed some images were restricted, so I decided to
          show this in a more user friendly manner */}
          {imageError ? (
            <div className={styles.imageErrorDiv}>
              <p className={styles.imageErrorText}>Image Not Found</p>
            </div>
          ) : (
            // the image shows a loading animation when it hasn't loaded,
            // I believe it to be more user friendly that just show a blank
            // space or a portion of the image.
            <img
              alt={`${title}`}
              className={styles.image}
              src={imageLoaded ? image : loadingGif}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
            />
          )}
        </div>
        <div className={styles.textContainer}>
          <div className={styles.titleDiv}>
            <p className={styles.title}>{title}</p>
          </div>
          <div className={styles.susbtitleDiv}>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
