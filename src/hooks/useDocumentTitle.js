import { useEffect } from "react";

// Create a custom Hook
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;

    return () => {
      console.log("Clean up");
    };
  });
}
