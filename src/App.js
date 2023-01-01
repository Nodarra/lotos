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
            <Link onClick={() => setUrl('bilten1')} className="bilten__link" to='/bilten1'>Bilten 14</Link>
            <Link onClick={() => setUrl('bilten2')} className="bilten__link" to='/bilten2'>Bilten 14-2</Link>
            <Link onClick={() => setUrl('bilten3')} className="bilten__link" to='/bilten3'>Bilten 15</Link>
            <Link onClick={() => setUrl('bilten4')} className="bilten__link" to='/bilten4'>Bilten 16</Link>     
        </div>
        <div className="bilten__container">
            <Link onClick={() => setUrl('bilten5')} className="bilten__link" to='/bilten5'>Bilten17</Link>
            <Link onClick={() => setUrl('bilten6')} className="bilten__link" to='/bilten6'>Bilten18</Link>
            <Link onClick={() => setUrl('bilten7')} className="bilten__link" to='/bilten7'>Bilten19</Link>
            <Link onClick={() => setUrl('bilten8')} className="bilten__link" to='/bilten8'>Bilten20</Link>     
        </div>
        <div className="bilten__container">
            <Link onClick={() => setUrl('bilten9')} className="bilten__link" to='/bilten9'>Bilten1</Link>
            <Link onClick={() => setUrl('bilten10')} className="bilten__link" to='/bilten10'>Bilten1</Link>
            <Link onClick={() => setUrl('bilten11')} className="bilten__link" to='/bilten11'>Bilten1</Link>
            <Link onClick={() => setUrl('bilten12')} className="bilten__link" to='/bilten12'>Bilten1</Link>     
        </div>
        </Router>
      <Bilten pdf={pdf} />
    </div>
  );
}
