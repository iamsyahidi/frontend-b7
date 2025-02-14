import axios from "axios";

const API_BASE_URL = "http://localhost:3002/v1/meets"; // Sesuaikan dengan URL backend Anda

export const getMeetings = async (page = 1, limit = 10) => {
  const response = await axios.get(
    `${API_BASE_URL}?page=${page}&limit=${limit}`,
  );
  return response.data.data;
};

export const createMeeting = async (meetingData) => {
  meetingData.start_time = new Date(meetingData.start_time).toISOString();
  meetingData.duration = parseInt(meetingData.duration, 10);
  const response = await axios.post(API_BASE_URL, meetingData);
  return response.data.data;
};

export const updateMeeting = async (meetingId, meetingData) => {
  meetingData.start_time = new Date(meetingData.start_time).toISOString();
  meetingData.duration = parseInt(meetingData.duration, 10);
  const response = await axios.put(`${API_BASE_URL}/${meetingId}`, meetingData);
  return response.data.data;
};

export const deleteMeeting = async (meetingId) => {
  const response = await axios.delete(`${API_BASE_URL}/${meetingId}`);
  return response.data.data;
};
