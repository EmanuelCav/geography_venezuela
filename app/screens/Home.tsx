import { useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StoreReview from 'expo-store-review';

import Container from '../components/components/Container';
import Banner from '../components/add/Banner'
import Menu from '../components/home/Menu'
import Title from '../components/home/Title'

import { StackNavigation } from '../types/props.types'
import { IUser } from '../interface/User'
import { IGame } from '../interface/Game'

import { UserContext } from '../server/context/user.context'
import { GameContext } from '../server/context/game.context'

import { useConnection } from '../hooks/useConnection';

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const { categories, amountOptions, amountQuestions, isAdd, categoryAllAction, isReviewed } = useContext<IUser>(UserContext)
  const { gameAction } = useContext<IGame>(GameContext)

  const isConnection = useConnection()

  const requestAppReview = async () => {

    try {

      const isAvailable = await StoreReview.isAvailableAsync()

      if (isAvailable) {
        await StoreReview.requestReview()
      }

    } catch (error) {
      console.error("Error requesting review:", error);
    }
  }

  useEffect(() => {

    (async () => {

      try {

        const storedCount = await AsyncStorage.getItem('reviewCount')
        const count = storedCount ? parseInt(storedCount, 10) : 0

        if (count % 15 === 0 && !isReviewed) {
          requestAppReview()
        }

        if (!isReviewed) {
          await AsyncStorage.setItem('reviewCount', (count + 1).toString());
        }

      } catch (error) {
        console.error("Error checking review count:", error);
      }

    })()

  }, [])

  return (
    <Container>
      {
        isConnection && isAdd && <Banner />
      }
      <Title />
      <Menu navigation={navigation} categories={categories} amountOptions={amountOptions} amountQuestions={amountQuestions} gameAction={gameAction!}
        isConnection={isConnection} categoryAllAction={categoryAllAction!} />
    </Container>
  )
}

export default Home