import { Divider, Typography } from "@mui/material";
import "./App.css";
import ContentA from "./components/content";
import HeaderContent from "./components/content/headerContent";
import ContentB from "./components/contentB";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Typography variant="h4">Nice to meet you,</Typography>

        <Typography variant="h3">Greetings from Finland!</Typography>
        <HeaderContent />
        <Typography variant="body1">
          <p>This is our Hacktober 2022 style</p>
        </Typography>
      </header>
      <Divider />
      <ContentA />
      <ContentB />
      <Footer />
    </div>
  );
}

export default App;
