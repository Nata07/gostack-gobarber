import React, {createContext, useCallback, useContext, useState} from 'react';
import ToastContainer from '../components/ToastContainer';
import {uuid} from 'uuidv4';
// import { Container } from './styles';
interface ToastData {
  addToast(message: Omit<ToastMassege, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMassege {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastData>({} as ToastData);

const ToastProvider: React.FC = ({children}) => {
  const [messages, setMessages] = useState<ToastMassege[]>([])
  const addToast = useCallback(({type, title, description}: Omit<ToastMassege, 'id'>) => {
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description
    };
    setMessages(state => [...state, toast]);
  }, []);
  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast}} >
      {children}
      <ToastContainer messages={messages}/>
    </ToastContext.Provider>
  );
}

function useToast(): ToastData {
  const context = useContext(ToastContext);

  if(!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }

  return context
}

export {ToastProvider, useToast};
