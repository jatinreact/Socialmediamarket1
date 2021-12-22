import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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

function Subcategory(props) {
  const [EditDailogOpen, setEditDailogOpen] = useState("");
  const [getsubCategoryItem, setgetsubCategoryItem] = useState([]);
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
    //to get data of subscription
    const getFreeAuctionData = () => {
      try {
        setisloading(true);
        let url = "https://afternoon-bayou-76409.herokuapp.com/getSubCategory";
        axios.get(url).then(
          (res) => {
            console.log("res", res);
            setgetsubCategoryItem(res.data);
            setisloading(false);
          },
          (error) => {
            setisloading(false);
            showNotificationMsz(error, "danger");
          }
        );
      } catch (error) {
        setisloading(false);
        showNotificationMsz(error, "danger");
      }
    };
    getFreeAuctionData();
  }, [isUpdated]);

  //to delete the auction

  const DeleteSubCategory = (data) => {
    //auction id
    let id = data._id;
    try {
      setisloading(true);
      let url = `https://afternoon-bayou-76409.herokuapp.com/deleteSubCategory/${id}`;
      axios.get(url).then(
        (res) => {
          setisloading(false);
          setisUpdated(!isUpdated);
          //  showNotificationMsz(res.data.msg, "success");
          console.log("resdelete", res);
        },
        (error) => {
          showNotificationMsz(error, "danger");
          setisloading(false);
        }
      );
    } catch (error) {
      showNotificationMsz(error, "danger");
      setisloading(false);
    }
  };

  const [titlename, settitlename] = useState("");

  const filterData = getsubCategoryItem.filter((event) => {
    return event.name.toLowerCase().indexOf(titlename.toLowerCase()) !== -1;
  });

  const classes = useStyles();

  return (
    <>
      <div>
        <div className="content_padding">
          <Grid className="Component_main_grid mb-3">
            <Grid item md={9}>
              <h3 className="mb-2">Add Sub Categries </h3>
              <button class="btn btn-secondary MTB-2" type="button">
                <span>
                  <span
                    data-action="create"
                    onClick={() => props.history.push("/createSubcategory")}
                  >
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
                    <TableCell>IMAGE</TableCell>
                    <TableCell>Parent Category</TableCell>
                    <TableCell>Sub CATEGORIES</TableCell>
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
                      <TableCell>
                        <img
                          src={row.iconImage}
                          src={`https://afternoon-bayou-76409.herokuapp.com/${row.iconImage}`}
                          style={{ height: "40px", width: "60px" }}
                        />
                      </TableCell>
                      <TableCell>{row.parentCategory}</TableCell>

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
                          <i
                            class="fa fa-trash"
                            onClick={() => DeleteSubCategory(row)}
                          ></i>
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
              Edit Categories
              <span className="float-right icon_color"></span>
            </DialogTitle>
            <DialogContent>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"></label>
                <div class=" col-md-12">
                  <label for="inputPassword4">CATEGORIES</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Sub Categories"
                  />
                </div>
              </div>

              <div class=" col-md-4 mb-3 mt-3">
                <label for="inputPassword4">IMAGE</label>
                <div class=" col-md-12">
                  <input type="file" class="" />
                </div>
              </div>
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
export default HOC(Subcategory);
