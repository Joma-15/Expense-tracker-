export const BalanceSheet = () => {
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
                <input
                  className="Purchase-box"
                  type="text"
                  placeholder="Enter the amount here"
                />
                 <button className="btn btn-success add-button">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
