let zak='Zak Ruvalcaba'
let sally='Sally Smith'
let holly='Holly Unlikely'
let aaron ='Aaron D. Tyres'
let maria ='Maria C. Schultz'
const element = (
    <ul style={{'color':'blue','fontSize':'24px'}}>
        <li>{zak}</li>
        <li>{sally}</li>
        <li>{holly}</li>
        <li>{aaron}</li>
        <li>{maria}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))
