"use client";

import styles from "../styles/ErrorPage.module.scss";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className={styles["error-page-wrapper"]}>
      <h1>Error</h1>
      <p>Na stránce se vyskytla chyba!</p>
      <p>Popis chyby: {error.message}</p>
      <button className={styles["c-error-page-reset-btn"]} onClick={reset}>
        Zkusit znovu
      </button>
    </div>
  );
}
