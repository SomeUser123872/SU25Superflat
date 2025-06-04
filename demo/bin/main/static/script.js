function fetchHello() {
  fetch('/hello')
    .then(response => response.text())
    .then(data => {
      alert(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
