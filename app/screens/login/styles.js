import { StyleSheet } from "react-native";
import { COLOR, FONTS, FONTSIZE } from "../../constants";

export default StyleSheet.create({
  base: {
    backgroundColor: COLOR.bluePrimary,
    height: 270,
    width: "100%",
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  greets: {
    fontFamily: "Inter-Bold",
    fontSize: FONTSIZE.dp_36,
    color: COLOR.white,
    top: 180,
    left: 50,
  },
  desc: {
    fontFamily: "Inter-Regular",
    fontSize: FONTSIZE.dp_14,
    color: COLOR.black,
    width: "100%",
    textAlign: "center",
    marginBottom: 40,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 45,
    marginTop: 15,
    gap: 10,
    marginTop: 60,
  },
});
