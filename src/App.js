import Navbar from "./Header/Navbar"
import Header from "./Header/Header"
import Profit from "./Profit/Profit"
import ProfitRtl from "./Profit/Profit_Rtl"
import AbouMe from "./AbouMe/AbouMe"
import Gallery from "./Gallery/Gallery"
import Email from "./Email/Email"
import Footer from "./Footer/Footer"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Profit></Profit>
      <ProfitRtl></ProfitRtl>
      <AbouMe></AbouMe>
      <Gallery></Gallery>
      <Email></Email>
      <Footer></Footer>
    </div>
  );
}

export default App;