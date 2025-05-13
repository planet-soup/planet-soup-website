document.getElementById('htmlCheck').textContent = '✅ HTML works';
const style = getComputedStyle(document.getElementById('cssTest'));
document.getElementById('cssCheck').textContent = style.backgroundColor === 'rgb(255, 0, 0)' ? '✅ CSS works' : '❌ CSS failed';
document.getElementById('jsCheck').textContent = '✅ JavaScript works';