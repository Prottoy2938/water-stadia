import React from "react";
import Head from "next/head";

const AnswersTable: React.FC = (props) => {
  return (
    <>
      <Head>
        <title>Water Stadia</title>
      </Head>
      <h1 className="text-xl text-center">Some Applications I've Worked On</h1>
      <div className={styles.container}>
        <table className={styles.answerTableD}>
          <thead>
            <tr>
              <th>Application</th>
              <th>Answer</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={styles.footerName}>Prottoi</p>
    </>
  );
};

export default AnswersTable;
