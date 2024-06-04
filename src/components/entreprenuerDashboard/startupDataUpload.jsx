import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import Button from 'react-bootstrap/Button';
import { Row, Card, Container } from 'react-bootstrap';
import '../assets/css/entrepreneurDashboard.css';
import axios from 'axios';


const StartupDataUpload = (data) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [totalProfit, setTotalProfit] = useState(null);
    const [error, setError] = useState(null);

    const fileTypes = ["csv", "xls"];

    const handleFileChange = (file) => {
        setSelectedFile(file);
    };

    const em = localStorage.getItem('userEmail');

    let Profit = localStorage.getItem('total_profit');
    const analyticsDataUpload = async () => {
        const profitData = { profit: Profit }; // Create an object with the profit data
        try {
            const response = await axios.put(`http://localhost:8080/api/model/add/evaluation/data/${em}`, profitData);
            if (response.status === 201) {
                window.alert('Profit Uploaded Successfully');
            } else {
                window.alert('Profit UProfit Not Updated...');
            }
        } catch (error) {
            console.error('Error updating profit data:', error);
        }
    };


    const handleUpload = () => {
        if (!selectedFile) {
            setError('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('csv_file', selectedFile);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to upload file.');
                }
                return response.json();
            })
            .then(data => {
                if (data.total_profit) {
                    setTotalProfit(data.total_profit);
                    localStorage.setItem('total_profit', data.total_profit);
                    setError(null);
                } else {
                    setError('Failed to predict profit.');
                    setTotalProfit(null);
                }
            })
            .catch(error => {
                setError('An error occurred while uploading the file.');
                setTotalProfit(null);
            });
    };


    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h1 className='fw-bold'>Profit Prediction</h1></Card.Title>
                    <Row className='my-3 p-3'>
                        {totalProfit && (


                            <div>
                                <h2>Startup Profit : </h2>
                                <h3>
                                    <p style={{ fontStyle: 'italic' }}>
                                        <i>{totalProfit}</i>
                                    </p>
                                </h3>
                                <Button variant="dark" className='my-3' onClick={analyticsDataUpload}>Save</Button>
                            </div>
                        )}

                        {error && (
                            <p style={{ color: 'red' }}>{error}</p>
                        )}

                    </Row>

                    <Row className='my-1 mt-3 align-center' style={{ width: '100%', height: '65vh' }}>
                        <FileUploader handleChange={handleFileChange} name="file" types={fileTypes} style={{ width: '100%', height: '100%' }} />
                    </Row>

                    <Row>
                        <div className="d-grid">
                            <Button variant="dark" className='my-3' onClick={handleUpload}>
                                Upload
                            </Button>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default StartupDataUpload;
