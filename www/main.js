import './style.css'

// import init from './public/out/bevy-rust-wasm-experiments'
import './public/components/footer-display'

document.getElementById('start').addEventListener('click', () => {
  // console.log('start');
  // document.body.classList.add('playing');
  // init();
  console.warn("wasm file import disabled while setting up CI");
});
