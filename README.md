# tww-season-1-cutoff-webpack-widget

# OBS Mythic+ Title Cutoff Widget

This widget displays the current Mythic+ Title cutoff score from Raider.IO for the current season.

## Installation

### Option 1: Direct Download

1. Download the files from this repository.
2. In OBS Studio, add a "Browser" source.
3. Set the "Local file" property to the `index.html` file in the downloaded folder.
4. Adjust the width and height of the browser source to fit your desired layout.

### Option 2: npm Installation

1. Install the widget using npm:
npm install tww-season-1-cutoff-webpack-widget
2. After installation, you can find the widget files in the `node_modules/tww-season-1-cutoff-webpack-widget` directory.
3. In OBS Studio, add a "Browser" source.
4. Set the "Local file" property to the `index.html` file in the installed package directory.
5. Adjust the width and height of the browser source to fit your desired layout.

## Configuration

*   The widget automatically updates every 5 minutes.

## Dependencies

*   [Raider.IO API](https://raider.io/api)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Publishing

If you're the maintainer of this widget and want to publish updates:

1.  Update the version in `package.json`.
2.  Run `npm publish` to publish the new version to npm.

For more information on publishing npm packages, refer to the [npm documentation](https://docs.npmjs.com/cli/v8/commands/npm-publish).
