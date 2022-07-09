import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import btscss from '../Button/Button.module.css';

export function MyPopover({ label, onClick, bgColor, show }: any) {
  return (
    <OverlayTrigger show={show} trigger="click" rootClose placement="right" overlay={_popover({})}>
      <Button
        className={btscss.button_rate}
        onClick={onClick}
        style={{ backgroundColor: bgColor }}
      >{label}
      </Button>
    </OverlayTrigger>
  );
}

// Private function
function _popover({ imgSrc = 'icon_male.png', width = '60px', height = '60px' }) {
  return (
    <Popover id="popover-1">
      <Popover.Content>
        <img alt='' src={imgSrc} width={width} height={height}></img>
      </Popover.Content>
    </Popover>
  );
}