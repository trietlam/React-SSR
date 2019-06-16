import React, { useEffect } from 'react'
import TableView from './features/table-view'
import Filter from './features/filter'

const App = () => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <div>
      <Filter />
      <TableView />
    </div>
  )
}

export default App
