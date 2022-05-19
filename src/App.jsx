import React from 'react';
import './styles/App.css';
import twitterLogo from './assets/twitter-logo.svg';
import zenfocuslogo from './assets/devina-SVG-1652992805.svg';

// Constants
const TWITTER_HANDLE = 'DDecoene';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

  return (
		<div className="App">
			<div className="container">

				<div className="header-container">
					<header>
            <div className="left">
              <p className="title"><img src={zenfocuslogo} width="70px" height="70px" />Focus Name Service</p>
              <p className="subtitle">Your domainname is a zen garden.</p>
            </div>
					</header>
				</div>

        <div className="footer-container">
					<img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
					<a
						className="footer-text"
						href={TWITTER_LINK}
						target="_blank"
						rel="noreferrer"
					>{`built by @${TWITTER_HANDLE}`}</a>
				</div>
			</div>
		</div>
	);
}

export default App;
