import Main from "./components/Main"
import NavBar from "./components/NavBar"
import Snap from "./components/Snap"


const App = () => {
  return (
    <div className="h-screen w-full flex">
      <Snap />
      <div className="w-[90%] h-full ">
        <NavBar />
        <Main />
      </div>
    </div>
  )
}

export default App
