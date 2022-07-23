import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WriteContainer from "./pages/WirteContainer";
import MainContainer from "./pages/MainContainer";

function App() {
  const domain = "http://localhost:5050";
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getContents();
  }, []);

  const getContents = useCallback(() => {
    return fetch(domain + "/contents")
      .then((res) => res.json())
      .then((data) => {
        setContents(data);
      });
  });
  const addContents = (WriteContainer) => {
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
  const editContents = ({ UpdateContainer, id }) => {
    console.log(contents);
    console.log(UpdateContainer);
    console.log(id);
    fetch(domain + `/contents/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateContainer),
    }).then((res) => {
      if (res.status === 200) {
        getContents();
      }
    });
  };

  const deleteContents = (id) => {
    console.log(id);
    fetch(domain + `/contents/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 202 || 204) {
        getContents();
        console.log(id);
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
                    editContents={editContents}
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
