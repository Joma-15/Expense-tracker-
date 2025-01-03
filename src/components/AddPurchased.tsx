export const AddPurchased = () => {
  //hello world
  return (
    <>
      <h2>Add Transaction:</h2>
      <div className="input-container">
        <label htmlFor="Item Name">Item Name:</label>
        <input type="text" placeholder="Item Name"/>

        <label htmlFor="Item Name">Amount:</label>
        <input type="text" placeholder="Amount"/>
      </div>
      <button type="button" className="btn btn-success purchased-btn">Purchase</button>
    </>
  );
};
