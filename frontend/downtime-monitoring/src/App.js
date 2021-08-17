import './App.css';

import testService from './services/testService'




const get_testService_response = async () => {
  const testService_response = await testService.testUrl("google")
  return testService_response
}

const App = () => {

  const t = get_testService_response()
  
  if(t == null){
    return(
      <div>
        loading
      </div>
    )
  }

  return (
    <>
      <div>
        {typeof (t)}

        {/* <li>
          {t.map(x => <ul>{x}</ul>)}
        </li> */}

      </div>
    </>
  )
}
export default App;
