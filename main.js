function mostrarInformacao(id) {
    var imagem = document.getElementById('imagem');
    var descricao = document.getElementById('descricao');

    
    switch (id) {
        case 1:
            imagem.src = 'Drone.jpg';
            descricao.textContent = 'Uma das ferramentas mais modernas atualmente é o Drone, que faz uma grande variação de trabalhos, entre eles a demarcação do solo, pulverização, vigilância, contagem de animais, entre outros.';
            break;
        case 2:
            imagem.src = 'sensores.jpg';
            descricao.textContent = 'O uso de sensores também tem se expandido com a maior tecnologia no agronegócio. Vários equipamentos medem valores ligados á temperatura e umidade, transmitindo dados diretamente no celular dos proprietários das fazendas pela nuvem';
            break;
        case 3:
            imagem.src = 'inteligencia artificial.jpg';
            descricao.textContent = 'A inteligência artificial (IA) na agricultura, ela já vem proporcionando uma série de resultados fantásticos. Como por exemplo com o processamento de dados é possível prever doenças, idade da planta, condições climáticas do período entre outros fatores.';
            break;
        case 4:
            imagem.src = 'Agricultura de precisão.jpg';
            descricao.textContent = 'O termo agricultura de precisão está relacionado a um sistema de produção que utiliza tecnologia avançada, no qual estão inseridos os sistemas de referenciamento e posicionamento (GPS). Eles permitem controlar grandes áreas e mesmo assim tratá-las como heterogêneas, no sentido de aplicação de insumos de acordo com a necessidade de cada espaço.';
            break;
        case 5:
            imagem.src = 'trator j.jpg';
            descricao.textContent = 'Hoje, as máquinas agrícolas contam com sensores e softwares integradosa sistemas que permitem uma série de tarefas, como medir a profundidade do planrio da semente e a distância entre elas. Geralmente o trator é o equipamento no qual são atrelados esses recursos, como a semeadeira, colheitadeiras entre outos.';
            break;
        default:
            imagem.src = '';
            descricao.textContent = '';
    }
}