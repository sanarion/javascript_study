function refreshServerInfo() {
  //execute on node.js
  //const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  const req = new XMLHttpRequest();
  req.addEventListener('load',function() {
    const data = JSON.parse(this.responseText);
    const serverInfo = document.querySelector(".serverInfo");
    Object.keys(data).forEach(p => {
      const replacements = serverInfo.querySelectorAll(`[data-replace="${p}"]`);
      for (let r of replacements) {
        r.textContent = data[p];
      }
    });

    console.log(this.responseText);
  });
  req.open('GET','http://localhost:7070',true);
  req.send();
}
refreshServerInfo();
setInterval(refreshServerInfo,1000);