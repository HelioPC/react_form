import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SelectOption } from '../../components/SelectOption';

import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as C from './style';

export const FormStep2 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') history('/');
        
        else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, [dispatch, history, state.name]);

    const handleNextStep = () => {
        if(state.name !== '') history('/step3');

        else alert('Preencha os dados.');
    }

    const setLevel = (e: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: e
        });
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com o seu estado atual, profissionalmente</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🤩"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to="/" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep} >Próximo</button>
            </C.Container>
        </Theme>
    );
}
