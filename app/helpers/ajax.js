export async function ajax(props) {
  let { url, cbSuccess } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let msgError = err.statusText || "Ocurrió un error al acceder a la API";

      /*    $("#root").html(`
      <div class="error">
       <p>Error ${err.status}:${msgError}</p>
      </div>  
      `); */

      //console.log("error", err);
    });
}
