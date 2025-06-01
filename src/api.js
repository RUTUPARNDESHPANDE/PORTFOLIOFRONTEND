// src/api.js
import axios from 'axios';

const API_BASE = 'http://localhost:8081/api'; // Update if deployed

export const fetchSkills = () => axios.get(`${API_BASE}/skills`);
export const fetchEducation = () => axios.get(`${API_BASE}/education`);
export const fetchAbout = () => axios.get(`${API_BASE}/about`);
export const sendContact = (contact) => axios.post(`${API_BASE}/contacts`, contact);
