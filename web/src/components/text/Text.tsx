import { TextProps } from './Text.interfaces';

const Text = ({ text, type = 'default' }: TextProps) => {
  if (type === 'header') {
    return <h1>{text}</h1>;
  }

  if (type === 'sub-header') {
    return <h2>{text}</h2>;
  }

  if (type === 'label') {
    return <span>{text}</span>;
  }

  return <p>{text}</p>;
};

export default Text;
