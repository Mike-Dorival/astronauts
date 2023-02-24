import { useParams } from 'react-router-dom';
import { useGetAstronautes } from '../hooks/useGetAstronautes';
import styles from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetAstronautes('get_astronaute', id);

  return (
    <div>
      {isLoading ? (
        <p>Chargement</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.detail_crop_image}>
            <img
              className={styles.detail_img}
              src={
                data.image
                  ? data.image
                  : 'https://i.pinimg.com/originals/17/29/4c/17294ce8fe0d49e9da696c2772461773.png'
              }
              height="250px"
              width="250px"
            />
          </div>

          <div className={styles.detail_body}>
            <p className={styles.detail_name}>
              {data.firstname} {data.lastname}
            </p>

            <p>Age : {data.age} ans</p>
            <p>Pays de naissance : {data.country}</p>
            <p className={styles.detail_text_justify}>{data.text}</p>

            <p>
              Image utilisé : <br />
              <a href={data.image} target="blank">
                {data.image}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
