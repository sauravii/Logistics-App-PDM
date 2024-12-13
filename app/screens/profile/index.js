import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import HeaderTitle from "../../components/molecules/header-section";
import { IcAvatar, IcChevronRight, IcLogout, IcNotification, IcProtect } from "../../assets/icons";
import { COLOR, FONTSIZE } from "../../constants";
import SubMenu from "../../components/molecules/sub-menu";

const ProfileScreen = (props) => {
  const { route, navigation } = props;
  const { nameSection } = route.params;

  const imageSource = nameSection === "Owner" ? require("../../assets/images/img-base-onboard-small.png") : require("../../assets/images/img-base-admin-small.png");
  const roleSource = nameSection === "Owner" ? "Owner" : "Admin";

  return (
    <View style={styles.container}>
      <View>
        <Image source={imageSource} />
        <HeaderTitle sectionTitle={"Profil"} onPress={() => navigation.goBack()} />
      </View>

      <View style={{ marginTop: 30, gap: 15 }}>
        {/* hello */}
        <View style={styles.helloBox}>
          <View>
            <Text style={styles.subTitle}>Hi, Ariana Grande</Text>
            <Text style={styles.role}>{roleSource}</Text>
          </View>
          <IcAvatar width={40} />
        </View>

        {/* pengaturan umum */}
        <View style={styles.settingsBox}>
          <View>
            <Text style={styles.subTitle}>Pengaturan Umum</Text>
            <View style={styles.menu}>
              <SubMenu titleMenu={"Pengaturan Notifikasi"} leftIcon={<IcNotification />} />
              <SubMenu titleMenu={"Privasi dan Keamanan"} leftIcon={<IcProtect />} />
            </View>
          </View>
        </View>

        {/* logout */}
        <View style={styles.logoutBox}>
          <View style={styles.innerLogout}>
            <Text style={styles.textLogout}>Logout</Text>
            <TouchableOpacity>
              <IcLogout />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
