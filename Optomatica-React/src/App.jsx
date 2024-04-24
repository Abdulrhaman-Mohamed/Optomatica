import AddBook from "./components/AddBook";
import NavBar from "./components/NavBar";
import Router from "./config/Router";


function App() {
  return (
    <>

      <div className=" h-screen flex flex-col items-center relative">
        {
          Router().props.match.route.id === 'not-found'? null : <NavBar />
        }
        <AddBook />
        <Router />
      </div>
    </>
  );
}

export default App;
