import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./style";
import { Participant } from "../components/participant";

export default function Home() {
  function handleParticipantAdd() {
    console.log("aaaaaaaa");
  }

  function handleParticipantAddRemove(name: string) {
    console.log("aaaaaaaa");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
        ></TextInput>

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Matheus Andrade"
        onRemove={() => handleParticipantAddRemove("Matheus Andrade")}
      ></Participant>
      <Participant
        name="Carlos Alberto"
        onRemove={() => handleParticipantAddRemove("Carlos Alberto")}
      ></Participant>
      <Participant
        name="Cheguevaras Ronaldo"
        onRemove={() => handleParticipantAddRemove("Cheguevaras Ronaldo")}
      ></Participant>
    </View>
  );
}
