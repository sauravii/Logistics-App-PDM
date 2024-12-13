import { StyleSheet } from "react-native";
import { COLOR, FONTS, FONTSIZE } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  inputSection: {
    paddingHorizontal: 30,
    marginTop: 25,
    gap: 13,
  },
  baseInput: {
    backgroundColor: COLOR.blueGradient,
    height: "70%",
  },
  btnSave: {
    backgroundColor: COLOR.bluePrimary,
    marginTop: 150,
    bottom: 60,
  },
  baseImg: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    top: -20,
  },
  contentSupp: {
    backgroundColor: COLOR.blueButton,
    height: 500,
    marginHorizontal: 20,
    position: "absolute",
    right: 0,
    zIndex: -1,
    borderColor: "rgba(0, 0, 0, 0.13)",
    borderWidth: 1,
    paddingTop: 228,
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  btnSec: {
    marginHorizontal: 20,
    top: 480,
  },
});
