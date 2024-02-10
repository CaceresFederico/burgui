
const pages = document.getElementsByClassName("page");
// NAV CONTENT
const menuContent = document.getElementById("menu-content");
// SUCURSALES
const paternal = document.getElementById("paternal");
const palermo = document.getElementById("palermo");
const laBoca = document.getElementById("laBoca");
const devoto = document.getElementById("devoto");
// SUCURSALES CONTENT SHOW
const foundUsData = document.getElementById("found-us-data");

// SHOW SUCURSALES INFORMATION
paternal.addEventListener("mouseover", () => {
  paternal.innerHTML = `
  <span>AV. JUAN B. JUSTO 5122</span>
  <span class="text-yellow">+54 1189741233</span>
  `;
  setTimeout(() => (paternal.textContent = "PATERNAL"), 3000);
});
palermo.addEventListener("mouseover", () => {
  palermo.innerHTML = `
  <span>AV.SANTA FE 3323</span> 
  <span class="text-yellow">+54 1189741233</span>
  `;
  setTimeout(() => (palermo.textContent = "PALERMO"), 3000);
});
laBoca.addEventListener("mouseover", () => {
  laBoca.innerHTML = `
  <span>AV. CAMINITO 2020</span>
  <span class="text-yellow">+54 1189741233</span>
  `;
  setTimeout(() => (laBoca.textContent = "LA BOCA"), 3000);
});
devoto.addEventListener("mouseover", () => {
  devoto.innerHTML = `
  <span>AV. MOSCONI 1292</span>
  <span class="text-yellow">+54 1189741233</span>
  `;
  setTimeout(() => (devoto.textContent = "DEVOTO"), 3000);
});

// NAV & SUCURSALES SHOW AND HIDE CONTENT
function show(id) {
  id.style.display !== "flex"
    ? (id.style.display = "flex")
    : (id.style.display = "none");
}
