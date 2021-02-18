# Moonbeam Expedition TestNet


<!-- about the project -->


Moonbeam Explorer Testnet is a simple Block Explorer for Moonbeam Testnet/Mainet & ETH RPC extending the expedition app (https://expedition.dev).

The original Moonbeam themed explorer can be found here: https://github.com/aadorian/MoonBeamExplorer



<!--features-->
**Features:**
- Display chain id, syncing status and runtime configuration for endpoints,search by block, transaction, address, charts for hash, transaction count, gas used, uncles, latest blocks with pagination, etc.
- Multi-language support (added Spanish).
- Moonbeam Look and Feel (Dark and Light).

### Snapshots

![](https://i.imgur.com/RxppmId.png)
![](https://i.imgur.com/6LJJUzZ.png)
![](https://i.imgur.com/MvsmETc.png)


<!-- videos-->
## Videos



*Explorer Transaction Example using Metamask*

https://youtu.be/UD0OK3uYtqA






### Installation

#### Prerequisites
- node `v10.15.3` or later
- npm `v6.4.1` or later
Clone/ download the project, and install dependencies.
```bash
git clone  URL  && cd MoonbeamExplorer && npm install
```

<!-- example usage, screen shots, demos -->
## Usage

### Start the explorer
```bash
npm start
```
*The explorer will run at http://localhost:3000/ & Jade Service Runner will run at http://localhost:8002/.*



## License
Apache License 2.0

<!-- references and additional resources  -->
## Resources

Moonbeam Network https://moonbeam.network
- [Ethereum JSON RPC Specification](https://github.com/etclabscore/ethereum-json-rpc-specification)
- [Jade Service Runner](https://github.com/etclabscore/jade-service-runner)
- [OpenRPC](https://open-rpc.org)
- [Pristine](https://github.com/etclabscore/pristine)
- [Expedition](https://github.com/etclabscore/expedition.git)


Fix: 
- [x] - Uncles: list in graph (remove)
- [x]   Hash Rate: list in graph (remove)
- [x] Slider o dropdown menu to change between Moonbase Alpha, Standalone (http://127.0.0.1:9933/) or Custom RPC (los cuales quedaron harcodeadas en las direcciones de Moonbase alpha actual y el  127.0.0.1:9933 de todas formas se puede utilizar otra rpc )
- [x]   Time stamp relative to the last block (between parenthesis)
- [x]  Fix the more stats page (Leave Miner by address, probably change it to Collator by address), Remove Miners by extra data, remove extra data field
- [x] Remove the Light Theme
