import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import ShowBook from "./pages/ShowBook";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const [notification, setNotification] = useState("");
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              notification={notification}
              setNotification={setNotification}
            />
          }
        />
        <Route
          path="/books/create"
          element={<CreateBook setNotification={setNotification} />}
        />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route
          path="/books/delete/:id"
          element={<DeleteBook setNotification={setNotification} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
