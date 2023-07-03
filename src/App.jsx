import styles from "./App.module.css";
import { Dashboard, Sidebar } from "./components";

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
