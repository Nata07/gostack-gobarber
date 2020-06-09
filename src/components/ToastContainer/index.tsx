import React from 'react';
import { Container } from './styles';
import { ToastMassege } from '../../hooks/toast'
import Toast from './Toast';
import {useTransition} from 'react-spring'
interface ToastContainerProps {
  messages: ToastMassege[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({messages}) => {
  const messagesWithTransictions = useTransition(
    messages,
    message => message.id,
    {
      from: {right: '-120%', opacity: '0'},
      enter: { right: '0%', opacity: '1'},
      leave: {right: '-120%', opacity: '0'}
    }
  )

  return (
    <Container>
     {messagesWithTransictions.map(({item, key, props}) => (
        <Toast key={key}
            message={item}
            style={props}
        />
     ))}
    </Container>
  )
}

export default ToastContainer;
