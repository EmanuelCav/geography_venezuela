import { View, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import i18n from "../../../i18n";

import { optionStyle } from "../../styles/options.styles";

import { AmountQuestionsPropsType } from "../../types/props.types";
import { IOptionUser } from "../../interface/User";

const AmountQuestions = ({
  amountQuestions,
  setOptionsUser,
}: AmountQuestionsPropsType) => {

  const decrease = () => {
    if (amountQuestions > 5) {
      setOptionsUser((optionData: IOptionUser) => ({
        ...optionData,
        amountQuestions: amountQuestions - 5,
      }));
    }
  };

  const increase = () => {
    if (amountQuestions < 30) {
      setOptionsUser((optionData: IOptionUser) => ({
        ...optionData,
        amountQuestions: amountQuestions + 5,
      }));
    }
  };

  return (
    <View style={optionStyle.containerAmountQuestion}>
      <Text style={optionStyle.titleOption}>
        {i18n.t("amountQuestions")}
      </Text>

      <Text style={optionStyle.textAlertAmountQuestion}>
        {amountQuestions}
      </Text>

      <View style={optionStyle.containerButtonsQuestions}>
        <Pressable
          onPress={decrease}
          disabled={amountQuestions === 5}
          style={({ pressed }) => [
            optionStyle.buttonQuestion,
            {
              opacity: amountQuestions === 5 ? 0.4 : 1,
              backgroundColor: pressed ? '#641824' : '#7A1E2D',
            },
          ]}
        >
          <Entypo name="minus" size={30} color="#fff" />
        </Pressable>

        <Pressable
          onPress={increase}
          disabled={amountQuestions === 30}
          style={({ pressed }) => [
            optionStyle.buttonQuestion,
            {
              opacity: amountQuestions === 30 ? 0.4 : 1,
              backgroundColor: pressed ? '#641824' : '#7A1E2D',
            },
          ]}
        >
          <Entypo name="plus" size={30} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

export default AmountQuestions;