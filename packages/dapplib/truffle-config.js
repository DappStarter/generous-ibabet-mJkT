require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember clump gesture basket fringe general'; 
let testAccounts = [
"0xba89a76df6c2c47f02a71b5a46b60da8bc64b244ffea3d2a6df0a3511b67e1f5",
"0xd1b7fca58c4688aff6de465090cd4a049168914d69ff01ee152946c35eb099d9",
"0x6ff7192331028a62896b620bb0075c1ed69a2fdfa319063ab3815f3e01d7bf0c",
"0xcc92a3f194dbbaa0da214ccab6a9708ffb4ee60c46d1b45c48a551d9eeb3b8b9",
"0x2cca6c89dbb74aa6b9b82e5b6d27c6ee106814ad1151b5fac5d230fa08eaebb7",
"0xc644ba2356a787c91a459bfc004a865942c42e3921ffc7103ddd712c5cb6a01c",
"0x9866d9aae84bc5a52276e22ba603e0dcf31584bda6ca7f208a493a2c520d7dff",
"0xb7808fcff2af038ca6914404002ad84f4e9f6347a6ad123cd236ff2dc3bf51f3",
"0xe6c67c8a400812a266aa13e2a723e7bb0a577c709ab7ae77610a0a29d4cf784a",
"0x36efb70940c450121fe74bcab7093c2c2472837fbe1974629543720d110973a3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


