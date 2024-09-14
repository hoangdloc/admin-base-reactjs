import { useCallback, useState } from 'react';

const oldSchoolCopy = (text: string): void => {
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);
};

export const useCopyToClipboard = (): [
  string | null,
  (value: string) => void,
] => {
  const [state, setState] = useState<string | null>(null);

  const copyToClipboard = useCallback((value: string) => {
    const handleCopy = async () => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
          setState(value);
        } else {
          throw new Error('writeText not supported');
        }
      } catch (_error) {
        oldSchoolCopy(value);
        setState(value);
      }
    };

    void handleCopy();
  }, []);

  return [state, copyToClipboard];
};
