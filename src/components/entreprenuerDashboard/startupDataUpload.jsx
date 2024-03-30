import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import Button from 'react-bootstrap/Button';
import { Row, Card, Container } from 'react-bootstrap';


const StartupDataUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [totalProfit, setTotalProfit] = useState(null);
    const [error, setError] = useState(null);

    const fileTypes = ["csv", "xls"];

    const handleFileChange = (file) => {
        setSelectedFile(file);
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
                                <h2><p>{totalProfit}</p></h2>

                            </div>
                        )}

                        {error && (
                            <p style={{ color: 'red' }}>{error}</p>
                        )}

                    </Row>

                    <Row className='my-1 mt-3 p-4 align-center'>
                        <FileUploader handleChange={handleFileChange} name="file" types={fileTypes} />
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
