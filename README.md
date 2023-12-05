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

| Props  | Description | Type |
| ------------- | ------------- | ------------- |
| setIsOpen  | /!\Required/!\ this will allow the component to change the state to "false" to close the modal | useState Hook (boolean)  |
| text  | /!\Required/!\ this will be the text displayed in the modal | string  |
| modalBgColor  | this will define the background color of the modal | string  |
| modalBorder  | this will define the border of the modal  | string  |
| modalBorderRadius  | this will define the border radius of the modal | string  |
| crossCloseBg  | this will define the background color of the close button | string  |
| crossCloseColor  | this will define the color of the close button | string  |
| crossCloseBorder  | this will define the border of the close button | string  |
| fontFamily  | this will define the font of the text displayed in the modal | string  |
| fontSize  | this will define the size of the text displayed in the modal | string  |
| fontColor  | this will define the color of the text displayed in the modal | string  |
| textAlign  | this will define how inline contents of a block are horizontally aligned if the contents do not completely fill the line box | string  |
