function highlightParas() {
  let containing = document.getElementById('searchkey').value;
  console.log(typeof containing);
  console.log(containing);
  if (typeof containing === 'string') {
    containing = new RegExp(`${containing}`);
  }
  const paras = document.getElementsByTagName('p');
  for (let p of paras) {
    if (!containing.test(p.textContent)) {
      continue;
    }
    p.classList.add('highlight');
  }
}

function removeParaHighlights() {
  const paras = document.getElementsByTagName('p');
  for (let p of paras) {
    p.classList.remove('highlight');
  }
}