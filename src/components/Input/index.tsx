import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { Container } from './styles';
import {IconBaseProps} from 'react-icons';
import {useField} from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}
const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setFocused] = useState(false);
  const [isField, setField] = useState(false);

  const {fieldName, defaultValue, error, registerField} = useField(name);

  const handleInputFocused = useCallback(() => {
    setFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setFocused(false);

    setField(!!inputRef.current?.value);
    // {inputRef.current?.value ? setField(true) : setField(false) }

  },[]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container isField={isField} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef} {...rest} />
    </Container>
  )
}

export default Input;