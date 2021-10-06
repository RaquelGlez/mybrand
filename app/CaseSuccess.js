export function Case(props) {
  let { fact, date_insert, url } = props;
  let dateFormat = new Date(date_insert).toLocaleString();
  return `
    <article class="case-card">
      <img src="https:/placeimg.com/200/200/any" alt="">
      <h2>${fact}</h2>
      <p>
        <time datetime="${date_insert}">${dateFormat}</time><br/>
        <a href="${url}  target="_blank" rel="noopener noreferrer">Ver detalles</a>
      </p>
    </article>
  `;
}
