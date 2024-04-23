// biblioteca.js


class Biblioteca {
	constructor() {
    	this.livros = [];
	}
	adicionarLivro(livro) {
    	this.livros.push(livro);
    	console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
	}
	listarLivros() {
    	console.log('Lista de livros na biblioteca:');
    	this.livros.forEach((livro, index) => {
        	console.log(`${index + 1}. ${livro.titulo} - ${livro.autor}`);
    	});
	}
	removerLivro(index) {
    	if (index >= 0 && index < this.livros.length) {
        	const livroRemovido = this.livros.splice(index, 1)[0];
        	console.log(`Livro "${livroRemovido.titulo}" removido da biblioteca.`);
    	} else {
        	console.log('Índice inválido.');
    	}
	}
}
module.exports = Biblioteca;


