# Ethereum Staking Launchpad

[![GitPOAP Badge](https://public-api.gitpoap.io/v1/repo/ethereum/staking-launchpad/badge)](https://www.gitpoap.io/gh/ethereum/staking-launchpad)

The [Launchpad](https://launchpad.ethereum.org/) is the Ethereum Foundation's official way to deposit your ETH for staking on Ethereum

## Dependencies

  - **Technology stack**: 
    - [React](https://reactjs.org/) via [CRA](https://reactjs.org/docs/create-a-new-react-app.html)
    - [Redux](https://redux.js.org/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [Web3-React](https://github.com/NoahZinsmeister/web3-react)
    - [Grommet](https://v2.grommet.io/)
    - [Yarn](https://yarnpkg.com/)


## Configuration

To have full functionality of the Launchpad, you must create an `.env` file in your root directory and add an environment variable.


The Infura Project ID will enable the network status progress bar showing the balance of the Deposit Contract

```
REACT_APP_INFURA_PROJECT_ID=your-infura-project-id-here
```

Note: The Portis wallet option is not available when running locally

## Installation

**Available Scripts**
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

**Install Dependencies and Start the Application**
```
yarn
yarn start
```

## Launchpad translation

As part of the [ethereum.org Translation Program](https://ethereum.org/en/contributing/translation-program), our community of translators is also working on translating the Ethereum Staking Launchpad.

If you are interested in getting involved and helping with the translations, please [visit the project in Crowdin](https://crowdin.com/project/launchpad-translation). 

After joining the project, you can start translating by opening your desired language from the language list. If your language isn't available, please reach out to Ethereum.org Team on Crowdin or [open an issue](https://github.com/ethereum/staking-launchpad/issues/new) to request adding a new language for translation.

Detailed information on using Crowdin is available in the [Crowdin Online Editor documentation](https://support.crowdin.com/online-editor/).

----
## Open source licensing info
Creative Commons Zero v1.0 Universal - For more information read the [`LICENSE`](./LICENSE) file.

----
