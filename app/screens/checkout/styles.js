import { StyleSheet } from "react-native";
import { COLOR, FONTS, FONTSIZE } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  fixedButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOR.white,
    padding: 15,
  },
  imgTop: {
    width: "100%",
    height: "100%",
    top: -40,
  },
  addAddress: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 10,
  },
  address: {
    fontFamily: "Inter-Medium",
    fontSize: FONTSIZE.dp_14,
    color: COLOR.blueGradient,
  },
  successCon: {
    alignItems: "center",
    flex: 1,
    marginTop: 30,
  },
  successText: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_22,
  },
  successDesc: {
    textAlign: "center",
    marginTop: 8,
    lineHeight: 22,
    fontFamily: "Inter-Regular",
    fontSize: FONTSIZE.dp_14,
    color: COLOR.textSecondary,
  },
  btnOK: {
    width: "100%",
    backgroundColor: "#2e7d32",
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    color: COLOR.white,
  },
});
