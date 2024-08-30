// CÓDIGO ABAIXCO COMENTADO FUNCIONA

// V1
// import StyleDictionary from 'style-dictionary';
// const sd = new StyleDictionary('config.json');
// await sd.buildAllPlatforms();

// V2
// import StyleDictionary from 'style-dictionary';
// async function build() {
//     const sd = new StyleDictionary('config.json');
//     await sd.buildAllPlatforms();
// }
// build();

// -----------------------------------

// V3
// import StyleDictionary from 'style-dictionary';

// const sd = new StyleDictionary({
//   // add custom formats/transforms
// });

// await (
//   await sd.extend({
//     source: ['tokens/global/button.json'],
//     platforms: {
//       scss: {
//         transformGroup: 'scss',
//         buildPath: 'build/scss/',
//         files: [
//           {
//             destination: '_button.scss',
//             format: 'scss/variables'
//           }
//         ]
//       }
//     }
//   })
// ).buildAllPlatforms();

// await (
//   await sd.extend (
//     {
//     source: ['tokens/global/global.json'],
//     platforms: {
//       scss: {
//         transformGroup: 'scss',
//         buildPath: 'build/scss/',
//         files: [
//           {
//               destination: '_global.scss',
//               format: 'scss/variables'
//           }
//         ]
//       }
//     }
//   }
// )
// ).buildAllPlatforms();


// ----------------------------------------------

// V4
// import StyleDictionary from 'style-dictionary';
// import tokens from './tokens/global/index.js';

// const sd = new StyleDictionary({
  
//   source: ['tokens/global/**/*.json'],
//   platforms: {
//     scss: {
//       transformGroup: 'scss',
//       buildPath: `build/scss/`,
//       files: [
//         {
//           destination: `global.scss`,
//           format: 'scss/variables',
//           filter: {
//             attributes: {
//               category: 'global',
//             },
//           },
//         },
//         {
//           destination: `button.scss`,
//           format: 'scss/variables',
//           filter: {
//             attributes: {
//               category: 'button',
//             },
//           },
//         },
//         {
//           destination: `select.scss`,
//           format: 'scss/variables',
//           filter: {
//             attributes: {
//               category: 'select',
//             },
//           },
//         },
//         {
//           destination: `switch.scss`,
//           format: 'scss/variables',
//           filter: {
//             attributes: {
//               category: 'switch',
//             },
//           },
//         }
//       ],
//     }
//   },
// });

// await sd.buildAllPlatforms();




import StyleDictionary from 'style-dictionary';

// Instância inicial do Style Dictionary
const sd = new StyleDictionary({
  // Adicione formatos ou transformações customizadas aqui, se necessário
});

// Outra extensão da instância com diferentes configurações
await (
  await sd.extend({
    source: ['tokens/**/*.json'], // Caminho dos arquivos de tokens para uma nova extensão
    platforms: {
      scss: {
        transformGroup: 'scss',
        buildPath: 'build/scss/',
        files: [
          {
            destination: 'md-pallete.scss',
            format: 'scss/variables',
            filter: {
              attributes: {
                category: 'global' // Exemplo de filtro por categoria
              }
            }
          }
        ]
      }
    }
  })
).buildAllPlatforms(); // Executa o build novamente para as novas plataformas configuradas

// Extensão da instância do Style Dictionary com configurações adicionais
await (
  await sd.extend({
    source: ['tokens/**/*.json'], // Caminho dos arquivos de tokens
    platforms: {
      scss: {
        transformGroup: 'scss',
        buildPath: 'build/scss/geral/',
        files: [
          {
            destination: `button.scss`,
            format: 'scss/variables',
            filter: {
              attributes: {
                category: 'button',
              },
            },
          },
          {
            destination: `select.scss`,
            format: 'scss/variables',
            filter: {
              attributes: {
                category: 'select',
              },
            },
          },
          {
            destination: `switch.scss`,
            format: 'scss/variables',
            filter: {
              attributes: {
                category: 'switch',
              },
            },
          }
        ]
      }
    }
  })
).buildAllPlatforms(); // Executa o build para todas as plataformas configuradas



