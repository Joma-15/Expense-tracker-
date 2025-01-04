import { useState, useEffect } from "react";

export const AddPurchased = () => {
  const [items, setItem] = useState<string>("");
  const [amounts, setAmount] = useState<string>("");
  const [itemList, setItemList] = useState<string[]>([]);
  const [amountList, setAmountList] = useState<string[]>([]);

  // Load initial data from localStorage when the component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("item") || "[]");
    const storedAmounts = JSON.parse(localStorage.getItem("amount") || "[]");
    setItemList(storedItems);
    setAmountList(storedAmounts);
  }, []);

  const StorePurchasedItem = (item: string): void => {
    const updatedItems = [...itemList, item];
    setItemList(updatedItems); // Update the state
    localStorage.setItem("item", JSON.stringify(updatedItems)); // Save to localStorage
  };

  const StoreItemAmount = (amount: string): void => {
    const updatedAmounts = [...amountList, amount];
    setAmountList(updatedAmounts); // Update the state
    localStorage.setItem("amount", JSON.stringify(updatedAmounts)); // Save to localStorage
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    if (amounts.trim() === "" || items.trim() === "") {
      alert("Item and amount cannot be empty");
      return;
    }
    alert("Item submitted successfully");
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

      <h3>Purchased Items:</h3>
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Amounts:</h3>
      <ul>
        {amountList.map((amount, index) => (
          <li key={index}>{amount}</li>
        ))}
      </ul>
    </>
  );
};
