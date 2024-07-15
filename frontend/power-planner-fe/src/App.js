

import React from 'react'
import './styles/App.css'
import SidebarMenu from './components/SidebarMenu';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
  {/* <button class="btn btn-primary">Button</button> */}
  <SidebarMenu/>
  <Outlet />
</div>
  )
}

export default App;
