export const useTallyForm = () => {
  const openForm = () => {
    if (window.Tally) {
      window.Tally.openPopup('Xx2xGg');
    }
  };

  return { openForm };
};

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string) => void;
      loadEmbeds: () => void;
    };
  }
}
