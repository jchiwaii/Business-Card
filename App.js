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
      icon: "linkedin",
      url: "https://www.linkedin.com",
    },
    {
      id: "email",
      label: "Email",
      icon: "envelope",
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
                  <FontAwesome5 name={item.icon} size={14} color="#6b7280" />
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

          <View style={styles.footer}>
            <Text style={styles.footerText}>Available for projects</Text>
            <View style={styles.footerDivider} />
            <Text style={styles.footerSubtext}>
              Open to collaborations · Remote worldwide
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  banner: {
    borderRadius: 16,
    overflow: "hidden",
    height: 180,
    marginBottom: 24,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  bannerContent: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    justifyContent: "flex-end",
  },
  bannerTag: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    opacity: 0.9,
  },
  bannerHeadline: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "600",
    marginTop: 6,
    lineHeight: 28,
    letterSpacing: -0.3,
  },
  profileCard: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#f3f4f6",
    marginBottom: 16,
  },
  name: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: -0.5,
  },
  role: {
    color: "#6b7280",
    fontSize: 15,
    marginTop: 4,
    fontWeight: "400",
  },
  bio: {
    color: "#4b5563",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 12,
    maxWidth: 300,
    fontWeight: "400",
  },
  socialRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: -4,
  },
  socialChip: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    margin: 4,
  },
  socialLabel: {
    color: "#374151",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 6,
  },
  buttonsRow: {
    flexDirection: "row",
    marginTop: 20,
    width: "100%",
    gap: 10,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 14,
  },
  secondaryButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#374151",
    fontWeight: "600",
    fontSize: 14,
  },
  footer: {
    marginTop: 32,
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
  },
  footerText: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: -0.2,
  },
  footerDivider: {
    width: 40,
    height: 2,
    backgroundColor: "#3b82f6",
    borderRadius: 2,
    marginVertical: 12,
  },
  footerSubtext: {
    color: "#6b7280",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
  },
});
