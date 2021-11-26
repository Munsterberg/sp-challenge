import * as React from 'react';
import { AssetList } from '../components/AssetList';

export function Dashboard({ balances }) {
  return (
    <div>
      <Header />
      <AssetList balances={balances} />
    </div>
  );
}

function Header(props) {
  return (
    <div>
      <h1>logo</h1>
      <div>total balance</div>
    </div>
  );
}
