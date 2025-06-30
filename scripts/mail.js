function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_04gkcx7","template_w9t9etd", params).then(
      // Esta es la FUNCIÓN que se ejecutará si el envío es exitoso
      function(res) {
        alert("Su mensaje ha sido enviado correctamente");
        // Opcional: Limpiar el formulario después del éxito
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      }
    )
    .catch(
      // MUY IMPORTANTE: Manejar errores si el envío falla
      function(error) {
        console.error("Error al enviar el mensaje:", error);
        alert("Hubo un error al enviar su mensaje. Por favor, intente de nuevo más tarde.");
      }
    );;
}