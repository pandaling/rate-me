import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Favorite } from '@material-ui/icons';
import { MyButton } from "../../UI";
import noticeCss from './Notice.module.css';

export const Notice: React.FC = () => {
  let history = useHistory();
  const navigateToHome = () => history.push('/');

  return (
    <Fragment>
      <div className={noticeCss.main}>
        <h1><Favorite style={{ color: 'red' }} /> Thank You <Favorite style={{ color: 'red' }} /></h1>
        <h4>Thanks for your rating. It will definitely help us to improve our services.</h4>
        <MyButton
          onClick={navigateToHome}
          label='Back to home'
        />
      </div>
    </Fragment>
  );
}