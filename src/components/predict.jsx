import { Card, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Button from 'react-bootstrap/Button';
import { useParams, Link, useNavigate } from 'react-router-dom';



function Predict() {
  const navigate = useNavigate(); // Get the navigate function
  const { id } = useParams();
  return (
    <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '50vh' }}>
      <Card className='w-100 text-center'>
        <Card.Body>
          <Card.Title>
            <h1> Evaluation & Profit Prediction of Startup </h1>
          </Card.Title>
          {/* Doughnut Graph */}
          <Card className='mt-5 mb-5'>
            <Card.Body>
              <Row className='justify-content-center align-items-center' style={{ height: '70vh' }}>
                <Doughnut
                  data={{
                    labels: ["Red", "Blue", "Yellow"],
                    datasets: [{
                      data: [300, 50, 100], // Dummy data values for the doughnut chart
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.6)', // Background color for each segment
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)', // Border color for each segment
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                      ],
                      borderWidth: 1
                    }]
                  }}
                />
              </Row>
            </Card.Body>
          </Card>

          {/* Line graph */}
          <Card className='mt-5 mb-5'>
            <Card.Body>
              <Row className='justify-content-center' style={{ height: '60vh' }}>
                <Line
                  data={{
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                      {
                        label: "My First Dataset",
                        data: [65, 59, 80, 81, 56, 55, 40], // Dummy data values for the line chart
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1
                      }
                    ]
                  }}
                />
              </Row>
            </Card.Body>
          </Card>

          {/* Bar graph */}
          <Card className='mt-5 mb-5'>
            <Card.Body>
              <Row className='justify-content-center' style={{ height: '60vh' }}>

                <Bar
                  data={{
                    labels: ["A", "B", "C"],
                    datasets: [
                      {
                        label: 'Dummy Data',
                        data: [50, 70, 30], // Dummy data values for the bar chart
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.2)', // Background color for the bars
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                        ],
                        borderColor: [
                          'rgba(255, 99, 132, 1)', // Border color for the bars
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                        ],
                        borderWidth: 1, // Border width for the bars
                      },
                    ],
                  }}
                />

              </Row>
            </Card.Body>
          </Card>

        </Card.Body>

        <Button className='mx-auto d-block mb-5 w-80' variant="dark" onClick={() => navigate(-1)}>
          Go back
        </Button>

      </Card>

    </Container>
  );
}

export default Predict;
