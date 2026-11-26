import { PrimeiroComponente } from "../components/PrimeiroComponente";
import { ArrowFunction } from "../components/PrimeiroComponente";

export default function Home(){
  return(
    <>

      <PrimeiroComponente 
        mensagem = 'Passando mensagem como parâmetro'
        mensagemBotao= 'Essa é a mensagem do botão'
      />

      <PrimeiroComponente 
        mensagem = 'Passando mensagem como parâmetro'
        mensagemBotao= 'Essa é a mensagem do botão'
      />

      <ArrowFunction />
    </>
  );
}
