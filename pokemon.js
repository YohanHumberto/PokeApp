const contenedor1111 = document.getElementById('container');
const contenedor2222 = document.getElementById('stilos12');

document.addEventListener('click', function (e) {
    if (e.target.matches('#boton_home_hijo')) {
        contenedor1111.style = "display: grid;";
        contenedor2222.style = "display: none;";
        document.getElementById('div_create').remove();
        document.getElementById('boton_home').style = "display:none;"
    }
    if (e.target.matches('#boton1')) {
        const input = document.getElementById('input').value;
        if (input > 0 && input < 898) {
            contenedor1111.style = "display: none;";
            contenedor2222.style = "display: unset;";
            document.getElementById('boton_home').style = "display:unset;"
            let url = `https://pokeapi.co/api/v2/pokemon/${input}`;
            fetch(url).then(respuesta => respuesta.json()).then(dato => {
                const contenedor = document.getElementById('contenedor');
                const div = document.createElement('div');
                div.id = "div_create";
                const fu = ()=>{if(dato.sprites.other.dream_world.front_default!=null){return dato.sprites.other.dream_world.front_default}else{return "/img/logoPokemon.png"}}
                console.log(fu());
                div.innerHTML = `
                <div class="contenedor_hijo1">
                    <div><img src="${fu()}" alt="pokemon"></div>
                    <label>${dato.species.name} <span>${dato.stats[0].base_stat}hp</span></label>
                    <label><span>${dato.base_experience} exp</span></label>
                </div>
                <div class="contenedor_hijo2">
                    <div>
                        <h2>${dato.stats[1].base_stat}k</h2>
                        <p>Ataque</p>
                    </div>

                    <div>
                        <h2>${dato.stats[3].base_stat}k</h2>
                        <p>Ataque especial</p>
                    </div>

                    <div>
                        <h2>${dato.stats[2].base_stat}k</h2>
                        <p>defensa</p>
                    </div>
                </div>`;
                contenedor.appendChild(div);
                console.log(dato);
            }).catch(err => console.log(err))
        } else {
            alert("EL NUMERO INGRESADO NO ES VALIDO")
        }

    }

    if (e.target.matches('#boton2')) {

        contenedor1111.style = "display: none;";
        contenedor2222.style = "display: unset;"
        document.getElementById('boton_home').style = "display:unset;"
        const randon = Math.floor((Math.random() * 897) + 1);
        let url = `https://pokeapi.co/api/v2/pokemon/${randon}`;

        fetch(url).then(respuesta => respuesta.json()).then(dato => {
            const contenedor = document.getElementById('contenedor');
            const div = document.createElement('div');
            div.id = "div_create";
            div.innerHTML = `
                <div class="contenedor_hijo1">
                    <div><img src="${dato.sprites.other.dream_world.front_default}" alt="pokemon"></div>
                    <label>${dato.species.name} <span>${dato.stats[0].base_stat}hp</span></label>
                    <label><span>${dato.base_experience} exp</span></label>
                </div>
                <div class="contenedor_hijo2">
                    <div>
                        <h2>${dato.stats[1].base_stat}k</h2>
                        <p>Ataque</p>
                    </div>

                    <div>
                        <h2>${dato.stats[3].base_stat}k</h2>
                        <p>Ataque especial</p>
                    </div>

                    <div>
                        <h2>${dato.stats[2].base_stat}k</h2>
                        <p>defensa</p>
                    </div>
                </div>`;
            contenedor.appendChild(div);
            console.log(dato);
        }).catch(err => console.log(err))
    }
});
document.addEventListener('mouseover',()=>{console.log(document.body.style)});