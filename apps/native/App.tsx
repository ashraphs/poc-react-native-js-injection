import { StyleSheet, Text, View ,ActivityIndicator, Dimensions} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@repo/ui";
import { WebView } from 'react-native-webview';
import { useState } from "react";



const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator 
          size="large" 
          color="#0000ff" 
          style={styles.loading} 
        />
      )}
      <WebView 
        source={{ uri: 'https://wlu20.apps.tcjteam.tech/app/self-serve/?code=wealth12' }} 
        style={styles.webview} 
        onLoad={() => setLoading(false)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
  webview: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -25,
    marginLeft: -25,
  },
});

export default App;
