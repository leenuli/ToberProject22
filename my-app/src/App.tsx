import { Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./App.css";
import ContentA from "./components/content";
import HeaderContent from "./components/content/headerContent";
import ContentB from "./components/contentB";
import Footer from "./components/footer";
import Header from "./components/header";

const fadeMotion = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 50,
  },
};

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Typography variant="h4">
          <motion.div
            variants={fadeMotion}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 1.5,
              y: { type: "spring", stiffness: 150 },
              default: { duration: 0.5 },
            }}
          >
            Nice to meet you,
          </motion.div>
        </Typography>

        <Typography variant="h3">
          <motion.div
            variants={fadeMotion}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 1.8,
              y: { type: "spring", stiffness: 150 },
              default: { duration: 0.5 },
            }}
          >
            Greetings from Finland!
          </motion.div>
        </Typography>
        <HeaderContent />
        <Typography variant="body1">
          <motion.div
            variants={fadeMotion}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 1.8,
              y: { type: "spring", stiffness: 150 },
              default: { duration: 9.5 },
            }}
          >
            <p>This is my Hacktober 2022 style</p>
          </motion.div>
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
