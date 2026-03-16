"use client";

import { useEffect } from "react";

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(target.closest("input, textarea, [contenteditable='true']"));
}

export default function InteractionGuard() {
  useEffect(() => {
    const handleSelectionStart = (event: Event) => {
      if (!isEditableTarget(event.target)) {
        event.preventDefault();
      }
    };

    const handleClipboard = (event: ClipboardEvent) => {
      if (!isEditableTarget(event.target)) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target)) {
        return;
      }

      const key = event.key.toLowerCase();
      const usingModifier = event.ctrlKey || event.metaKey;

      if (usingModifier && (key === "a" || key === "c" || key === "x")) {
        event.preventDefault();
      }
    };

    document.addEventListener("selectstart", handleSelectionStart);
    document.addEventListener("copy", handleClipboard);
    document.addEventListener("cut", handleClipboard);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("selectstart", handleSelectionStart);
      document.removeEventListener("copy", handleClipboard);
      document.removeEventListener("cut", handleClipboard);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}