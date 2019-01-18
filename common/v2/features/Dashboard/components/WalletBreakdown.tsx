import React from 'react';
import { Link } from 'react-router-dom';
import { ComboBox, Heading, Panel, Typography } from '@mycrypto/ui';

import './WalletBreakdown.scss';

// Legacy
import moreIcon from 'common/assets/images/icn-more.svg';

// Fake Data
const balances = [
  {
    asset: 'Ethereum',
    amount: '14.13 ETH',
    value: '$3,307.95'
  },
  {
    asset: 'OmiseGO',
    amount: '208.321234 OMG',
    value: '$646.80'
  },
  {
    asset: 'Aragon',
    amount: '200 ANT',
    value: '$159.63'
  },
  {
    asset: 'Other Tokens',
    amount: <Link to="/dashboard">View Details</Link>,
    value: '$140.03'
  }
];

export default function WalletBreakdown() {
  return (
    <div className="WalletBreakdown">
      <ComboBox
        className="WalletBreakdown-select"
        value="3 of 9 Accounts"
        onChange={() => {}}
        items={new Set(['3 of 9 Accounts'])}
      />
      <ComboBox
        className="WalletBreakdown-select"
        value="US Dollars"
        onChange={() => {}}
        items={new Set(['US Dollars'])}
      />
      <Panel className="WalletBreakdown-panel">
        <Heading className="WalletBreakdown-panel-heading">Wallet Breakdown (All Accounts)</Heading>
        <div className="WalletBreakdown-panel-figures">
          <div className="WalletBreakdown-panel-figures-figure">
            <Typography className="WalletBreakdown-panel-figures-figure-value">Ethereum</Typography>
            <Typography className="WalletBreakdown-panel-figures-figure-label">
              43% Of Your Funds
            </Typography>
          </div>
          <div className="WalletBreakdown-panel-figures-figure">
            <Typography className="WalletBreakdown-panel-figures-figure-value">
              $5,204.14
            </Typography>
            <Typography className="WalletBreakdown-panel-figures-figure-label">
              Value in US Dollars
            </Typography>
          </div>
        </div>
        <div className="WalletBreakdown-panel-divider" />
        <div className="WalletBreakdown-panel-headingWrapper">
          <Heading className="WalletBreakdown-panel-heading">Balance</Heading>
          <img className="WalletBreakdown-panel-more" src={moreIcon} alt="More" />
        </div>
        <div className="WalletBreakdown-panel-balances">
          {balances.map(({ asset, amount, value }) => (
            <div key={asset} className="WalletBreakdown-panel-balances-balance">
              <div className="WalletBreakdown-panel-balances-balance-asset">
                <Typography className="WalletBreakdown-panel-balances-balance-asset-name">
                  {asset}
                </Typography>
                <Typography className="WalletBreakdown-panel-balances-balance-asset-amount">
                  {amount}
                </Typography>
              </div>
              <Typography className="WalletBreakdown-panel-balances-balance-amount">
                {value}
              </Typography>
            </div>
          ))}
          <div className="WalletBreakdown-panel-divider" />
          <div className="WalletBreakdown-panel-balances-total">
            <Typography>Total</Typography>
            <Typography>$2,974.41</Typography>
          </div>
        </div>
      </Panel>
    </div>
  );
}