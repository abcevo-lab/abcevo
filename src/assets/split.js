import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obter o diretório atual para módulos ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para o arquivo JSON original
const filePath = path.join(__dirname, 'tokens.json');

// Função assíncrona para leitura e processamento do arquivo JSON
async function generateTokens() {
  try {
    // Ler e fazer parse do arquivo JSON
    const data = JSON.parse(await fs.readFile(filePath, 'utf8'));

    // Diretório onde os arquivos serão salvos
    const outputDir = path.join(__dirname, 'tokens/geral');

    // Cria o diretório de destino se não existir
    await fs.mkdir(outputDir, { recursive: true });

    // Para cada chave de primeiro nível, criar um novo arquivo JSON
    for (const key of Object.keys(data)) {
      // Extrai o último segmento da chave, removendo qualquer parte anterior a ela
      const fileName = key.split('/').pop(); // Pega apenas a última parte após a barra

      // Define o caminho do novo arquivo
      const newFilePath = path.join(outputDir, `${fileName}.json`);

      // Escreve os dados para o novo arquivo
      await fs.writeFile(newFilePath, JSON.stringify({ [key]: data[key] }, null, 2));
      
      console.log(`Arquivo ${fileName}.json criado com sucesso.`);
    }
  } catch (error) {
    console.error('Erro ao processar o arquivo:', error);
  }
}

// Executa a função
generateTokens();
