import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getMeetings, updateMeeting } from "../../utils/api";
import MeetingForm from "../../components/MeetingForm";

export default function EditMeeting() {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({
    user_id: "",
    topic: "",
    start_time: "",
    duration: 30,
    status: "active",
  });

  useEffect(() => {
    if (id) {
      fetchMeeting();
    }
  }, [id]);

  const fetchMeeting = async () => {
    const data = await getMeetings();
    const meeting = data.zoom_meets.find((m) => m.id === id);
    if (meeting) {
      meeting.start_time = new Date(meeting.start_time)
        .toISOString()
        .slice(0, 16);
      setFormData(meeting);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateMeeting(id, formData);
    router.push("/");
  };

  return (
    <div>
      <h1>Edit Meeting</h1>
      <MeetingForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
