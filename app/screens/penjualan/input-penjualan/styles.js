import { StyleSheet } from "react-native";
import { FONTS, FONTSIZE, COLOR } from "../../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  scrollView: {
    flexGrow: 1,
  },
  inputSection: {
    paddingHorizontal: 30,
    gap: 13,
    paddingBottom: 120,
    marginTop: -25,
  },
  baseInput: {
    backgroundColor: COLOR.blueGradient,
    flex: 1,
  },
  btnSave: {
    backgroundColor: COLOR.bluePrimary,
  },
  fixedButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOR.white,
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});
