import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit} from "../tuits/tuits-reducer"
import {updateTuitThunk} from "../../services/tuits-thunks";
const TuitStats = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    const [liked, setLiked] = useState(post.liked);
    const dispatch = useDispatch();
    const likeTuitHandler = () => {
        liked ? dispatch(updateTuitThunk({
            ...post,
            likes: post.likes + 1
        })) : dispatch(updateTuitThunk({
            ...post,
            likes: post.likes - 1
        }));
        setLiked(!liked);
    }
    return(
        <div className="row">
            <div className="col-3">
                <i className="bi bi-chat-right"></i> <span>&nbsp;</span>
                {post.replies}
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat"></i> <span>&nbsp;</span>
                {post.retuits}
            </div>
            <div className="col-3">
                {liked ?  (
                    <button onClick={() => likeTuitHandler(liked)}
                    className="bi bi-heart-fill text-danger">
                    </button>) :
                (<button onClick={() => likeTuitHandler(liked)}
                        className="bi bi-heart">
                    </button>)
                }<span>&nbsp;</span>
                {post.likes}
            </div>
            <div className="col-3">
                <i className="bi bi-share"></i> <span>&nbsp;</span>
            </div>
        </div>
    );
};
export default TuitStats;