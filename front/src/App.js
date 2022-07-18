import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WriteContainer from "./pages/WirteContainer";
import MainContainer from "./pages/MainContainer";

function App() {
  const domain = "http://localhost:5050";
  const [contents, setContents] = useState([]);

  const getContents = () => {
    return fetch(domain + "/contents")
      .then((res) => res.json())
      .then((data) => {
        setContents(data);
      });
  };
  useEffect(() => {
    getContents();
  }, []);
  const addContents = (WriteContainer) => {
    // const newContents = {
    //   id: "unique id",
    //   title: title,
    //   content: content,
    //   address: address,
    //   createdAt: new Date(),
    // };
    fetch(domain + "/contents/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(WriteContainer),
    }).then(() => {
      getContents();
    });
  };
  const editContents = ({ WriteContainer, id }) => {
    fetch(domain + `/contents/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(WriteContainer),
    }).then((res) => {
      if (res.status === 201) {
        getContents();
      }
    });
  };

  const deleteContents = (id) => {
    fetch(domain + `/contents/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 202 || 204) {
        getContents();
      }
    });
    console.log("delete" + id);
  };

  return (
    <Router>
      <div className="App">
        <main>
          <Nav />
          <section className="features">
            <Routes>
              <Route
                path="/"
                element={
                  <MainContainer
                    contents={contents}
                    deleteContents={deleteContents}
                  />
                }
              />
              <Route
                path="/write"
                element={
                  <WriteContainer
                    contents={contents}
                    addContents={addContents}
                  />
                }
              />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
