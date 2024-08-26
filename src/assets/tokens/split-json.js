// const fs = require('fs');
// const path = require('path');

// // Caminho para o arquivo JSON original
// const filePath = path.join(__dirname, 'tokens.json');

// // Ler e fazer parse do arquivo JSON
// const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// // Para cada chave de primeiro nível, criar um novo arquivo JSON
// Object.keys(data).forEach(key => {

//     // Extrai o último segmento da chave, removendo qualquer parte anterior a ela
//     const fileName = key.split('/').pop(); // Pega apenas a última parte após a barra


//     const newFilePath = path.join(__dirname, `figma/tokens/${key}.json`);

    
//     // Cria o diretório de destino se não existir
//     if (!fs.existsSync(path.dirname(newFilePath))) {
//         fs.mkdirSync(path.dirname(newFilePath), { recursive: true });
//     }

//     // Escreve os dados para o novo arquivo
//     // fs.writeFileSync(newFilePath, JSON.stringify({ [key]: data[key] }, null, 2));
//     fs.writeFileSync(newFilePath, JSON.stringify(data[key], null, 2));
    
//     console.log(`Arquivo ${key}.json criado com sucesso.`);
// });



const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JSON original
const filePath = path.join(__dirname, 'tokens.json');

// Ler e fazer parse do arquivo JSON
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Diretório onde os arquivos serão salvos
const outputDir = path.join(__dirname, 'figma/tokens');

// Cria o diretório de destino se não existir
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Para cada chave de primeiro nível, criar um novo arquivo JSON
Object.keys(data).forEach(key => {
    // Extrai o último segmento da chave, removendo qualquer parte anterior a ela
    const fileName = key.split('/').pop(); // Pega apenas a última parte após a barra

    // Define o caminho do novo arquivo
    const newFilePath = path.join(outputDir, `${fileName}.json`);

    // Escreve os dados para o novo arquivo, removendo o primeiro nível
    fs.writeFileSync(newFilePath, JSON.stringify(data[key], null, 2));
    
    console.log(`Arquivo ${fileName}.json criado com sucesso.`);
});