import React, { Fragment, useEffect, useState } from 'react';
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
import { HttpService } from '../../services/HttpService';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Report: React.FC = () => {
  let httpService = new HttpService();
  const [reportData, setReportData] = useState({
    noOfCheckIns: 0,
    min: 0,
    max: 0,
    stddev: 0,
    mean: 0,
  });

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

  useEffect(() => {
    getAllRating();
  }, []);

  const calculateStdDev = (nums: number[]) => {
    const noOfCheckIns: number = nums.length;
    let sums: number = nums.reduce((prevVal, currVal) => {
      return prevVal + currVal;
    }, 0);

    let mean: number = parseFloat((sums / noOfCheckIns).toFixed(1));

    // Sum of square
    let sumOfP2: number = 0;
    nums.forEach(num => {
      let dev: number = num - mean;

      let devp2 = Math.pow(dev, 2);

      sumOfP2 = sumOfP2 + devp2;
    });

    // Find variance
    let variance: number = sumOfP2 / (noOfCheckIns - 1);

    // Find std dev
    let stdDev = parseFloat(Math.sqrt(variance).toFixed(1));

    setReportData(reportData => ({
      ...reportData,
      stddev: stdDev,
      mean: mean,
    }));
  };

  const getAllRating = async () => {
    try {
      const rates = await httpService.queryAll('/rate/query');
      const sorted = rates.map((rate: any) => parseInt(rate.rating)).sort((a: number, b: number) => a - b);

      calculateStdDev(sorted);

      setReportData(reportData => ({
        ...reportData,
        noOfCheckIns: rates.length,
        min: sorted[0],
        max: sorted[sorted.length - 1],
      }));
    }
    catch (e) {
      console.error(e);
    }
  };

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
            <p className='small text-muted pl-3'>Across {reportData.noOfCheckIns} check-ins the overall feeling score is {reportData.mean}, with a low of {reportData.min}, high of {reportData.max} and standard deviation of {reportData.stddev}.</p>
          </Col>
          <Col style={{ paddingBottom: '20px' }}>
            <Row>
              <Send className={palette.icon_color} />
              <h6 style={{ padding: '0 7px' }}>Trend vs Overall</h6>
            </Row>
            <p className='small text-muted pl-3'>The overall trend is slightly negative, with a decline of 0.6 seen across the {reportData.noOfCheckIns} check-ins.</p>
          </Col>
        </Col>
      </div>
    </Fragment>
  );
};