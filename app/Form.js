export default function contactForm() {
  const d = document;
  const $form = d.querySelector("#form");

  $form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    let messageUser = {
      nombre: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    let messageUserJSON = JSON.stringify(messageUser);
    localStorage.setItem("dataUser", messageUserJSON);
    $form.reset();
  }
}
