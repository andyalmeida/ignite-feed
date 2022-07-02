import { HandsClapping, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from './Comment.module.css';

export function Comment() {
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
           <button title="Deletar comentário">
             <Trash size={24}/>
           </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <HandsClapping />
            Aplaudir <span>24</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
