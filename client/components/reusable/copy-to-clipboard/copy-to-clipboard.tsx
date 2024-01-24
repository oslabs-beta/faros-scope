import { FaCopy } from 'react-icons/fa';
import './copy-to-clipboard.scss';

interface Props {
  text: string;
}

export const CopyToClipboard = ({ text }: Props) => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
      className="copyToClipboard"
    >
      {/* <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      /> */}
      <FaCopy />
    </button>
  );
};
