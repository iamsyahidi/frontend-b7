// src/components/MeetingForm.js
import styles from "../styles/MeetingForm.module.css";

export default function MeetingForm({ formData, setFormData, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div>
        <label>User ID:</label>
        <input
          type="text"
          name="user_id"
          value={formData.user_id}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Topic:</label>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Start Time:</label>
        <input
          type="datetime-local"
          name="start_time"
          value={formData.start_time}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Duration (minutes):</label>
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
