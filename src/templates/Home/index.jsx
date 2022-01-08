import { useEffect, useRef, useState } from 'react';
import { useFetch } from './use-fetch';

const Home = () => {
  // const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [postId, setPostId] = useState('');

  const [result, loading] = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'GET',
    header: {
      abs: '1' + postId,
    },
  });

  const handleClick = (id) => {
    setPostId(id);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <div key={`post-${p.id}`} onClick={() => handleClick(p.id)}>
              <p>{p.title}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClick('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }

  return <h1>Oi</h1>;
};

export default Home;
