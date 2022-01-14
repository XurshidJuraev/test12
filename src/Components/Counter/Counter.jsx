import React from 'react'
import './Counter.scss'

function Counter () {
    const [count, setCount] = React.useState(0)

    var words = document.querySelector("#sozla")

    // Salovatlar Jadvali
    if(count === 1) {
        words.textContent = "Subhanalloh"
    }
    if(count === 34) {
        words.textContent = "Alhamdulillah"
    }
    if(count === 65) {
        words.textContent = "Allohu Akbar"
    }
    if(count === 100) {
        words.textContent = "Astag'hfirullah"
    }
    if(count === 133) {
        words.textContent = "La Ilaha Illalloh"
    }
    if(count === 166) {
        words.textContent = "Subhanallohi Va bihamdihi Subhanallahi Azim"
    }
    if(count === 199) {
        words.textContent = "Allohuma Aolliala Aayyidina Auhammad"
    }
    if(count === 200) {
        alert("Masha Olloh, Yana bir marotaba qaytarib o'tamiz")
    }
    if(count === 232) {
        words.textContent = "Subhanalloh"
    }
    if(count === 265) {
        words.textContent = "Alhamdulillah"
    }
    if(count === 298) {
        words.textContent = "Allohu Akbar"
    }
    if(count === 331) {
        words.textContent = "Astag'hfirullah"
    }
    if(count === 364) {
        words.textContent = "La Ilaha Illalloh"
    }
    if(count === 397) {
        words.textContent = "Subhanallohi Va bihamdihi Subhanallahi Azim"
    }
    if(count === 430) {
        words.textContent = "Allohuma Aolliala Aayyidina Auhammad"
    }



    // Rag'batlantirish
    if(count === 34) {
        alert("Qoyil yaxshi ketyapsiz")
    }
    if(count === 100) {
        alert("O' Barakalla davom etamiz")
    }
    if(count === 201) {
        alert("Judayam yaxshi, Davom eting")
    }
    if(count === 501) {
        alert("Olg'a hali bundan ham yaxshi natijalarga erishasiz")
    }
    if(count === 1001) {
        alert("Molades")
    }
    if(count === 10001) {
        alert("Masha Olloh")
    }
    if(count === 100001) {
        alert("Judaham zo'r. Bugun judayam ko'p salovat etdingiz")
    }
    

    return <div>
        <div className='container'>
            <div className="tasbeh0">
                <div className="tasbeh">
                    <button className='count__number0' onClick={() => setCount(count - 1)}>Ayirish</button>
                    <div className="top">
                    <p className='count'>{count}</p>
                    <button className='count__number' onClick={() => setCount(count + 1)}>Salovat Aytish</button>
                    </div>
                    <button className='count__number0' onClick={() => setCount(false)}>Boshidan Boshlash</button>
                </div>
                <div className="divde"><p className='sozlar' id='sozla'>Subhanalloh</p></div>
            </div>
        </div>
    </div>
}

export default Counter