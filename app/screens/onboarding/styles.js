import { StyleSheet } from "react-native";
import { COLOR, FONTS, FONTSIZE } from "../../constants";

export default StyleSheet.create({
  base: {
    backgroundColor: COLOR.bluePrimary,
    height: 270,
    width: "100%",
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    alignItems: "center",
  },
  greets: {
    fontFamily: "Inter-Bold",
    fontSize: FONTSIZE.dp_36,
    color: COLOR.white,
    top: 180,
  },
  welcome: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_24,
    marginTop: 8,
    marginBottom: 15,
  },
  btnStyle: {
    backgroundColor: COLOR.blueGradient,
    paddingVertical: 25,
    paddingHorizontal: 28,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 15,
  },
  btnText: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_24,
    color: COLOR.white,
  },
});
