document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (!form) {
    console.error("Form login dengan id loginForm tidak ditemukan.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("studentName");
    const classInput = document.getElementById("studentClass");

    if (!nameInput || !classInput) {
      alert("Input nama atau kelas tidak ditemukan.");
      return;
    }

    const name = nameInput.value.trim();
    const studentClass = classInput.value;

    if (!name || !["10", "11", "12"].includes(studentClass)) {
      alert("Masukkan nama dan pilih kelas terlebih dahulu.");
      return;
    }

    localStorage.setItem(
      "mathlearn_profile_v2",
      JSON.stringify({ name, studentClass })
    );

    const loginScreen = document.getElementById("loginScreen");
    const app = document.getElementById("app");

    if (loginScreen && app) {
      loginScreen.classList.add("hidden");
      app.classList.remove("hidden");
    } else {
      alert("Elemen halaman login atau beranda tidak ditemukan. Perlu mencocokkan index.html.");
    }
  });
});