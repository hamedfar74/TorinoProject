
import styles from "./layout.module.css";
import ProfileLayoutMenu from "@/components/elements/ProfileLayoutMenu";

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.side}>
        <ProfileLayoutMenu />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default layout;
