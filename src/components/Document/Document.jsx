import React from "react";
import styles from "./Document.module.scss";
import { GrDocumentVerified } from "react-icons/gr";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Resume = ({ docuType }) => {
  return (
    <div className={styles.document_container}>
      <div className={styles.title}>{docuType}</div>
      <div className={styles.content}>
        <div className={styles.document_logo_container}>
          <GrDocumentVerified className={styles.document_logo} />
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
