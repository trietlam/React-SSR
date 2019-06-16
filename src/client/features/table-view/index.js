import { connect } from "react-redux"
import { loadData } from "../../actions"
import TableView from "./TableView"

const mapStateToProps = state => ({
  rows: state.people.data
})

const mapDispatchToProps = {
  loadData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableView)
