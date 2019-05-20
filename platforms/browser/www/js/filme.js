var filme = {

    initialize: function () {

        document.getElementById('btn-buscar').addEventListener('click', function(){

            let alertInfo = document.getElementById('msg-nao-encontrado');
            let ulinfo = document.getElementById('info');
            let personagem = document.getElementById('personagem').value;
            let url = `https://swapi.co/api/people/${personagem}`;
            

            ulinfo.innerHTML = '';
            alertInfo.style.display = 'none';
            axios.get(url)
                .then(response => {
                    let data = response.data;
                        ulinfo.innerHTML = ulinfo.innerHTML + `<li>${data.name}<br />Sexo: ${data.gender || 'Não Informado'}<hr /></li>`
                }).catch(response =>{
                    alertInfo.style.display = 'block';
                    console.log(response);
                });
        });
    },
    goToLoginPage: function(){
        window.location = "index.html";
    }
};

main.onStart = filme.initialize;
