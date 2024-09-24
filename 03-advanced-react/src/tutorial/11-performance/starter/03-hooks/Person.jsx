const Person = ({ name, removePerson, id }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Delete</button>
    </div>
  );
};
export default Person;
