import React, { useContext, useState } from "react";
import UserContext from "../UserContext";

function EditProfile() {
  const { updateUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email }); // send new data to context
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit User Info</h3>
      <input
        type="text"
        placeholder="New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="New Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditProfile;
