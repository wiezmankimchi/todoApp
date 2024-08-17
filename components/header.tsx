import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function Header() {
    const { top } = useSafeAreaInsets();
    return (
    
      <View style={{ paddingTop: top }}>
        <View style={styles.header}>
          <Link className="font-bold flex-1 items-center justify-center" href="/">
            ACME
          </Link>
           <View style={styles.headerMenu}>
            <Link
              className="text-md font-medium hover:underline web:underline-offset-4"
              href="/onboard"
            >
              OnBoard
            </Link>
            <Link
              className="text-md font-medium hover:underline web:underline-offset-4"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-md font-medium hover:underline web:underline-offset-4"
              href="/product"
            >
              Product
            </Link>
            <Link
              className="text-md font-medium hover:underline web:underline-offset-4"
              href="/components"
            >
              Components
            </Link>
          </View>
        </View>
      </View>
    );
  } 

  const styles = StyleSheet.create({
    header:{
      display:"flex",
      flexDirection:"row",
      paddingHorizontal:16,
      height:56,
      alignItems:"center",
      justifyContent:"space-between"
    },
    headerMenu:{
      display:"flex",
      flexDirection:"row",
      gap:16
    }
  })


  
 