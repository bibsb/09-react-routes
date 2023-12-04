import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import DefaultLayout from './layout/DefaultLayout';
import PostScreens from './screens/PostScreens';
import NewPostScreen from './screens/NewPostScreen';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<div>Home de nuevo</div>} />
        <Route path="/new-post" element={<NewPostScreen/>} />
        <Route path="/post/:postId/" element={<PostScreens/>} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
