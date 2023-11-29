import React, { useState } from 'react';
import { BotaoCondicional } from '../Comentar/style';

function Curtir({ autorId }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const token = localStorage.getItem('token')

  console.log(autorId)
  const handleLikeClick = () => {
    if (token !== autorId && !isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
      console.log('token')
    
    } else if (isLiked) {
      setLikes(likes - 1)
      setIsLiked(false)
    }
  };


  return (
      <BotaoCondicional onClick={handleLikeClick}>
        Curtir {likes}
      </BotaoCondicional>
  );
}

export default Curtir;
