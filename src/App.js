import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar.js';

function App() {
  return (
    <div className="App" id="page-wrap">
      <header className="App-header">
      <h1>
        What it do yall
      </h1>
      <Sidebar style="float: left;"/>
          </header>
          <body>
            <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </body>
        <footer className="App-footer">
          this is my footer... I guess
        </footer>
    </div>
  );
}

export default App;
