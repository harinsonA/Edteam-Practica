import React from 'react'

const History = ({ match, history, location }) => (
    <>
    <div className="ed-grid">
        <div>
            {JSON.stringify(match)}
        </div>
        <div>
            {JSON.stringify(history)}
        </div>
        <div>
            {JSON.stringify(location)}
        </div>
    </div>
    </>
)
export default History;