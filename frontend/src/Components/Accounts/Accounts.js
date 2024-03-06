import React from 'react';

const Accounts = ({ accountTitle, accountAmount, accountDescription, accountButton }) => {
    return (
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{accountTitle}</h3>
          <p className="account-amount">{accountAmount}</p>
          <p className="account-amount-description">{accountDescription}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">{accountButton}</button>
        </div>
      </section>
    );
};

export default Accounts;