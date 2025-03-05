import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

import UseEscapeKey from "../../hooks/useEscapeKey";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({
  id,
  variant,
  text,
  handleDismiss,
  dismissAllToast,
  ...delegated
}) {
  const Tag = ICONS_BY_VARIANT[variant];

  console.log(variant);
  console.log(ICONS_BY_VARIANT[variant]);

  // React.useEffect(() => {
  //   function handleDeleteAllToast(event) {
  //     if (event.key === "Escape") {
  //       dismissAllToast();
  //     }
  //   }
  //   window.addEventListener("keydown", handleDeleteAllToast);

  //   return () => window.removeEventListener("keydown", handleDeleteAllToast);
  // });

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>${variant} -</VisuallyHidden>
        {text}
      </p>
      <button
        aria-label="Dismiss Message"
        aria-live="off"
        className={styles.closeButton}
        onClick={() => handleDismiss(id)}
      >
        <X size={24} />
        {/* <VisuallyHidden>Dismiss message</VisuallyHidden> */}
      </button>
    </div>
  );
}

export default Toast;
