/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import "./index.css";

const contents = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "อาหารคาว",
    menuName: "ข้าวผัด",
    menuContent:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde exercitationem hic reprehenderit dolores esse magni optio ducimus sunt quasi rerum doloremque doloribus at suscipit excepturi iusto vitae ipsam minus quod odio, similique aliquid asperiores placeat? Dolores repellat laudantium nisi magnam aliquam ad provident quo.",
  },
  {
    id: "2",
    imageUrl: "https://img.kapook.com/u/2022/wanwanat/1079595941.jpg",
    title: "อาหารหวาน",
    menuName: "บัวลอย",
    menuContent:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde exercitationem hic reprehenderit dolores esse magni optio ducimus sunt quasi rerum doloremque doloribus at suscipit excepturi iusto vitae ipsam minus quod odio, similique aliquid asperiores placeat? Dolores repellat laudantium nisi magnam aliquam ad provident quo.",
  },
];

function useVote() {
  const [vote, setVote] = useState(0);

  const upVote = () => {
    if (vote == 10) alert("Cannot vote");
    setVote((state) => (state < 10 ? state + 1 : state));
  };

  const downVote = () => {
    if (vote == 0) alert("Cannot unvote");
    setVote((state) => (state > 0 ? state - 1 : state));
  };

  return { vote, upVote, downVote };
}

const App = () => {
  const state1 = useVote(); // state stayed at parent level
  const state2 = useVote(); // state stayed at parent level

  return (
    <main>
      <h1 className="topic">โหวตอาหาร</h1>
      <Card content={contents[0]} {...state1} />
      <Card content={contents[1]} {...state2} />
    </main>
  );
};

const Card = ({ content, vote, upVote, downVote }) => {
  const displayVote = () => {
    switch (vote) {
      case 0:
        return "MIN";
      case 10:
        return "MAX";
      default:
        return vote;
    }
  };

  return (
    <div className="card">
      <div className="content">
        <div className="content__text">
          <h1>{content.title}</h1>
          <strong>{content.menuName}</strong>
          <p>{content.menuContent}</p>
        </div>
        <img className="content__image" src={content.imageUrl} />
      </div>
      <div className="action">
        <button onClick={upVote} className="action__button">
          Click to Vote
        </button>
        <div className="action__counter">{displayVote()}</div>
        <button onClick={downVote} className="action__button">
          Click to Unvote
        </button>
      </div>
    </div>
  );
};

export default App;
