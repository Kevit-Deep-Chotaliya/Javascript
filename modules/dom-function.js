const toggle = (element) => { 
  element.style.display = element.style.display === 'none' ? 'block' : 'none'; 
};

const changeToFunkyColor = (element) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
        
  element.style.background = `rgb(${r}, ${g}, ${b})`;
}

export {toggle, changeToFunkyColor}