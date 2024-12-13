import { StyleSheet } from "react-native";
import { COLOR, FONTS, FONTSIZE } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  gridBox: {
    paddingVertical: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 8,
    paddingHorizontal: 5,
    backgroundColor: COLOR.blueBaby,
  },
});
