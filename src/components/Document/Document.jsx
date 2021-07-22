import React from "react";
import styles from "./Document.module.scss";
import { GrDocumentVerified } from "react-icons/gr";
import { AiOutlinePlusCircle } from "react-icons/ai";
// AiOutlineMinusCircle

const Resume = ({ docuType }) => {
  return (
    <div className={styles.document_container}>
      <div className={styles.label}>{docuType}</div>
      <div className={styles.content}>
        <div className={styles.document_icon_container}>
          <GrDocumentVerified className={styles.document_icon} />
        </div>
        <div className={styles.filename}>
          Joshua Andrepoviasdfasdfasdfasdfasfasasdfasdfasdfasdfdfasdfch -
          Resume.pdf
        </div>
        <div className={styles.action_icon_container}>
          <AiOutlinePlusCircle className={styles.action_icon} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
