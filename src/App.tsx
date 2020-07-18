import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

const App:React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="my-button"> Hello asdasd</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}> Hello </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank"> baidu </Button>
        <Button btnType={ButtonType.Success} disabled size={ButtonSize.Small}> success </Button>
        <Button btnType={ButtonType.Primary}> success </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
