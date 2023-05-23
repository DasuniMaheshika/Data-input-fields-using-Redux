import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "./actions/actions";

function App() {
  const tableData = useSelector((state) => state.tableData);
  const dispatch = useDispatch();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleAddData = () => {
    if (name && email) {
      const data = { name, email };
      dispatch(addData(data));
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <div>
        <label style={{ padding: "10px" }}>Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "40%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
          }}
        />
        <br></br>
        <label style={{ padding: "10px" }}>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "40%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
          }}
        />
        <br></br>
        <button
          onClick={handleAddData}
          style={{
            width: "40%",
            backgroundColor: "#45a049",
            color: "#ffffff",
            padding: "14px 0",
            margin: "8px 60px",
            display: "inline-block",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>
      <br></br>
      <br></br>
      <table
        border="1px solid"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
