import { StyleSheet } from "react-native";
import { COLOR, FONTS, FONTSIZE } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  helloBox: {
    backgroundColor: COLOR.boxProfile,
    opacity: 0.7,
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.4)",
  },
  subTitle: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_22,
    color: COLOR.black,
  },
  role: {
    fontFamily: "Inter-Regular",
    fontSize: FONTSIZE.dp_18,
    color: "rgba(0,0,0,0.6)",
  },
  settingsBox: {
    backgroundColor: COLOR.boxProfile,
    opacity: 0.7,
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.4)",
  },
  menu: {
    gap: 6,
    marginTop: 10,
  },
  logoutBox: {
    backgroundColor: COLOR.boxProfile,
    opacity: 0.7,
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.4)",
    width: "90%",
  },
  innerLogout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textLogout: {
    fontFamily: "Inter-Regular",
    fontSize: FONTSIZE.dp_18,
    color: COLOR.black,
  },
});
