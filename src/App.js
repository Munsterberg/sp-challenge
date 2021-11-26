import * as React from 'react';
import { useQuery } from 'react-query';
import { ReactComponent as BitcoinIcon } from 'cryptocurrency-icons/svg/color/btc.svg';
import { ReactComponent as EthereumIcon } from 'cryptocurrency-icons/svg/color/eth.svg';
import { ReactComponent as DollarIcon } from 'cryptocurrency-icons/svg/color/usd.svg';

import { getRates, getTransactionHistory } from './services/api-service';
import { Dashboard } from './pages/Dashboard';

const initialBalancesState = {
  CAD: {
    balance: 0,
    rate: 0,
    label: 'Dollars',
    icon: DollarIcon,
  },
  BTC: {
    balance: 0,
    rate: 0,
    label: 'Bitcoin',
    icon: BitcoinIcon,
  },
  ETH: {
    balance: 0,
    rate: 0,
    label: 'Ethereum',
    icon: EthereumIcon,
  },
};

function App() {
  const ratesQuery = useQuery('rates', getRates);
  const transactionQuery = useQuery('transactions', getTransactionHistory);
  const [balances, setBalances] = React.useState(initialBalancesState);

  React.useEffect(() => {
    if (
      transactionQuery.status === 'success' &&
      ratesQuery.status === 'success'
    ) {
      const transactions = transactionQuery.data;
      const rates = ratesQuery.data;

      // TODO: can probably be done with a reduce, come back to this
      const newBalances = initialBalancesState;

      // TODO: can store this separately and read from it as required
      newBalances.BTC.rate = rates.CAD_BTC;
      newBalances.ETH.rate = rates.CAD_ETH;

      transactions.forEach(transaction => {
        const { currency, amount, direction } = transaction;
        if (direction === 'credit') {
          newBalances[currency].balance += amount;
        } else {
          newBalances[currency].balance -= amount;
        }
      });
      setBalances(newBalances);
    }
  }, [
    transactionQuery.status,
    ratesQuery.status,
    transactionQuery.data,
    ratesQuery.data,
  ]);

  return <Dashboard balances={balances} />;
}

export default App;
