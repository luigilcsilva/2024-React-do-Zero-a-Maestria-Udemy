const Events = () => {
    //Esse "e" é para obter informações do evento no console.
    const handleMyEvent = (e) => {
        console.log(e)
        window.prompt('Qualé maluco?')
    }
//Função de reenderização
const renderSomething = (x) => {
    if(x) {
        return <h1>Renderizando isso!</h1>
    } else {
        return <h1>Também posso reenderizar isso!</h1>
    }
}

    return (
        <div>
            <div>
                {/* Se colocar handleMyEvent() com parentêses,
                ele dispara a função na leitura do código.*/}
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também.</button>
            </div>
            {renderSomething(true)} {/* Executada na reenderização. */}
        </div>
    )
}

export default Events