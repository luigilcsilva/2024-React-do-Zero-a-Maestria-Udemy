//Sempre precisa de tags de abertura e fechamento dentro do return.
//Aqui no jsx usamos className ao invés de class na tag HTML.

import MyComponent from "./MyComponent"

const FirstComponent = () => {
    // Teste de comentário.
    return (
        <>
            {/* Algum comentário. */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            {/* Podemos importar componentes dentro de componentes. */}
            <MyComponent />
        </>
    )
}

export default FirstComponent