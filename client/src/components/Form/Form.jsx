import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { addAstronaut } from '../../api/astronautsApi';
import styles from './Form.module.css';

function Form() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const addAstronautMutation = useMutation(addAstronaut, {
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

    addAstronautMutation.mutate({ firstname, lastname, age, country, image: imageUrl, text });

    navigate('/');
    form.reset();
  };

  return (
    <div>
      <h1>Ajouter un·e astronaute</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Prénom</label>
        <input className={styles.custom_input} type="text" required name="firstname" />
        <label htmlFor="lastname">Nom</label>
        <input className={styles.custom_input} type="text" required name="lastname" />
        <label htmlFor="age">Age</label>
        <input className={styles.custom_input} type="text" name="age" />
        <label htmlFor="country">Pays de naissance</label>
        <input className={styles.custom_input} type="text" name="country" />
        <label htmlFor="image">Image (sous forme URL)</label>
        <input className={styles.custom_input} type="text" name="image" />
        <label htmlFor="text">Biographie</label>
        <textarea rows="10" cols="75" type="text" name="text" maxLength="50" />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default Form;
