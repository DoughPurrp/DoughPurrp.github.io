import WalletConnectProvider from "@walletconnect/web3-provider";
import { useCallback, useEffect, useMemo, useState } from "react";
import Web3Modal from "web3modal";

function useWeb3Modal(config = {}) {
  const [connection, setConnection] = useState();
  const [autoLoaded, setAutoLoaded] = useState(false);
  const { autoLoad = true } = config;

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
            56: 'https://bsc-dataseed.binance.org/',
            97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        },
        network: 'binance',
      }
    }
  };

  const web3Modal = useMemo(() => {
    return new Web3Modal({
      cacheProvider: true,
      providerOptions,
    });
  });

  // Open wallet selection modal.
  const loadWeb3Modal = useCallback(async () => {
    const connection = await web3Modal.connect();
    setConnection(connection);
  }, [web3Modal]);

  const logoutOfWeb3Modal = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      window.location.reload();
    },
    [web3Modal],
  );

  // If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
  useEffect(() => {
    if (autoLoad && !autoLoaded && web3Modal.cachedProvider) {
      loadWeb3Modal();
      setAutoLoaded(true);
    }
  }, [autoLoad, autoLoaded, loadWeb3Modal, setAutoLoaded, web3Modal.cachedProvider]);

  return [connection,loadWeb3Modal,logoutOfWeb3Modal];
}

export default useWeb3Modal;
