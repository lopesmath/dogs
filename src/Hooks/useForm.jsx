import { useState } from 'react'

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  password: {
    regex: /^(?=.*\d).{6,}$/,
    message: (
      <div>
        <p style={{ marginBottom: '6px' }}>
          Ao criar sua senha, lembre-se das seguintes diretrizes:
        </p>
        <p style={{ marginBottom: '2px' }}>
          - Sua senha deve conter pelo menos 6 caracteres
        </p>
        <p style={{ marginBottom: '2px' }}>
          - É necessário incluir pelo menos um número.
        </p>
      </div>
    ),
  },
}

const useForm = (type) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  function validate(value) {
    if (type === false) return true
    if (value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  const onChange = ({ target }) => {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm
