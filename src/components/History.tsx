interface Props{
  item: string | null | string[];
  amount: string | null | string[];
}
export const History = ({item, amount}: Props) => {
  const ItemAmount = `${item}: ${amount}`;
  return (
    <>
    <h2 style={{right: "47vh", bottom: "50px"}}>History:</h2>
    <div className="History_container">
      <div className="History-box">
         <ol>
          <li>{ItemAmount ?? "there is no item available at the moment"}</li>
         </ol>
      </div>
    </div>
    </>
  )
}
