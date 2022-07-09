import React, { Fragment } from 'react';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Row, Col } from 'react-bootstrap';
import { Send } from '@material-ui/icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import reportCss from './Report.module.css';
import palette from '../../styles/palette.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

const state = {
  labels,
  datasets: [
    {
      label: 'Client data',
      backgroundColor: 'rgba(188,17,156,0.3)',
      borderColor: 'rgba(188,17,156,1)',
      borderWidth: 1,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Client Happiness',
    },
  },
  scales: {
    yAxes: {
      title: {
        display: true,
        text: 'No. of client',
        font: {
          size: 12
        }
      },
      ticks: {
        precision: 0
      }
    },
    xAxes: {
      title: {
        display: true,
        text: 'Happiness Level',
        font: {
          size: 12
        }
      }
    }
  }
};

export const Report: React.FC = () => {
  return (
    <Fragment>
      <div className={reportCss.main}>
        <h4 className={reportCss.title}>Happiness Rating Report</h4>
        <div className={reportCss.chart_content}>
          <Bar
            data={state}
            options={options}
          />
        </div>
        <Col>
          <h5>Key trend data</h5>
          <Col>
            <Row>
              <Send className={palette.icon_color} />
              <h6 style={{ padding: '0 7px' }}>Trend in period since last session</h6>
            </Row>
            <p className='small text-muted pl-3'>Across 14 check-ins the overall feeling score is 5.6, with a low of 2, high of 8 and standard deviation of 1.9.</p>
          </Col>
          <Col style={{ paddingBottom: '20px' }}>
            <Row>
              <Send className={palette.icon_color} />
              <h6 style={{ padding: '0 7px' }}>Trend vs Overall</h6>
            </Row>
            <p className='small text-muted pl-3'>The overall trend is slightly negative, with a decline of 0.6 seen across the 14 check-ins.</p>
          </Col>
        </Col>
      </div>
    </Fragment>
  );
};