from flask import Flask

app = Flask(__name__)

# Criar a 1ª pagina do site
# route -> hashtagtreinamentos.com/contatos    nomeia a pagina depois do dominio
# funçao -> o que vc quer exibir nessa pagina

@app.route("/")
def homepage():
    return "Esse é meu primeiro site "

@app.route("/contatos")
def contatos():
        return "Nossos contatos são  Email: otavio.augusto00@hotmail.com" \
               "                     Telefone: (19) 99577-4654" \
               "                     Intagram: otavio.augusto00"
# Colocando site no ar
if __name__ == "__main__":
    app.run(debug=True)