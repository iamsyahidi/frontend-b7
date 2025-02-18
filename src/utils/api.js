import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Sesuaikan dengan URL backend Anda

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

export const deleteMeeting = async (id, meetingId) => {
  const response = await axios.delete(
    `${API_BASE_URL}/${id}?meeting_id=${meetingId}`,
  );
  return response.data.data;
};
