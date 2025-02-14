import { useState } from 'react';
import { useRouter } from 'next/router';
import { createMeeting } from '../utils/api';
import MeetingForm from '../components/MeetingForm';

export default function CreateMeeting() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    user_id: '',
    topic: '',
    start_time: '',
    duration: 30,
    status: 'active',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMeeting(formData);
    router.push('/');
  };

  return (
    <div>
      <h1>Create New Meeting</h1>
      <MeetingForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
    </div>
  );
}