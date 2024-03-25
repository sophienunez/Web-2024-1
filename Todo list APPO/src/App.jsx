// app.jsx
import React from 'react';
import { Header, Footer, Adding } from './components';
import { Body } from './components/body/Body';
import { TaskContextProvider } from './context/TaskContextProvider';

export default function App() {
  return (
    <TaskContextProvider>
      <AppContent />
    </TaskContextProvider>
  );
}

function AppContent() {
  console.log("Rendering AppContent...");
  return (
    <>
      <Header />
      <Adding />
      <Body />
      <Footer />
    </>
  );
}
