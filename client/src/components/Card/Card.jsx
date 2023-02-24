import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { deleteAstronauts } from '../../api/astronautsApi';
import styles from './Card.module.css';

function Card({ id, firstname, lastname, image, text }) {
  const queryClient = useQueryClient();

  const deleteAstronautMutation = useMutation(deleteAstronauts, {
    onSuccess: () => queryClient.invalidateQueries('astronauts')
  });

  const handleDelete = ({ id }) => {
    deleteAstronautMutation.mutate({ id });
  };
  return (
    <div className={styles.card}>
      <img
        src={
          image
            ? image
            : 'https://i.pinimg.com/originals/17/29/4c/17294ce8fe0d49e9da696c2772461773.png'
        }
        height="250px"
        width="250px"
      />
      <div className={styles.card_body}>
        <p className={styles.card_center_text}>
          {firstname} {lastname}
        </p>
        <div className={styles.card_button}>
          <Link to={`/detail/${id}`}>
            <button type="button" className={styles.green}>
              Voir plus
            </button>
          </Link>
          <Link to={`/update/${id}`}>
            <button type="button" className={styles.blue}>
              Modifier
            </button>
          </Link>
          <button type="button" className={styles.red} onClick={() => handleDelete({ id })}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
