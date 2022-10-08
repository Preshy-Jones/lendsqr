import React from "react";
import Union from "../../../assets/union-nav.svg";
import Lendsqr from "../../../assets/lendsqr-nav.svg";
import styles from "./index.module.scss";
import SearchBox from "../../ui/SearchBox";
import BellIcon from "../../ui/icons/BellIcon";
import ProfilePhoto from "../../../assets/profile_photo.jpeg";
import CaretDown from "../../ui/icons/CaretDown";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Union} alt="union" />
        <img src={Lendsqr} alt="lendsqr" />
      </div>
      <div>
        <SearchBox />
      </div>
      <div className={styles.info}>
        <h2 className={styles.docs}>Docs</h2>
        <div className={styles.bell}>
          <BellIcon />
        </div>
        <div className={styles.photo}>
          <img src={ProfilePhoto} alt="profile_photo" />
        </div>
        <h2 className={styles.name}>Precious</h2>
        <CaretDown />
      </div>
    </div>
  );
};

export default NavBar;
