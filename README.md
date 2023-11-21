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

export default function Example() {
  const [isOpen, setIsOpen] = useState(false) // this hook will determine when the modal opens or closes
  return (
    <div className='App'>
      <h1>Modal Test</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>{' '}
      {/* We set the isOpen hook on true to open the modal when we click on the button */}
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          text={'Hello World !'}
          modalBgColor={'green'}
          modalBorder={'3px solid purple'}
          modalBorderRadius={'20px'}
          crossCloseBg={'red'}
          crossCloseColor={'white'}
          crossCloseBorder={'3px solid pink'}
          fontFamily={'Impact'}
          fontSize={'20px'}
          fontColor={'white'}
          textAlign={'center'}
        />
      )}{' '}
      {/* The modal component needs at least the 'setIsOpen' and 'text' props  */}
    </div>
    )
}

## License

MIT © [RenierJordan](https://github.com/RenierJordan)
```
