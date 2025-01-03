import { useState } from "react";

export const AddPurchased = () => {
  const [items, setItem] = useState("");
  const [amounts, setAmount] = useState("");

  const StorePurchasedItem = (item: string): void => {
    localStorage.setItem("item", item);
  };

  const StoreItemAmount = (amount: string): void => {
    localStorage.setItem("amount", amount);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //stop the page from reloading when the form is submitted
    if (amounts.trim() === "" || items.trim() === "") {
      alert("item and amount cannot be empty");
      return;
    }
    alert("item submitted successfully")
    StorePurchasedItem(items);
    StoreItemAmount(amounts);
    setItem("");
    setAmount("");
  };
  return (
    <>
      <h2>Add Transaction:</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="Item Name">Item Name:</label>
          <input
            type="text"
            placeholder="Item Name"
            value={items}
            onChange={(e) => setItem(e.target.value)}
          />

          <label htmlFor="Item Name">Amount:</label>
          <input
            type="text"
            placeholder="Amount"
            value={amounts}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success purchased-btn">
          Purchase
        </button>
      </form>
    </>
  );
};
