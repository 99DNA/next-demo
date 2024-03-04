import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "antd";

export default function Home() {
  return (
    <div className={styles.connect}>
      <w3m-network-button />
      <div className={styles.pad}>
        <w3m-button />
      </div>
    </div>
  );
}
