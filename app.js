const form = document.getElementById("daForm");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitBtn.disabled = true;

  const data = {
    name: document.getElementById("name").value,
    id: document.getElementById("id").value,
    class: document.getElementById("class").value,
  };

  console.log(data);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyEFlKD_e3LimSakZnLLXFS9Gm6FUJ1AusP_mWllrSceiKcbFYHI24GImyCuJNcUGL7Sg/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      alert("Data submitted successfully!");
      form.reset();
    } else {
      alert("Failed to submit data.");
    }
  } catch {
    alert("Error submitting data.");
    console.error(err);
  } finally {
    setTimeout(() => {
      submitBtn.disabled = false;
    }, 5000);
  }
});
