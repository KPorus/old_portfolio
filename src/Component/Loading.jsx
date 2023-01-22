import React from 'react';

const Loading = () => {
    return (
      <lottie-player
        src='https://assets3.lottiefiles.com/packages/lf20_4kmUDEKo63.json'
        background='transparent'
        speed='1'
        style={{width: "300px", height: "300px", margin:"auto"}}
        loop
        autoplay></lottie-player>
    );
};

export default Loading;