const Contact = ({ name, number }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button">delete</button>
    </>
  );
};

export default Contact;
