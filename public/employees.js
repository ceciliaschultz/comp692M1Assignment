let zak = 'Zak Ruvalcaba';
let sally = 'Sally Smith';
let holly = 'Holly Unlikely';
let aaron = 'Aaron D. Tyres';
let maria = 'Maria C. Schultz';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, zak), /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, aaron), /*#__PURE__*/React.createElement("li", null, maria));
ReactDOM.render(element, document.getElementById('content'));