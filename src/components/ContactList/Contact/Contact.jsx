const Contact = ({ name, number, onDelete, id }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDelete(id)}>
        delete
      </button>
    </>
  );
};

export default Contact;
