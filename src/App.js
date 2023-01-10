import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom'

import Header from "./components/Header";
import Bilten from "./components/Bilten"

import "./styles/App.css";
import { BiltenGroup } from "./components/Bilteni";


export default function App() {
  const [pdf, setPdf] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    const pro = window.location.pathname.split('/').pop();
    setPdf(BiltenGroup.at(0)[`${pro}`])
  }, [url]);

  return (
    <div className="App">
      <Header />
      <Router>
        <div className="bilten__container">
            <Link onClick={() => setUrl('bilten1')} className="bilten__link" to='/bilten1'>BILTEN 14</Link>
            <Link onClick={() => setUrl('bilten2')} className="bilten__link" to='/bilten2'>BILTEN 14-2</Link>
            <Link onClick={() => setUrl('bilten3')} className="bilten__link" to='/bilten3'>BILTEN 15</Link>
            <Link onClick={() => setUrl('bilten4')} className="bilten__link" to='/bilten4'>BILTEN 16</Link>     
        </div>
        <div className="bilten__container">
            <Link onClick={() => setUrl('bilten5')} className="bilten__link" to='/bilten5'>BILTEN 17</Link>
            <Link onClick={() => setUrl('bilten6')} className="bilten__link" to='/bilten6'>BILTEN 18</Link>
            <Link onClick={() => setUrl('bilten7')} className="bilten__link" to='/bilten7'>BILTEN 19</Link>
            <Link onClick={() => setUrl('bilten8')} className="bilten__link" to='/bilten8'>BILTEN 20</Link>     
        </div>
        <div className="bilten__container">
            <Link onClick={() => setUrl('bilten9')} className="bilten__link" to='/bilten9'>BILTEN 21</Link>
            <Link onClick={() => setUrl('bilten10')} className="bilten__link" to='/bilten10'>BILTEN 22</Link>
            <Link onClick={() => setUrl('bilten11')} className="bilten__link" to='/bilten11'>BILTEN 23</Link>
            <Link onClick={() => setUrl('bilten12')} className="bilten__link" to='/bilten12'>BILTEN 24</Link>     
        </div>
        </Router>
      <Bilten pdf={pdf} />
    </div>
  );
}
