console.log("Teste do arquivo java script");

let aux = 10;
console.log("Valor da variável aux: ", aux);

aux = "Unifei"
console.log("Outro valor da var aux: ", aux)

function soma(a, b) {
    let resp = a + b
    return resp
}

console.log(soma(5, 7))

let somatorio = soma(10, 20)
console.log("Somatório é ", somatorio)


subtrai(5, 2)

function subtrai(a, b) {
    let resp = a -b
    console.log(resp)
}

let x = soma(10, "Unifei")
console.log(x)

subtrai(10, "Unifei")

let nomes = []
nomes.push("Emanuelzinho")
nomes.push("Ubirajara")
console.log(nomes)

console.log(nomes[-1])

nomes.unshift("Tom")
console.log(nomes)

nomes[7] = "Sebastiana"

console.log(nomes)

y = nomes.pop()
console.log(y)

delete nomes[0]
console.log(nomes)

let produtos = ['lapis', 'borracha', 'caneta']

console.log(produtos)

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].toUpperCase())
}

for (let item of produtos) {
    console.log(item)
}

produtos.forEach( (item) => {
    console.log(item.toUpperCase())
})

function mensagem() {
    alert("Mensagem teste no js")
    console.log("outra coisa no console")
}

function somarnumero() {
    let n1 = document.getElementById("num1").value
    let n2 = document.getElementById("num2").value
    let resp = parseInt(n1) + parseInt(n2) 

    let tela = document.getElementById("resposta")
    tela.innerText = "◑ω◐ A resposta é " + resp + " ≧ω≦"
}