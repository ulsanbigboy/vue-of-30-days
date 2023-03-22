// Vanilla JS implementation

let greetingTag = document.getElementsByTagName("h2")[0];

changeGreeting = () => {
  if (greetingTag.textContent === '안녕하시오!') {
    greetingTag.textContent = '반갑소.';
  } else {
    greetingTag.textContent = '안녕하시오!';
  }
}
