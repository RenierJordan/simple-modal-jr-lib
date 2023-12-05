# simple-modal-jr-lib

> Simple modal library

[![NPM](https://img.shields.io/npm/v/simple-modal-jr-lib.svg)](https://www.npmjs.com/package/simple-modal-jr-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-modal-jr-lib
```

## Usage

```jsx
import React, { useState } from 'react'
import Modal from 'simple-modal-jr-lib'
import 'simple-modal-jr-lib/dist/index.css'

export default function Example() {
  const [openModal, setOpenModal] = useState(false) // this hook will determine when the modal opens or closes
  return (
    <div className='Example'>
      <h1>Modal Test</h1>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>{' '}
      {/* We set the OpenModal hook on true to open the modal when we click on the button */}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <p>Exemple text !</p>
      </Modal>
      {/* The modal component needs at least the 'setIsOpen' and the onClose function  */}
    </div>
  )
}

## License

MIT © [RenierJordan](https://github.com/RenierJordan)
```

## Customisation

| Props   | Description                                                                                    | Type                    |
| ------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| isOpen  | /!\Required/!\ this will allow the component to change the state to "false" to close the modal | useState Hook (boolean) |
| onClose | /!\Required/!\ this will be called to close the modal                                          | function                |
