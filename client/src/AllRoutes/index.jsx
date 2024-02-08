import React from "react";
import { Route, Routes } from "react-router-dom";
import { Content, Login, NewContent, Signup, SingleContent } from "../Pages";
import ProtectedRoute from "../HOC/ProtectedRoute";

const AllRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Content />
        </ProtectedRoute>
      }
    />
    <Route
      path="/:_id"
      element={
        <ProtectedRoute>
          <SingleContent />
        </ProtectedRoute>
      }
    />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route
      path="/content/new"
      element={
        <ProtectedRoute>
          <NewContent />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AllRoutes;
