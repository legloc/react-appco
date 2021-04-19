import { Line } from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2'

defaults.global.defaultColor = '#000';
defaults.global.defaultFontFamily = 'Montserrat';

const LineChart = ({ name, labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: name,
        fill: false,
        borderColor: '#3a80ba',
        borderWidth: 4,
        pointBorderColor: '#3a80ba',
        pointBackgroundColor: '#3a80ba',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#3a80ba',
        pointHoverBorderColor: '#3a80ba',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data,
      }
    ]
  }

  const chartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        ticks: {
          fontSize: 16,
          padding: 24,
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 16,
          padding: 36,
        },
        gridLines: {
          drawBorder: false
        }
      }]
    },
    tooltips: {
      displayColors: false,
      fontFamily: 'Montserrat',
      titleFontSize: 14,
      bodyFontSize: 12,
      xPadding: 10,
      yPadding: 10,
    }
  }

  return (
    <Line data={ chartData } options={ chartOptions } />
  )
}

export default LineChart