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
    position: "absolute",
    top: 145,
    left: 45,
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
    gap: 10,
    marginTop: 60,
    flex: 1,
  },
});
