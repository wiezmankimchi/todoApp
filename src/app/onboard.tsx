import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { CheckIcon, HomeIcon, PackageIcon, SkipForwardIcon } from "lucide-react-native";
import { router } from "expo-router";
import { Badge, Button } from "components/ui";
import colors from "tailwindcss/colors";

const OnBoard = () => {
  

  return (
    <Onboarding

      onDone={() => router.push("/")}
      onSkip={() => router.push("/")}
      pages={[
        {
          backgroundColor: colors.blue[200],
          image: <HomeIcon size={48} color={colors.orange[500]} />,
          title: "Welcome Home",
          subtitle: "All the tasks we have on the list",
        },
        {
          backgroundColor: colors.orange[200],
          image: <PackageIcon size={48} color={colors.blue[800]} />,
          title: "Complete",
          subtitle: "One task at a time",
        },
        {
          backgroundColor: colors.green[200],
          image: <CheckIcon size={48} color={colors.lime[900]} />,
          title: "Done",
          subtitle: "Until all of them are done",
        },
      ]}
    />
  );
};

export default OnBoard;
