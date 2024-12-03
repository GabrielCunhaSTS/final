import React, { useState, useEffect } from "react";
import styles from "./comentario.module.css";
import perfil from '../img/Group 30.svg';

function Comentario() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    
    useEffect(() => {
        const savedComments = localStorage.getItem("comments");
        if (savedComments) {
            setComments(JSON.parse(savedComments)); 
        }
    }, []);

    
    const saveCommentsToLocalStorage = (comments) => {
        localStorage.setItem("comments", JSON.stringify(comments));
    };

    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            const newComments = [
                ...comments,
                {
                    user: "Yara Nivendo",
                    avatar: perfil,
                    text: newComment,
                },
            ];

            setComments(newComments);
            saveCommentsToLocalStorage(newComments);

            setNewComment("");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.commentBox}>
                <div className={styles.userInfo}>
                    <img
                        src={perfil}
                        className={styles.avatar}
                        style={{ width: '80px' }}
                    />
                    <span className={styles.userName}>Yara Nivendo</span>
                </div>
                <textarea
                    placeholder="Digite seu comentário..."
                    className={styles.textArea}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button className={styles.submitButton} onClick={handleAddComment}>
                    Enviar
                </button>
            </div>
            <div className={styles.commentsList}>
                {comments.map((comment, index) => (
                    <div key={index} className={styles.comment}>
                        <div className={styles.commentHeader}>
                            <img
                                src={comment.avatar}
                                className={styles.avatar}
                                style={{ width: '80px' }}
                            />
                            <span className={styles.userName}>{comment.user}</span>
                        </div>
                        <p className={styles.commentText}>{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comentario;
