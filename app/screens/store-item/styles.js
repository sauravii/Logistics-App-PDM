import { StyleSheet } from "react-native";
import { COLOR, FONTS, FONTSIZE } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    marginBottom: 200,
  },
  suppName: {
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_20,
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  itemList: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  addSection: {
    marginVertical: 15,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  addCon: {
    backgroundColor: COLOR.boxProfile,
    width: "15%",
    paddingVertical: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.33)",
  },
  itemCount: {
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    fontSize: FONTSIZE.dp_18,
  },
});
