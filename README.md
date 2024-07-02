# React Color Picker Component

A simple React Color Picker component.

## Installation

To install the component, run:

```bash
npm i react-color-picker-component
```

## Usage

Here's a basic example of how to use the color picker component in your React application:

```jsx
import React, { useState } from 'react';
import ColorPicker from 'react-color-picker-component';

const App = () => {
  const [color, setColor] = useState('#000000');

  return (
    <div>
      <h1>React Color Picker</h1>
      <ColorPicker initialColor={color} onChange={setColor} />
      <p>Selected Color: {color}</p>
    </div>
  );
};

export default App;
```

## Props

| Prop          | Type       | Default    | Description                       |
| ------------- | ---------- | ---------- | --------------------------------- |
| `initialColor`| `string`   | `#000000`  | The initial color value.          |
| `onChange`    | `function` | `null`     | Callback when the color changes.  |


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Author

Shyaka Chaste - [shyakachaste.me](https://www.shyakachaste.me/)

