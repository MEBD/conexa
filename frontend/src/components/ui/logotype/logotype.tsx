import Image from "next/image";

import styles from "./logotype.module.css";

export default function Logotype() {
  return (
    <Image
      className={styles["logotype"]}
      src="/images/logotype.svg"
      alt="Starwars"
      width={180}
      height={90}
      priority
    />
  );
}
