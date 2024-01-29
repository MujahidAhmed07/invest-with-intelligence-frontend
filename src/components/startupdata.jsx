import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StartupComponent = () => {
    const [startupData, setStartupData] = useState({});
    const [newStartup, setNewStartup] = useState({});
    const [updateStartup, setUpdateStartup] = useState({});

    // Fetch startup data
    useEffect(() => {
        fetchStartupData();
    }, []);

    const fetchStartupData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/iwi/startup/get/1');
            setStartupData(response.data);
        } catch (error) {
            console.error('Error fetching startup data:', error);
        }
    };

    // Add new startup
    const addStartup = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/iwi/startup/add/details', newStartup);
            console.log('New startup added:', response.data);
            // Optionally, you can fetch the updated data after adding a new startup
            fetchStartupData();
        } catch (error) {
            console.error('Error adding startup:', error);
        }
    };

    // Update startup data
    const updateStartupData = async (id) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/iwi/startup/update/details/${id}`, updateStartup);
            console.log('Startup data updated:', response.data);
            // Optionally, you can fetch the updated data after updating startup data
            fetchStartupData();
        } catch (error) {
            console.error('Error updating startup data:', error);
        }
    };

    return (
        <div>
            <h2>Startup Details</h2>
            <pre>{JSON.stringify(startupData, null, 2)}</pre>

            <h2>Add New Startup</h2>
            <button onClick={addStartup}>Add New Startup</button>

            <h2>Update Startup Data</h2>
            <button onClick={() => updateStartupData(1)}>Update Startup Data</button>
        </div>
    );
};

export default StartupComponent;
