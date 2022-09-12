# projet-14-library

> modal projet 14

[![NPM](https://img.shields.io/npm/v/projet-14-library.svg)](https://www.npmjs.com/package/projet-14-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

library crated for the project 14 of OpenClassroom

## Install

```bash
npm install --save projet-14-library
```

## Usage

Put the element you want inside of the Modal element, your element behaves like a normal div, which you can entirely customize via css live your own divs. 

Only things added will be the cross permiting to exit the modal and the dark background.

The open function will open the modal for you.

Exemple:
```jsx
import modal from 'projet-14-library'
import 'projet-14-library/dist/index.css';

var {Modal, open} = modal

function Yourfunction() {
    return (
        <Modal><div id="Yourelement">content</div></Modal>
        <button onClick={open}></button>
    )
}
```
Exemple of the modal in action:

![Modal](https://user-images.githubusercontent.com/3365635/87249485-61b44d00-c42d-11ea-9372-00d13e6b6b12.png)

## License

MIT © [LascanTeki](https://github.com/LascanTeki)
