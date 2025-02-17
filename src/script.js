const RAIDER_IO_URL = 'https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-tww-1&region=eu';
const UPDATE_INTERVAL = 300000; // 5 minutes

async function fetchCutoff() {
    try {
        const response = await fetch(RAIDER_IO_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API response:', data);

        if (!data || !data.cutoffs || !data.cutoffs.p999 || !data.cutoffs.p999.all) {
            throw new Error('Unexpected API response structure');
        }

        const cutoffValue = data.cutoffs.p999.all.quantileMinValue;
        console.log('Cutoff value:', cutoffValue);

        if (cutoffValue !== undefined && !isNaN(parseFloat(cutoffValue))) {
            return parseFloat(cutoffValue).toFixed(2);
        } else {
            throw new Error(`Invalid cutoff value: ${cutoffValue}`);
        }
    } catch (error) {
        console.error('Error fetching cutoff:', error);
        return `Error: ${error.message}`;
    }
}



async function updateCutoff() {
    const cutoffValue = await fetchCutoff();
    const cutoffElement = document.getElementById('cutoff-value');
    cutoffElement.textContent = cutoffValue;
    console.log('Cutoff updated:', cutoffValue);
}

updateCutoff();
setInterval(updateCutoff, UPDATE_INTERVAL);

// Log when the script starts running
console.log('Mythic+ Cutoff Widget script started');
