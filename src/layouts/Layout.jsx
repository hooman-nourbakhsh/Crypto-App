import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://gitlab.com/matador7495">GitLab</a> | React.js
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by HooMaN with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
