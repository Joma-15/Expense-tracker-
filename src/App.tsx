import { Title } from "./components/Title"
import { BalanceSheet } from "./components/BalanceSheet"
import { History } from "./components/History"
import { AddPurchased } from "./components/AddPurchased"

function App() {
  const purchasedItem = localStorage.getItem("item"); 
  const ItemPrice = localStorage.getItem("amount"); 

  return (
    <>
    <Title/>
    <BalanceSheet/>
    <History item={purchasedItem} amount={ItemPrice}/>
    <AddPurchased/>
    </>
  )
}

export default App
