import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  
  return (
    <>
      
      {/* Banner de la pagina */}
      <div className='banner_index_container'>
        <h1 className='index_title'>Leonardo Murua Full Stack Dev</h1>
      </div>

      {/* Subtitulo */}
      <div>
        <h1 className='subtitulo'>Conocé algunos proyectos</h1>
      </div>

      {/* Container de proyectos */}
      <div className='proyects_container'>
        <div class="parent">
          <a href="https://sl-creaciones3d.vercel.app/index.html" target="_blank" className='div1'></a>
          <a href="#" target="_blank" className='div2'></a>
          <a href="https://blanconegrodeco.vercel.app/" target="_blank" className='div3'></a> 
          <a href="#" target="_blank" className='div4'></a> 
          <a href="https://herreria-ws-murua.vercel.app/" target="_blank" className='div5'></a> 
          <a href="#" target="_blank" className='div6'></a> 
        </div>  
      </div>


      <div className="container_tecnologias">
        <img src="/img/logos_tech.png" alt="LogosTecnologiashtmlcsssassreactbootstrapvitejs" />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <p>Lorem ipsum dolor sit amet lor</p>
      <button className='visit_button'>Visítela</button>
    </>
  )
}
 
export default App
