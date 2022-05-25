// sourced from: https://css-tricks.com/snippets/javascript/random-hex-color/
const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export default randomColor;
