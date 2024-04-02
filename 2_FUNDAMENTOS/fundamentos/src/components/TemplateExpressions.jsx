const TemplateExpressions = () => {

    const name = "Jade"

    const data = {
        age: 24,
        job: "Accountant"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>Em 2000 você tinha {data.age - 24} anos.</p>
        </div>
    )
}

export default TemplateExpressions