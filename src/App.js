import logo from './logo.svg';
import './App.css';
import Button from './component/common/Button';
import Card from './component/card';

function App() {
  return (
    <div className="App">
      <div className="btn-outer">
        <Button btnType="primary" btnText="Primary Button" />
      </div>
      <div className="btn-outer">
        <Button btnType="secondary" btnText="Secondary Button" />
      </div>
      <div className="min-w-full">
        <Card />
      </div>
    </div>
  );
}

export default App;
