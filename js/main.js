const paternal = document.getElementById('paternal')
const palermo = document.getElementById('palermo')
const laBoca = document.getElementById('laBoca')
const devoto = document.getElementById('devoto')
const menuContent = document.getElementById('menu-content')
const foundUsData = document.getElementById('found-us-data')

paternal.addEventListener('mouseover', () => {
    paternal.textContent = "AV.JUAN B JUSTO 5122 +54 1189741233"
    setTimeout(() => paternal.textContent = 'PATERNAL', 5000)
})
palermo.addEventListener('mouseover', () => {
    palermo.textContent = "AV. SANTA FE 3323 +54 1189741233";
    setTimeout(() => palermo.textContent = 'PALERMO', 5000)
})
laBoca.addEventListener('mouseover', () => {
    laBoca.textContent = "AV. CAMINITO 2020 +54 1189741233";
    setTimeout(() => laBoca.textContent = 'LA BOCA', 5000)
})
devoto.addEventListener('mouseover', () => {
    devoto.textContent = "AV. MOSCONI 1292 +54 1189741233";
    setTimeout(() => devoto.textContent = 'DEVOTO', 5000)
})

function show(id) {
    id.style.display !== "flex" ? id.style.display = "flex" : id.style.display = "none";
}






