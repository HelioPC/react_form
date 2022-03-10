import { ChangeEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as C from './style';

export const FormStep3 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') history('/');
        
        else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, [dispatch, history, state.name]);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            console.log(state);
            history('/infos');
        }

        else alert("Preencha os dados.");
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGitChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato</p>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input type="email" value={state.email} onChange={handleEmailChange} />
                </label>

                <label>
                    Qual seu GitHub?
                    <input type="url" value={state.github} onChange={handleGitChange} />
                </label>

                <Link to="/step2" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep} >Finalizar</button>
            </C.Container>
        </Theme>
    );
}
