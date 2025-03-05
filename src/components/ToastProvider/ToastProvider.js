import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      text: "hello",
      variant: "error",
    },
  ]);

  function createToast(text, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        text,
        variant,
      },
    ];

    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }
  // Custom hooks for deletion
  useEscapeKey(() => setToasts([]));

  return (
    <ToastsContext.Provider
      value={{ toasts, setToasts, createToast, dismissToast }}
    >
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
