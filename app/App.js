import { ajax } from "./helpers/ajax.js";
import api from "./helpers/api.js";
import data from "./helpers/data.js";
import contactForm from "./Form.js";
import { Case } from "./CaseSuccess.js";
import { Cases } from "./CasesSuccess.js";

const d = document;
export async function App() {
  //document.getElementById("root").innerHTML = `<h1>Bienvenidos</h1>`;
  const d = document;
  contactForm();
  d.getElementById("casesSuccess").appendChild(Cases());

  await ajax({
    url: api.API,
    cbSuccess: (items) => {
      let html = "";
      let data = items.results;
      let dataRender = data.slice(0, 3);

      dataRender.forEach((item) => (html += Case(item)));
      d.getElementById("cases").innerHTML = html;
    },
  });
}
