// ukol 3
const tlacitko = document.querySelector("#menu-tlacitko");

const rozbalit = () => {
  const polozky = document.querySelector("#menu-polozky");
  polozky.classList.toggle("show");
  // bonus
  const ikona = document.querySelector(".fas");

  if (polozky.classList.contains("show")) {
    ikona.classList.add("fa-xmark");
  } else {
    ikona.classList.remove("fa-xmark");
  }
};

tlacitko.addEventListener("click", rozbalit);