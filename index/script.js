(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme') || '';

  function applyTheme(mode){
    if(mode === 'light'){
      root.classList.add('light');
    }else{
      root.classList.remove('light');
    }
  }

  applyTheme(saved);

  if(toggle){
    toggle.addEventListener('click', function(){
      const isLight = root.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }

  // Intersection reveal
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15});

  document.querySelectorAll('.reveal').forEach((el)=>observer.observe(el));

  // Year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();


