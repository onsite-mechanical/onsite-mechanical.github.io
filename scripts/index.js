
import { registerWrenchComponent } from './components/wrench.js';

const app = () => {
  console.log("Ready");
  registerWrenchComponent();
  document.querySelector("main").classList.toggle("visible");
  document.querySelector("h1").classList.toggle("visible");
}

document.addEventListener('DOMContentLoaded', app, false);
