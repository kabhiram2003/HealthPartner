import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import HealthPartner from "./components/HealthPartner";
import Task from "./components/Task";
import Testimonials from "./components/Testimonials";
import Earn from "./components/Earn";
import SignUp from "./components/SignUp";
import Knowmore from "./components/KnowMore";
import NewFooter from "./components/new_footer";
import Navbar from './components/newnav';
import Header from './components/header';
import { Typography } from "@mui/material";
import NewHeader from "./components/NewHeader";

function App() {
  return (
    <Grid>
      <Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          paddingTop="40px"
        >
          <Navbar />
          <NewHeader />
          <HealthPartner />
          <Task />
          <Testimonials />
          <Earn />
          <SignUp />
          <p className="label" align="center">
          The entire process takes less than 7 days
          </p>
          <Knowmore />
          <NewFooter />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
