import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const RapportMap = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/api/reports')
      .then(response => response.json())
      .then(data => {
        
        setReports(data);
      })
      .catch(error => console.error('Erreur lors de la récupération des signalements:', error));
  }, []);

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {reports.map(report => (
        
        <Marker key={report._id} position={[report.location.coordinates[1], report.location.coordinates[0]]}>
          <Popup>
            <strong>{report.title}</strong><br/>
            {report.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default RapportMap;
