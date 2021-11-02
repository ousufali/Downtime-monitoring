import './App.css';
import { useState } from 'react';
import testService from './services/testService'




const get_testService_response = async () => {
  const testService_response = await testService.testUrl("google")
  // console.log("-------") 
  //  console.log(testService_response)

  // console.log("-------")

  return testService_response
}

const App = () => {

  const [status , setStatus] = useState(0)


  const t = get_testService_response()




  if (t != null) {
    console.log(t)
    return (
      <>
        <div>
          {t.data == "OK" ? <b>OK</b> : <p> fail</p>}


          {/* <li>
            {t.map(x => <ul>{x}</ul>)}
          </li> */}

        </div>
      </>
    )

  }

  return (
    <div>
      loading
    </div>
  )
}
export default App;
