import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import homecss from './Home.module.css';
import { MyButton, MyPopover } from '../../UI';
import { happinessLabel, happinessLevel } from '../../config/sample';

export const Home: React.FC = () => {
  let history = useHistory();

  const [happiness, setHappiness] = useState<string>('6');
  const onclickHappiness = (level: string) => setHappiness(level);

  const onclickSubmit = () => history.push('/submit-rate');
  const onclickReport = () => history.push('/report');

  return (
    <Fragment>
      <div className={homecss.main}>
        <h6 className={homecss.header}>Please rate us!</h6>
        <Container className={homecss.container}>
          <Row className={homecss.row}>
            <Col>
              {happinessLabel.map((label: string) => {
                return <Col style={{ margin: '70px 0' }}>{label}</Col>;
              })}
            </Col>
            <Col>
              {happinessLevel.map(level => {
                return <Col>
                  <MyPopover
                    label={level.label}
                    bgColor={level.color}
                    margin='20px 0'
                    onClick={() => onclickHappiness(level.label)}
                    show={happiness === level.label ? true : false}
                  />
                </Col>;
              })}
            </Col>
          </Row>
          <div className='flex flex-column' style={{ textAlign: 'center' }}>
            <MyButton label="Submit" onClick={onclickSubmit} />
            <MyButton label="Generate Report" onClick={onclickReport} />
          </div>
        </Container>
      </div>
    </Fragment >
  );
};
