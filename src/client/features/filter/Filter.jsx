import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import {
  Select,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  TextField
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  gridContainer: {
    // alignItems: "space-between"
  },
  gridItem: {
    display: "flex",
    alignItems: "flex-end",
    paddingRight: "1rem"
  }
}))

const Filter = ({ loadData }) => {
  const classes = useStyles()
  const [filter, setFilter] = useState({
    gender: "",
    ageFrom: 0,
    ageTo: 100
  })

  const handleChange = (field, value) => {
    // update value to useState hook

    setFilter(oldValues => ({
      ...oldValues,
      [field]: value
    }))
  }

  const inputEventHandler = event =>
    handleChange(event.target.name, event.target.value)

  const handleButtonClick = () => {
    loadData(filter)
  }

  return (
    <Grid container>
      <Grid item className={classes.gridItem}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-gender">Gender</InputLabel>
          <Select
            onChange={inputEventHandler}
            value={filter.gender}
            inputProps={{
              name: "gender",
              id: "select-gender"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item className={classes.gridItem}>
        <TextField
          value={filter.ageFrom}
          label="Age from"
          id="ageFrom"
          name="ageFrom"
          type="number"
          min={0}
          onChange={inputEventHandler}
        />
      </Grid>
      <Grid item className={classes.gridItem}>
        <TextField
          value={filter.ageTo}
          label="Age to"
          id="ageTo"
          name="ageTo"
          type="number"
          min={0}
          onChange={inputEventHandler}
        />
      </Grid>
      <Grid item className={classes.gridItem}>
        <Button variant="contained" onClick={handleButtonClick}>
          Filter
        </Button>
      </Grid>
    </Grid>
  )
}

Filter.defaultProps = {
  handleChangeProps: () => {}
}

export default Filter
