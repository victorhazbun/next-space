'use client';

import { useState } from "react";

export function ProfileForm({ user }: any) {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    try {
      const res = await fetch('/api/user', {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        setSuccessMessage('Profile updated successfully!');
      } else {
        setErrorMessage('An error occurred while updating the profile.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while updating the profile.');
    }
  };

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <p>{successMessage || errorMessage}</p>
      <form onSubmit={updateUser}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={user?.name ?? ''} />
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ''}
        ></textarea>
        <label htmlFor="age">Age</label>
        <input type="text" name="age" defaultValue={user?.age ?? 0} />
        <label htmlFor="image">Profile Image URL</label>
        <input type="text" name="image" defaultValue={user?.image ?? ''} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
