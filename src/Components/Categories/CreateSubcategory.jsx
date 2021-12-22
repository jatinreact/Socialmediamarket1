import React, { useState, useEffect } from "react";
import HOC from "../../Common/Hoc";
import { Card, Grid } from "@material-ui/core";
import axios from "axios";
import { blankValidator, showNotificationMsz } from "../utils/Validation";
import Loder from "../Loder/Loder";

const CreateCatagories = (props) => {
  const [isloading, setisloading] = useState(false);
  const [isUpdated, setisUpdated] = useState(false);
  // const [optionCategory, setoptionCategory] = useState("");
  // const [subcategory, setsubcategory] = useState("");
  // const [Iconimage, setIconimage] = useState(null);

  const [parentCategory, setparentCategory] = useState([]);
  //////dropdown
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   //to get data of subscription
  //   const getFreeAuctionData = () => {
  //     try {
  //       setisloading(true);
  //       let url = "https://afternoon-bayou-76409.herokuapp.com/getSubCategory";
  //       axios.get(url).then(
  //         (res) => {
  //           console.log("res", res);
  //           setparentCategory(res.data);
  //           setisloading(false);
  //         },
  //         (error) => {
  //           setisloading(false);
  //           showNotificationMsz(error, "danger");
  //         }
  //       );
  //     } catch (error) {
  //       setisloading(false);
  //       showNotificationMsz(error, "danger");
  //     }
  //   };
  //   getFreeAuctionData();
  // }, [isUpdated]);

  //to add Category
  // const CreateSubCategory = () => {
  //   try {
  //     setisloading(true);
  //     let url = "https://afternoon-bayou-76409.herokuapp.com/addCategory";
  //     const fd = new FormData();
  //     fd.append("parentCategory", optionCategory);
  //     fd.append("name", subcategory);

  //     //********* HERE IS THE CHANGE ***********

  //     fd.append("myField", Iconimage);

  //     axios.post(url, fd).then(
  //       (res) => {
  //         //showNotificationMsz(res.data.msg, "success");
  //         console.log("categoriesdata", res);
  //         props.history.goBack();
  //         setisUpdated(!isUpdated);
  //         setisloading(false);
  //       },
  //       (error) => {
  //         //  showNotificationMsz(error, "danger")
  //         setisloading(false);
  //       }
  //     );
  //   } catch (error) {
  //     //showNotificationMsz(error, "danger")
  //     setisloading(false);
  //   }
  // };

  return (
    <>
      <div className="content_padding">
        <span className="pr-3">
          <h4>Add Categories</h4>
        </span>

        <Card classname="main_card main_padding m-5 p-2">
          <Grid className="Component_main_grid mb-3">
            <Grid item md={6}>
              <div className="mr-3">
                <label for="inputEmail4">SUB CATEGORIES</label>

                {/* <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    // value={optionCategory}
                    // onChange={(e) => {
                    //   setoptionCategory(e.target.value);
                    //   console.log("option", e.target.value);
                    // }}
                  >
                    <option value="">Select </option>
                    <option value={item.parentCategory}>Category-1</option>
                  </select>
             */}
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Enter Categories"
                  // value={subcategory}
                  // onChange={(e) => {
                  //   setsubcategory(e.target.value);
                  // }}
                />
              </div>
            </Grid>
            <Grid item md={6}>
              <label for="inputEmail4">SUB CATEGORIES</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="Enter Categories"
                // value={subcategory}
                // onChange={(e) => {
                //   setsubcategory(e.target.value);
                // }}
              />
            </Grid>
          </Grid>
          <Grid className="Component_main_grid mb-3">
            <Grid item md={12}>
              <div class=" col-md-4 mb-3 mt-3">
                <label for="inputPassword4">IMAGE</label>
                <div class=" col-md-12">
                  <input
                    type="file"
                    class=""
                    // onChange={(e) => {
                    //   setIconimage(e.target.files[0]);
                    // }}
                  />
                </div>
              </div>

              <span className="ml-3 ">
                <button
                  type="submit"
                  class="btn btn-primary mb-3 mt-3"
                  //  onClick={CreateSubCategory}
                >
                  Create
                </button>
              </span>
            </Grid>
          </Grid>
        </Card>
      </div>
      <Loder loading={isloading} />
    </>
  );
};

export default HOC(CreateCatagories);
