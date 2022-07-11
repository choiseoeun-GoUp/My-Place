import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WriteContainer from "./pages/WirteContainer";
import SearchPlace from "./pages/SearchPlace";

function App() {
  const domain = "http://localhost:5050";
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getContents();
  }, []);
  const getContents = () => {
    return fetch(domain + "/contents")
      .then((res) => res.json())
      .then((data) => {
        setContents(data);
      });
  };
  const addContents = ({ title, address, content }) => {
    const newContents = {
      id: "unique id",
      title: title,
      bodyHTML: content,
      address: address,
      createdAt: new Date(),
    };
    fetch(domain + "/contents/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContents),
    }).then((res) => {
      if (res.status === 201) {
        getContents();
      }
    });
  };

  const deleteContents = (id) => {
    console.log("delete?");
    fetch(domain + `/contents/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 202 || 204) {
        getContents();
      }
    });
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <SearchPlace contents={contents} deleteContents={deleteContents} />
          }
        />
        <Route
          path="/write"
          element={<WriteContainer addContents={addContents} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
