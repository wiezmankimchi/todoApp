import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Header from "components/header";
import { Link } from "expo-router";
import {
  Input,
  Label,
  Text,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui";

const PricingPage = () => {
  return (
    <View className="flex flex-1">
      <Header />
      <Content />
    </View>
  );
};

function Content() {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (text: string) => {
    setInputValue(text);
  };

  return (
    <View className="flex-1">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <Text
              role="heading"
              className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Components of Project ACME
            </Text>

            <View className="w-3/4 border-t border-slate-500" />
            <View className="mt-5">
              <Label nativeID="label">Label</Label>
            </View>
            <View className="mt-5">
              <Input
                placeholder="Write some stuff..."
                value={inputValue}
                onChangeText={onInputChange}
                aria-labelledby="inputLabel"
                aria-errormessage="inputError"
                className="p-3 focus:border-orange-500 hover:border-green-600"
              />
            </View>
            <View className="flex-1 justify-center items-center p-6 mt-5">
              <Accordion
                type="multiple"
                collapsible
                defaultValue={["item-1"]}
                className="w-full max-w-sm native:max-w-md"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <Text>Is it accessible?</Text>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <Text>What are universal components?</Text>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Text>
                      In the world of React Native, universal components are
                      components that work on both web and native platforms.
                    </Text>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <Text>Is this component universal?</Text>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Text>
                      Yes. Try it out on the web, iOS, and/or Android.
                    </Text>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default PricingPage;
