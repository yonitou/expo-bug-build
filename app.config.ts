import { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    android: {
      package: "com.anonymous.edgeedgetest",
    },
    ios: {
      bundleIdentifier: "edge-edge-test",
    },
    icon: `./assets/icon.png`,
    jsEngine: "hermes",
    name: "edge-edge-test",
    orientation: "portrait",
    owner: "yonitou",
    platforms: ["ios", "android"],
    plugins: [
      [
        "expo-splash-screen",
        {
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#ffffff",
            image: `./assets/splash-icon.png`,
          },
          image: `./assets/splash-icon.png`,
          imageWidth: 200,
        },
      ],
    ],
    runtimeVersion: {
      policy: "appVersion",
    },
    scheme: "edge-edge-test",
    slug: "edge-edge-test",
    version: `12.0.0`,
  };
};
