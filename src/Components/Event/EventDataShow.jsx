import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import HOC from "../../Common/Hoc";
import { Card, Grid } from "@material-ui/core";
//pagination
import TablePagination from "@material-ui/core/TablePagination";
import axios from "axios";
import { blankValidator, showNotificationMsz } from "../utils/Validation";
import Loder from "../Loder/Loder";

//DIALOG BOX
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

//css

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function EventDataShow(props) {
  const [EditDailogOpen, setEditDailogOpen] = useState("");
  const [eventDataArry, seteventDataArry] = useState([]);
  const [isUpdated, setisUpdated] = useState(false);
  const [isloading, setisloading] = useState(false);

  //paginaton

  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    //to get EVENT data
    const geteventdata = () => {
      try {
        setisloading(true);
        let url = "https://glacial-plains-70061.herokuapp.com/viewEventAdmin";
        axios.get(url).then(
          (res) => {
            console.log("res viewEvent", res);
            seteventDataArry(res.data);
            setisloading(false);
          },
          (error) => {
            setisloading(false);
            // showNotificationMsz(error, "danger");
          }
        );
      } catch (error) {
        setisloading(false);
        // showNotificationMsz(error, "danger");
      }
    };
    geteventdata();
  }, [isUpdated]);

  const [titlename, settitlename] = useState("");

  const filterData = eventDataArry.filter((event) => {
    return event.title.toLowerCase().indexOf(titlename.toLowerCase()) !== -1;
  });

  const classes = useStyles();

  return (
    <>
      <div>
        <div className="content_padding">
          <Grid className="Component_main_grid mb-3">
            <Grid item md={9}>
              <h3 className="mb-2">Add Event </h3>
              <button
                class="btn btn-secondary MTB-2"
                type="button"
                onClick={() => props.history.push("/addEvent")}
              >
                <span>
                  <span data-action="create">
                    <i class="fa fa-plus"></i> Create
                  </span>
                </span>
              </button>
            </Grid>
            <Grid item md={3}>
              <div className="d-flex">
                <span className="p-2">
                  <i class="fa fa-search"></i>
                </span>
                <span>
                  <input
                    value={titlename}
                    onChange={(e) => {
                      settitlename(e.target.value);
                    }}
                    type="text"
                    class="form-control"
                    placeholder="Search by Name"
                  />
                </span>
              </div>
            </Grid>
          </Grid>

          <Card classname="main_card p-3">
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>EVENT DATE</TableCell>
                    <TableCell>EVENT TIME</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? filterData.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : filterData
                  ).map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.title}</TableCell>

                      <TableCell>{row.name}</TableCell>

                      <TableCell>
                        <span
                          className="mr-3 ml-3 background_icon_padding"
                          // onClick={() => props.history.push("/edit1")}
                        >
                          <i
                            class="fa fa-edit"
                            onClick={() => setEditDailogOpen(!EditDailogOpen)}
                          ></i>
                        </span>
                        <span className="background_icon_delete">
                          <i class="fa fa-trash"></i>
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                true
                rowsPerPageOptions={false}
                component="div"
                count={filterData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Card>

          <Dialog
            open={EditDailogOpen}
            onClose={() => setEditDailogOpen(!EditDailogOpen)}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            fullWidth="fullWidth"
          >
            <DialogTitle>
              <span className="float-right icon_color"></span>
            </DialogTitle>
            <DialogContent>
              <span className="pr-3">
                <h4>Add Event</h4>
              </span>

              <Grid className="Component_main_grid mb-3">
                <Grid item md={6} className="title_form">
                  <div className="mr-1">
                    <label>Title</label>
                    <input
                      type="text"
                      class="form-control "
                      placeholder="Enter Title"
                    />
                  </div>
                </Grid>
                <Grid item md={6} className="title_form">
                  <div className="mr-1">
                    <label>Select Date</label>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </Grid>
              </Grid>

              <Grid className="Component_main_grid mb-3">
                <Grid item md={6} className="title_form">
                  <div className="mr-1">
                    <label>Select Time</label>
                    <input
                      type="time"
                      class="form-control"
                      placeholder="Enter Title"
                    />
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div className="mr-3">
                    <label>Image</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button className="button_formatting">Cancel</Button>
              <Button className="button_formatting">Create</Button>
            </DialogActions>
          </Dialog>

          <br />
        </div>
        <Loder loading={isloading} />
      </div>
    </>
  );
}
export default HOC(EventDataShow);
