import React, { useState, useEffect } from "react";
import { Modal } from "bootstrap";

export const BalanceSheet = () => {
  const [amount, setAmount] = useState<string>("");
  const [balance, setBalance] = useState<number>(0);
  const [modalInstance, setModalInstance] = useState<Modal | null>(null);

  // Initialize balance from localStorage on mount
  useEffect(() => {
    const storedBalance = localStorage.getItem("userMoney");
    if (storedBalance) {
      setBalance(Number(storedBalance));
    }

    // Initialize modal instance
    const modalElement = document.getElementById("staticBackdrop");
    if (modalElement) {
      const modal = new Modal(modalElement, {
        backdrop: "static",
        keyboard: false,
      });
      setModalInstance(modal);
    }
  }, []);

  const StoreMoney = (money: string): void => {
    const newBalance = balance + Number(money);
    localStorage.setItem("userMoney", newBalance.toString());
    setBalance(newBalance);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (amount.trim() === "" || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    StoreMoney(amount);
    setAmount(""); // Reset the input field after storing

    // Hide the modal after submission
    modalInstance?.hide();
  };

  const handleOpenModal = () => {
    modalInstance?.show();
  };

  return (
    <>
      <h2>Your Balance:</h2>
      <div className="Balance_container">
        <p>{`₱${balance.toFixed(2)}`}</p>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleOpenModal}
        >
          Deposit
        </button>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        tabIndex={-1}
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
                onClick={() => modalInstance?.hide()}
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
                    onChange={(e) => setAmount(e.target.value)}
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
