import { useMemo } from 'react'
import { ChainId, Token } from 'uniswap-xdai-sdk'

export const contractAddresses = {
  bao: {
    100: '0xe0d0b1DBbCF3dd5CAc67edaf9243863Fd70745DA',
    4: '0xE5AFBb49BeB7552a1167df6aAED70d88279787e8'
  },
  masterChef: {
    100: '0xf712a82DD8e2Ac923299193e9d6dAEda2d5a32fd',
    4: '0xdA6CFdB12112309E4587D4a747a55E2970Eda4f3'
  },
  weth: {
    100: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    4: '0xc778417E063141139Fce010982780140Aa0cD5Ab'
  },
  wethPrice: {
    100: '0xa767f745331D267c7751297D982b050c93985627',
    4: '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e'
  },
  baoPrice: {
    100: '0xdcf3aC78f37098222C53C79974faaC5ce1aaF707',
    4: '0x649AfCf002742cf93CbE1F8C3832FD05ACA2D8ea'
  }
}

export const addressMap = {
  [ChainId.XDAI]: {
    uniswapFactory: '0x45DE240fbE2077dd3e711299538A09854FAE9c9b',
    uniswapFactoryV2: '0x45DE240fbE2077dd3e711299538A09854FAE9c9b',
    XDAI: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    BAO: '0x82dFe19164729949fD66Da1a37BC70dD6c4746ce',
    'BAO.cx': '0xe0d0b1DBbCF3dd5CAc67edaf9243863Fd70745DA',
    WETH: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
    YFI: '0xbf65bfcb5da067446CeE6A706ba3Fe2fB1a9fdFd',
    SUSHI: '0x6B1A2E64403F9a175eEedAdbc88A81e12DA0f864',
    XSUSHI: '0x726f66BBdaf5DC0D66CADdc24dA13C3E9301Fc2A',
    GRT: '0xFAdc59D012Ba3c110B08A15B7755A5cb7Cbe77D7',
    RUNE: '0x4c68041898bfEfbfCc4253fbE8eD30830E6eb767',
    '1inch': '0x7f7440C5098462f833E123B44B8A03E1d9785BAb',
    NFTX: '0x8e1A12dA00BBF9DB10d48bd66Ff818bE933964d5',
    stETH: '0x3C037849a8ffcf19886e2f5B04f293B7847D0377',
    TVK: '0xeB2BCaBb0cDC099978A74cFE4Ab4d45E7e677a45',
    wBTC: '0x8e5bBbb09Ed1ebdE8674Cda39A0c169401db4252',
    USDT: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
    LINK: '0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2',
    USDC: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
    OKB: '0x4eFDfbb7Cca540a79A7e4dCaD1cb6ED14f21c43e',
    HT: '0x036328204f84b423F0e1A12C3B8777aE08758481',
    AAVE: '0xDF613aF6B44a31299E48131e9347F034347E2F00',
    CEL: '0x0aCD91f92Fe07606ab51EA97d8521E29D110fD09',
    SNX: '0x3A00E08544d589E19a8e7D97D0294331341cdBF6',
    CRV: '0x712b3d230F3C1c19db860d80619288b1F0BDd0Bd',
    COMP: '0xDf6FF92bfDC1e8bE45177DC1f4845d391D3ad8fD',
    MKR: '0x5fd896D248fbfa54d26855C267859eb1b4DAEe72',
    FTT: '0x75886F00c1a20Ec1511111Fb4Ec3C51de65B1fe7',
    RENBTC: '0x4A88248BAa5b39bB4A9CAa697Fb7f8ae0C3f0ddB',
    BAT: '0xC6cC63f4AA25BBD4453eB5F3a0DfE546feF9b2f3',
    TUSD: '0xB714654e905eDad1CA1940b7790A8239ece5A9ff',
    HUSD: '0x1e37E5b504F7773460d6eB0e24D2e7C223B66EC7',
    ZRX: '0x226bCf0e417428a25012d0fA2183d37f92bCeDF6',
    OCEAN: '0x51732a6fC4673d1aCca4c047F5465922716508Ad',
    KNC: '0x1534fB3E82849314360C267FE20Df3901A2ED3f9',
    RSR: '0x5A87eaC5642BfEd4e354Ee8738DACd298E07D1Af',
    ENJ: '0x5A757F0BcAdFDb78651B7bDBe67e44e8Fd7F7f6b',
    NMR: '0x0b7A1c1A3D314DCC271EA576dA400B24e9ad3094',
    BAL: '0x7eF541E2a22058048904fE5744f9c7E4C57AF717',
    MANA: '0x7838796B6802B18D7Ef58fc8B757705D6c9d12b3',
    MATIC: '0x7122d7661c4564b7C6Cd4878B06766489a6028A2',
    SXP: '0x7CC4d60a3C83e91d8c2ec2127A10Bab5c6Ab209d',
    HEGIC: '0xc44048a4d13548E30DBF01555e6A3C3EEe08D258',
    HBTC: '0xd87FCB23da48D4D9B70c6F39B46debb5d993Ad19',
    MPH: '0xA088D78e9c9CBccAD3a0153341385633B1B1125d',
    sUSD: '0xB1950Fb2C9C0CbC8553578c67dB52Aa110A93393',
    MATH: '0xAf4D17A2077e1dE12DE66a44DE1B4f14C120d32D',
    SRM: '0x3AE8c08cD61d05ad6e22973E4b675A92D412EE3C',
    RPL: '0x2F0E755Efe6b58238A67DB420Ff3513Ec1fb31eF',
    BNT: '0x9a495a281D959192343B0e007284bf130bd05F86',
    UBT: '0xd3b93fF74E43Ba9568e5019b38AdDB804feF719B',
    mUSD: '0x7300AaFC0Ef0d47Daeb850f8b6a1931b40aCab33',
    EURS: '0x9EE40742182707467f78344F6b287bE8704F27E2',
    AXS: '0xBDE011911128F6bD4ABb1d18F39fdc3614Ca2cfe',
    STAKE: '0xb7D311E2Eb55F2f68a9440da38e7989210b9A05e',
    BZRX: '0xE6A1f98b0F4368559BD16639C844510f5DB6Fe48',
    MLN: '0xf0dd817FF483535f4059781441596AEa4F32a4B9',
    DPI: '0xD3D47d5578e55C880505dC40648F7F9307C3e7A8',
    tBTC: '0x0811E451447D5819976a95a02f130c3b00D59346',
    KP3R: '0x5B449Ea0e550C143074146abc89A6328D9E70798',
    AKRO: '0xD27E1ECC4748F42e052331BeA917D89bEB883fc3',
    MTA: '0x5B9EED77d9500aDF7200fEeB395647be1950F7d2',
    TKN: '0xD1B11356464Ac5B48172fa6bD14Ac2417631BEDa',
    AUDIO: '0x8A95ea379E1Fa4C749dd0A7A21377162028C479e',
    Lien: '0x6062eC2A1ecfCD0026d9BD67aa5ad743Adc03995',
    JRT: '0xCCF1279C3406Ad1181bee00daB4b28B23D17Ddb1',
    BOND: '0xb31a2595E4Cf66EfBC1Fe348b1429E5730891382',
    INDEX: '0x6052245Ec516D0F653794052D24EFca8A39fcBC3',
    DOUGH: '0x6d237bb2248d3b40b1a54F3417667B2f39984fC8',
    ROOK: '0x03959Ac65e621e8C95d5E0f75EA96E5C03A15009',
    RSV: '0xD9C31db155a48f3d7304De85EC7AB7B705659bE9',
    SOCKS: '0x35f346Cb4149746272974a92d719Fd48ae2F72FA',
    DONUT: '0x524B969793a64a602342d89BC2789D43a016B13A',
    GNO: '0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb',
    RGT: '0x417Ae38B3053A736B4274aed8DBD1a8A6FDbc974',
    REN: '0x0da1a02CDF84C44021671d183d616925164E08Aa',
    RARI: '0x4bE85ACC1cd711F403dC7BdE9e6caDfC5A94744b',
    IDLE: '0x534179b3d7292d8a82A2985ee80a6D2027ee8378',
    PERP: '0x7ecF26cd9A36990b8ea477853663092333f59979',
    API3: '0x44b6bBA599F100006143E82A60462D71Ac1331Da',
    FRONT: '0x1bbca7491f14b46788Ff9c834d97a668C4886523',
    DUCK: '0x8E7aB03cA7D17996b097D5866bFAA1e251c35c6a',
    TRU: '0x4384a7C9498f905e433Ee06B6552a18e1D7cD3a4',
    FRAX: '0xca5d82E40081F220d59f7ED9e2e1428DEAf55355',
    MASK: '0x4e1a2bFfe81000F7be4807FAF0315173c817d6F4',
    UNI: '0x4537e328Bf7e4eFA29D05CAeA260D7fE26af9D74',
    HNY: '0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9',
    AGVE: '0x3a97704a1b25F08aa230ae53B352e2e72ef52843',
    sETH: '0x8f365b41b98fe84acb287540b4b4ab633e07edb2',
    NEXO: '0x26DC03E492763068CCfE7C39B93A22442807C360'
  },
  [ChainId.MAINNET]: {
    uniswapFactory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    WETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    DAI: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea',
    wBTC: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    LINK: '0x514910771af9ca656af840dff83e8264ecf986ca',
    USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    cDAI: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
    OKB: '0x75231f58b43240c9718dd58b4967c5114342a86c',
    LEO: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
    UNI: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    HT: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
    AAVE: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    CEL: '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d',
    SNX: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    CRV: '0xd533a949740bb3306d119cc777fa900ba034cd52',
    YFI: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    COMP: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    UMA: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
    FTT: '0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9',
    RENBTC: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
    BAT: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    TUSD: '0x0000000000085d4780b73119b644ae5ecd22b376',
    HUSD: '0xdf574c24545e5ffecb9a659c229253d4111d87e1',
    ZRX: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    aETH: '0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04',
    OCEAN: '0x967da4048cd07ab37855c090aaf366e4ce1b9f48',
    KNC: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
    AMPL: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    wNXM: '0x0d438f3b5175bebc262bf23753c1e53d03432bde',
    RSR: '0x8762db106b2c2a0bccb3a80d1ed41273552616e8',
    ENJ: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
    BAND: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
    NMR: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671',
    BAL: '0xba100000625a3754423978a60c9317c58a424e3d',
    NEXO: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
    ANT: '0xa117000000f279d81a1d3cc75430faa017fa5a2e',
    MANA: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
    SNT: '0x744d70fdbe2ba4cf95131626614a1763df805b9e',
    ESD: '0x36f3fd68e7325a35eb768f1aedaae9ea0689d723',
    yUSD: '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c',
    MATIC: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
    PAXG: '0x45804880de22913dafe09f4980848ece6ecbaf78',
    GT: '0xe66747a101bff2dba3697199dcce5b743b454759',
    SXP: '0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9',
    REP: '0x1985365e9f78359a9b6ad760e32412f4a445e862',
    CVC: '0x41e5560054824ea6b0732e656e3ad64e20e94e45',
    HEGIC: '0x584bc13c7d411c00c01a62e8019472de68768430',
    wFIL: '0x6e1a19f235be7ed8e3369ef73b196c07257494de',
    HBTC: '0x0316eb71485b0ab14103307bf65a021042c6d380',
    cUNI: '0x35a18000230da775cac24873d00ff85bccded550',
    UOS: '0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c',
    UTK: '0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c',
    SHR: '0xd98f75b1a3261dab9eed4956c93f33749027a964',
    TITAN: '0x3a8cccb969a61532d1e6005e2ce12c200caece87',
    MPH: '0x4d96369002fc5b9687ee924d458a7e5baa5df34e',
    sUSD: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    MATH: '0x08d967bb0134f2d07f7cfb6e246680c53927dd30',
    SRM: '0x476c5e26a75bd202a9683ffd34359c0cc15be0ff',
    c0x: '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407',
    RPL: '0xb4efd85c19999d84251304bda99e90b92300bd93',
    STORJ: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
    BNT: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
    ANKR: '0x8290333cef9e6d528dd5618fb97a76f268f3edd4',
    UBT: '0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e',
    FTM: '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
    AGI: '0x8eb24319393716668d768dcec29356ae9cffe285',
    POLY: '0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec',
    ELF: '0xbf2179859fc6d5bee9bf9158632dc51678a4100e',
    DNT: '0x0abdace70d3790235af448c88547603b945604ea',
    PNK: '0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d',
    HXRO: '0x4bd70556ae3f8a6ec6c4080a0c327b24325438f3',
    TRB: '0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5',
    NPXS: '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3',
    WZEC: '0x4a64515e5e1d1073e83f30cb97bed20400b66e10',
    CORE: '0x62359ed7505efc61ff1d56fef82158ccaffa23d7',
    mUSD: '0xe2f2a5c287993345a840db3b0845fbc70f5935a5',
    EURS: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
    AXS: '0xf5d669627376ebd411e34b98f19c868c8aba5ada',
    BTMX: '0xcca0c9c383076649604ee31b20248bc04fdf61ca',
    LPT: '0x58b6a8a3302369daec383334672404ee733ab239',
    DGTX: '0xc666081073e8dff8d3d1c2292a29ae1a2153ec09',
    ENG: '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4',
    FET: '0xaea46a60368a7bd060eec7df8cba43b7ef41ad85',
    FARM: '0xa0246c9032bc3a600820415ae600c6388619a14d',
    ADX: '0xade00c28244d5ce17d72e40330b1c318cd12b7c3',
    STAKE: '0x0ae055097c6d159879521c384f1d2123d1f195e6',
    BZRX: '0x56d811088235f11c8920698a204a5010a788f4b3',
    IDEX: '0xb705268213d593b8fd88d3fdeff93aff5cbdcfae',
    NEC: '0xcc80c051057b774cd75067dc48f8987c4eb97a5e',
    SAND: '0x3845badade8e6dff049820680d1f14bd3903a5d0',
    MLN: '0xec67005c4e498ec7f55e092bd1d35cbc47c91892',
    CREAM: '0x2ba592f78db6436527729929aaf6c908497cb200',
    DPI: '0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b',
    tBTC: '0x8daebade922df735c38c80c7ebd708af50815faa',
    LOOM: '0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0',
    MX: '0x11eef04c884e24d9b7b4760e7476d06ddf797f36',
    KP3R: '0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44',
    AKRO: '0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
    REQ: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
    QSP: '0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d',
    MTA: '0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2',
    AST: '0x27054b13b1b798b345b591a4d22e6562d47ea75a',
    DUSD: '0x5bc25f649fc4e26069ddf4cf4010f9f706c23831',
    BTSE: '0x666d875c600aa06ac1cf15641361dec3b00432ef',
    DF: '0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0',
    DMG: '0xed91879919b71bb6905f23af0a68d231ecf87b14',
    KARMA: '0xdfe691f37b6264a90ff507eb359c45d55037951c',
    TKN: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a',
    PNT: '0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed',
    YAM: '0x0aacfbec6a24756c20d41914f2caba817c0d8521',
    AUDIO: '0x18aaa7115705e8be94bffebde57af9bfc265b998',
    GHST: '0x3f382dbd960e3a9bbceae22651e88158d2791550',
    SWRV: '0xb8baa0e4287890a5f79863ab62b7f175cecbd433',
    FOAM: '0x4946fcea7c692606e8908002e55a582af44ac121',
    LIEN: '0xab37e1358b639fd877f015027bb62d3ddaa7557e',
    PRE: '0xec213f83defb583af3a000b1c0ada660b1902a0f',
    GEN: '0x543ff227f64aa17ea132bf9886cab5db55dcaddf',
    JRT: '0x8a9c67fee641579deba04928c4bc45f66e26343a',
    MEME: '0xd5525d397898e5502075ea5e830d8914f6f0affe',
    BOND: '0x0391d2021f89dc339f60fff84546ea23e337750f',
    APY: '0x95a4492f028aa1fd432ea71146b433e7b4446611',
    INDEX: '0x0954906da0bf32d5479e25f46056d22f08464cab',
    DHT: '0xca1207647ff814039530d7d35df0e1dd2e91fa84',
    DOUGH: '0xad32a8e6220741182940c5abf610bde99e737b2d',
    HGET: '0x7968bc6a03017ea2de509aaa816f163db0f35148',
    BFT: '0x01ff50f8b7f74e4f00580d9596cd3d0d6d6e326f',
    ROOK: '0xfa5047c9c78b8877af97bdcb85db743fd7313d4a',
    YAMV2: '0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a',
    DFD: '0x20c36f062a31865bed8a5b1e512d9a1a20aa333a',
    BLT: '0x107c4504cd79c5d2696ea0030a8dd4e92601b82e',
    SLP: '0x37236cd05b34cc79d3715af2383e96dd7443dcf1',
    HYDRO: '0xebbdf302c940c6bfd49c6b165f457fdb324649bc',
    KRL: '0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0',
    RSV: '0x196f4727526ea7fb1e17b2071b3d8eaa38486988',
    HOT: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
    ADEL: '0x94d863173ee77439e4292284ff13fad54b3ba182',
    SOCKS: '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
    WAR: '0xf4a81c18816c9b0ab98fac51b36dcb63b0e58fde',
    '0xBTC': '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
    DONUT: '0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9',
    TTT: '0x9f599410d207f3d2828a8712e5e543ac2e040382',
    REPv2: '0x221657776846890989a759ba2973e427dff5c9bb',
    GNO: '0x6810e776880c02933d47db1b9fc05908e5386b96',
    AUC: '0xc12d099be31567add4e4e4d0d45691c3f58f5663',
    YAX: '0xb1dc9124c395c1e97773ab855d66e879f053a289',
    OCTO: '0x7240ac91f01233baaf8b064248e80feaa5912ba3',
    VALUE: '0x49e833337ece7afe375e44f4e3e8481029218e5c',
    SHROOM: '0xed0439eacf4c4965ae4613d77a5c2efe10e5f183',
    RGT: '0xd291e7a03283640fdc51b121ac401383a46cc623',
    SEED: '0x30cf203b48edaa42c3b4918e955fed26cd012a3f',
    WG0: '0xa10740ff9ff6852eac84cdcff9184e1d6d27c057',
    WOA: '0xec0a0915a7c3443862b678b0d4721c7ab133fdcf',
    UBXT: '0x8564653879a18c560e7c0ea0e084c516c62f5653',
    BEST: '0x1b073382e63411e3bcffe90ac1b9a43fefa1ec6f',
    TOMOE: '0x05d3606d5c81eb9b7b18530995ec9b29da05faba',
    HEZ: '0xeef9f339514298c6a857efcfc1a762af84438dee',
    PICKLE: '0x429881672b9ae42b8eba0e26cd9c73711b891ca5',
    ENCORE: '0xe0e4839e0c7b2773c58764f9ec3b9622d01a0428',
    YFIM: '0x2e2f3246b6c65ccc4239c9ee556ec143a7e5de2c',
    ORO: '0xc3eb2622190c57429aac3901808994443b64b466',
    XOR: '0x40fd72257597aa14c7231a7b1aaa29fce868f677',
    REN: '0x408e41876cccdc0f92210600ef50372656052a38',
    LRC: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
    CVP: '0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1',
    JUL: '0x5580ab97f226c324c671746a1787524aef42e415',
    KEEP: '0x85eee30c52b0b379b046fb0f85f4f3dc3009afec',
    RMPL: '0xe17f017475a709de58e976081eb916081ff4c9d5',
    OWL: '0x2a7f709ee001069771ceb6d42e85035f7d18e736',
    RARI: '0xfca59cd816ab1ead66534d82bc21e7515ce441cf',
    SUSHI: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    BAO: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
    ORN: '0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a',
    CHARTEX: '0x1d37986f252d0e349522ea6c3b98cb935495e63e',
    XIO: '0x0f7f961648ae6db43c75663ac7e5414eb79b5704',
    YFL: '0x28cb7e841ee97947a86b06fa4090c8451f64c0be',
    SWAP: '0xcc4304a31d09258b0029ea7fe63d032f52e44efe',
    BUSD: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
    POLS: '0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa',
    HAUT: '0x3142dad33b1c6e1371d8627365f2ee2095eb6b37',
    ALMX: '0x25a3dcabbf0070cb8e5baaa62d576cf6643afb5b',
    CANDY: '0x50eb346fc29a80d97563a50146c3fcf9423b5538',
    COKE: '0xa3a3f076413a362bb0d69eea1dc5b0e79c831edc',
    BUGS: '0xbc3ec4e491b835dce394a53e9a9a10ac19564839',
    sDEFI: '0xe1afe1fd76fd88f78cbf599ea1846231b8ba3b6b',
    ALPHA: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
    WVG0: '0x25c7b64a93eb1261e130ec21a3e9918caa38b611',
    KP4R: '0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e',
    IDLE: '0x875773784af8135ea0ef43b5a374aad105c5d39e',
    PERP: '0xbc396689893d065f41bc2c6ecbee5e0085233447',
    ZAP: '0x6781a0f84c7e9e846dcb84a9a5bd49333067b104',
    COVER: '0x5d8d9f5b96f4438195be9b99eee6118ed4304286',
    CRE: '0x115ec79f1de567ec68b7ae7eda501b406626478e',
    L2: '0xbbff34e47e559ef680067a6b1c980639eeb64d24',
    DODO: '0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd',
    API3: '0x0b38210ea11411557c13457d4da7dc6ea731b88a',
    FRONT: '0xf8c3527cc04340b208c854e985240c02f7b7793f',
    SKL: '0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7',
    TRU: '0x4c19596f5aaff459fa38b0f7ed92f11ae6543784',
    DEXT: '0x26ce25148832c04f3d7f26f32478a9fe55197166',
    eXRD: '0x6468e79a80c0eab0f9a2b574c8d5bc374af59414',
    SFI: '0xb753428af26e81097e7fd17f40c88aaa3e04902c',
    RFOX: '0xa1d6df714f91debf4e0802a542e13067f31b8262',
    RAMP: '0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f',
    SYN: '0x1695936d6a953df699c38ca21c2140d497c08bd9',
    BASE: '0x07150e919b4de5fd6a63de1f9384828396f25fdc',
    BADGER: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
    xSUSHI: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
    GRT: '0xc944e90c64b2c07662a292be6244bdf05cda44a7',
    RUNE: '0x3155ba85d5f96b2d030a4966af206230e46849cb',
    FIDA: '0xf40d9507a7d4850c52a45698c9410e2c345f7a94',
    NTFX: '0x87d73e916d7057945c9bcd8cdd94e42a6f47f776',
    sETH: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
    ankrETH: '0xe95a203b1a91a908f9b9ce46459d101078c2c3cb',
    stETH: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
    INJ: '0xe28b3b32b6c345a34ff64674606124dd5aceca30',
    GRO: '0x09e64c2b61a5f1690ee6fbed9baf5d6990f8dfd0',
    TVK: '0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988',
    FRAX: '0x853d955acef822db058eb8505911ed77f175b99e',
    LDO: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
    BOR: '0x3c9d6c1c73b31c837832c72e04d3152f051fc1a9',
    '1inch': '0x111111111117dc0aa78b770fa6a738034120c302'
  }
}

interface DescribesToken {
  address: string
  decimals: number
  symbol: string
}

class TokenDescriptor implements DescribesToken {
  address: string
  decimals: number
  symbol: string
  constructor(address: string, symbol: string, decimals: number) {
    this.address = address //Object.keys(addressMap).find(k => k === symbol)
    this.symbol = symbol
    this.decimals = decimals
  }
}

const tokenMap = {
  NULL: new TokenDescriptor('0x0000000000000000000000000000000000000000', 'Missing', 18),
  XDAI: new TokenDescriptor(addressMap[ChainId.XDAI].XDAI, 'XDAI', 18),
  BAO: new TokenDescriptor(addressMap[ChainId.XDAI].BAO, 'BAO', 18),
  'BAO.cx': new TokenDescriptor(addressMap[ChainId.XDAI]['BAO.cx'], 'BAO.cx', 18),
  WETH: new TokenDescriptor(addressMap[ChainId.XDAI].WETH, 'WETH', 18),
  YFI: new TokenDescriptor(addressMap[ChainId.XDAI].YFI, 'YFI', 18),
  SUSHI: new TokenDescriptor(addressMap[ChainId.XDAI].SUSHI, 'SUSHI', 18),
  XSUSHI: new TokenDescriptor(addressMap[ChainId.XDAI].XSUSHI, 'XSUSHI', 18),
  GRT: new TokenDescriptor(addressMap[ChainId.XDAI].GRT, 'GRT', 18),
  RUNE: new TokenDescriptor(addressMap[ChainId.XDAI].RUNE, 'RUNE', 18),
  '1inch': new TokenDescriptor(addressMap[ChainId.XDAI]['1inch'], '1INCH', 18),
  NFTX: new TokenDescriptor(addressMap[ChainId.XDAI].stETH, 'stETH', 18),
  stETH: new TokenDescriptor(addressMap[ChainId.XDAI].stETH, '', 18),
  TVK: new TokenDescriptor(addressMap[ChainId.XDAI].TVK, 'TVK', 18),
  wBTC: new TokenDescriptor(addressMap[ChainId.XDAI].wBTC, 'WBTC', 8),
  USDT: new TokenDescriptor(addressMap[ChainId.XDAI].USDT, 'USDT', 18),
  LINK: new TokenDescriptor(addressMap[ChainId.XDAI].LINK, 'LINK', 18),
  USDC: new TokenDescriptor(addressMap[ChainId.XDAI].USDC, 'USDC', 6),
  OKB: new TokenDescriptor(addressMap[ChainId.XDAI].OKB, 'OKB', 18),
  HT: new TokenDescriptor(addressMap[ChainId.XDAI].HT, 'HT', 18),
  AAVE: new TokenDescriptor(addressMap[ChainId.XDAI].AAVE, 'AAVE', 18),
  CEL: new TokenDescriptor(addressMap[ChainId.XDAI].CEL, 'CEL', 4),
  SNX: new TokenDescriptor(addressMap[ChainId.XDAI].SNX, 'SNX', 18),
  CRV: new TokenDescriptor(addressMap[ChainId.XDAI].CRV, 'CRV', 18),
  COMP: new TokenDescriptor(addressMap[ChainId.XDAI].COMP, 'COMP', 18),
  MKR: new TokenDescriptor(addressMap[ChainId.XDAI].MKR, 'MKR', 18),
  FTT: new TokenDescriptor(addressMap[ChainId.XDAI].FTT, 'FTT', 18),
  RENBTC: new TokenDescriptor(addressMap[ChainId.XDAI].RENBTC, 'renBTC', 8),
  BAT: new TokenDescriptor(addressMap[ChainId.XDAI].BAT, 'BAT', 18),
  TUSD: new TokenDescriptor(addressMap[ChainId.XDAI].TUSD, 'TUSD', 18),
  HUSD: new TokenDescriptor(addressMap[ChainId.XDAI].HUSD, 'HUSD', 8),
  ZRX: new TokenDescriptor(addressMap[ChainId.XDAI].ZRX, 'ZRX', 18),
  OCEAN: new TokenDescriptor(addressMap[ChainId.XDAI].OCEAN, 'OCEAN', 18),
  KNC: new TokenDescriptor(addressMap[ChainId.XDAI].KNC, 'KNC', 18),
  RSR: new TokenDescriptor(addressMap[ChainId.XDAI].RSR, 'RSR', 18),
  ENJ: new TokenDescriptor(addressMap[ChainId.XDAI].ENJ, 'ENJ', 18),
  NMR: new TokenDescriptor(addressMap[ChainId.XDAI].NMR, 'NMR', 18),
  BAL: new TokenDescriptor(addressMap[ChainId.XDAI].BAL, 'BAL', 18),
  MANA: new TokenDescriptor(addressMap[ChainId.XDAI].MANA, 'MANA', 18),
  MATIC: new TokenDescriptor(addressMap[ChainId.XDAI].MATIC, 'MATIC', 18),
  SXP: new TokenDescriptor(addressMap[ChainId.XDAI].SXP, 'SXP', 18),
  HEGIC: new TokenDescriptor(addressMap[ChainId.XDAI].HEGIC, 'HEGIC', 18),
  HBTC: new TokenDescriptor(addressMap[ChainId.XDAI].HBTC, 'HBTC', 18),
  MPH: new TokenDescriptor(addressMap[ChainId.XDAI].MPH, 'MPH', 18),
  sUSD: new TokenDescriptor(addressMap[ChainId.XDAI].sUSD, 'sUSD', 18),
  MATH: new TokenDescriptor(addressMap[ChainId.XDAI].MATH, 'MATH', 18),
  SRM: new TokenDescriptor(addressMap[ChainId.XDAI].SRM, 'SRM', 6),
  RPL: new TokenDescriptor(addressMap[ChainId.XDAI].RPL, 'RPL', 18),
  BNT: new TokenDescriptor(addressMap[ChainId.XDAI].BNT, 'BNT', 18),
  UBT: new TokenDescriptor(addressMap[ChainId.XDAI].UBT, 'UBT', 18),
  mUSD: new TokenDescriptor(addressMap[ChainId.XDAI].mUSD, 'mUSD', 18),
  EURS: new TokenDescriptor(addressMap[ChainId.XDAI].EURS, 'EURS', 2),
  AXS: new TokenDescriptor(addressMap[ChainId.XDAI].AXS, 'AXS', 18),
  STAKE: new TokenDescriptor(addressMap[ChainId.XDAI].STAKE, 'STAKE', 18),
  BZRX: new TokenDescriptor(addressMap[ChainId.XDAI].BZRX, 'BZRX', 18),
  MLN: new TokenDescriptor(addressMap[ChainId.XDAI].MLN, 'MLN', 18),
  DPI: new TokenDescriptor(addressMap[ChainId.XDAI].DPI, 'DPI', 18),
  tBTC: new TokenDescriptor(addressMap[ChainId.XDAI].tBTC, 'tBTC', 18),
  KP3R: new TokenDescriptor(addressMap[ChainId.XDAI].KP3R, 'KP3R', 18),
  AKRO: new TokenDescriptor(addressMap[ChainId.XDAI].AKRO, 'AKRO', 18),
  MTA: new TokenDescriptor(addressMap[ChainId.XDAI].MTA, 'MTA', 18),
  TKN: new TokenDescriptor(addressMap[ChainId.XDAI].TKN, 'TKN', 8),
  AUDIO: new TokenDescriptor(addressMap[ChainId.XDAI].AUDIO, 'AUDIO', 18),
  Lien: new TokenDescriptor(addressMap[ChainId.XDAI].Lien, 'LIEN', 8),
  JRT: new TokenDescriptor(addressMap[ChainId.XDAI].JRT, 'JRT', 18),
  BOND: new TokenDescriptor(addressMap[ChainId.XDAI].BOND, 'BOND', 8),
  INDEX: new TokenDescriptor(addressMap[ChainId.XDAI].INDEX, 'INDEX', 18),
  DOUGH: new TokenDescriptor(addressMap[ChainId.XDAI].DOUGH, 'DOUGH', 18),
  ROOK: new TokenDescriptor(addressMap[ChainId.XDAI].ROOK, 'ROOK', 18),
  RSV: new TokenDescriptor(addressMap[ChainId.XDAI].RSV, 'RSV', 18),
  SOCKS: new TokenDescriptor(addressMap[ChainId.XDAI].SOCKS, 'SOCKS', 18),
  DONUT: new TokenDescriptor(addressMap[ChainId.XDAI].DONUT, 'DONUT', 18),
  GNO: new TokenDescriptor(addressMap[ChainId.XDAI].GNO, 'GNO', 18),
  RGT: new TokenDescriptor(addressMap[ChainId.XDAI].RGT, 'RGT', 18),
  REN: new TokenDescriptor(addressMap[ChainId.XDAI].REN, 'REN', 18),
  RARI: new TokenDescriptor(addressMap[ChainId.XDAI].RARI, 'RARI', 18),
  IDLE: new TokenDescriptor(addressMap[ChainId.XDAI].IDLE, 'IDLE', 18),
  PERP: new TokenDescriptor(addressMap[ChainId.XDAI].PERP, 'PERP', 18),
  API3: new TokenDescriptor(addressMap[ChainId.XDAI].API3, 'API3', 18),
  FRONT: new TokenDescriptor(addressMap[ChainId.XDAI].FRONT, 'FRONT', 18),
  DUCK: new TokenDescriptor(addressMap[ChainId.XDAI].DUCK, 'DUCK', 18),
  TRU: new TokenDescriptor(addressMap[ChainId.XDAI].TRU, 'TRU', 8),
  FRAX: new TokenDescriptor(addressMap[ChainId.XDAI].FRAX, 'FRAX', 18),
  MASK: new TokenDescriptor(addressMap[ChainId.XDAI].MASK, 'MASK', 18),
  UNI: new TokenDescriptor(addressMap[ChainId.XDAI].UNI, 'UNI', 18),
  HNY: new TokenDescriptor(addressMap[ChainId.XDAI].HNY, 'HNY', 18),
  AGVE: new TokenDescriptor(addressMap[ChainId.XDAI].AGVE, 'AGVE', 18),
  sETH: new TokenDescriptor(addressMap[ChainId.XDAI].sETH, 'sETH', 18),
  NEXO: new TokenDescriptor(addressMap[ChainId.XDAI].NEXO, 'NEXO', 18)
}

// non-address looksups can be used to fetchPrice
export const priceOracles = {
  [ChainId.MAINNET]: {
    [addressMap[ChainId.MAINNET].BAO]: 'bao-finance',
    [addressMap[ChainId.MAINNET].WETH]: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    [addressMap[ChainId.MAINNET].wBTC]: '0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c',
    [addressMap[ChainId.MAINNET].DAI]: '0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9',
    [addressMap[ChainId.MAINNET].WETH]: '0xa767f745331D267c7751297D982b050c93985627',
    [addressMap[ChainId.MAINNET].SUSHI]: '0xC0a6Bf8d5D408B091D022C3C0653d4056D4B9c01',
    [addressMap[ChainId.MAINNET].USDC]: '0x26C31ac71010aF62E6B486D1132E266D6298857D'
  },
  [ChainId.XDAI]: {
    // all XXX-USD
    [addressMap[ChainId.XDAI].BAO]: 'bao-finance',
    [addressMap[ChainId.XDAI].AAVE]: '0x2b481Dc923Aa050E009113Dca8dcb0daB4B68cDF',
    [addressMap[ChainId.XDAI].BAL]: '0x1b723C855F7D2c2785F99486973271355e782d77',
    [addressMap[ChainId.XDAI].wBTC]: '0x6C1d7e76EF7304a40e8456ce883BC56d3dEA3F7d',
    [addressMap[ChainId.XDAI].XDAI]: '0x678df3415fc31947dA4324eC63212874be5a82f8',
    [addressMap[ChainId.XDAI].WETH]: '0xa767f745331D267c7751297D982b050c93985627',
    [addressMap[ChainId.XDAI].LINK]: '0xed322A5ac55BAE091190dFf9066760b86751947B',
    [addressMap[ChainId.XDAI].SNX]: '0x3b84d6e6976D5826500572600eB44f9f1753827b',
    [addressMap[ChainId.XDAI].SUSHI]: '0xC0a6Bf8d5D408B091D022C3C0653d4056D4B9c01',
    [addressMap[ChainId.XDAI].UNI]: '0xd98735d78266c62277Bb4dBf3e3bCdd3694782F4',
    [addressMap[ChainId.XDAI].USDC]: '0x26C31ac71010aF62E6B486D1132E266D6298857D',
    [addressMap[ChainId.XDAI].YFI]: '0x14030d5a0C9e63D9606C6f2c8771Fc95b34b07e0'
  }
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      100: '0x82820a99c431d0Bb7cA775Fa7247d1AC481f2E56'
    },
    tokenAddresses: {
      100: [tokenMap.BAO, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'BAO PARTY',
    symbol: 'BAO-xDAI BAOLP',
    tokenSymbol: 'BAO',
    icon: '/bao.png',
    refUrl: 'https://ftx.com/trade/BAO/USD#a=getbao'
  },
  {
    pid: 1,
    lpAddresses: {
      100: '0x4659640F3444e96ac96cb901177486c1775aAE09'
    },
    tokenAddresses: {
      100: [tokenMap.BAO, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'BAO PARTYv2',
    symbol: 'BAO-wETH BAOLP',
    tokenSymbol: 'BAO',
    icon: '/bao.png',
    refUrl: 'https://ftx.com/trade/BAO/USD#a=getbao'
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0x0eee7f7319013df1f24f5eaf83004fcf9cf49245',
      100: '0x3D1d2B236ad8ef3FD7C6C1625845fB59dFFaCCa1'
    },
    tokenAddresses: {
      100: [tokenMap.BAO, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'BAO PARTYv2',
    symbol: 'BAO-ETH SLP',
    tokenSymbol: 'BAO',
    poolType: 'sushi',
    icon: '/bao.png',
    refUrl: 'https://ftx.com/trade/BAO/USD#a=getbao'
  },
  {
    pid: 3,
    lpAddresses: {
      100: '0x42d69d4b7fC4506504dc4aaA224565B6618e5722'
    },
    tokenAddresses: {
      100: [tokenMap.BAO, tokenMap['BAO.cx']]
    },
    tokenDecimals: 18,
    name: 'BAO Two Ways',
    symbol: 'BAO-BAO.cx BaoLP',
    tokenSymbol: 'BAO.cx',
    icon: '/bao.png',
    refUrl: 'https://ftx.com/trade/BAO/USD#a=getbao'
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0x072b999fc3d82f9ea08b8adbb9d63a980ff2b14d',
      100: '0xFEeC1B8Acd23068fa29Bf01759e0DA1C7cede4F4'
    },
    tokenAddresses: {
      100: [tokenMap.BAO, tokenMap.USDC]
    },
    tokenDecimals: 18,
    name: 'BAO USDC',
    symbol: 'BAO-USDC SushiLP',
    tokenSymbol: 'BAO',
    poolType: 'sushi',
    icon: '/bao.png',
    refUrl: 'https://ftx.com/trade/BAO/USD#a=getbao'
  },
  {
    pid: 5,
    lpAddresses: {
      1: '0x3442801e0ddb9a6d06bc232d51725a658c8bfe10',
      100: '0xcf076d7663cc16109f3879b3C60A60CdD2ef31DB'
    },
    tokenAddresses: {
      100: [tokenMap.YFI, tokenMap.BAO]
    },
    tokenDecimals: 18,
    name: 'YFI BAO',
    symbol: 'YFI-BAO SushiLP',
    tokenSymbol: 'BAO',
    poolType: 'sushi',
    icon: '/bao.png',
    refUrl: 'https://ftx.com/trade/BAO/USD#a=getbao'
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0xc599f66e20a8420894d980624671937d5d7e4ea5',
      100: '0xF768945410933cA301C347FB6C945EC6E9B4c497'
    },
    tokenAddresses: {
      100: [tokenMap.BAO, tokenMap.SUSHI]
    },
    tokenDecimals: 18,
    name: 'BAO Sushi',
    symbol: 'BAO-Sushi SushiLP',
    tokenSymbol: 'BAO',
    poolType: 'sushi',
    icon: '/bao.png',
    refUrl: 'https://ftx.com/trade/BAO/USD#a=getbao'
  },
  {
    pid: 7,
    lpAddresses: {
      1: '0x28bfcf4385c8d32566d8a89a64b7c1e079cb81e6',
      100: '0xd83ce865aBcE674Ec61116c4aBDA281f0184cff7'
    },
    tokenAddresses: {
      100: [tokenMap.BAO, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'BAO DAI',
    symbol: 'BAO-DAI SushiLP',
    tokenSymbol: 'BAO',
    poolType: 'sushi',
    icon: '/bao.png',
    refUrl: 'https://ftx.com/trade/BAO/USD#a=getbao'
  },
  {
    pid: 107,
    lpAddresses: {
      1: '0x795065dcc9f64b5614c407a6efdc400da6221fb0',
      100: '0xf2F9Ff5Cb8E2B21117715B2E3B5C6285349da498'
    },
    tokenAddresses: {
      100: [tokenMap.SUSHI, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Sushi Eth',
    symbol: 'SUSHI-ETH SUSHILP',
    tokenSymbol: 'SUSHI',
    poolType: 'sushi',
    icon: '/simplysushi.png',
    refUrl: 'https://ftx.com/trade/SUSHI/USD#a=createtrade'
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0x321198908bd33b066252d63d363667e3f7094a34',
      100: '0x1987399C0C023869ea00a51750667721BA009be6'
    },
    tokenAddresses: {
      100: [tokenMap.SUSHI, tokenMap.XSUSHI]
    },
    tokenDecimals: 18,
    name: 'Sushi xSushi',
    symbol: 'SUSHI-xSUSHI SushiLP',
    tokenSymbol: 'sushi',
    poolType: 'sushi',
    icon: '/simplysushi.png',
    refUrl: 'https://ftx.com/trade/BAO/USD#a=getbao'
  },
  {
    pid: 9,
    lpAddresses: {
      1: '0x36e2fcccc59e5747ff63a03ea2e5c0c2c14911e7',
      100: '0xfE536fE3c3E870675083f66441dF0F8ed3273650'
    },
    tokenAddresses: {
      100: [tokenMap.XSUSHI, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'xSushi Maki',
    symbol: 'xSUSHI-ETH SushiLP',
    tokenSymbol: 'sushi',
    poolType: 'sushi',
    icon: '/simplysushi.png',
    refUrl: 'https://ftx.com/trade/SUSHI/USD#a=getbao'
  },
  {
    pid: 10,
    lpAddresses: {
      100: '0xF8f02044B74F34CBd83dCa483547B7F32768Fe50'
    },
    tokenAddresses: {
      100: [tokenMap.GRT, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'GRT Gummies',
    symbol: 'GRT-xDAI BAOLP',
    tokenSymbol: 'GRT',
    icon: '/gummy-bear.png',
    refUrl: 'https://ftx.com/trade/GRT/USD#a=getbao'
  },
  {
    pid: 11,
    lpAddresses: {
      100: '0x40B8EB2575926B1F67C939B01d1716296576dc33'
    },
    tokenAddresses: {
      100: [tokenMap.GRT, tokenMap.wBTC]
    },
    tokenDecimals: 18,
    name: 'GRT Gummies',
    symbol: 'GRT-wBTC BAOLP',
    tokenSymbol: 'GRT',
    icon: '/gummy-bear.png',
    refUrl: 'https://ftx.com/trade/GRT/USD#a=getbao'
  },
  {
    pid: 12,
    lpAddresses: {
      100: '0x0378cc2fb49Ae06b857dEBfcbB45339dC692802C'
    },
    tokenAddresses: {
      100: [tokenMap.RUNE, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Rune Ramen',
    symbol: 'RUNE-xDAI BAOLP',
    tokenSymbol: 'RUNE',
    icon: '/ramennoodle.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/RUNE'
  },
  {
    pid: 13,
    lpAddresses: {
      100: '0x8746355882E10AAE144d3709889dfAA39FF2a692'
    },
    tokenAddresses: {
      100: [tokenMap['1inch'], tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: '1Inch Nibbles',
    symbol: '1INCH-xDAI BAOLP',
    tokenSymbol: '1inch',
    icon: '/moon-cakers.png',
    refUrl: 'https://ftx.com/trade/1INCH/USD#a=getbao'
  },
  {
    pid: 14,
    lpAddresses: {
      100: '0x9fbB63681bD9939514Fc437944B404E8e5208E20'
    },
    tokenAddresses: {
      100: [tokenMap.NFTX, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'NFTX Nuggets',
    symbol: 'NFTX-xDAI BAOLP',
    tokenSymbol: 'NFTX',
    icon: '/nuggets.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/NFTX'
  },
  {
    pid: 15,
    lpAddresses: {
      100: '0x539672a592a4EC2cA58d0CC594D1757A838C4292'
    },
    tokenAddresses: {
      100: [tokenMap.stETH, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'stETH xDAI',
    symbol: 'stETH-xDAI BAOLP',
    tokenSymbol: 'stETH',
    icon: '/eth.png',
    refUrl: 'https://app.uniswap.org/#/swap?outputCurrency=0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
  },
  {
    pid: 16,
    lpAddresses: {
      100: '0x855A564DE501eDB4d11b475f47e69d86E686Fae6'
    },
    tokenAddresses: {
      100: [tokenMap.stETH, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'stETH wETH',
    symbol: 'stETH-wETH BAOLP',
    tokenSymbol: 'stETH',
    icon: '/eth.png',
    refUrl: 'https://app.uniswap.org/#/swap?outputCurrency=0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
  },
  {
    pid: 17,
    lpAddresses: {
      100: '0x0EEb6dFda017Db4F76A7Da69AD6670fF6b841618'
    },
    tokenAddresses: {
      100: [tokenMap.TVK, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'TVK Shared Meal',
    symbol: 'TVK-xDAI BAOLP',
    tokenSymbol: 'TVK',
    icon: '/picnic.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/TVK'
  },
  {
    pid: 18,
    lpAddresses: {
      100: '0x8c36F7CA02D50bF8E705F582328b873Acbe9438D'
    },
    tokenAddresses: {
      100: [tokenMap.WETH, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'wETH xDAI',
    symbol: 'wETH-xDAI BAOLP',
    tokenSymbol: 'wETH',
    icon: '/eth.png',
    refUrl: 'https://ftx.com/trade/ETH/USD#a=getbao'
  },
  {
    pid: 19,
    lpAddresses: {
      100: '0xa498fFe098f4dc9a52FAB6fBdd5c624Ca237F39c'
    },
    tokenAddresses: {
      100: [tokenMap.wBTC, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'wBTC Wraps',
    symbol: 'wBTC-xDAI BAOLP',
    tokenSymbol: 'wBTC',
    icon: '/wrap.png',
    refUrl: 'https://www.binance.com/en/register?ref=NFBFR4AC'
  },
  {
    pid: 104,
    lpAddresses: {
      100: '0x7143aB1782bD66d966CAC3dba902Bde4c1Bfe31B'
    },
    tokenAddresses: {
      100: [tokenMap.USDT, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Tether Truffles',
    symbol: 'USDT-xDAI BAOLP',
    tokenSymbol: 'USDT',
    icon: '/chocolate.png',
    refUrl: 'https://ftx.com/trade/USDT/USD#a=getbao'
  },
  {
    pid: 20,
    lpAddresses: {
      100: '0x4cCB2Fe7472c0a6f73a7154023a6F652F24694ee'
    },
    tokenAddresses: {
      100: [tokenMap.LINK, tokenMap.XDAI]
    },
    tokenDecimals: 6,
    name: 'Link Lunch',
    symbol: 'LINK-xDAI BAOLP',
    tokenSymbol: 'LINK',
    icon: '/sandwich.png',
    refUrl: 'https://ftx.com/trade/LINK/USD#a=getbao'
  },
  {
    pid: 21,
    lpAddresses: {
      100: '0x71c20bfCb1170E1643ccDf1FF25714615eEF6701'
    },
    tokenAddresses: {
      100: [tokenMap.USDC, tokenMap.XDAI]
    },
    tokenDecimals: 6,
    name: 'USDC Crunch',
    symbol: 'USDC-xDAI BAOLP',
    tokenSymbol: 'USDC',
    icon: '/cereals.png',
    refUrl: 'https://www.binance.com/en/register?ref=NFBFR4AC'
  },
  {
    pid: 22,
    lpAddresses: {
      100: '0xB3F137f8966317DDB63e59d28831962f30C56be2'
    },
    tokenAddresses: {
      100: [tokenMap.OKB, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'OKB Okra',
    symbol: 'OKB-xDAI BAOLP',
    tokenSymbol: 'OKB',
    icon: '/okra.png',
    refUrl: 'https://ftx.com/trade/OKB/USD#a=createtrade'
  },
  {
    pid: 23,
    lpAddresses: {
      100: '0x456Cbcf435f8c21280F947C6197a725c508cbC29'
    },
    tokenAddresses: {
      100: [tokenMap.HT, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Huobi Har Gow',
    symbol: 'HT-xDAI BAOLP',
    tokenSymbol: 'HT',
    icon: '/shrimp.png',
    refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33'
  },
  {
    pid: 24,
    lpAddresses: {
      100: '0xfE146525b01dcF721d0714eb46a2E5dE3C01357a'
    },
    tokenAddresses: {
      100: [tokenMap.AAVE, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Aave Appetizer',
    symbol: 'AAVE-xDAI BAOLP',
    tokenSymbol: 'AAVE',
    icon: '/appetizer.png',
    refUrl: 'https://app.aave.com/?referral=108'
  },
  {
    pid: 25,
    lpAddresses: {
      100: '0xDb9f7C72B9bCE159dba62f3E4C84477A6Baf4597'
    },
    tokenAddresses: {
      100: [tokenMap.CEL, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Celcius Compote',
    symbol: 'CEL-xDAI BAOLP',
    tokenSymbol: 'CEL',
    icon: '/apple-jam.png',
    refUrl: 'https://www.hoozh.com/friends/26368269?localeLang=en&'
  },
  {
    pid: 26,
    lpAddresses: {
      100: '0xCEAd5C71231764aBfc8B809824666603E8614853'
    },
    tokenAddresses: {
      100: [tokenMap.SNX, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Synthetix Snacks',
    symbol: 'SNX-xDAI BAOLP',
    tokenSymbol: 'SNX',
    icon: '/snack.png',
    refUrl: 'https://ftx.com/trade/SNX/USD#a=getbao'
  },
  {
    pid: 27,
    lpAddresses: {
      100: '0xCdf15b16B5dd71f17ef1d1996292Af205f960A68'
    },
    tokenAddresses: {
      100: [tokenMap.CRV, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Curve Custard',
    symbol: 'CRV-xDAI BAOLP',
    tokenSymbol: 'CRV',
    icon: '/custard.png',
    refUrl: 'https://www.okex.com/join/3/1914410'
  },
  {
    pid: 28,
    lpAddresses: {
      100: '0x2fB0dD74f6365Ff77dA7Aa7D4b1B790847a5DA00'
    },
    tokenAddresses: {
      100: [tokenMap.COMP, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Compound Congee',
    symbol: 'COMP-xDAI BAOLP',
    tokenSymbol: 'COMP',
    icon: '/congee.png',
    refUrl: 'https://ftx.com/trade/COMP-PERP#a=createtrade'
  },
  {
    pid: 29,
    lpAddresses: {
      100: '0x6AcE292e8e67d66597F9598f593c986c88A062cA'
    },
    tokenAddresses: {
      100: [tokenMap.MKR, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Maker Mooncake',
    symbol: 'MKR-xDAI BAOLP',
    tokenSymbol: 'MKR',
    icon: '/moon-cake.png',
    refUrl: 'https://ftx.com/trade/MKR-PERP#a=createtrade'
  },
  {
    pid: 30,
    lpAddresses: {
      100: '0x0196706CE5610541E4AD54B7B81216ca9F69C99A'
    },
    tokenAddresses: {
      100: [tokenMap.FTT, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'FTT Fried Tofu',
    symbol: 'FTT-xDAI BAOLP',
    tokenSymbol: 'FTT',
    icon: '/tofu.png',
    refUrl: 'https://ftx.com/trade/FTT/USD#a=createtrade'
  },
  {
    pid: 31,
    lpAddresses: {
      100: '0x1de82AF7622F3c1c9b4c7917C417222B97A6aE27'
    },
    tokenAddresses: {
      100: [tokenMap.RENBTC, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'RenBTC Red Bean Soup',
    symbol: 'RENBTC-xDAI BAOLP',
    tokenSymbol: 'RENBTC',
    icon: '/soup.png',
    refUrl: 'https://virgox.com/login/register?code=gxkb7dva'
  },
  {
    pid: 32,
    lpAddresses: {
      100: '0x1B405646d8c8506Ff51DAD739c61A64040b0b8F5'
    },
    tokenAddresses: {
      100: [tokenMap.BAT, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Brave Braised Pork',
    symbol: 'BAT-xDAI BAOLP',
    tokenSymbol: 'BAT',
    icon: '/beef.png',
    refUrl: 'https://www.decoin.io/?ref=56336'
  },
  {
    pid: 33,
    lpAddresses: {
      100: '0x013CCFFec2209829407De76108DFBa65857E395B'
    },
    tokenAddresses: {
      100: [tokenMap.TUSD, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'TUSD Tea Egg',
    symbol: 'TUSD-xDAI BAOLP',
    tokenSymbol: 'TUSD',
    icon: '/boiled-egg.png',
    refUrl: 'https://www.digifinex.com/en-ww/from/v7D3UM?channelCode=ljaUPp'
  },
  {
    pid: 34,
    lpAddresses: {
      100: '0x447Fe71ABCc00959B8cA9eD4E55b3D4bEA5E15E5'
    },
    tokenAddresses: {
      100: [tokenMap.HUSD, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'HUSD Hot Pot',
    symbol: 'HUSD-xDAI BAOLP',
    tokenSymbol: 'HUSD',
    icon: '/chinese-food.png',
    refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33'
  },
  {
    pid: 35,
    lpAddresses: {
      100: '0xB3b5D8f6108C19FeedE2525D9c7DbaD29C8Dd20e'
    },
    tokenAddresses: {
      100: [tokenMap.ZRX, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: '0x Ox Tail',
    symbol: 'ZRX-xDAI BAOLP',
    tokenSymbol: 'ZRX',
    icon: '/meat.png',
    refUrl: 'https://nominex.io/?r=33642'
  },
  {
    pid: 36,
    lpAddresses: {
      100: '0xD4AaD8CAD77fc255B1a7F4aB0e4273deFe529Fb4'
    },
    tokenAddresses: {
      100: [tokenMap.OCEAN, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Ocean Orange Chicken',
    symbol: 'OCEAN-xDAI BAOLP',
    tokenSymbol: 'OCEAN',
    icon: '/orange-chicken.png',
    refUrl: 'https://www.kucoin.com/ucenter/signup?rcode=Ptuf31'
  },
  {
    pid: 37,
    lpAddresses: {
      100: '0xc8812c9BBb3554F862e427CA063E3A057Ec2b335'
    },
    tokenAddresses: {
      100: [tokenMap.KNC, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Kyber Kung Pao Chicken',
    symbol: 'KNC-xDAI BAOLP',
    tokenSymbol: 'KNC',
    icon: '/kung-pao-chicken.png',
    refUrl: 'https://ftx.com/trade/KNC-PERP#a=createtrade'
  },
  {
    pid: 38,
    lpAddresses: {
      100: '0x7d3B30c6b2B0A4868bf080E732841e406a6CaD7c'
    },
    tokenAddresses: {
      100: [tokenMap.RSR, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Reserve Ragout',
    symbol: 'RSR-xDAI BAOLP',
    tokenSymbol: 'RSR',
    icon: '/stew.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 39,
    lpAddresses: {
      100: '0xeB3BAC49C4ab021590BF0FD73F7cD22d462b47a4'
    },
    tokenAddresses: {
      100: [tokenMap.ENJ, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Enjin Egg',
    symbol: 'ENJ-xDAI BAOLP',
    tokenSymbol: 'ENJ',
    icon: '/egg.png',
    refUrl: 'https://crypto.com/exch/93x4g2q4zk'
  },
  {
    pid: 40,
    lpAddresses: {
      100: '0x7D3E57341dD6Cc8aEbE07a78a43cB085eA033fde'
    },
    tokenAddresses: {
      100: [tokenMap.NMR, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'NMR Niurou Wan',
    symbol: 'NMR-xDAI BAOLP',
    tokenSymbol: 'NMR',
    icon: '/meatballs.png',
    refUrl: 'https://www.digifinex.com/en-ww/from/?channelCode=ljaUPp'
  },
  {
    pid: 41,
    lpAddresses: {
      100: '0xD068967Bf363e3149a60fCD35925cE0a2B863455'
    },
    tokenAddresses: {
      100: [tokenMap.BAL, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Balancer Bento',
    symbol: 'BAL-xDAI BAOLP',
    tokenSymbol: 'BAL',
    icon: '/bento.png',
    refUrl: 'https://ftx.com/trade/BAL-PERP#a=createtrade'
  },
  {
    pid: 42,
    lpAddresses: {
      100: '0xe0AcaC02638F4BA6Be14d3e49b9e028157610306'
    },
    tokenAddresses: {
      100: [tokenMap.MANA, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Mana Miantiao',
    symbol: 'MANA-xDAI BAOLP',
    tokenSymbol: 'MANA',
    icon: '/noodles.png',
    refUrl: 'https://virgox.com/login/register?code=gxkb7dva'
  },
  {
    pid: 43,
    lpAddresses: {
      100: '0x01E0AC7AC401705809ac4EF4E5E480F0C4F54a97'
    },
    tokenAddresses: {
      100: [tokenMap.MATIC, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Matic Mandarin Fish',
    symbol: 'MATIC-xDAI BAOLP',
    tokenSymbol: 'MATIC',
    icon: '/fish.png',
    refUrl: 'https://ftx.com/trade/MATIC-PERP#a=createtrade'
  },
  {
    pid: 44,
    lpAddresses: {
      100: '0xF8a9c9F1853eD36Af45e8d5B16E8D119Aca44f26'
    },
    tokenAddresses: {
      100: [tokenMap.SXP, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'SXP Suan La Tang',
    symbol: 'SXP-xDAI BAOLP',
    tokenSymbol: 'SXP',
    icon: '/hotsour.png',
    refUrl: 'https://ftx.com/trade/SXP-PERP#a=createtrade'
  },
  {
    pid: 45,
    lpAddresses: {
      100: '0xc02716a93fD05e7704699a09091565f79305887F'
    },
    tokenAddresses: {
      100: [tokenMap.HEGIC, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Hegic Hom Sui Gok',
    symbol: 'HEGIC-xDAI BAOLP',
    tokenSymbol: 'HEGIC',
    icon: '/dumpling.png',
    refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G'
  },
  {
    pid: 46,
    lpAddresses: {
      100: '0x4Ef2294c429EB72c7463beb8dBFe3Fe6B01AA749'
    },
    tokenAddresses: {
      100: [tokenMap.HBTC, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'HBTC Har Cheung',
    symbol: 'HBTC-xDAI BAOLP',
    tokenSymbol: 'HBTC',
    icon: '/egg-rolls.png',
    refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33'
  },
  {
    pid: 47,
    lpAddresses: {
      100: '0x33d4E2EDe208B3616210558a4d99FB4eCF40e411'
    },
    tokenAddresses: {
      100: [tokenMap.MPH, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: '88mph Chilis',
    symbol: 'MPH-xDAI BAOLP',
    tokenSymbol: 'MPH',
    icon: '/chili.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 48,
    lpAddresses: {
      100: '0xD054A866F8cc3031e4CB9f2C1C72EBa4820b6E60'
    },
    tokenAddresses: {
      100: [tokenMap.sUSD, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'sUSD Sticky Rice',
    symbol: 'sUSD-xDAI BAOLP',
    tokenSymbol: 'sUSD',
    icon: '/sticky-rice.png',
    refUrl: 'https://virgox.com/login/register?code=gxkb7dva'
  },
  {
    pid: 49,
    lpAddresses: {
      100: '0xba18cA5450acc124EA756bA3fb2ba55F2bABD0e7'
    },
    tokenAddresses: {
      100: [tokenMap.MATH, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Math Mapo Tofu',
    symbol: 'MATH-xDAI BAOLP',
    tokenSymbol: 'MATH',
    icon: '/mapo-tofu.png',
    refUrl: 'https://ftx.com/trade/MATH/USD#a=createtrade'
  },
  {
    pid: 50,
    lpAddresses: {
      100: '0xA08678B12CAa9573920B934d700b15e625eA13fa'
    },
    tokenAddresses: {
      100: [tokenMap.SRM, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'SRM Springrolls',
    symbol: 'SRM-xDAI BAOLP',
    tokenSymbol: 'SRM',
    icon: '/spring-rolls.png',
    refUrl: 'https://ftx.com/trade/SRM/USD#a=createtrade'
  },
  {
    pid: 51,
    lpAddresses: {
      100: '0x3B62358d139451898A57513Fc5e8E1b75b587740'
    },
    tokenAddresses: {
      100: [tokenMap.RPL, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Rocketpool Roe',
    symbol: 'RPL-xDAI BAOLP',
    tokenSymbol: 'RPL',
    icon: '/caviar.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/RPL'
  },
  {
    pid: 52,
    lpAddresses: {
      100: '0x1eBe02AEBd5FFD6847D03A435C21DF90974435be'
    },
    tokenAddresses: {
      100: [tokenMap.BNT, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Bancor Black Bean Sauce',
    symbol: 'BNT-xDAI BAOLP',
    tokenSymbol: 'BNT',
    icon: '/soy-sauce.png',
    refUrl: 'https://ftx.com/trade/BNT/USD#a=createtrade'
  },
  {
    pid: 53,
    lpAddresses: {
      100: '0x2f77238399b19B16B98c502b37C8d4D6a56331B0'
    },
    tokenAddresses: {
      100: [tokenMap.UBT, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'UBT Umeboshi',
    symbol: 'UBT-xDAI BAOLP',
    tokenSymbol: 'UBT',
    icon: '/dried-fruit.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 54,
    lpAddresses: {
      100: '0x65B0671997391ff6983142d4DAc9fa08Eb0daFdb'
    },
    tokenAddresses: {
      100: [tokenMap.mUSD, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'mUSD Meatballs',
    symbol: 'mUSD-xDAI BAOLP',
    tokenSymbol: 'mUSD',
    icon: '/meatball.png',
    refUrl: 'https://virgox.com/login/register?code=gxkb7dva'
  },
  {
    pid: 55,
    lpAddresses: {
      100: '0x4841B38EeC7E0c1A48EFa5dDDC5e1e35572E5E9f'
    },
    tokenAddresses: {
      100: [tokenMap.EURS, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'EURS Eclairs',
    symbol: 'EURS-xDAI BAOLP',
    tokenSymbol: 'EURS',
    icon: '/eclair.png',
    refUrl: 'https://virgox.com/login/register?code=gxkb7dva'
  },
  {
    pid: 56,
    lpAddresses: {
      100: '0x93888156eCd6E1D8644285A057dde37fdBd620D1'
    },
    tokenAddresses: {
      100: [tokenMap.AXS, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'AXS Ahi Tuna',
    symbol: 'AXS-xDAI BAOLP',
    tokenSymbol: 'AXS',
    icon: '/salmon.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 57,
    lpAddresses: {
      1: '0x9fc5b87b74b9bd239879491056752eb90188106d',
      100: '0x3CFd76aF96be1491dc58c76458791763D354f275'
    },
    tokenAddresses: {
      100: [tokenMap.STAKE, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Stake Soy Sauce',
    symbol: 'Stake-ETH SLP',
    tokenSymbol: 'STAKE',
    poolType: 'sushi',
    icon: '/soy.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 58,
    lpAddresses: {
      1: '0xa30911e072a0c88d55b5d0a0984b66b0d04569d0',
      100: '0x7cC121D777C4322fb1DaaB5d511236e682d83512'
    },
    tokenAddresses: {
      100: [tokenMap.BZRX, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'BZRX Beef Tendon',
    symbol: 'BZRX-ETH SLP',
    tokenSymbol: 'BZRX',
    poolType: 'sushi',
    icon: '/ham.png',
    refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G'
  },
  {
    pid: 59,
    lpAddresses: {
      100: '0xB1C5372E620FFDBfc98187Ee08C80043Ca5aB201'
    },
    tokenAddresses: {
      100: [tokenMap.MLN, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Melon Marmalade',
    symbol: 'MLN-xDAI BAOLP',
    tokenSymbol: 'MLN',
    icon: '/marmalade.png',
    refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G'
  },
  {
    pid: 60,
    lpAddresses: {
      100: '0xbBb715Ab2c1188ae2c63533EE57f0FEd16E2bE20'
    },
    tokenAddresses: {
      100: [tokenMap.DPI, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'DPI Deep Fried Shrimp',
    symbol: 'DPI-xDAI BAOLP',
    tokenSymbol: 'DPI',
    icon: '/tempura.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 61,
    lpAddresses: {
      100: '0x29601D0743a1c28d07b11aBD6A7790d14152302D'
    },
    tokenAddresses: {
      100: [tokenMap.tBTC, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'tBTC Taro Dumpling',
    symbol: 'tBTC-xDAI BAOLP',
    tokenSymbol: 'tBTC',
    icon: '/taro.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/tBTC'
  },
  {
    pid: 62,
    lpAddresses: {
      100: '0x78Ac941CE1b0A3B7cAf09d374c186D1A170B1B51'
    },
    tokenAddresses: {
      100: [tokenMap.KP3R, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'KP3R Kebab',
    symbol: 'KP3R-xDAI BAOLP',
    tokenSymbol: 'KP3R',
    icon: '/kebab.png',
    refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G'
  },
  {
    pid: 63,
    lpAddresses: {
      100: '0xf79De375c6e3d7CCa91fA5cFbfcFa1f1a09C0A80'
    },
    tokenAddresses: {
      100: [tokenMap.AKRO, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Akro Amygdalota',
    symbol: 'AKRO-xDAI BAOLP',
    tokenSymbol: 'AKRO',
    icon: '/cookie.png',
    refUrl: 'https://ftx.com/trade/AKRO/USD#a=createtrade'
  },
  {
    pid: 64,
    lpAddresses: {
      100: '0xFCFEb63c60dfed479Bc0fbB0D3774341330B0545'
    },
    tokenAddresses: {
      100: [tokenMap.MTA, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'MTA Mantou',
    symbol: 'MTA-xDAI BAOLP',
    tokenSymbol: 'MTA',
    icon: '/mantou.png',
    refUrl: 'https://ftx.com/trade/MTA-PERP#a=createtrade'
  },
  {
    pid: 65,
    lpAddresses: {
      100: '0x24aC1A1bb7993eDbB4cFA45A6fc60DeBFF29aA23'
    },
    tokenAddresses: {
      100: [tokenMap.TKN, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Monolith Matcha',
    symbol: 'TKN-xDAI BAOLP',
    tokenSymbol: 'TKN',
    icon: '/matcha-tea.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 66,
    lpAddresses: {
      100: '0xEaa608CC858b2C315216A40d3F5263121D06ddC2'
    },
    tokenAddresses: {
      100: [tokenMap.AUDIO, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Audio Arame',
    symbol: 'AUDIO-xDAI BAOLP',
    tokenSymbol: 'AUDIO',
    icon: '/spices.png',
    refUrl: 'https://ftx.com/trade/AUDIO/USD#a=createtrade'
  },
  {
    pid: 67,
    lpAddresses: {
      100: '0x439440133E47acC5F22A26dA574F81137bac7d0e'
    },
    tokenAddresses: {
      100: [tokenMap.Lien, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Lien Lo Mein',
    symbol: 'LIEN-xDAI BAOLP',
    tokenSymbol: 'LIEN',
    icon: '/wonton-noodles.png',
    refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G'
  },
  {
    pid: 68,
    lpAddresses: {
      100: '0x2590eB745199436b404757e8d2e38b31049633b0'
    },
    tokenAddresses: {
      100: [tokenMap.JRT, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'JRT Jiaohua Ji',
    symbol: 'JRT-xDAI BAOLP',
    tokenSymbol: 'JRT',
    icon: '/chicken-dish.png',
    refUrl: 'https://bitmax.io/register?inviteCode=MCTXZDRU'
  },
  {
    pid: 69,
    lpAddresses: {
      100: '0x1c47428d5B07bf19cca9a770484204b02352a337'
    },
    tokenAddresses: {
      100: [tokenMap.BOND, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'BOND Baobing',
    symbol: 'BOND-xDAI BAOLP',
    tokenSymbol: 'BOND',
    icon: '/shaved-ice.png',
    refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G'
  },
  {
    pid: 70,
    lpAddresses: {
      100: '0xC0F1596DcdEb142af173F85b972064e6d55253AA'
    },
    tokenAddresses: {
      100: [tokenMap.INDEX, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Index Ice Tea',
    symbol: 'INDEX-xDAI BAOLP',
    tokenSymbol: 'INDEX',
    icon: '/bubble-tea.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 71,
    lpAddresses: {
      100: '0xBA4c502cF4eC63c34ea58713c23b602365eabd36'
    },
    tokenAddresses: {
      100: [tokenMap.DOUGH, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'DOUGH(nut)',
    symbol: 'DOUGH-xDAI BAOLP',
    tokenSymbol: 'DOUGH',
    icon: '/dough.png',
    refUrl: 'https://www.hotbit.io/register?ref=669143'
  },
  {
    pid: 72,
    lpAddresses: {
      100: '0x481166914c85de5709751974407e29506e2AA8bA'
    },
    tokenAddresses: {
      100: [tokenMap.ROOK, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Rook Rice Noodle Roll',
    symbol: 'ROOK-xDAI BAOLP',
    tokenSymbol: 'ROOK',
    icon: '/roll-fish.png',
    refUrl: 'https://www.hotbit.io/register?ref=669143'
  },
  {
    pid: 73,
    lpAddresses: {
      100: '0x10cb3eeDA12958b9260e4346f4AEDEFaDfcC3238'
    },
    tokenAddresses: {
      100: [tokenMap.RSV, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'RSV Radish Cake',
    symbol: 'RSV-xDAI BAOLP',
    tokenSymbol: 'RSV',
    icon: '/radish-cake.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/RSV/ETH'
  },
  {
    pid: 74,
    lpAddresses: {
      100: '0xCa5BecAe7788BdD3025f243835866464262543e4'
    },
    tokenAddresses: {
      100: [tokenMap.SOCKS, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'SOCKS Non-Edible',
    symbol: 'SOCKS-xDAI BAOLP',
    tokenSymbol: 'SOCKS',
    icon: '/socks.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/SOCKS/ETH'
  },
  {
    pid: 75,
    lpAddresses: {
      100: '0x9C43b67cf7af1e65253634ac1c48c7FE8E5D8234'
    },
    tokenAddresses: {
      100: [tokenMap.DONUT, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'DONUT (Snoo Sprinkles)',
    symbol: 'DONUT-xDAI BAOLP',
    tokenSymbol: 'DONUT',
    icon: '/donut.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/DONUT'
  },
  {
    pid: 76,
    lpAddresses: {
      100: '0xba2fc9EDBA4944973Ab0cB26f0B80DD2D58389E1'
    },
    tokenAddresses: {
      100: [tokenMap.GNO, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'GNO Gongbao Jiding',
    symbol: 'GNO-xDAI BAOLP',
    tokenSymbol: 'GNO',
    icon: '/kungpao.png',
    refUrl: 'https://www.hoozh.com/friends/26368269?localeLang=en&'
  },
  {
    pid: 77,
    lpAddresses: {
      100: '0x246eb65d5527AcdD24De2949071Ff82694BEC758'
    },
    tokenAddresses: {
      100: [tokenMap.RGT, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'RGT Reheated',
    symbol: 'RGT-xDAI BAOLP',
    tokenSymbol: 'RGT',
    icon: '/stew2.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/RGT/ETH'
  },
  {
    pid: 78,
    lpAddresses: {
      100: '0x9013Ce7AA5CdFD6665e4F1796eA58197BAea80cd'
    },
    tokenAddresses: {
      100: [tokenMap.REN, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'REN Roast Chicken',
    symbol: 'REN-xDAI BAOLP',
    tokenSymbol: 'REN',
    icon: '/roastchicken.png',
    refUrl: 'https://www.digifinex.com/en-ww/from/?channelCode=ljaUPp'
  },
  {
    pid: 79,
    lpAddresses: {
      100: '0xb8f9d3F58c4243bE33DB8246877Bbf89614869d4'
    },
    tokenAddresses: {
      100: [tokenMap.RARI, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Rari Riceballs',
    symbol: 'RARI-xDAI BAOLP',
    tokenSymbol: 'RARI',
    icon: '/rice-ball-with-seaweed.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/RARI'
  },
  {
    pid: 80,
    lpAddresses: {
      100: '0xD73A386b836D02e44cf9F9CC95f029d8B803C226'
    },
    tokenAddresses: {
      100: [tokenMap.IDLE, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Idle Ice',
    symbol: 'IDLE-xDAI BAOLP',
    tokenSymbol: 'IDLE',
    icon: '/ice-cube.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/IDLE/ETH'
  },
  {
    pid: 81,
    lpAddresses: {
      100: '0xEdE0e75533EF8987777139778E5fDC187622FD65'
    },
    tokenAddresses: {
      100: [tokenMap.PERP, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Perpetual Pizza',
    symbol: 'PERP-xDAI BAOLP',
    tokenSymbol: 'PERP',
    icon: '/pizza.png',
    refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G'
  },
  {
    pid: 82,
    lpAddresses: {
      100: '0x71696a13a1e3e4a5e3929d88DA6E0aA3091ECf96'
    },
    tokenAddresses: {
      100: [tokenMap.API3, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'API3 Avocado Toast',
    symbol: 'API3-xDAI BAOLP',
    tokenSymbol: 'API3',
    icon: '/toaster.png',
    refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G'
  },
  {
    pid: 83,
    lpAddresses: {
      100: '0xe2ed9f396F8c4AE1b0B51a928222A65dD0019C3d'
    },
    tokenAddresses: {
      100: [tokenMap.FRONT, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Front Frog Legs',
    symbol: 'FRONT-xDAI BAOLP',
    tokenSymbol: 'FRONT',
    icon: '/frog-prince.png',
    refUrl: 'https://ftx.com/trade/FRONT/USD#a=createtrade'
  },
  {
    pid: 84,
    lpAddresses: {
      100: '0xC8FA93d318686cd542709a28939D0E7E0Ba0E35a'
    },
    tokenAddresses: {
      100: [tokenMap.TRU, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Tru Turtle Soup',
    symbol: 'TRU-xDAI BAOLP',
    tokenSymbol: 'TRU',
    icon: '/turtle.png',
    refUrl: 'https://ftx.com/trade/TRU/USD#a=createtrade'
  },
  {
    pid: 85,
    lpAddresses: {
      100: '0xD17E2024B1357B8485D0CeC16370D5258f5b1634'
    },
    tokenAddresses: {
      100: [tokenMap.DUCK, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Duck Roasted',
    symbol: 'DUCK-xDAI BAOLP',
    tokenSymbol: 'DUCK',
    icon: '/roastchicken.png',
    refUrl: '#'
  },
  {
    pid: 86,
    lpAddresses: {
      100: '0xf8837744F1036838E054e68d8d53F337702c240E'
    },
    tokenAddresses: {
      100: [tokenMap.FRAX, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Frax Fries',
    symbol: 'FRAX-xDAI BAOLP',
    tokenSymbol: 'FRAX',
    icon: '/fried-potatoes.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/FRAX'
  },
  {
    pid: 87,
    lpAddresses: {
      100: '0x98425c753d945d3124Bc1335bCb09595DFa029F4'
    },
    tokenAddresses: {
      100: [tokenMap.USDT, tokenMap.USDC]
    },
    tokenDecimals: 18,
    name: 'USDT USDC',
    symbol: 'USDT-USDC BAOLP',
    tokenSymbol: 'USDT',
    icon: '/bao.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/USDT'
  },
  {
    pid: 88,
    lpAddresses: {
      100: '0xa59f0B26fD802AEc20AF0B24e26b12C08c1b64F7'
    },
    tokenAddresses: {
      100: [tokenMap.MASK, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Mask Maki',
    symbol: 'MASK-xDAI BAOLP',
    tokenSymbol: 'MASK',
    icon: '/simplysushi.png',
    refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G'
  },
  {
    pid: 89,
    lpAddresses: {
      100: '0xC1c4D3070f2E87686777bEE0011CFd05c5c60115'
    },
    tokenAddresses: {
      100: [tokenMap.wBTC, tokenMap.tBTC]
    },
    tokenDecimals: 18,
    name: 'wBTC tBTC',
    symbol: 'wBTC-tBTC BAOLP',
    tokenSymbol: 'tBTC',
    icon: '/bao.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/tBTC'
  },
  {
    pid: 90,
    lpAddresses: {
      100: '0xD7eaa697f60fE733eA12526698C88302BA1b4060'
    },
    tokenAddresses: {
      100: [tokenMap.SUSHI, tokenMap.wBTC]
    },
    tokenDecimals: 18,
    name: 'Sushi wBTC',
    symbol: 'Sushi-wBTC BAOLP',
    tokenSymbol: 'SUSHI',
    icon: '/simplysushi.png',
    refUrl: 'https://ftx.com/trade/SUSHI-PERP#a=createtrade'
  },
  {
    pid: 91,
    lpAddresses: {
      100: '0x1E6c53215Da8CcccEF524Fb0b68Ee9fb28f04a43'
    },
    tokenAddresses: {
      100: [tokenMap.YFI, tokenMap.wBTC]
    },
    tokenDecimals: 18,
    name: 'YFI wBTC',
    symbol: 'YFI-wBTC BAOLP',
    tokenSymbol: 'YFI',
    icon: '/churros.png',
    refUrl: 'https://phemex.com/bonus?group=737&referralCode=BVJCQ'
  },
  {
    pid: 92,
    lpAddresses: {
      100: '0x7A7A8b21EFdcD131Dd894fF32609c2d0c5F6677C'
    },
    tokenAddresses: {
      100: [tokenMap.UNI, tokenMap.wBTC]
    },
    tokenDecimals: 18,
    name: 'UNI wBTC',
    symbol: 'UNI-wBTC BAOLP',
    tokenSymbol: 'UNI',
    icon: '/unagi.png',
    refUrl: 'https://ftx.com/trade/UNI/USD#a=createtrade'
  },
  {
    pid: 93,
    lpAddresses: {
      100: '0xBa594Eb3B58A2Dc380c67C63CeE00182B119457a'
    },
    tokenAddresses: {
      100: [tokenMap.BAL, tokenMap.wBTC]
    },
    tokenDecimals: 18,
    name: 'BAL wBTC',
    symbol: 'BAL-wBTC BAOLP',
    tokenSymbol: 'BAL',
    icon: '/bento.png',
    refUrl: 'https://ftx.com/trade/BAL-PERP#a=createtrade'
  },
  {
    pid: 94,
    lpAddresses: {
      100: '0xD61F580370E8C53757935119B7c08818f238506d'
    },
    tokenAddresses: {
      100: [tokenMap.LINK, tokenMap.wBTC]
    },
    tokenDecimals: 18,
    name: 'LINK wBTC',
    symbol: 'LINK-wBTC BAOLP',
    tokenSymbol: 'LINK',
    icon: '/sandwich.png',
    refUrl: 'https://ftx.com/trade/LINK/USD#a=getbao'
  },
  {
    pid: 95,
    lpAddresses: {
      100: '0xF7bA0d722b98a9e7da3c387887B5fF6610c491E7'
    },
    tokenAddresses: {
      100: [tokenMap.FTT, tokenMap.wBTC]
    },
    tokenDecimals: 18,
    name: 'FTT wBTC',
    symbol: 'FTT-wBTC BAOLP',
    tokenSymbol: 'FTT',
    icon: '/tofu.png',
    refUrl: 'https://ftx.com/trade/FTT/USD#a=createtrade'
  },
  {
    pid: 96,
    lpAddresses: {
      100: '0x25BFfC0B93536Ac36FEe29B028Cde0BDfA74Ff60'
    },
    tokenAddresses: {
      100: [tokenMap.AAVE, tokenMap.wBTC]
    },
    tokenDecimals: 18,
    name: 'AAVE wBTC',
    symbol: 'AAVE-wBTC BAOLP',
    tokenSymbol: 'AAVE',
    icon: '/cocktail.png',
    refUrl: 'https://app.aave.com/?referral=108'
  },
  {
    pid: 97,
    lpAddresses: {
      100: '0xbbB23f86cCb36c471bF466c36Ae6C38De417EF16'
    },
    tokenAddresses: {
      100: [tokenMap.SNX, tokenMap.wBTC]
    },
    tokenDecimals: 18,
    name: 'SNX wBTC',
    symbol: 'SNX-wBTC BAOLP',
    tokenSymbol: 'SNX',
    icon: '/snack.png',
    refUrl: 'https://ftx.com/trade/SNX/USD#a=createtrade'
  },
  {
    pid: 106,
    lpAddresses: {
      100: '0x88B781026565214894aC74F11d4B246AA334143E'
    },
    tokenAddresses: {
      100: [tokenMap.DPI, tokenMap.wBTC]
    },
    tokenDecimals: 18,
    name: 'DPI wBTC',
    symbol: 'DPI-wBTC BAOLP',
    tokenSymbol: 'DPI',
    icon: '/tempura.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 99,
    lpAddresses: {
      100: '0xe3e70e8607e120dbf271e0af6b549531b37d14d8'
    },
    tokenAddresses: {
      100: [tokenMap.HNY, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Honey!',
    symbol: 'HNY-xDAI BAOLP',
    tokenSymbol: 'HNY',
    icon: '/nectar.png',
    refUrl: 'https://app.honeyswap.org/#/swap'
  },
  {
    pid: 100,
    lpAddresses: {
      100: '0x9fed63B4Cf4EC2706C1111A081597921b99EBC8d'
    },
    tokenAddresses: {
      100: [tokenMap.HNY, tokenMap.BAO]
    },
    tokenDecimals: 18,
    name: 'Honey Bunz ;)',
    symbol: 'HNY-BAO BAOLP',
    tokenSymbol: 'HNY',
    icon: '/nectar.png',
    refUrl: 'https://app.honeyswap.org/#/swap'
  },
  {
    pid: 101,
    lpAddresses: {
      100: '0xcf7f4a04f204fcFea7d8617C9c8e80f95920A8c5'
    },
    tokenAddresses: {
      100: [tokenMap.AGVE, tokenMap.XDAI]
    },
    tokenDecimals: 18,
    name: 'Agave Nectar',
    symbol: 'AGVE-xDAI BAOLP',
    tokenSymbol: 'AGVE',
    icon: '/nectar.png',
    refUrl: 'https://app.honeyswap.org/#/swap'
  },
  {
    pid: 102,
    lpAddresses: {
      1: '0x088ee5007c98a9677165d78dd2109ae4a3d04d0c',
      100: '0x4b2c191198ACd5F1C941fa1ba0C870b38470F331'
    },
    tokenAddresses: {
      100: [tokenMap.YFI, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'YFI Youtiao',
    symbol: 'YFI-ETH SUSHILP',
    tokenSymbol: 'YFI',
    poolType: 'sushi',
    icon: '/churros.png',
    refUrl: 'https://phemex.com/bonus?group=737&referralCode=BVJCQ'
  },
  {
    pid: 103,
    lpAddresses: {
      1: '0xdafd66636e2561b0284edde37e42d192f2844d40',
      100: '0x43BC76493dEa7c82116A38e9C012B9a03127132c'
    },
    tokenAddresses: {
      100: [tokenMap.UNI, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Uni Unagi',
    symbol: 'UNI-ETH SUSHILP',
    tokenSymbol: 'UNI',
    poolType: 'sushi',
    icon: '/unagi.png',
    refUrl: 'https://ftx.com/trade/UNI/USD#a=createtrade'
  },
  {
    pid: 108,
    lpAddresses: {
      1: '0x397ff1542f962076d0bfe58ea045ffa2d347aca0',
      100: '0x110961C70E6C745cCEdA58FfAF9Ab09f53b5aF14'
    },
    tokenAddresses: {
      100: [tokenMap.USDC, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'USDC Crunch',
    symbol: 'USDC-ETH SUSHILP',
    tokenSymbol: 'USDC',
    poolType: 'sushi',
    icon: '/cereals.png',
    refUrl: 'https://www.binance.com/en/register?ref=NFBFR4AC'
  },
  {
    pid: 109,
    lpAddresses: {
      1: '0x760166fa4f227da29ecac3bec348f5fa853a1f3c',
      100: '0x11a79faa23B045af86B5a319ae33d82FF38379b5'
    },
    tokenAddresses: {
      100: [tokenMap.TUSD, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'TUSD Tea Egg',
    symbol: 'TUSD-ETH SUSHILP',
    tokenSymbol: 'TUSD',
    poolType: 'sushi',
    icon: '/boiled-egg.png',
    refUrl: 'https://www.digifinex.com/en-ww/from/v7D3UM?channelCode=ljaUPp'
  },
  {
    pid: 110,
    lpAddresses: {
      1: '0xf13eef1c6485348b9c9fa0d5df2d89accc5b0147',
      100: '0x743335D8EC69b176AC5AF20B523258254e1D686a'
    },
    tokenAddresses: {
      100: [tokenMap.ROOK, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Rook Rice Noodle Roll',
    symbol: 'ROOK-ETH SUSHILP',
    tokenSymbol: 'ROOK',
    poolType: 'sushi',
    icon: '/roll-fish.png',
    refUrl: 'https://www.hotbit.io/register?ref=669143'
  },
  {
    pid: 111,
    lpAddresses: {
      1: '0x7b504a15ef05f4eed1c07208c5815c49022a0c19',
      100: '0x3802C6e89cFe9a30B11557a13BeFD7e5849Ea1e2'
    },
    tokenAddresses: {
      100: [tokenMap.WETH, tokenMap.GRT]
    },
    tokenDecimals: 18,
    name: 'GRT Gummies',
    symbol: 'ETH-GRT SUSHILP',
    tokenSymbol: 'GRT',
    poolType: 'sushi',
    icon: '/gummy-bear.png',
    refUrl: 'https://ftx.com/trade/GRT/USD#a=getbao'
  },
  {
    pid: 112,
    lpAddresses: {
      1: '0xceff51756c56ceffca006cd410b03ffc46dd3a58',
      100: '0xdEE4e0b8f9A0d3AA253EAC11E4C5C7AcBFb466aE'
    },
    tokenAddresses: {
      100: [tokenMap.wBTC, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'wBTC Wraps',
    symbol: 'wBTC-ETH SUSHILP',
    tokenSymbol: 'wBTC',
    poolType: 'sushi',
    icon: '/wrap.png',
    refUrl: 'https://www.binance.com/en/register?ref=NFBFR4AC'
  },
  {
    pid: 113,
    lpAddresses: {
      1: '0x53aabccae8c1713a6a150d9981d2ee867d0720e8',
      100: '0xB656d7B1632c713c5F3C3B6ABd71B94022Dc0f62'
    },
    tokenAddresses: {
      100: [tokenMap.WETH, tokenMap.RARI]
    },
    tokenDecimals: 18,
    name: 'Rari Riceballs',
    symbol: 'ETH-RARI SUSHILP',
    tokenSymbol: 'RARI',
    poolType: 'sushi',
    icon: '/rice-ball-with-seaweed.png',
    refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G'
  },
  {
    pid: 114,
    lpAddresses: {
      1: '0x20c009ac5ce819652f2332c9c62f27f41b8de320',
      100: '0x10cF0409A5F11073ccDF8Df6f94B9df324445603'
    },
    tokenAddresses: {
      100: [tokenMap.NULL, tokenMap.WETH] // FIXME: no Leverj on XDAI?
    },
    tokenDecimals: 18,
    name: 'Leverj Gluon Lucky Cookie',
    symbol: 'L2-ETH SUSHILP',
    tokenSymbol: 'L2',
    poolType: 'sushi',
    icon: '/fortune-cookie.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/L2/ETH'
  },
  {
    pid: 115,
    lpAddresses: {
      1: '0xc40d16476380e4037e6b1a2594caf6a6cc8da967',
      100: '0x5D83eA923D62066f2547DFAd7ff662e41FB961b4'
    },
    tokenAddresses: {
      100: [tokenMap.LINK, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Link Lunch',
    symbol: 'LINK-ETH SUSHILP',
    tokenSymbol: 'LINK',
    poolType: 'sushi',
    icon: '/sandwich.png',
    refUrl: 'https://ftx.com/trade/LINK/USD#a=getbao'
  },
  {
    pid: 116,
    lpAddresses: {
      1: '0x6f58a1aa0248a9f794d13dc78e74fc75140956d7',
      100: '0xc4265D14Eff50179771D65345f0814B3d852CCfC'
    },
    tokenAddresses: {
      100: [tokenMap.RSR, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Reserve Ragout',
    symbol: 'RSR-ETH SUSHILP',
    tokenSymbol: 'RSR',
    poolType: 'sushi',
    icon: '/stew.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 117,
    lpAddresses: {
      1: '0x35a0d9579b1e886702375364fe9c540f97e4517b',
      100: '0xde9f126eb737f2aa480527992d18266f5261e0a5'
    },
    tokenAddresses: {
      100: [tokenMap.WETH, tokenMap.AXS]
    },
    tokenDecimals: 18,
    name: 'AXS Ahi Tuna',
    symbol: 'ETH-AXS SUSHILP',
    tokenSymbol: 'AXS',
    poolType: 'sushi',
    icon: '/salmon.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 118,
    lpAddresses: {
      1: '0x7825de5586e4d2fd04459091bbe783fa243e1bf3',
      100: '0x8c60b82dd2861F06B7E49E37A990edCa94044470'
    },
    tokenAddresses: {
      100: [tokenMap.FTT, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'FTX Fried Tofu (Vege!)',
    symbol: 'FTT-ETH SUSHILP',
    tokenSymbol: 'FTT',
    poolType: 'sushi',
    icon: '/tofu.png',
    refUrl: 'https://ftx.com/trade/FTT/USD#a=createtrade'
  },
  {
    pid: 119,
    lpAddresses: {
      1: '0x117d4288b3635021a3d612fe05a3cbf5c717fef2',
      100: '0x9411991Cd3Ec8745597658434C49970Fa2654480'
    },
    tokenAddresses: {
      100: [tokenMap.SRM, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'SRM Spring Rolls (Vegan)',
    symbol: 'SRM-ETH SUSHILP',
    tokenSymbol: 'SRM',
    poolType: 'sushi',
    icon: '/spring-rolls.png',
    refUrl: 'https://ftx.com/trade/SRM/USD#a=createtrade'
  },
  {
    pid: 120,
    lpAddresses: {
      1: '0xcc39592f5cb193a70f262aa301f54db1d600e6da',
      100: '0x71a25ca8f3554ee518474d9ab1f2c9380ec04c90'
    },
    tokenAddresses: {
      100: [tokenMap.RUNE, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Rune Ramen',
    symbol: 'RUNE-ETH SUSHILP',
    tokenSymbol: 'RUNE',
    poolType: 'sushi',
    icon: '/ramennoodle.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/RUNE'
  },
  {
    pid: 121,
    lpAddresses: {
      1: '0x382c4a5147fd4090f7be3a9ff398f95638f5d39e',
      100: '0x58D145532d4faA53A3a21ea5b262cE0F29afdd42'
    },
    tokenAddresses: {
      100: [tokenMap.NULL, tokenMap.WETH] // FIXME: no yUSD on xDAI
    },
    tokenDecimals: 18,
    name: 'yVault Youtiao',
    symbol: 'yUSD-ETH SUSHILP',
    tokenSymbol: 'yUSD',
    poolType: 'sushi',
    icon: '/churros.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/yyCurve'
  },
  {
    pid: 122,
    lpAddresses: {
      1: '0x31d64f9403e82243e71c2af9d8f56c7dbe10c178',
      100: '0xab68e00e5d402005fad284c8e0d48766650ddd2b'
    },
    tokenAddresses: {
      100: [tokenMap.NFTX, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'NFTX Nuggets',
    symbol: 'NFTX-ETH SUSHILP',
    tokenSymbol: 'NFTX',
    poolType: 'sushi',
    icon: '/nuggets.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/NFTX'
  },
  {
    pid: 123,
    lpAddresses: {
      1: '0xb670373863ce64f040b7c10bee79c40ce12cacba',
      100: '0x5ADDec6b4F6a79a13EaCAeE24F08b317d6EA99A0'
    },
    tokenAddresses: {
      100: [tokenMap.NULL, tokenMap.WETH] // FIXME: no QSP on xDAI
    },
    tokenDecimals: 18,
    name: 'QSP Quail Eggs',
    symbol: 'QSP-ETH SUSHILP',
    tokenSymbol: 'QSP',
    poolType: 'sushi',
    icon: '/eggs.png',
    refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33'
  },
  {
    pid: 124,
    lpAddresses: {
      1: '0x86f518368e0d49d5916e2bd9eb162e9952b7b04d',
      100: '0x4e52D29d591E64DDE67977078ed3182f1aC8A8C3'
    },
    tokenAddresses: {
      100: [tokenMap['1inch'], tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: '1INCH Nibbles',
    symbol: '1INCH-ETH SUSHILP',
    tokenSymbol: '1INCH',
    poolType: 'sushi',
    icon: '/moon-cakers.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/1INCH'
  },
  {
    pid: 125,
    lpAddresses: {
      1: '0x364248b2f1f57c5402d244b2d469a35b4c0e9dab',
      100: '0xA700Cf3775C747762426C223A293C9C505a71D44'
    },
    tokenAddresses: {
      100: [tokenMap.AKRO, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'AKRO Amygdalota',
    symbol: 'AKRO-ETH SUSHILP',
    tokenSymbol: 'AKRO',
    poolType: 'sushi',
    icon: '/cookie.png',
    refUrl: 'https://ftx.com/trade/AKRO/USD#a=createtrade'
  },
  {
    pid: 126,
    lpAddresses: {
      1: '0x2007815bd299786a117dda62566d6dbaa416926c',
      100: '0x614d04630faf994187b7AA19C7B5d2E6BC3336E7'
    },
    tokenAddresses: {
      100: [tokenMap.NULL, tokenMap.WETH] // FIXME: no cUNI on xDAI
    },
    tokenDecimals: 18,
    name: 'cUNI Clams',
    symbol: 'cUNI-ETH SUSHILP',
    tokenSymbol: 'cUNI',
    poolType: 'sushi',
    icon: '/cockles.png',
    refUrl: 'https://app.compound.finance/'
  },
  {
    pid: 127,
    lpAddresses: {
      1: '0x34b13f8cd184f55d0bd4dd1fe6c07d46f245c7ed',
      100: '0x54f10fd56a4990c96735c5dd8ca746538be97199'
    },
    tokenAddresses: {
      100: [tokenMap.DPI, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'DPI Deep Fried Shrimp',
    symbol: 'DPI-ETH SUSHILP',
    tokenSymbol: 'DPI',
    poolType: 'sushi',
    icon: '/tempura.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 128,
    lpAddresses: {
      1: '0x998bf04788c1c631c0e02bd1eed3d945308bf0a3',
      100: '0x60bd77d5988c0676d4644ee7f0dd07f42ff2edc7'
    },
    tokenAddresses: {
      100: [tokenMap.BAT, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Brave Braised Pork',
    symbol: 'BAT-ETH SUSHILP',
    tokenSymbol: 'BAT',
    poolType: 'sushi',
    icon: '/beef.png',
    refUrl: 'https://www.decoin.io/?ref=56336'
  },
  {
    pid: 129,
    lpAddresses: {
      1: '0x9323161faf56dd09cb32ace72c20dbd96b96d386',
      100: '0xDD11aEc1FF78b06F73528D7Ce0216F1890D7b45c'
    },
    tokenAddresses: {
      100: [tokenMap.NULL, tokenMap.WETH] // FIXME: no aETH on xDAI
    },
    tokenDecimals: 18,
    name: 'Aave ETH Aperitif',
    symbol: 'aETH-ETH SUSHILP',
    tokenSymbol: 'aETH',
    poolType: 'sushi',
    icon: '/cocktail.png',
    refUrl: 'https://app.aave.com/?referral=108'
  },
  {
    pid: 130,
    lpAddresses: {
      1: '0xaf988aff99d3d0cb870812c325c588d8d8cb7de8',
      100: '0xb7E7FE460b00d8Bc3ceB728F72652B82f433322B'
    },
    tokenAddresses: {
      100: [tokenMap.KP3R, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'KP3R Kebab',
    symbol: 'KP3R-ETH SUSHILP',
    tokenSymbol: 'KP3R',
    poolType: 'sushi',
    icon: '/kebab.png',
    refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G'
  },
  {
    pid: 131,
    lpAddresses: {
      1: '0xb2c29e311916a346304f83aa44527092d5bd4f0f',
      100: '0xaBc2E2b87fEC5d79b8143F82f4c4ac1Dcecfe7ef'
    },
    tokenAddresses: {
      100: [tokenMap.MPH, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: '88MPH Chilis',
    symbol: 'MPH-ETH SUSHILP',
    tokenSymbol: 'MPH',
    poolType: 'sushi',
    icon: '/chili.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 132,
    lpAddresses: {
      1: '0x033ecd066376afec5e6383bc9f1f15be4c62dc89',
      100: '0xBdb9B0D78854db895b5D28F67Aed04EF761D2780'
    },
    tokenAddresses: {
      100: [tokenMap.NULL, tokenMap.WETH] // FIXME: no YAX on xDAI
    },
    tokenDecimals: 18,
    name: 'YAX Yellowfin',
    symbol: 'YAX-ETH SUSHILP',
    tokenSymbol: 'YAX',
    poolType: 'sushi',
    icon: '/tuna.png',
    refUrl: 'https://bilaxy.com/user/register?intro=1428882'
  },
  {
    pid: 133,
    lpAddresses: {
      1: '0x7f47f6f695ddf8316f368a8a99122a081e118bd0',
      100: '0xe8E8937b92259adb26d510aa2f6aD6cA65243d9e'
    },
    tokenAddresses: {
      100: [tokenMap.sETH, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'sETH/ETH',
    symbol: 'sETH-ETH SUSHILP',
    tokenSymbol: 'sETH',
    poolType: 'sushi',
    icon: '/eth.png',
    refUrl: 'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/sETH'
  },
  {
    pid: 134,
    lpAddresses: {
      1: '0xf55c33d94150d93c2cfb833bcca30be388b14964',
      100: '0x89920B17e1753ad2c51a567d6f4e1f3ebB29fEDe'
    },
    tokenAddresses: {
      100: [tokenMap.NULL, tokenMap.WETH] // FIXME: no ALPHA on xDAI
    },
    tokenDecimals: 18,
    name: 'Alpha Apple Pie',
    symbol: 'ALPHA-ETH SUSHILP',
    tokenSymbol: 'ALPHA',
    poolType: 'sushi',
    icon: '/pie.png',
    refUrl: 'https://www.hotbit.io/register?ref=669143'
  },
  {
    pid: 135,
    lpAddresses: {
      1: '0x7f8f7dd53d1f3ac1052565e3ff451d7fe666a311',
      100: '0xb2129038a6Ef37945306b0d1194Cc4b8952E55E8'
    },
    tokenAddresses: {
      100: [tokenMap.MATIC, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Matic Mandarin Fish',
    symbol: 'MATIC-ETH SUSHILP',
    tokenSymbol: 'MATIC',
    poolType: 'sushi',
    icon: '/fish.png',
    refUrl: 'https://ftx.com/trade/MATIC-PERP#a=createtrade'
  },
  {
    pid: 136,
    lpAddresses: {
      1: '0xba13afecda9beb75de5c56bbaf696b880a5a50dd',
      100: '0x40fD32644304577da2f70b7135F9573163B7702D'
    },
    tokenAddresses: {
      100: [tokenMap.MKR, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Maker Mooncake',
    symbol: 'MKR-ETH SUSHILP',
    tokenSymbol: 'MKR',
    poolType: 'sushi',
    icon: '/moon-cake.png',
    refUrl: 'https://ftx.com/trade/MKR-PERP#a=createtrade'
  },
  {
    pid: 137,
    lpAddresses: {
      1: '0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f',
      100: '0xbc1a3f219f14e0fa86e3a301fba0cf52b32dc77e'
    },
    tokenAddresses: {
      100: [tokenMap.XDAI, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Dai Dan Tat',
    symbol: 'DAI-ETH SUSHILP',
    tokenSymbol: 'DAI',
    poolType: 'sushi',
    icon: '/egg-tart.png',
    refUrl: 'https://www.aex.plus/page/m_regist.html#/?invite_code=765759&invite_type=10'
  },
  {
    pid: 138,
    lpAddresses: {
      1: '0x58dc5a51fe44589beb22e8ce67720b5bc5378009',
      100: '0x1a48e8aae834e3dad8471b507cab07b083040215'
    },
    tokenAddresses: {
      100: [tokenMap.WETH, tokenMap.CRV]
    },
    tokenDecimals: 18,
    name: 'Curve Custard',
    symbol: 'ETH-CRV SUSHILP',
    tokenSymbol: 'CRV',
    poolType: 'sushi',
    icon: '/custard.png',
    refUrl: 'https://www.okex.com/join/3/1914410'
  },
  {
    pid: 139,
    lpAddresses: {
      1: '0xd75ea151a61d06868e31f8988d28dfe5e9df57b4',
      100: '0x553815c5ADe7B70ceBc094FA1b4175519bE6CAF1'
    },
    tokenAddresses: {
      100: [tokenMap.AAVE, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Aave Appetizer',
    symbol: 'AAVE-ETH SUSHILP',
    tokenSymbol: 'AAVE',
    poolType: 'sushi',
    icon: '/appetizer.png',
    refUrl: 'https://app.aave.com/?referral=108'
  },
  {
    pid: 140,
    lpAddresses: {
      1: '0xa1d7b2d891e3a1f9ef4bbc5be20630c2feb1c470',
      100: '0x4c3887963bd62200f5304aadaa84dbd0bab1e3ad'
    },
    tokenAddresses: {
      100: [tokenMap.SNX, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Synthetix Snacks',
    symbol: 'SNX-ETH SUSHILP',
    tokenSymbol: 'SNX',
    poolType: 'sushi',
    icon: '/snack.png',
    refUrl: 'https://ftx.com/trade/SNX/USD#a=createtrade'
  },
  {
    pid: 141,
    lpAddresses: {
      1: '0x9bffa3ce3e56d0d26447a45771fec76bd4173022',
      100: '0xDA7712b5959499629a9f6B4cAE2F22910FB894fD'
    },
    tokenAddresses: {
      100: [tokenMap.BAL, tokenMap.WETH]
    },
    tokenDecimals: 18,
    name: 'Balancer Bento',
    symbol: 'BAL-ETH SUSHILP',
    tokenSymbol: 'BAL',
    poolType: 'sushi',
    icon: '/bento.png',
    refUrl: 'https://ftx.com/trade/BAL-PERP#a=createtrade'
  },
  {
    pid: 142,
    lpAddresses: {
      1: '0x20c009ac5ce819652f2332c9c62f27f41b8de320',
      100: '0xa53c15D225558698d3903ABF1482e3ea0FeADA65'
    },
    tokenAddresses: {
      100: [tokenMap.WETH, tokenMap.NEXO]
    },
    tokenDecimals: 18,
    name: 'Nexo Noodles',
    symbol: 'NEXO-XDAI BAOLP',
    tokenSymbol: 'NEXO',
    icon: '/noodles.png',
    refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33'
  }
]

export interface FarmablePool {
  pid: number
  address: string
  lpAddresses:
    | {
        100: string
        1?: undefined
      }
    | {
        1: string
        100: string
      }
    | {
        100: string
        1?: undefined
      }
  tokenAddresses: DescribesToken[]
  token: Token
  symbol: string
  name: string
  isSushi: boolean
  icon: string
  refUrl: string
}

// this could use EternalStorageProxy.foreignAddress instead
export function useSidechainFarmablePool(
  chainId: ChainId.XDAI | ChainId.MAINNET = ChainId.MAINNET,
  farmablePool: FarmablePool
): FarmablePool | undefined {
  return useMemo(() => {
    if (!farmablePool.isSushi) {
      return undefined
    }
    const foreignAddress = farmablePool.lpAddresses[chainId]
    if (!foreignAddress) {
      return undefined
    }
    return {
      pid: farmablePool.pid,
      address: foreignAddress,
      lpAddresses: farmablePool.lpAddresses,
      tokenAddresses: farmablePool.tokenAddresses,
      token: new Token(
        chainId,
        foreignAddress,
        farmablePool.token.decimals,
        farmablePool.token.symbol,
        farmablePool.token.name
      ),
      symbol: farmablePool.symbol,
      name: farmablePool.name,
      isSushi: farmablePool.isSushi,
      icon: farmablePool.icon,
      refUrl: farmablePool.refUrl
    }
  }, [farmablePool, chainId])
}
// this could use EternalStorageProxy.foreignAddress instead
export function useAllSidechainFarmablePools(
  chainId: ChainId.XDAI | ChainId.MAINNET = ChainId.MAINNET,
  farmablePools: FarmablePool[]
): (FarmablePool | undefined)[] {
  return useMemo(() => {
    return farmablePools.map(farmablePool => {
      if (!farmablePool.isSushi) {
        return undefined
      }
      const foreignAddress = farmablePool.lpAddresses[chainId]
      if (!foreignAddress) {
        return undefined
      }
      return {
        pid: farmablePool.pid,
        address: foreignAddress,
        lpAddresses: farmablePool.lpAddresses,
        tokenAddresses: farmablePool.tokenAddresses,
        token: new Token(
          chainId,
          foreignAddress,
          farmablePool.token.decimals,
          farmablePool.token.symbol,
          farmablePool.token.name
        ),
        symbol: farmablePool.symbol,
        name: farmablePool.name,
        isSushi: farmablePool.isSushi,
        icon: farmablePool.icon,
        refUrl: farmablePool.refUrl
      }
    })
  }, [farmablePools, chainId])
}

export function useAllFarmablePools(chainId: ChainId.XDAI | ChainId.MAINNET = ChainId.XDAI): FarmablePool[] {
  return useMemo(
    () =>
      supportedPools.flatMap(poolInfo => {
        if (!chainId) {
          return []
        }
        const address = poolInfo.lpAddresses[chainId]
        if (!address) {
          return []
        }
        const isSushi = poolInfo.poolType === 'sushi'
        const tokenAddresses = poolInfo.tokenAddresses[100] // TODO: need token addresses for mainnet?
        if (!tokenAddresses) {
          return []
        }
        const farmablePool: FarmablePool = {
          pid: poolInfo.pid,
          address,
          lpAddresses: poolInfo.lpAddresses,
          tokenAddresses: tokenAddresses,
          token: new Token(chainId, address, poolInfo.tokenDecimals, poolInfo.symbol, poolInfo.name),
          symbol: poolInfo.symbol,
          name: poolInfo.name,
          isSushi,
          icon: poolInfo.icon,
          refUrl: poolInfo.refUrl
        }
        return farmablePool
      }),
    [chainId]
  )
}

const supportedLpTokenEntries = supportedPools.map(poolInfo => {
  const address = poolInfo.lpAddresses[ChainId.XDAI]
  const tokenAddresses = poolInfo.tokenAddresses[ChainId.XDAI]
  const farmablePool: FarmablePool = {
    pid: poolInfo.pid,
    address,
    lpAddresses: poolInfo.lpAddresses,
    tokenAddresses,
    token: new Token(ChainId.XDAI, address, poolInfo.tokenDecimals, poolInfo.symbol, poolInfo.name),
    symbol: poolInfo.symbol,
    name: poolInfo.name,
    isSushi: poolInfo.poolType === 'sushi',
    icon: poolInfo.icon,
    refUrl: poolInfo.refUrl
  }
  const pair = [address, farmablePool] as [string, FarmablePool]
  return pair
})

export function useSupportedLpTokenMap(): Map<string, FarmablePool> {
  return new Map<string, FarmablePool>(supportedLpTokenEntries)
}
