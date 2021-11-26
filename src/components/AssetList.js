import * as React from 'react';

import styles from './AssetList.module.css';

export function AssetList({ balances }) {
  return (
    <div>
      {Object.keys(balances).map(asset => {
        const Icon = balances[asset].icon;
        return (
          <div key={asset} className={styles.row}>
            <div>
              <Icon />
              <div className={styles.info}>
                <div>{balances[asset].label}</div>
                <div>val</div>
              </div>
            </div>
            <div>
              <div>{balances[asset].balance.toFixed(4)}</div>
              <div>cad</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
