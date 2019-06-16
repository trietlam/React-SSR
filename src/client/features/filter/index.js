import { connect } from 'react-redux'
import { loadData } from '../../actions'
import Filter from './Filter'

const mapDispatchToProps = {
  loadData
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(Filter)
