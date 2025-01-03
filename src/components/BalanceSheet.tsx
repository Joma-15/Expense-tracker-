import React, { useState } from "react";

export const BalanceSheet = () => {
  const [amount, setAmount] = useState<string>("");

  const StoreMoney = (money: string): void => {
    localStorage.setItem("userMoney", money);
    alert(`₱${money} has been added to your balance!`);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents form submission default behavior
    if (amount.trim() === "" || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    StoreMoney(amount);
    setAmount(""); // Reset the input field after storing
  };

  return (
    <>
      <h2>Your Balance:</h2>
      <div className="Balance_container">
        <p>₱3000000</p>
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Deposit
        </button>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Money
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="amountInput" className="form-label">
                    Enter Amount
                  </label>
                  <input
                    id="amountInput"
                    className="form-control"
                    type="number"
                    placeholder="₱0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} // Update state on input change
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
