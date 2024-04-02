import React from 'react'

//rafce - cria direto a componente.

const ChallengeSolution = () => {
    const a = 10
    const b = 20
  return (
    <div>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick={() => console.log(a+b)}>
            Clique para ver a soma!
        </button>
    </div>
  )
}

export default ChallengeSolution