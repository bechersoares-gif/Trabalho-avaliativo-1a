// 1. Gestão de Dados Dinâmicos
const destinos = [
    { nome: "Paris, França", desc: "A cidade luz com acessibilidade universal nos museus.", img: "🗼" },
    { nome: "Lisboa, Portugal", desc: "História e gastronomia em sete colinas encantadoras.", img: "🍷" },
    { nome: "Roma, Itália", desc: "Um museu a céu aberto esperando por você.", img: "🏛️" }
];

function renderDestinos() {
    const container = document.getElementById('destinos-grid');
    container.innerHTML = destinos.map(dest => `
        <article class="card">
            <div style="font-size: 3rem; margin-bottom: 1rem">${dest.img}</div>
            <h3>${dest.nome}</h3>
