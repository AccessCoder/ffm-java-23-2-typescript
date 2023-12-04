
import './App.css'

function App() {

    const x:number = 6;
    const y:string = "Hallo";

    const variable1 = 2; //final
    let variable2 = "test"; //variabel


    console.log(variable1)

    for(let i = 0; i<1; i++){
        if(variable2){
            console.log("Is true")
            variable2 = "hallo";

        }
    }


    return (
    <>
      <h1>{x*variable1}</h1>

    </>
  )
}

export default App
