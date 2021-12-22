import React, { useState } from "react";
import HOC from "../../Common/Hoc";
import { Card, Grid } from "@material-ui/core";
import axios from "axios";
import { blankValidator, showNotificationMsz } from "../utils/Validation";
import Loder from "../Loder/Loder";

const CreateCatagories = (props) => {
  const [AddCategories, setAddCategories] = useState("");
  const [Categoriesimage, setCategoriesimage] = useState(null);
  const [isloading, setisloading] = useState(false);
  const [isUpdated, setisUpdated] = useState(false);

  //to add Category
  const CreateCategory = () => {
    try {
      let url = "https://afternoon-bayou-76409.herokuapp.com/addCategory";
      const fd = new FormData();
      fd.append("name", AddCategories);

      //********* HERE IS THE CHANGE ***********

      fd.append("myField", Categoriesimage);

      axios.post(url, fd).then(
        (res) => {
          //  showNotificationMsz(res.data.msg, "success");
          console.log("categoriesdata", res);
          props.history.goBack();
          setisUpdated(!isUpdated);
        },
        (error) => {
          //  showNotificationMsz(error, "danger")
          setisloading(false);
        }
      );
    } catch (error) {
      //showNotificationMsz(error, "danger")
      setisloading(false);
    }
  };

  return (
    <>
      <div className="content_padding">
        <span className="pr-3">
          <h4>Add Categories</h4>
        </span>
        <Grid className="Component_main_grid mb-3">
          <Grid item md={12}>
            <Card classname="main_card  m-5">
              <div class=" col-md-12 mr-3">
                <label for="inputEmail4">CATEGORIES</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Enter Categories"
                  value={AddCategories}
                  onChange={(e) => {
                    setAddCategories(e.target.value);
                  }}
                />
              </div>

              <div class=" col-md-4 mb-3 mt-3">
                <label for="inputPassword4">IMAGE</label>
                <div class=" col-md-12">
                  <input
                    type="file"
                    class=""
                    onChange={(e) => {
                      setCategoriesimage(e.target.files[0]);
                    }}
                  />
                </div>
              </div>

              <span className="ml-3 ">
                <button
                  type="submit"
                  class="btn btn-primary mb-3 mt-3"
                  onClick={CreateCategory}
                >
                  Create
                </button>
              </span>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Loder loading={isloading} />
    </>
  );
};

export default HOC(CreateCatagories);
