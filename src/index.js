import React from 'react'

const Sherif = ({ emoji, withStyles = false } = {}) => (
  <React.Fragment>
    {withStyles && <style>{`.sherif{font-size:3rem;}`}</style>}
    <pre className="sherif">{`
🤠
${emoji}${emoji}${emoji}
${emoji} ${emoji} ${emoji}
👇  ${emoji}  👇
${emoji} ${emoji}
${emoji}  ${emoji}
👢  👢
`}</pre>
  </React.Fragment>
)

export default Sherif
