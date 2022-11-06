(function() {
  var url = window.location.href;
  var match = url.match(/cpguid=([A-Za-z0-9]{9})/);
  var c = "";
  var e = ["mousemove", "click", "touchstart", "resize"];
  var nl = true;
  if (match && match[1]) {
    c = match[1];
    for (var i = 0; i < e.length; i++) {
      window.addEventListener(e[i], l);
    }
  }
  function l() {
    for (var i = 0; i < e.length; i++) {
      window.removeEventListener(e[i], l);
    }
    lo();
  }
  function lo() {
    if (nl) {
      nl = false;
      var h = document.getElementsByTagName("head")[0],
        s = document.createElement("script");
      s.type = "text/javascript";
      s.src =
        "/public/guid?cpguid=" + c + "&e=lac&time=" + new Date().getTime();
      h.appendChild(s);
    }
  }
})();
