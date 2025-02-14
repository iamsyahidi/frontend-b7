// src/components/MeetingList.js
import Link from "next/link";
import styles from "../styles/MeetingList.module.css";

export default function MeetingList({ meetings, onDelete }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Topic</th>
          <th>Start Time</th>
          <th>Duration</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {meetings.map((meeting) => (
          <tr key={meeting.id}>
            <td>{meeting.topic}</td>
            <td>{new Date(meeting.start_time).toLocaleString()}</td>
            <td>{meeting.duration} minutes</td>
            <td>{meeting.status}</td>
            <td className={styles.actions}>
              <Link href={`/edit/${meeting.id}`}>
                <button className="edit">Edit</button>
              </Link>
              <button className="delete" onClick={() => onDelete(meeting.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
