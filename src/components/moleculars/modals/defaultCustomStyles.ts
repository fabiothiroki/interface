import { Styles } from "react-modal";

export const defaultCustomStyles: Styles = {
  overlay: {
    backgroundColor: "rgba(0, 68, 89, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },
  content: {
    border: "",
    marginTop: 0,
  },
};
