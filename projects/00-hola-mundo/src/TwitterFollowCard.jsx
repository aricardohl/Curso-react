import { useState } from "react";

export function TwitterFollowCard ({userName = 'unknown', name, initialFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCardButton is-following' 
    : 'tw-followCardButton'

    // const state = useState(false)
    // const isFollowing = state[0] // True
    // const setIsFollowing = state[1] // Function to set true or false

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

  return (
    <article className="tw-followCard">
      <header className="tw-followCardHeader">
        <img
          className="tw-followCardImg"
          src={`https://unavatar.io/x/${userName}`}
          alt="Avatar"
        />
        <div className="tw-followCardDiv">
          <strong>{name}</strong>
          <span className="tw-followCardSpan">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
        <span className="tw-followCard-text">{text}</span>
        <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};
