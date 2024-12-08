import { StyleSheet } from "react-native";
import { COLOR, FONTS, FONTSIZE } from "../../constants";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    position: "absolute",
    marginTop: 40,
    paddingLeft: 20,
    width: "100%",
  },
  listText: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_20,
    color: COLOR.black,
    marginBottom: 13,
  },
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  listSec: {
    paddingHorizontal: 30,
    marginTop: 18,
  },
  btnSec: {
    position: "absolute",
    bottom: 0,
    right: 30,
    left: 30,
    backgroundColor: COLOR.white,
    paddingBottom: 40,
    paddingTop: 10,
  },
});
