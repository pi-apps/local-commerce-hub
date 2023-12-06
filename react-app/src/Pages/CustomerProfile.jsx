import React, { useState } from 'react';
import profile from '../Components/Assets/profile.png';
import './Profile.css';

const CustomerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Edward Cullen');
  const [email, setEmail] = useState('notavampire@gmail.com');
  const [phone, setPhone] = useState('123-456-7890');

  const handleUpdateProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    // Perform the logic to save the updated profile information (e.g., send a request to the server)
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <img src={profile} alt="" className="profile-image" />
      {isEditing ? (
        <form>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Phone:
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <button className="button" onClick={handleSaveProfile}>
            Save Profile
          </button>
        </form>
      ) : (
        <>
          <h2>Name: {name}</h2>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <button className="button" onClick={handleUpdateProfile}>
            Update Profile
          </button>
        </>
      )}
    </div>
  );
};

export default CustomerProfile;