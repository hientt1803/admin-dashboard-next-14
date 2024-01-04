"use client";

import React from "react";
import Link from "next/link";
import styles from "./menulink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
      href={item.path}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
