const alunos = [];

function cadastrarAluno() {

    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value;
    const curso = document.getElementById("curso").value.trim();
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    // Validação
    if (
        nome === "" ||
        idade === "" ||
        curso === "" ||
        isNaN(nota1) ||
        isNaN(nota2)
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("As notas devem estar entre 0 e 10.");
        return;
    }

    // Média
    const media = ((nota1 + nota2) / 2).toFixed(1);

    // Situação
    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    // Salva aluno
    alunos.push({
        nome,
        idade,
        curso,
        nota1,
        nota2,
        media,
        situacao
    });

    atualizarTabela();

    limparFormulario();
}

function atualizarTabela() {

    const tabela = document.getElementById("tabelaAlunos");

    tabela.innerHTML = "";

    alunos.forEach(aluno => {

        tabela.innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.idade}</td>
                <td>${aluno.curso}</td>
                <td>${aluno.nota1}</td>
                <td>${aluno.nota2}</td>
                <td>${aluno.media}</td>
                <td>${aluno.situacao}</td>
            </tr>
        `;

    });

}

function limparFormulario() {

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";

}