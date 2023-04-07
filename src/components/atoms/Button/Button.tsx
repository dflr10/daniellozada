import './Button.scss';

interface ButtonInterface {
  id?: string;
  type: 'button' | 'input' | 'link';
  classname: string;
  text: string | null | undefined;
  onClickAction?: () => any;
  isDisabled: boolean | undefined;
  icon?: string;
  href?: string;
  target?: string;
}

const Button = (props: ButtonInterface) => {
  const {
    id,
    type,
    classname,
    text,
    onClickAction,
    isDisabled,
    href,
    icon,
    target,
  } = props;

  /* const isHttp = (url?: string) => {
    return url?.startsWith('http');
  }; */

  return (
    <>
      <button
        id={id}
        className={`${'a-button '} ${classname} ${(isDisabled) ? '--disabled' : ''}`}
        disabled={isDisabled}
        onClick={onClickAction}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
