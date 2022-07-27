import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WriteContainer from "./pages/WirteContainer";
import MainContainer from "./pages/MainContainer";
import LoadingSpinner from "./Modal/LoadingSpinner";

function App() {
  const domain = "http://localhost:5050";
  const [contents, setContents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getContents = useCallback(() => {
    setIsLoading(true);
    fetch(domain + "/contents")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setContents(data);
      })
      .catch((e) => {
        setIsLoading(true);
        console.log(`에러 캐치 ${e}`);
      });
  });

  useEffect(() => {
    getContents();
    console.log("이펙트");
  }, []);

  const addContents = (WriteContainer) => {
    setIsLoading(true);

    fetch(domain + "/contents/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(WriteContainer),
    })
      .then(() => {
        getContents();
      })
      .catch((e) => {
        setIsLoading(true);
        console.log(`에러 캐치 ${e}`);
      });
  };
  const editContents = ({ UpdateContainer, id }) => {
    setIsLoading(true);

    fetch(domain + `/contents/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateContainer),
    })
      .then((res) => {
        if (res.status === 200) {
          getContents();
        }
      })
      .catch((e) => {
        setIsLoading(true);
        console.log(`에러 캐치 ${e}`);
      });
  };

  const deleteContents = (id) => {
    console.log(id);
    setIsLoading(true);

    fetch(domain + `/contents/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 202 || 204) {
          getContents();
          console.log(id);
        }
      })
      .catch((e) => {
        setIsLoading(true);
        console.log(`에러 캐치 ${e}`);
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
                  isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <MainContainer
                      contents={contents}
                      deleteContents={deleteContents}
                      editContents={editContents}
                    />
                  )
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
