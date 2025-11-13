import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const heroImage =
  "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg";
const avatarImage = "https://randomuser.me/api/portraits/men/1.jpg";

export default function App() {
  const onContact = () => {
    Linking.openURL("mailto:john.chiwai@example.com");
  };

  const socialLinks = [
    {
      id: "github",
      label: "GitHub",
      icon: "github",
      url: "https://github.com/john-chiwai",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: "linkedin-in",
      url: "https://www.linkedin.com",
    },
    {
      id: "x",
      label: "X / Twitter",
      icon: "twitter",
      url: "https://twitter.com",
    },
    {
      id: "email",
      label: "Email",
      icon: "paper-plane",
      url: "mailto:john.chiwai@example.com",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <StatusBar style="light" />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground
            source={{ uri: heroImage }}
            style={styles.banner}
            imageStyle={styles.bannerImage}
          >
            <View style={styles.bannerOverlay} />
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTag}>AI Engineer</Text>
              <Text style={styles.bannerHeadline}>
                Designing intelligent products with soul
              </Text>
            </View>
          </ImageBackground>

          <View style={styles.profileCard}>
            <Image source={{ uri: avatarImage }} style={styles.avatar} />
            <Text style={styles.name}>John Chiwai</Text>
            <Text style={styles.role}>AI Engineer · Creative Technologist</Text>
            <Text style={styles.bio}>
              Helping teams imagine, prototype, and ship elegantly crafted AI
              experiences across platforms.
            </Text>

            <View style={styles.socialRow}>
              {socialLinks.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.socialChip}
                  onPress={() => Linking.openURL(item.url)}
                >
                  <FontAwesome5 name={item.icon} size={14} color="#38bdf8" />
                  <Text style={styles.socialLabel}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.buttonsRow}>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={onContact}
              >
                <Text style={styles.primaryButtonText}>Let's collaborate</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => Linking.openURL("https://chiwai.bio")}
              >
                <Text style={styles.secondaryButtonText}>View portfolio</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0b1220",
  },
  scrollContent: {
    paddingTop: 24,
    paddingBottom: 56,
    paddingHorizontal: 24,
  },
  banner: {
    borderRadius: 28,
    overflow: "hidden",
    height: 220,
    marginBottom: 32,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(7, 12, 24, 0.55)",
  },
  bannerContent: {
    ...StyleSheet.absoluteFillObject,
    padding: 28,
    justifyContent: "flex-end",
  },
  bannerTag: {
    color: "#38bdf8",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 1.6,
    textTransform: "uppercase",
  },
  bannerHeadline: {
    color: "#f8fafc",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 12,
    lineHeight: 30,
  },
  profileCard: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderRadius: 28,
    backgroundColor: "rgba(13, 19, 33, 0.9)",
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.15)",
    shadowColor: "#0ea5e9",
    shadowOpacity: 0.25,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 14 },
    elevation: 10,
    alignItems: "center",
    marginBottom: 32,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "rgba(148, 163, 184, 0.4)",
    marginBottom: 20,
  },
  name: {
    color: "#f8fafc",
    fontSize: 26,
    fontWeight: "700",
  },
  role: {
    color: "#a5b4fc",
    fontSize: 16,
    marginTop: 6,
  },
  bio: {
    color: "#cbd5f5",
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 12,
    maxWidth: 280,
  },
  socialRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  socialChip: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: "rgba(148, 163, 184, 0.12)",
    margin: 6,
  },
  socialLabel: {
    color: "#e2e8f0",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 8,
    letterSpacing: 0.3,
  },
  buttonsRow: {
    flexDirection: "row",
    marginTop: 24,
  },
  primaryButton: {
    backgroundColor: "#38bdf8",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 999,
    marginRight: 12,
  },
  primaryButtonText: {
    color: "#0f172a",
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 0.4,
  },
  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.35)",
    backgroundColor: "rgba(148, 163, 184, 0.08)",
  },
  secondaryButtonText: {
    color: "#e2e8f0",
    fontWeight: "600",
    fontSize: 14,
    letterSpacing: 0.4,
  },
});
