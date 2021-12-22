import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import EmailVerify from "./Components/AdminLogin/EmailVerify";
import Resetpassword from "./Components/AdminLogin/Resetpassword";

import Categories from "./Components/Categories/Categories";
import CreateCatagories from "./Components/Categories/CreateCatagories";
import Subcategory from "./Components/Customers/Subcategory";
import CreateSubcategory from "./Components/Categories/CreateSubcategory";
import Event from "./Components/Event/EventDataShow";
import AddEvent from "./Components/Event/AddEvent";
import BusinessPage from "./Components/Business/BusinessPage";
import AddProduct from "./Components/Product/AddProduct";
import AddGroup from "./Components/Group/AddGroup";
import AddStory from "./Components/Story/AddStory";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={AdminLogin} />
        <Route exact path="/emailverify" component={EmailVerify} />
        <Route exact path="/resetpassword" component={Resetpassword} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/createcategories" component={CreateCatagories} />
        <Route exact path="/subcategory" component={Subcategory} />
        <Route exact path="/createSubcategory" component={CreateSubcategory} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/addEvent" component={AddEvent} />
        <Route exact path="/business" component={BusinessPage} />
        <Route exact path="/addproduct" component={AddProduct} />
        <Route exact path="/addgroup" component={AddGroup} />
        <Route exact path="/addstory" component={AddStory} />
      </Switch>
    </>
  );
}

export default App;
