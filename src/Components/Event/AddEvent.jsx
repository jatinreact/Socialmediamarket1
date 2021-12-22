import React, { useState } from "react";
import HOC from "../../Common/Hoc";
import { Card, Grid } from "@material-ui/core";
import axios from "axios";
import { blankValidator, showNotificationMsz } from "../utils/Validation";
import Loder from "../Loder/Loder";

const AddEvent = (props) => {
  const [isloading, setisloading] = useState(false);
  const [isUpdated, setisUpdated] = useState(false);

  //to add Category

  return (
    <>
      <div className="content_padding">
        <span className="pr-3">
          <h4>Add Event</h4>
        </span>

        <Card classname="main_card  m-5">
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

          <span className="ml-3 ">
            <button type="submit" class="btn btn-primary mb-3 mt-3">
              Create
            </button>
          </span>
        </Card>
      </div>
      <Loder loading={isloading} />
    </>
  );
};

export default HOC(AddEvent);
