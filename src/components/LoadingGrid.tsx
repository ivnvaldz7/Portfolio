import styles from "./LoadingGrid.module.css";

export default function LoadingGrid() {
  return (
    <div className={styles.ldsGrid} aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} />
      ))}
    </div>
  );
}
