export const History = () => {
  // Retrieve and parse data from localStorage
  const items = JSON.parse(localStorage.getItem("item") || '[]');
  const amounts = JSON.parse(localStorage.getItem("amount") || '[]'); 

  // Helper function to format items
  const FormatItem = () => {
    return items.map((item: string, index: number) => (
      <li key={`item-${index}`}>{item}</li>
    ));
  };

  // Helper function to format amounts
  const FormatAmount = () => {
    return amounts.map((amount: string, index: number) => (
      <li key={`amount-${index}`}>{amount}</li>
    ));
  };

  return (
    <>
      <h2 style={{ right: "47vh", bottom: "50px" }}>History:</h2>
      <div className="History_container">
        <div className="History-box">
          <ol>
            <h3>Items:</h3>
            {FormatItem()}
            <h3>Amounts:</h3>
            {FormatAmount()}
          </ol>
        </div>
      </div>
    </>
  );
};
