import Header from "./components/Header"
import Prompt from "./components/Prompt"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { data } from "./components/data"

function App() {
  
  return (
    <>
      <Header />
      <Prompt />     
      <Main props={data} />
      <Footer />
    </>
  )
}

export default App
