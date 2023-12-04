import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import postList from '../constans/postList';

export default function PostScreens() {
  const { postId } = useParams();
  const navigate = useNavigate();

  // on mopunt -> []
  // os dismount -> [] & return function
  // on dependecy change -> [algo] 
  useEffect(() => {
    if (!postList[postId]) {
      navigate('/404');
    }
  }, []);

  if (postList[postId]) {
    return (
      <div>
        <h1>{postList[postId].name}</h1>
        <p>{postList[postId].content}</p>
      </div>
    );
  }
}
