import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { updateAstronaut } from '../../api/astronautsApi';
import { useGetAstronautes } from '../hooks/useGetAstronautes';
import styles from '../Form/Form.module.css';

function Update() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetAstronautes('get_astronaute', id);

  const updateAstronautMutation = useMutation(updateAstronaut, {
    onSuccess: () => queryClient.invalidateQueries('astronauts')
  });

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const age = formData.get('age');
    const country = formData.get('country');
    const imageUrl = formData.get('image');
    const text = formData.get('text');

    updateAstronautMutation.mutate({
      id,
      firstname,
      lastname,
      age,
      country,
      image: imageUrl,
      text
    });

    navigate('/');
    form.reset();
  };

  return (
    <div>
      {isLoading ? (
        <p>Chargement</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <>
          <h1>Modifier un·e astronaute</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">Prénom</label>
            <input
              className={styles.custom_input}
              type="text"
              name="firstname"
              defaultValue={data.firstname}
            />
            <label htmlFor="lastname">Nom</label>
            <input
              className={styles.custom_input}
              defaultValue={data.lastname}
              type="text"
              name="lastname"
            />
            <label htmlFor="age">Age</label>
            <input className={styles.custom_input} defaultValue={data.age} type="text" name="age" />
            <label htmlFor="country">Pays de naissance</label>
            <input
              className={styles.custom_input}
              defaultValue={data.country}
              type="text"
              name="country"
            />
            <label htmlFor="image">Image (sous forme URL)</label>
            <input
              className={styles.custom_input}
              defaultValue={data.image}
              type="text"
              name="image"
            />
            <label htmlFor="text">Biographie</label>
            <textarea
              rows="10"
              cols="75"
              type="text"
              defaultValue={data.text}
              name="text"
              maxLength="250"
            />
            <button type="submit">Modifier</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Update;
