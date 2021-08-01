import React, { useState ,useEffect} from 'react';
import './JogodaVelha.css';

function JogodaVelha(){
    const bordaVazia = Array(9).fill(""); //criando 9 vezes a borda 

    const[borda,setBorda]= useState([bordaVazia]);
    const [Jogar,setJogar]=useState("O");
    const [ganhador,setGanhador]=useState(); //Ninguem ganha no inicio do jogo-pausa
    if(ganhador){ // o jogador que ganhar finaliza o jogo
    console.log("Jogo Finalizado");
     return null;}

    if(borda[index] !=="")
    console.log("Posição ocupada");
     return null; // si a borda  for vazio continua executando si nao ele para 
     

    const celulaClick=(index) => { // comparando o item ou o Itemindex guando O X for clicado
        (setBorda(borda.map(item,itemIndex) => itemIndex === index? "X":item));

        setJogar(Jogar ==="x" ? "O" :"X");
    }


    const ganhador= () =>{ // definindo varial que recebe função vazia
        const possibGanhar =[
            [borda[0],borda[1],borda[3]],
            [borda[3],borda[4],borda[5]],
            [borda[6],borda[6],borda[8]],
        
            [borda[0],borda[3],borda[6]],
            [borda[1],borda[4],borda[7]],
            [borda[2],borda[5],borda[8]],
        
            [borda[0],borda[4],borda[8]],
            [borda[2],borda[4],borda[6]],
        ];

        Ganhador.array.forEach(celula => {
            if(celula.every(celula => === "O")) setGanhador(" O Venceu !");
            if(celula.every(celula => === "X")) setGanhador(" X Venceu !");
            
        });
    }

    useEffect(ganhador,[borda]); //limitando guando o ganhador por executado
    const resetGame =() => {   // reiniciando o jogo 
    setjogar("O"); 
    setBorda(bordaVazia);
    setGanhador(null);

    }

    return(
        <main>
            <h1 className="titulo">Jogo da Velha</h1>

            <div className ="borda" >
                {borda.map((item,index) => ({<div key={index} className ={'celula ${item}'}>
                   onclick = {() => celulaClick(index)}
                   {item}) </div>
                ))}

                <div>
                {ganhador &&
                <footer>
                    <h2 className="ganhador-msg">
                        <span className={ganhador}>{ganhador}</span>Venceu!
                    </h2>

                    <button onclick = {resetGame}>Recomecar Jogo!</button>
                </footer>
                }
            </div>
        </main>
        

    );

}




