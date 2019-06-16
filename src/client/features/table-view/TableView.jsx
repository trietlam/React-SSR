import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    width: 700
  }
}))

const TableView = ({ rows, loadData }) => {
  const classes = useStyles()
  useEffect(() => {
    loadData()
  }, [])

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="center">Gender</TableCell>
          <TableCell align="center">Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row._id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.gender}</TableCell>
            <TableCell align="right">{row.age}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

TableView.defaultProps = {
  rows: []
}

export default TableView
