import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as gameService from '../../services/gameService'
import * as commentService from '../../services/commentService'

export function GameDetails(){
    const {gameId} = useParams()
    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([])

    useEffect(()=> {
        gameService.getOne(gameId)
        .then(result => {
            setGame(result)
            return commentService.getAll(gameId)
        })
        .then(result =>{
            setComments(result)
        } )
    },[gameId])

    const onCommentSubmit = async (e) => {
        e.preventDefault()

        await commentService.create({
            gameId,
            username,
            comment
        })
        setUsername('')
        setComment('')
    }


    return(
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>

            <p className="text">
                {game.summary}
            </p>

            {/* <!-- Bonus ( for Guests and Users ) --> */}
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(c => {
                       return(<li key={c._id} className="comment">
                        <p>{c.username}: {c.comment}</p>
                        </li>)
                    })}
                </ul>

                   {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                   )}
            </div>

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>

        {/* <!-- Bonus --> */}
        {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onCommentSubmit}>
                <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text" name="username" placeholder="Pesho" />
                <textarea name="comment" placeholder="Comment......" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <input className="btn submit" type="submit" value="Add Comment"/>
            </form>
        </article>

    </section>
    );
}