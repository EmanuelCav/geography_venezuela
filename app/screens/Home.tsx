import { useContext, useEffect, useState } from 'react'
import { fetch } from "@react-native-community/netinfo";
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

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const { categories, amountOptions, amountQuestions, isAdd, categoryAllAction, isReviewed } = useContext<IUser>(UserContext)
  const { gameAction, dispatch } = useContext<IGame>(GameContext)

  const [isConnection, setIsConnection] = useState<boolean>(true)
  const [isChangeView, setIsChangeView] = useState<boolean>(false)

  const handleChangeView = () => {
    setIsChangeView(!isChangeView)
  }

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

  useEffect(() => {
    fetch().then(conn => conn).then(state => setIsConnection(state.isConnected!));
  }, [isConnection, isChangeView])

  return (
    <Container>
      {
        isConnection && isAdd && <Banner />
      }
      <Title />
      <Menu navigation={navigation} categories={categories} amountOptions={amountOptions} amountQuestions={amountQuestions} gameAction={gameAction!}
        isConnection={isConnection} handleChangeView={handleChangeView} dispatch={dispatch} categoryAllAction={categoryAllAction!} />
    </Container>
  )
}

export default Home