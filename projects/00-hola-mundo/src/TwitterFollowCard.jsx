export function TwitterFollowCard ({userName, name, isFollowing}) {
    console.log(userName)
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
        <button className="tw-followCardButton">Seguir</button>
      </aside>
    </article>
  );
};
