import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { gameServiceFactory } from "../../services/gameService";
import * as commentService from '../../services/commentService'
import { useService } from "../../hooks/useService";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { AddComment } from "./AddComment/AddComment";

export function GameDetails() {
  const { userId, isAuthenticated } = useAuthContext(AuthContext);
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const gameService = useService(gameServiceFactory);
  const navigate = useNavigate()

  useEffect(() => {
    Promise.all([
      gameService.getOne(gameId),
      commentService.getAll(gameId)
    ])
    .then(([gameData, comments]) => {
      setGame({
        ...gameData,
        comments,
      })
    })
  }, [gameId]);

  const onCommentSubmit = async (values) => {
    const response = await commentService.create(gameId, values.comment)
    
    setGame(state => ({
      ...state, 
      comments: [...state.comments, response]

    }))

    // setGame((state) => ({
    //   ...state,
    //   comments: { ...state.comments, [result._id]: result },
    // }));
    // setUsername("");
    // setComment("");
  };

  const isOwner = game._ownerId === userId;

  const onDeleteClick = async () => {
    await gameService.delete(game._id)
    //Delete from state

    navigate('/catalogue')
  }

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        {/* <!-- Bonus ( for Guests and Users ) --> */}
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {game.comments && game.comments.map(c => {
                return (
                  <li key={c._id} className="comment">
                    <p>{c.comment}</p>
                  </li>
                );
              })}
          </ul>

          {/* {game.comments ? (
            Object.values(game.comments).length
          ) : (
            <p className="no-comment">No comments.</p>
          )} */}
        </div>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        {isOwner && (
          <div className="buttons">
            <Link to={`/catalogue/${game._id}/edit`} className="button">
              Edit
            </Link>
            <button  className="button" onClick={onDeleteClick}>
              Delete
            </button>
          </div>
        )}
      </div>
          {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit}/>}
    </section>
  );
}
