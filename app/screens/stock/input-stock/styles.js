import { StyleSheet } from "react-native";
import { FONTS, FONTSIZE, COLOR } from "../../../constants";

export default StyleSheet.create({
  inputSection: {
    paddingHorizontal: 30,
    marginTop: 25,
    gap: 13,
  },
  baseInput: {
    backgroundColor: COLOR.blueGradient,
    flex: 1,
  },
  btnSave: {
    backgroundColor: COLOR.bluePrimary,
    marginTop: 150,
    bottom: 60,
  },
});
