class EntidadBibliografica {
    constructor(codigo, titulo, autor, anoPublicacion) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacion = anoPublicacion;
        this.articuloprestado = false;
        this.itemprestado = null;
    }

    emprestar(usuario) {
        if (this.articuloprestado === false) {
            this.articuloprestado = true;
            this.itemprestado = usuario;
            console.log(`El usuario ${usuario.nome} presto el libro.`);
            return true;
        } else {
            console.log("Item prestado");
            alert("Item prestado");
            return false;
        }
    }

    devolver() {
        if (this.articuloprestado === true) {
            this.articuloprestado = false;
            this.itemprestado = null;
            return true;
        } else {
            console.log("Item devolvido");
            alert("Item devolvido");
            return false;
        }
    }
}

const genero = {
    TEXTOS_RELIGIOSOS: "Textos Religiosos",
    TERROR: "Terror",
    COMEDIA: "Comédia",
    ROMANCE: "Romance",
    SUSPENSE: "Suspense",
    DRAMA: "Drama",
    FICCAO_CIENTIFICA: "Ficção Científica",
    HISTORIA: "História",
    CIENCIA: "Ciência",
    PROGRAMACAO: "Programação"
};

class libro extends EntidadBibliografica {
    constructor(codigo, titulo, autor, anoPublicacion, articuloprestado, itemprestado, genero) {
        super(codigo, titulo, autor, anoPublicacion, articuloprestado, itemprestado);
        this.genero = genero;
    }

    info() {
        console.log(this);

        if (this.itemprestado) {
            alert(`libro: ${this.titulo} \nAutor: ${this.autor} \nAno: ${this.anoPublicacion} \nGênero: ${this.genero} \nEmprestado para: ${this.itemprestado.nome}`);
            return;
        }

        alert(`libro: ${this.titulo} \nAutor: ${this.autor} \nAno: ${this.anoPublicacion} \nGênero: ${this.genero} \nEmprestado para: Ninguém`);
    }
}

class Revista extends EntidadBibliografica {
    constructor(codigo, titulo, autor, anoPublicacion, articuloprestado, itemprestado, edicao) {
        super(codigo, titulo, autor, anoPublicacion, articuloprestado, itemprestado);
        this.edicao = edicao;
    }

    info() {
        console.log(this);

        if (this.itemprestado) {
            alert(`Revista: ${this.titulo} \nAutor: ${this.autor} \nAno: ${this.anoPublicacion} \nEdição: ${this.edicao} \nEmprestado para: ${this.itemprestado.nome}`);
            return;
        }

        alert(`Revista: ${this.titulo} \nAutor: ${this.autor} \nAno: ${this.anoPublicacion} \nEdição: ${this.edicao} \nEmprestado para: Ninguém`);
    }
}

class Usuario {
    constructor(nome, RA, fechadenacimiento) {
        this.nome = nome;
        this.RA = RA;
        this.fechadenacimiento = fechadenacimiento;
    }
}

class Biblioteca {
    constructor() {
        this.infoPrompt = [];
        this.usuarios = [];
    }

    popularinfoPrompt(infoPromptAPIreturn, usuarioAPIreturn) {
        infoPromptAPIreturn.forEach(item => {
            if (item.entidad
            Bibliografica === "libro") {
                let itemTemp = new libro(item.codigo, item.titulo, item.autor, item.anoPublicacion, item.articuloprestado, item.itemprestado, item.genero);
                biblioteca.adicionarItem(item);
            } else if (item.entidad
            Bibliografica === "Revista") {
                let itemTemp = new Revista(item.codigo, item.titulo, item.autor, item.anoPublicacion, item.articuloprestado, item.itemprestado, item.edicao);
                biblioteca.adicionarItem(item);
            }
        });

        usuarioAPIreturn.forEach(usuario => {
            this.usuarios.push(new Usuario(usuario.nome, usuario.RA, usuario.fechadenacimiento));
        });
    }

    adicionarItem(item) {
        const codigodeverificacion = this.infoPrompt.find(codigodeverificacion => codigodeverificacion.codigo == item.codigo);

        if (codigodeverificacion) {
            if (primeiroAcesso == true) {
                primeiroAcesso = false;
            } else {
                console.log("Id registrada ");
                alert("Id registrada");
                return;
            }
        } else {
            this.infoPrompt.push(item);
            
        }
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
        console.log(`Usuário ${usuario.nome} agregado al sistema`);
    }

    listarinfoPrompt() {
        console.log("infoPrompt de la Biblioteca:");
        const infoAlert = [];

        if (this.infoPrompt.length > 0) {
            this.infoPrompt.forEach(item => {
                const infoUsuario = item.itemprestado ?
                    `Emprestado para ${item.itemprestado.nome}` :
                    'Disponível';
                console.log(`Id registrada: ${item.codigo} | Título: ${item.titulo} | Autor: ${item.autor} | Ano de publicação: ${item.anoPublicacion} | ${infoUsuario}`);
                infoAlert.push(`Id registrada: ${item.codigo} | Título: ${item.titulo} | Autor: ${item.autor} | Ano de publicação: ${item.anoPublicacion} | ${infoUsuario}`);
            });
            alert(infoAlert.join('\n'));
        } else {
            console.log("vacio");
        }
    }

    emprestarItem(codigoItem, registroAcademicoUsuario) {
        const item = this.infoPrompt.find(item => item.codigo === codigoItem);

        if (item) {
            const usuario = this.usuarios.find(usuario => usuario.RA === registroAcademicoUsuario);

            if (usuario) {
                item.emprestar(usuario);
            } else {
                console.log("Usuario no encontrado");
                alert("Usuario no encontrado");
            }
        } else {
            console.log("Articulo no encontrado");
            alert("Articulo no encontrado");
        }
    }

    devolverItem(codigoItem) {
        let item = this.infoPrompt.find(item => item.codigo === codigoItem);

        if (item) {
            item.devolver();
        } else {
            console.log("Articulo no encontrado");
            alert("Articulo no encontrado");
        }
    }
}

const biblioteca = new Biblioteca();
var primeiroAcesso = true;
