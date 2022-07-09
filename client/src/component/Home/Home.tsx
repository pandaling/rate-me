import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import homecss from './Home.module.css';
import { MyButton, MyPopover } from '../../UI';
import { happinessLabel, happinessLevel } from '../../config/sample';
import { faker } from '@faker-js/faker';
import { HttpService } from '../../services/HttpService';
import { IRate } from '../../interfaces/rate.interface';

export const Home: React.FC = () => {
  let history = useHistory();

  let httpService = new HttpService();

  const [happiness, setHappiness] = useState<string>('6');
  const onclickHappiness = (level: string) => setHappiness(level);

  const onclickSubmit = async () => {
    const data: IRate = {
      username: faker.name.findName(),
      rating: happiness,
    };

    try {
      await httpService.add('/rate/add', data);
      history.push('/submit-rate');
    }
    catch (e) {
      console.error(e);
    }
  };

  const onclickReport = () => history.push('/report');

  return (
    <Fragment>
      <div className={homecss.main}>
        <h6 className={homecss.header}>Please rate us!</h6>
        <Container className={homecss.container}>
          <Row className={homecss.row}>
            <Col>
              {happinessLabel.map((label: string, idx: number) => {
                return <Col key={label} style={{ margin: '70px 0' }}>{label}</Col>;
              })}
            </Col>
            <Col>
              {happinessLevel.map((level, idx: number) => {
                return <Col key={level.label}>
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
