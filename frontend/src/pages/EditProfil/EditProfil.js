import React from "react";
import "./EditProfil.scss";
import HeaderLogger from "../../Components/HeaderLogger/HeaderLogger";
import Accounts from "../../Components/Accounts/Accounts";
import dataAccount from "../../dataAccount.json";
import Footer from "../../Components/Footer/Footer";
import EditUser from "../../Components/EditUser/EditUser";

const EditProfil = () => {


  return (
    <>
      <HeaderLogger />
      <main className="main bg-dark">
        <EditUser />    

        <h2 className="sr-only">Accounts</h2>
        {dataAccount.map((account, index) => {
          return (
            <Accounts
              key={index}
              accountTitle={account.accountTitle}
              accountAmount={account.accountAmount}
              accountDescription={account.accountDescription}
              accountButton={account.accountButton}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default EditProfil;
