import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CodesContext = createContext();

export const CodesProvider = ({ children }) => {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/codes');
        setCodes(response.data);
      } catch (error) {
        console.error('Error fetching codes:', error);
      }
    };

    fetchCodes();
  }, []);

  const addCode = async (code) => {
    try {
      const response = await axios.post('http://localhost:5001/api/codes', code);
      setCodes([...codes, { ...response.data, id: response.data._id }]);
    } catch (error) {
      console.error('Error adding code:', error);
    }
  };

  return (
    <CodesContext.Provider value={{ codes, addCode }}>
      {children}
    </CodesContext.Provider>
  );
};
