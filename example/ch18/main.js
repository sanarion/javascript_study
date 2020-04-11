function highlightParas(containing) {
  if (!containing)
    containing = document.getElementById('searchkey').value;
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

const hilightActions = document.querySelectorAll('[data-action="highlight"]');
for(let a of hilightActions) {
  a.addEventListener('click',evt => {
    evt.preventDefault();
    highlightParas(a.dataset.containing);
  });
}

const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for (let a of removeHighlightActions) {
  a.addEventListener('click', evt => {
    evt.preventDefault();
    removeParaHighlights();
  })
}