require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift return night upgrade idea kiwi slot gaze'; 
let testAccounts = [
"0xf12a77b935d3456c07890d63aac7d47e40bea33464fe2685d24a908c52f1237b",
"0xf9d1cbce4655c4ee1f9ef75e518008517daad233cd55b5edd0d691f1359093de",
"0x27365c0eba12cea4b4b2c33ccbae882ea6b249bdfb678d1683635db03c995cfa",
"0x4ea8c5e11a6a084a0fc7b51a556aeea5916abfb51ddada3d52aa15f33669de3f",
"0xac74632b8771d3c890782faade0f1a43ef2cad4ad45df45ece6e327f81e13e28",
"0xecaab45f17b1c79b18c8606e05a67e4523e8284e911411ab410db82cdaa61922",
"0x5c888d128c666537634269a5d2a059802d3fea5d1fa9def3cb18828756a3138d",
"0x0e361a593b79fa8cf3459ae27a7dacbd6d5e25ea14e10fe510ee30947befe497",
"0xe3cf042e3682d3ef3001a03c73fe948263bb9ccf0727ebd0f28980800b983776",
"0xe2118f69dcffdbc4c46ac86e540dfb5792b9dfa3ce4b495cee3d8967d6709e57"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
