import React from "react";
import "./css/test3.css";
import example1 from "./images/1.png";
import example2 from "./images/2.png";
import example3 from "./images/3.png";

class Test3 extends React.PureComponent{
  handleChange = (event) => {
    console.log(event.target, event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    fetch(input:"api/v1/register", init: {
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then( res => {
      return res.text();
    })
    .then( responseText =>{

    })
  }
  
  render(){
    return (
      <div>
        <div className={"description"}>
          <h3>
            Ülesanne 3:
          </h3>
          <p>
            <code>server.js</code> failis on defineeritud otspunkt
            <code>POST /api/v1/register</code>.
            Kui kasutaja vajutab "Send", siis peab frontend kasutama seda REST teenust
            ning saatma "username" ja "age" väärtused backendi.
            Server annab vastuseks teksti, mis tuleb kuvada ekraanil.
            API kirjeldus on lehel <a href={"http://localhost:3000/api-docs/"}>http://localhost:3000/api-docs/</a>
          </p>
          <h3>
            Näited:
          </h3>
          <div className="images">
            <img src={example1}/>
            <img src={example2}/>
            <img src={example3}/>
          </div>
        </div>
        <h3>
          Lahendus:
        </h3>
        <form onSubmit={this.handleSubmit}>
          <div className={"row"}>
            <label htmlFor="username">Username</label>
            <input name="username" type="text"/>
          </div>
          <div className={"row"}>
            <label htmlFor="age">Age</label>
            <input value={this.state.username}name="age"  type="number"/>
          </div>
          <div className={"row"} style={{justifyContent: "flex-end"}}>
            <button>Send</button>
          </div>
        </form>

        {
          // this.state.responseText &&
          // <div className={"response"}>
          //   {this.state.responseText}
          // </div>
        }

      </div>
    );
  }
}

export default Test3;

//https://reactjs.org/docs/forms.html
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API