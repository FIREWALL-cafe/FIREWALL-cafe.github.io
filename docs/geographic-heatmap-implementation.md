# Geographic Heatmap Implementation Plan

## Overview
Implement an interactive world map heatmap to visualize search distribution by country.

## Library Options

### 1. **Leaflet + React-Leaflet** (Recommended)
- Pros: Lightweight, highly customizable, good React integration
- Cons: Requires additional plugins for choropleth maps
- Install: `npm install leaflet react-leaflet`

### 2. **React Simple Maps**
- Pros: Designed for React, easy choropleth maps, lightweight
- Cons: Less interactive features than Leaflet
- Install: `npm install react-simple-maps`

### 3. **Mapbox GL JS**
- Pros: High performance, beautiful maps
- Cons: Requires API key, more complex setup
- Install: `npm install mapbox-gl react-map-gl`

### 4. **Google Maps React**
- Pros: Familiar API, good documentation
- Cons: Requires API key, costs for high usage
- Install: `npm install @react-google-maps/api`

## Recommended Approach: React Simple Maps

React Simple Maps is ideal for this use case because:
1. No API keys required
2. Built specifically for React
3. Easy to create choropleth (heatmap) visualizations
4. Includes world geography data
5. Lightweight and performant

## Implementation Steps

1. **Install Dependencies**
   ```bash
   npm install react-simple-maps d3-scale
   ```

2. **Modify Geographic Analytics API**
   - Ensure it returns country codes (ISO Alpha-2)
   - Include search counts per country

3. **Create GeographicHeatmap Component**
   - Fetch data from `/api/analytics/geographic`
   - Map country codes to map regions
   - Apply color scale based on search counts
   - Add tooltips showing country details

4. **Features to Include**
   - Interactive tooltips
   - Zoom and pan controls
   - Color legend
   - Click to filter by country
   - Responsive design

## Color Scale Options
- Sequential: Light to dark (good for showing intensity)
- Diverging: For showing above/below average
- Suggested: Blues or Reds sequential scale

## Data Structure Needed
```json
[
  {
    "country_code": "US",
    "country": "United States",
    "search_count": 1250,
    "percentage": 45.2
  },
  {
    "country_code": "CA",
    "country": "Canada", 
    "search_count": 230,
    "percentage": 8.3
  }
]
```

## Component Integration
- Add as new tab/view in Dashboard
- Or replace/augment existing bar chart
- Consider showing both views with toggle