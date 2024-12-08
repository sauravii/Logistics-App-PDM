import { StyleSheet } from "react-native";
import { COLOR, FONTS, FONTSIZE } from "../../constants";

export default StyleSheet.create({
  base: {
    backgroundColor: COLOR.bluePrimary,
    height: 240,
    width: "100%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  hello: {
    fontFamily: "Inter-Regular",
    fontSize: FONTSIZE.dp_18,
    color: COLOR.white,
    opacity: 0.5,
    marginBottom: -7,
  },
  greets: {
    fontFamily: "Inter-Bold",
    fontSize: FONTSIZE.dp_26,
    color: COLOR.white,
  },
  header: {
    flexDirection: "row",
    width: "87%",
    // backgroundColor: "green",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    left: 23,
    top: 65,
  },
  card: {
    backgroundColor: COLOR.blueGradient,
    height: 200,
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingVertical: 20,
    top: -80,
  },
});
