import { Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
function HeaderContent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
          padding: "5px",
        },
        textAlign: "center",
      }}
    >
      <Paper style={{ backgroundColor: "transparent" }} elevation={0}>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 4.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
            delay: 2.2,
          }}
        >
          <h1>👩‍💻</h1>
        </motion.div>
      </Paper>
      <Paper elevation={0} style={{ backgroundColor: "transparent" }}>
        {" "}
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 4.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
            delay: 2.2,
          }}
        >
          <h1>💻</h1>
        </motion.div>
      </Paper>
      <Paper style={{ backgroundColor: "transparent" }} elevation={0}>
        {" "}
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 4.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
            delay: 2.2,
          }}
        >
          <h1>👾</h1>
        </motion.div>
      </Paper>
    </Box>
  );
}

export default HeaderContent;
