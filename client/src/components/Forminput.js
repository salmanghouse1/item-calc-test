import React from "react";

function Forminput() {
  return (
    <div>
      <h1>Enter Your Info</h1>
      <p>Get Total Info</p>
      <form>
        <input type="text" name=""></input>
        <div id="items">
          {/* retrive from db */}
          <ul>
            <li>
              Item 1-Qty:<input type="number"></input>
            </li>

            <li>
              Item 2-Qty:<input type="number"></input>
            </li>

            <li>
              Item 3-Qty:<input type="number"></input>
            </li>
          </ul>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Forminput;
