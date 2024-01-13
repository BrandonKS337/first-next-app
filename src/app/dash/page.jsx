import Link from "next/link";
// import styles from "../page.module.css";
//removed import link because layout.jsx is the child of this page.jsx


export default function About() {
  return (
    // <main className={styles.main}> //removed main element because the child element has this built out
      <div className="Dash">
        <h1>DashBoard</h1>
        <p>
          This is the DashBoard page. Nothing to see, go <Link href="/">home</Link>.
        </p>
      </div>
    // </main>
  );
}
