import { TextProps } from './Text.interfaces';

const Text = ({ text, type = 'default', className = '' }: TextProps) => {
  if (type === 'header') {
    return <h1 className={`text-4xl font-bold ${className}`}>{text}</h1>;
  }

  if (type === 'sub-header') {
    return <h2 className={`text-lg font-bold ${className}`}>{text}</h2>;
  }

  if (type === 'label') {
    return (
      <span className={`text-sm text-slate-400 ${className}`}>{text}</span>
    );
  }

  return <p>{text}</p>;
};

export default Text;
