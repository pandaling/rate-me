import btscss from './Button.module.css';

export function MyButton({ onClick, label }: any) {
  return (
    <button
      type='button'
      className={`${btscss.button}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export function MyRoundedButton(props: any) {
  return (
    <button
      type='button'
      className={btscss.button_rate}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}