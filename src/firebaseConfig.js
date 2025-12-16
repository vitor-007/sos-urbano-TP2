import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAnalytics, isSupported as analyticsIsSupported } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi_ZdCgdN7XiR7Vn6nuMFxBty2k8JQKc4",
  authDomain: "sos-urbano-aa966.firebaseapp.com",
  projectId: "sos-urbano-aa966",
  storageBucket: "sos-urbano-aa966.appspot.com", 
  messagingSenderId: "926263026019",
  appId: "1:926263026019:web:416e6fa60054b4181e7356",
  measurementId: "G-BT8WY9P1CH",
};

export const app = initializeApp(firebaseConfig);

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LeWH-grAAAAAFrxNsg2mC3Lv3ja-dEv79RYefzy"),
  isTokenAutoRefreshEnabled: true,
});

// auth
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch(() => {
});

export const setupAnalytics = async () => {
  if (typeof window !== "undefined" && await analyticsIsSupported()) {
    return getAnalytics(app);
  }
  return null;
};
