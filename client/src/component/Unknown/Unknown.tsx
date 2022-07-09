import unknownCss from './Unknown.module.css';

export const Unknown: React.FC = () => {
  return (
    <div className={unknownCss.main}>
      <h1>Oops! Page not found.</h1>
    </div>
  );
};