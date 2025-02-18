# tww-season-1-cutoff-webpack-widget

# OBS Mythic+ Title Cutoff Widget

This widget displays the current Mythic+ Title cutoff score from Raider.IO for the current season.

## Installation

1. Clone this repository or download the files.
2. Navigate to the project directory in your terminal.
3. Run `npm init -y` to initialize the project with default settings.
4. Install the necessary dependencies by running `npm install`.
5. Build the project by running `npm run build`.

## Usage in OBS

1. In OBS Studio, add a "Browser" source.
2. Set the "Local file" property to the `index.html`.
3. Adjust the width and height of the browser source to fit your desired layout.

## Development

- To start development with automatic rebuilding, run `npm run dev`.
- To create a production build, run `npm run build`.

## Configuration

- The widget automatically updates every 5 minutes.
- You can modify the update interval in the `script.js` file.

## Dependencies

- [Raider.IO API](https://raider.io/api)
- Webpack (for bundling)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
