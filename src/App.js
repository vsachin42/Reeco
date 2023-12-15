import './App.css';
import ProductList from './Components/ProductList';

function App() {
  let [data] = [{id:1, name:"Butter", brand:"Amul", price:250, quantity:5}]
return  <div>
      <h1>Shipping Application - Admin View</h1>
      <ProductList {...data}/>
    </div>
}

export default App;
