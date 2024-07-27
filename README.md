# ConsciousTube

YouTube Intention is a Chrome extension designed to promote mindful and intentional browsing on YouTube. It helps users avoid unconscious procrastination by prompting them to reflect on their purpose before engaging with the platform.

## Features

- Intercepts navigation to YouTube's homepage
- Presents a distraction-free interface asking for the user's intention
- Allows access if the user starts typing their intention within 4 seconds
- Blocks access to YouTube for 5 minutes if no intention is provided

## Installation

1. Clone this repository or download the source code.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

Once installed, the extension will automatically activate when you visit YouTube:

1. When you navigate to YouTube's homepage, you'll see a simple page asking for your intention.
2. If you have a specific purpose in mind, start typing it into the provided text box within 4 seconds.
3. If you don't start typing within 4 seconds, access to YouTube will be blocked for the next 5 minutes.

## Files

- `manifest.json`: Extension configuration
- `content.js`: Main script that modifies the YouTube page
- `background.js`: Handles navigation events
- `popup.html`: Simple popup for the extension icon

## Contributing

Contributions to improve YouTube Intention are welcome. Please feel free to submit pull requests or open issues to discuss potential changes or enhancements.

## License

[MIT License](https://opensource.org/licenses/MIT)

## Disclaimer

This extension is not affiliated with or endorsed by YouTube or Google. Use at your own discretion.
