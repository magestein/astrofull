import { actions } from "astro:actions";
import { useState } from "react";

export function MultiReact() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Verifica si esto se imprime
    const form = e.target;
    const formData = new FormData(form);

    try {
      const { data, error } = await actions.login.safe(formData);

      if (data) {
        form.reset();
        alert(data);
        setResult(data);
      }

      if (error && isInputError(error)) {
        console.log(error.fields);
        setError(error.fields);
      } else {
        setError(null);
      }
    } catch (err) {
      setError("Error al enviar el formulario");
      setResult(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numero">Numero:</label>
        <input type="text" id="numero" name="numero" required />
        <br />
        <input type="submit" value="Enviar" />
      </form>
      {result && <div id="result">{JSON.stringify(result, null, 2)}</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
