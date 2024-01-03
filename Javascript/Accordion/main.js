import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div class="accordion-container">
  <h3>Accordion</h3>
  <div class="accordion">
        <details>
          <summary>Why this item?</summary>
          <p>it is important to use it everyday</p>

        </details>
         <details>
          <summary>When to use it?</summary>
          <p>It is used everyday</p>

        </details> <details>
          <summary>Who is to use?</summary>
          <p>anybody can use it</p>

       

      </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
