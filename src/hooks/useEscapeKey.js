import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleDeleteAllToast(event) {
      if (event.key === "Escape") {
        {
          callback(event);
        }
      }
    }
    window.addEventListener("keydown", handleDeleteAllToast);

    return () => window.removeEventListener("keydown", handleDeleteAllToast);
  });
}

export default useEscapeKey;
