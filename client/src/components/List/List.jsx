import Card from '../Card/Card';
import styles from './List.module.css';

function List({ data }) {
  return (
    <div className={styles.container}>
      {data.map(({ id, firstname, lastname, image, text }) => (
        <Card
          key={id}
          id={id}
          firstname={firstname}
          lastname={lastname}
          image={image}
          text={text}
        />
      ))}
    </div>
  );
}

export default List;
