# ChronoCommute - Frontend Web App 

The app "ChronoCommute" aims to solve the "Last-Minute Dash" problem by predicting station congestion and the probability of fitting onto the next train. 

## Proposed Architecture

- **Framework**: Vite + React
- **Routing**: `react-router-dom` for multi-page architecture.
- **Styling**: Vanilla CSS, focusing on Bauhaus-inspired clean geometry, stark contrasts (White, Black, Green, Red, Blue, Yellow primary palettes), and modern typography (e.g., Inter/Roboto). Mobile-first responsiveness.
- **State/Logic**: Javascript/React hooks with simulated real-time data for platform density and predictions.
- **Components**:
  - `pages/Home.jsx`: A single-search interface where users search for their station.
  - `pages/Status.jsx`: A live status page featuring a countdown timer, a 'Go/No-Go' recommendation, and the probability gauge.
  - `components/Gauge.jsx`: The 'Probability of Boarding' circular gauge indicating green (high chance) to red (no-go).
  - `components/DesignSystem.css` (or `index.css`): Root variables defining the Bauhaus aesthetic without Tailwind.

## User Review Required

> [!IMPORTANT]
> The styling will be heavily inspired by Bauhaus principles (clean geometry, primary colors, functional form) and built purely with Vanilla CSS.
> Does this sound aligned with your vision for the "Bauhaus-inspired design"? 
> Also, I plan to use React + Vite for robust multi-page routing and state management. I will mock the real-time data locally so you don't need a live backend running for the hackathon presentation.

## Proposed Changes

### Configuration
#### [NEW] `package.json`
- React, React Router dependencies, Vite.

### Core Assets
#### [NEW] `index.html` & `src/main.jsx`
- Main entry point with Google Fonts configuration (e.g., Inter).

#### [NEW] `src/index.css`
- Design tokens, grid layouts, animation keyframes, and Bauhaus utility classes.

### Pages & Components
#### [NEW] `src/App.jsx`
- Routing setup for `/` and `/status/:stationId`.

#### [NEW] `src/pages/Home.jsx`
- Welcome screen, single search input for station, "Predict My Dash" button.

#### [NEW] `src/pages/Status.jsx`
- Displays the mock live real-time dashboard: 
  - Train arriving in X mins countdown.
  - Probability of Boarding Gauge component.
  - Final Go / No-Go green/red indicator based on simulated density data.

#### [NEW] `src/components/Gauge.jsx`
- SVG or CSS-based circular visualization indicating the capacity metric.

#### [NEW] `src/utils/api.js`
- Simulates real-time fetching logic with varying densities so that the user gets actionable output in seconds.

## Open Questions
- Do you have a preference for the search input behavior? (e.g., autocomplete from a list of predefined stations vs simple text submission).

## Verification Plan

### Automated Tests
- Run `npm run dev` to start the frontend.
### Manual Verification
- Test mobile responsiveness using browser tools.
- Ensure the gauge correctly updates according to the generated simulated congestion data.
- Validate the "Go/No-Go" logic.
