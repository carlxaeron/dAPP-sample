import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { connectToMetamask } from '../utils/web3';

const IndexPage = ({ data }) => {
  const [account, setAccount] = useState(null);

  const handleConnect = async () => {
    const connectedAccount = await connectToMetamask();
    setAccount(connectedAccount);
  };

  return (
    <div>
      <h1>Welcome to the dApp</h1>
      <button onClick={handleConnect}>Connect to Metamask</button>
      {account && <p>Connected account: {account}</p>}
      <div>
        <h2>Data fetched at build time:</h2>
        <p>{data.site.siteMetadata.title}</p>
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
