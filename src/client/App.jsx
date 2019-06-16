import React from "react"
import TableView from "./features/table-view"
import Filter from "./features/filter"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Filter />
        <TableView />
      </div>
    )
  }
}

export default App
