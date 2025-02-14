// src/pages/index.js
import { useEffect, useState } from "react";
import Link from "next/link";
import { getMeetings, deleteMeeting } from "../utils/api";
import MeetingList from "../components/MeetingList";
import styles from "../styles/globals.css";

export default function Home() {
  const [meetings, setMeetings] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchMeetings();
  }, [page, limit]);

  const fetchMeetings = async () => {
    const data = await getMeetings(page, limit);
    setMeetings(data.zoom_meets);
    setTotal(data.total);
  };

  const handleDelete = async (meetingId) => {
    await deleteMeeting(meetingId);
    fetchMeetings(); // Refresh list after delete
  };

  return (
    <div className="container">
      <h1>Zoom Meetings</h1>
      <Link href="/create">
        <button className="create">Create New Meeting</button>
      </Link>
      <MeetingList meetings={meetings} onDelete={handleDelete} />
      <div>
        <button
          className="nav"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>Page {page}</span>
        <button
          className="nav"
          onClick={() => setPage(page + 1)}
          disabled={page * limit >= total}
        >
          Next
        </button>
      </div>
    </div>
  );
}
