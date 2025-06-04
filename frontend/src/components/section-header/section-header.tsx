import styles from "./section-header.module.css";

type Children = Readonly<{ children: React.ReactNode }>;

export default function SectionHeader({ children }: Children) {
  return <div className={styles["section-header"]}>{children}</div>;
}
