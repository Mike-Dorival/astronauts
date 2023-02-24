import { useState } from 'react';
import { Link } from 'react-router-dom';
import List from '../List/List';
import SearchBar from '../SearchBar/SearchBar';
import { useGetAstronautes } from '../hooks/useGetAstronautes';
import styles from './Home.module.css';

function Home() {
  const [searchAstronaut, setSearchAstronaut] = useState('');
  const { data, isLoading, isError, error } = useGetAstronautes(searchAstronaut);

  return (
    <>
      {isLoading ? (
        <p>Chargement</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.center_item}>
            <SearchBar setSearchAstronaut={setSearchAstronaut} />
            <button type="button">
              <Link to="/form">Ajouter</Link>
            </button>
          </div>
          <List data={data} searchAstronaut={searchAstronaut} />
        </div>
      )}
    </>
  );
}

export default Home;
