import { useState } from "react";
import { HandsClapping, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}
export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/andyalmeida.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>André Almeida</strong>
              <time title="02 de Julho de 2022 às 12:04h" dateTime="2022-07-02 12:04:52">Cerca de 2h atrás</time>
            </div>
           <button onClick={handleDeleteComment} title="Deletar comentário">
             <Trash size={24}/>
           </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
