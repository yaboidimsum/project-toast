import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastsContext } from "../ToastProvider";
import UseEscapeKey from "../../hooks/useEscapeKey";

function ToastShelf({}) {
  // console.log(toasts);
  // console.log(typeof toasts);

  const { toasts, dismissToast, dismissAllToast } =
    React.useContext(ToastsContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map(({ id, text, variant }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            id={id}
            variant={variant}
            text={text}
            handleDismiss={dismissToast}
            dismissAllToast={dismissAllToast}
          />
        </li>
      ))}
      {/* <li className={styles.toastWrapper}>
        <Toast variant={variant} text={text} handleDismiss={handleDismiss} />
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant={variant} text={text} handleDismiss={handleDismiss} />
      </li> */}
    </ol>
  );
}

export default ToastShelf;
