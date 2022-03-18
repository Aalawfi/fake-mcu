import './App.css';
import axios from 'axios';

function App() {

  const handleSubmission = () => {

    // fetch data from the form
    var user_name = document.getElementById("username").value;
    var device_name = document.getElementById("device_name").value;
    var data = document.getElementById("data_value").value;

    // send HTTP post request to the server 
    axios.post(`http://www.ti-fi-uofsc.com/${user_name}/api/${device_name}/post-data/`, {
      data: data
    })
    .then(function (response) {
      console.log(response); 
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
    <div className="App">
      <header className="App-header">
      <h1> MCU simulator </h1> 
      </header>

      <div className='App-body'>
        <p> 
          This page, being completely decoupled from the AWS server, was designed to simulate 
          an external entity posting data to the system. 
        </p>

        <p>
          To post new data, enter your user name as assigned in <mark> <a href="http://www.ti-fi-uofsc.com" 
                                                                          style={{color: "white"}}> 
                                                                          www.ti-fi-uofsc.com. 
                                                                          </a> 
                                                                          </mark>
                                                                          <br />
          Then, write the name of the MCU you are trying to simulate (default is $username+mcu lower case)
        </p>

        <form className='App-form'>
        
            <label> User name: </label>
            <input type="text"
                   id="username"
                   name="username" 
                   placeholder="Example: Alawfi"/>

            <label> Device name: </label>
            <input type="text"
                   id="device_name" 
                   name="device_name"
                   placeholder="Example: alawfimcu"/>

            <label >Data (numbers only): </label>
            <input type="number"
                   id="data_value" 
                   name="data_value" 
                   placeholder="Example: 69.0"/>

            {/* TODO: check if the entry is valid first?  */}
            {/* TODO: restrict how many time you can post per second */}
            <button type='button' 
                    onClick={handleSubmission}>
                      submit
            </button> 
        
        </form>

      </div>
    </div>
  );
}

export default App;
