export const History = () => {
    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      padding: "20px",
    };
  
    const inputContainerStyle = {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      width: "100%",
      maxWidth: "600px",
    };
  
    const inputStyle = {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
    };
  
    return (
      <div style={containerStyle}>
        <h1>History:</h1>
        <div style={inputContainerStyle}>
          <input type="text" placeholder="Purchased item" style={inputStyle} />
          <input type="text" placeholder="Purchased item" style={inputStyle} />
        </div>
      </div>
    );
  };
  