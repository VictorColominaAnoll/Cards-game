import { Dice2 } from 'dices/Dice2';
import { Dice3 } from 'dices/Dice3'
import { Dice4 } from 'dices/Dice4'
import { Dice5 } from 'dices/Dice5'
import { Dice6 } from 'dices/Dice6'
import { DiceTucan } from 'dices/DiceTucan'
import { Col } from 'react-bootstrap';

export function Hand({ dices }) {

    const dicesRender = dices.map(dice => {
        switch (dice) {
            case 0:
                return (<DiceTucan />)
            case 1:
                return (<Dice2 />)
            case 2:
                return (<Dice3 />)
            case 3:
                return (<Dice4 />)
            case 4:
                return (<Dice5 />)
            case 5:
                return (<Dice6 />)
            default:
                break;
        }
    })

    return (
        <>
            <Col />
            {dicesRender}
            <Col />

        </>
    )
}