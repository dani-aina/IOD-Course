function Address({ street, suburb, postcode }) {
  return (
    <div className="Address componentBox">
      <h3>Address</h3>
      <p>{street}</p>
      <p>{suburb}</p>
      <p>{postcode}</p>
    </div>
  );
}

export default Address;
